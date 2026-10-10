import { getCollection } from 'astro:content';

const byDateDesc = (a: { data: { date: Date } }, b: { data: { date: Date } }) =>
  b.data.date.valueOf() - a.data.date.valueOf();

export async function getNews() {
  return (await getCollection('news', ({ data }) => !data.draft)).sort(byDateDesc);
}

export async function getVideos() {
  return (await getCollection('videos', ({ data }) => !data.draft)).sort(byDateDesc);
}

export function formatDate(date: Date, lang: 'ne' | 'en' = 'en') {
  return date.toLocaleDateString(lang === 'ne' ? 'ne-NP-u-nu-deva' : 'en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Kathmandu',
  });
}

export const videoCategories = {
  interview: { ne: 'अन्तर्वार्ता', en: 'Interview' },
  talk: { ne: 'बहस', en: 'Talk & panel' },
  campaign: { ne: 'अभियान', en: 'Campaign' },
  documentary: { ne: 'वृत्तचित्र', en: 'Films & series' },
} as const;
