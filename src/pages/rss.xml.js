import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('ledger'))
    .filter(post => !post.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: 'The Ledger — The Crossroads Inn',
    description: 'Stories, whispers, and truths from travelers who passed through the Crossroads Inn.',
    site: context.site,
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/the-ledger/${post.slug}/`,
    })),
    customData: '<language>en-us</language>',
  });
}
