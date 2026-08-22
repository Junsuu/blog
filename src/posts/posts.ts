import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import type { Post, PostFrontmatter, PostMeta } from './types';

/**
 * content/drafts 는 사이트가 아예 읽지 않는 서랍이다.
 * frontmatter 의 draft 플래그와는 역할이 다르다 — 그쪽은 "쓰다 만 글을 리포에는 두되
 * 목록·RSS 에서만 감춘다"이고, 이 디렉터리는 "사이트의 일부가 아니다"에 가깝다.
 */
const POSTS_DIR = path.join(process.cwd(), 'content', 'posts');

function fail(fileName: string, message: string): never {
  // 빌드를 세우는 게 목적이다. 스키마가 깨진 글이 조용히 배포되면 안 된다.
  throw new Error(`[content] ${fileName}: ${message}`);
}

function requireText(value: unknown, fileName: string, field: string): string {
  if (typeof value !== 'string' || value.trim() === '') {
    fail(fileName, `${field} 는 비어 있지 않은 문자열이어야 합니다`);
  }
  return value.trim();
}

/**
 * gray-matter 는 따옴표 없는 YAML 날짜(date: 2026-08-22)를 Date 객체로 파싱한다.
 * 따옴표를 씌운 글은 문자열로 온다. 글쓴이가 어느 쪽으로 쓰든 같은 결과가 나오게 맞춘다.
 */
function normalizeDate(value: unknown, fileName: string): string {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    // YAML 날짜는 UTC 자정으로 파싱되므로 앞 10자가 원래 적은 날짜와 같다.
    return value.toISOString().slice(0, 10);
  }

  if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value.trim())) {
    return value.trim();
  }

  fail(fileName, 'date 는 YYYY-MM-DD 형식이어야 합니다');
}

function parseFrontmatter(data: Record<string, unknown>, fileName: string): PostFrontmatter {
  const tags = data.tags ?? [];
  if (!Array.isArray(tags) || tags.some((tag) => typeof tag !== 'string')) {
    fail(fileName, 'tags 는 문자열 배열이어야 합니다');
  }

  const draft = data.draft ?? false;
  if (typeof draft !== 'boolean') {
    fail(fileName, 'draft 는 true 또는 false 여야 합니다');
  }

  return {
    title: requireText(data.title, fileName, 'title'),
    date: normalizeDate(data.date, fileName),
    summary: requireText(data.summary, fileName, 'summary'),
    tags,
    draft,
  };
}

function readPost(fileName: string): Post {
  const source = fs.readFileSync(path.join(POSTS_DIR, fileName), 'utf8');
  const { data, content } = matter(source);

  return {
    ...parseFrontmatter(data, fileName),
    slug: fileName.replace(/\.mdx$/, ''),
    content,
  };
}

/** 최신 글이 앞으로. 날짜가 같으면 slug 로 안정 정렬한다. */
function readAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  return fs
    .readdirSync(POSTS_DIR)
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map(readPost)
    .sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
}

function toMeta({ content: _content, ...meta }: Post): PostMeta {
  return meta;
}

/** 글 목록과 RSS 용. draft 는 여기서 빠진다. */
export function getPublishedPosts(): PostMeta[] {
  return readAllPosts()
    .filter((post) => !post.draft)
    .map(toMeta);
}

/**
 * generateStaticParams 용. draft 도 포함한다.
 * 목록·RSS 에서만 감추라는 게 요구사항이고, 직접 URL 로는 열려야 배포 전에 미리 볼 수 있다.
 */
export function getAllSlugs(): string[] {
  return readAllPosts().map((post) => post.slug);
}

export function getPostBySlug(slug: string): Post | null {
  return readAllPosts().find((post) => post.slug === slug) ?? null;
}
