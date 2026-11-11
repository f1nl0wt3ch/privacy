# vTasku legal pages

Static pages that Apple and Google reviewers open: Privacy Policy, Terms of Use and Support, in English, Vietnamese, German, Swedish and Finnish. They are published together with the rest of this repository at `https://privacy.thinhdinh.tech/vtasku/`.

English is the original text. The translations should be read by a native speaker before release.

## 1. Edit and build
- Text: `content/<lang>.mjs` (one module per language).
- Operator, country, email, dates and server region: `site.config.json`.

```bash
cd vtasku
node build.mjs            # rebuilds the pages; blanks stay highlighted in yellow
node build.mjs --strict   # fails while any blank is left: run this before App Review
```

The build writes the pages into this folder: `index.html`, `privacy/`, `terms/`, `support/` and the language folders `vi/`, `de/`, `sv/`, `fi/`. Those are generated, so do not edit them by hand. Each build removes and rewrites only these paths, then commit them.

## 2. URLs
| Page | English | Other languages |
|---|---|---|
| Home | `https://privacy.thinhdinh.tech/vtasku/` | `.../vtasku/<lang>/` |
| Privacy Policy | `https://privacy.thinhdinh.tech/vtasku/privacy/` | `.../vtasku/privacy/<lang>/` |
| Terms of Use | `https://privacy.thinhdinh.tech/vtasku/terms/` | `.../vtasku/terms/<lang>/` |
| Support | `https://privacy.thinhdinh.tech/vtasku/support/` | `.../vtasku/support/<lang>/` |

Put the Privacy Policy and Support URLs in App Store Connect, and the Privacy Policy and Terms URLs in `src/config.ts` of the app (`URLS.privacy`, `URLS.terms`).

## 3. app-ads.txt (needed for AdMob)
Google looks for it at the root of the developer website listed in the store. It lives once at the root of this repository and is served at `https://privacy.thinhdinh.tech/app-ads.txt`. Replace the line there with the one AdMob shows after you register the app.

## 4. Keep it truthful
Apple compares these pages with the app and the privacy labels. Before each submission check that every section matches the shipped build:
- ads (AdMob + consent form in EEA/UK/CH) are really in the build, or remove section 4;
- invite codes are really in the build (the server `vtasku-api` stores the random id, invite code, bonus end date and App Attest key), or remove section 7 and the support entry;
- Settings has "Data and privacy" with Export CSV and Delete all data, and "Ad options";
- the contribution section (13) stays marked "not in this version" until v1.1.
Changing a section means updating the effective date and the App Privacy answers together.

## 5. Not legal advice
These texts follow the Phase 3 drafts and Apple/Google requirements as understood; they were not reviewed by a lawyer. Have one read them, especially the liability limit, governing law and the data-transfer paragraph.
