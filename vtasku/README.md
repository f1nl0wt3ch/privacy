# vtasku-legal (GitHub Pages)

Static pages Apple and Google reviewers open: Privacy Policy, Terms of Use, Support, in English and Vietnamese, plus `app-ads.txt`. German, Swedish and Finnish pages are not included: those translations need a native speaker's review first.

## 1. Fill in the blanks (one file)
Edit `site.config.json`: `operator`, `country`, `email`, `effectiveDate`, `governingLaw`. (`serverRegion` is already "the European Union (Ireland)" for Heroku EU; change it if you deploy elsewhere.)
```bash
node build.mjs            # builds docs/ ; blanks stay highlighted in yellow
node build.mjs --strict   # fails while any blank is left: run this before App Review
```
Commit the generated `docs/` folder.

## 2. Publish on GitHub Pages
1. Create the public repo (for example `vtasku-legal`), push this folder to `main`.
2. Repo → Settings → Pages → Source: *Deploy from a branch* → `main` / `/docs`.
3. URLs you get (relative links work either way):
   - project site: `https://<user>.github.io/<repo>/vtasku/privacy/` (Vietnamese: `.../privacy/vi/`)
   - same for `terms/` and `support/`.
4. Put those three URLs in App Store Connect (Privacy Policy URL, Support URL) and in `src/config.ts` of the app (`URLS.privacy`, `URLS.terms`).

## 3. app-ads.txt (needed for AdMob)
Google looks for it at the **root of the developer website** listed in App Store Connect, so it only works if that website is a domain you control:
- Best: a custom domain on Pages (Settings → Pages → Custom domain; add a `docs/CNAME` file with the domain). Then `https://<domain>/app-ads.txt` is served from `docs/app-ads.txt`.
- A project site `user.github.io/repo/` cannot serve `/app-ads.txt` at its root. Using a repo named `<user>.github.io` serves the root of `https://<user>.github.io/`, which can work if you list that as the developer website.
Replace the comment in `app-ads.txt` with the line AdMob shows after you register the app.

## 4. Keep it truthful
Apple compares these pages with the app and the privacy labels. Before each submission check that every section matches the shipped build:
- ads (AdMob + consent form in EEA/UK/CH) are really in the build, or remove section 4;
- invite codes are really in the build (the server `vtasku-api` stores the random id, invite code, bonus end date and App Attest key), or remove section 7 and the support entry;
- Settings has "Data and privacy" with Export CSV and Delete all data, and "Ad options";
- the contribution section (13) stays marked "not in this version" until v1.1.
Changing a section means updating the effective date and the App Privacy answers together.

## 5. Not legal advice
These texts follow the Phase 3 drafts and Apple/Google requirements as understood; they were not reviewed by a lawyer. Have one read them, especially the liability limit, governing law and the data-transfer paragraph.
