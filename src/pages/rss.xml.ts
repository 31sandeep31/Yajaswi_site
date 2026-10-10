import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import site from '../data/site.json';
import { getNews, getVideos } from '../lib/content';

export async function GET(context: APIContext) {
  const [news, videos] = await Promise.all([getNews(), getVideos()]);
  const items = [
    ...news.map((n) => ({
      title: n.data.title,
      pubDate: n.data.date,
      description: n.data.summary,
      link: `/news/${n.id}/`,
    })),
    ...videos.map((v) => ({
      title: v.data.title,
      pubDate: v.data.date,
      description: v.data.summary ?? v.data.show ?? '',
      link: `/videos/${v.id}/`,
    })),
  ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: `${site.nameNe} · ${site.name}`,
    description: site.tagline,
    site: context.site!,
    items,
  });
}
