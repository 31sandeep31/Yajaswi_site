# Yajaswi Rai: portfolio and news site

Static site built with **Astro**. Content is edited through **Sveltia CMS** at `/admin`.
Every save in the CMS becomes a Git commit, and the host rebuilds the site in about a minute.
There is no database or server to maintain, and hosting is free on Cloudflare Pages or Netlify.

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # output in dist/
```

## Where content lives

| What | File(s) | CMS section |
|---|---|---|
| News, statements, press coverage | `src/content/news/*.md` | News · समाचार |
| Interviews, talks, films (YouTube) | `src/content/videos/*.md` | Videos · भिडियो |
| Homepage campaign banner, message, identity figures, social links | `src/data/site.json` | Site settings → Homepage & campaign |
| Bio, experience, education, honours | `src/data/profile.json` | Site settings → Profile / CV |
| Photos uploaded through the CMS | `public/uploads/` | (media library) |

When the convention is over, untick **Show campaign banner** in the CMS. The homepage then falls back to her general profile.

Original source files (CV, Word news drafts, photos, spreadsheet) are kept in `source-materials/`. That folder is git-ignored.

## Sharing

Every news item and video has its own page with Open Graph and Twitter tags.
Links pasted into Facebook, WhatsApp, Viber or X show a proper preview card.
Each page also has share buttons: the phone's native share sheet, Facebook, WhatsApp, Viber (mobile only), X, LinkedIn, Telegram and copy link.
An RSS feed at `/rss.xml` lists all news and videos.

- A news item's **cover photo** becomes its preview image. If it has none, `public/og-default.jpg` is used.
- If Facebook shows an old preview after an edit, re-scrape the page at <https://developers.facebook.com/tools/debug/>.

## Going live (one-time setup)

1. **Domain**: replace `https://yajaswirai.com` in `astro.config.mjs` (`SITE_URL`) and in `public/admin/config.yml` (`site_url`, `display_url`).
2. **GitHub**: push this folder to a GitHub repo, then set `backend.repo` in `public/admin/config.yml` to `owner/repo`.
3. **Host**: on Cloudflare Pages (or Netlify), connect the repo and use build command `npm run build` with output directory `dist`.
4. **CMS login**: choose one of these.
   - *Simplest:* on `/admin`, choose **Sign in with token** and paste a GitHub fine-grained personal access token with *Contents: read & write* on the repo.
   - *For non-technical editors:* deploy [sveltia-cms-auth](https://github.com/sveltia/sveltia-cms-auth) (a free Cloudflare Worker) with a GitHub OAuth app, then set `backend.base_url` in `config.yml` to the worker URL. Editors can then use **Sign in with GitHub**.
   - Any editor needs write access to the GitHub repo.

## Adding content in the CMS

- **News**: write the headline in Nepali or English, and add a short English *URL name* (e.g. `central-member-candidacy`). The summary is what appears in share previews, so keep it to one or two sentences. For coverage by another outlet, fill in *Source outlet* and *Original article link*.
- **Video**: paste the YouTube link. The thumbnail and player are generated from it automatically. Tick *Feature on homepage* for up to three videos.
