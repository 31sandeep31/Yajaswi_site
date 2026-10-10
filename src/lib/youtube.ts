/** Pulls the 11-char video id out of any common YouTube URL shape. */
export function youtubeId(url: string): string | null {
  const m = url.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/|\/live\/)([\w-]{11})/);
  return m ? m[1] : null;
}

export function youtubeThumb(url: string, size: 'hq' | 'maxres' = 'hq'): string {
  const id = youtubeId(url);
  return id ? `https://i.ytimg.com/vi/${id}/${size}default.jpg` : '/og-default.jpg';
}

export function youtubeEmbed(url: string): string {
  return `https://www.youtube-nocookie.com/embed/${youtubeId(url)}?autoplay=1&rel=0`;
}
