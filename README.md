# Privacy and legal pages

Source of the public legal pages for my apps: **Privacy Policy**, **Terms of Use** and **Support**, plus the `app-ads.txt` file that AdMob needs. These are the pages that App Store and Google Play reviewers open, and that the apps link to.

The whole repository is one GitHub Pages site at `https://privacy.thinhdinh.tech`. Each app has its own folder, and the folder name is the first part of the address.

| | [Vung](vung/) | [vTasku](vtasku/) |
|---|---|---|
| App | Personal finance tracker (cash flow, debts, assets, health score) | Personal expense tracker |
| Address | `https://privacy.thinhdinh.tech/vung/` | `https://privacy.thinhdinh.tech/vtasku/` |
| Built with | Jekyll (GitHub Pages renders the Markdown) | `node build.mjs`, which writes static HTML into the folder |
| Text is edited in | `*.md` files | `content/<lang>.mjs` |
| Operator, email and dates | Written in every page | One file: `site.config.json` |
| Languages | en, vi, fi, sv, de | en, vi, de, sv, fi |
| URL pattern | `/vung/<lang>/<page>/` | `/vtasku/<page>/<lang>/` |
| Effective date | 15 November 2026 | 15 November 2026 |

English is the authoritative text for both apps. It is served without a language part in the address.

## Addresses

| Page | Vung | vTasku |
|---|---|---|
| Overview | `/vung/` | `/vtasku/` |
| Privacy Policy | `/vung/privacy/` | `/vtasku/privacy/` |
| Terms of Use | `/vung/terms/` | `/vtasku/terms/` |
| Support | `/vung/support/` | `/vtasku/support/` |
| Translation, for example Finnish privacy | `/vung/fi/privacy/` | `/vtasku/privacy/fi/` |

`https://privacy.thinhdinh.tech/` itself shows a short list with links to both apps ([index.md](index.md)).

## Publishing

GitHub Pages builds the site from the `main` branch, root folder (Settings → Pages → Source: *Deploy from a branch* → `main` / `/ (root)`).

- [CNAME](CNAME) holds the one custom domain, `privacy.thinhdinh.tech`. GitHub Pages reads this file only at the root of the published folder, so the app folders have no `CNAME` of their own.
- At the DNS provider, `privacy` needs a `CNAME` record that points to `f1nl0wt3ch.github.io`.
- [_config.yml](_config.yml) sets the Jekyll theme and lists what must not be published: the READMEs, the vTasku sources and `vung/only-local`.
- Do not add a `.nojekyll` file. The Vung pages need Jekyll.

Pushing to `main` publishes. There is nothing else to deploy.

## Repository layout

```text
privacy/
├── README.md              this file
├── CNAME                  privacy.thinhdinh.tech
├── _config.yml            Jekyll settings for the whole site
├── index.md               landing page with links to both apps
├── app-ads.txt            AdMob seller line, served at the domain root
├── vung/                  Jekyll pages for Vung
│   ├── index.md           overview with links to every language
│   ├── privacy-policy.md  English pages
│   ├── terms-of-use.md
│   ├── support.md
│   ├── vi/ fi/ sv/ de/    the same three pages per language
│   └── only-local/        maintainer notes, not published
└── vtasku/                generated pages for vTasku, next to their sources
    ├── README.md          setup guide
    ├── site.config.json   operator, country, email, dates, server region
    ├── build.mjs          generator, no dependencies
    ├── content/           one module per language (en, vi, de, sv, fi)
    ├── index.html         generated
    ├── privacy/ terms/ support/   generated, with one folder per translation inside
    └── vi/ de/ sv/ fi/    generated overview pages per language
```

## Vung

GitHub Pages renders the Markdown with Jekyll. Each file sets its own address in the front matter, and the address has to start with `/vung/`:

```yaml
---
title: Privacy Policy – Vung
permalink: /vung/vi/privacy/
lang: vi        # translations only
---
```

| File | English address | Translated address |
|---|---|---|
| `index.md` | `/vung/` | n/a |
| `privacy-policy.md` | `/vung/privacy/` | `/vung/<lang>/privacy/` |
| `terms-of-use.md` | `/vung/terms/` | `/vung/<lang>/terms/` |
| `support.md` | `/vung/support/` | `/vung/<lang>/support/` |

Links between the pages are relative. There is no shared config for the operator name, address, email or dates. They are written in the header and the contact section of each page, so a change has to be made in every language. Each policy and terms page carries a "Last updated" and an "Effective from" date at the top.

**What the pages cover**

- Privacy Policy, 16 sections: summary, controller, data that stays on the device, data that leaves it, GDPR legal bases, recipients, transfers outside the EEA, retention, user rights, security, children, not financial advice, other regions, future features, changes, contact.
- Terms of Use, 15 sections: Apple's standard EULA, what the app is, not financial advice, Free and Vung Plus, subscriptions and prices, advertising, invite programme, responsibilities, data and backups, changes and availability, intellectual property, warranties and liability, ending use, governing law (Finland), contact.
- Support: contact email and answers to common questions (data location, deletion, support ID, invites, subscriptions, refunds, ad choices, notifications).

## vTasku

The pages are generated. The generated files sit in `vtasku/` next to the sources so that they are served under `/vtasku/`. Do not edit `index.html`, `privacy/`, `terms/`, `support/` or the language folders by hand.

**Config.** `site.config.json` holds the values that the text refers to through `{{token}}` placeholders:

| Key | Used for |
|---|---|
| `appName` | App name (no page references it at the moment) |
| `operator`, `country` | Who is responsible (privacy section 1, footer) |
| `email` | Contact address on every page |
| `effectiveDate` | Shown under each page title |
| `governingLaw` | Terms section 9 |
| `serverRegion`, `serverRegionVi` | Hosting region in privacy section 8 |

**Content.** Each `content/<lang>.mjs` exports one object with `lang`, `label`, `nav`, `updated`, `home`, and a `title` plus `html` body for `privacy`, `terms` and `support`. The build adds the header, the language switcher, `hreflang` links, the styles (light and dark) and the footer.

**Build.** Node.js 16 or newer, no `npm install` needed. Run it from the `vtasku` folder.

```bash
cd vtasku
node build.mjs            # rebuilds the pages; unfilled values stay highlighted in yellow
node build.mjs --strict   # fails while a value in site.config.json is empty or a [PLACEHOLDER]
```

The build removes and rewrites only the generated paths, then fails if a page still contains an unfilled `{{token}}` or a relative link that points to a missing page. Commit the generated files after every build.

The app links to `https://privacy.thinhdinh.tech/vtasku/privacy/` and `https://privacy.thinhdinh.tech/vtasku/terms/` (`URLS` in `src/config.ts` of the app repository).

**What the pages cover**

- Privacy Policy, 14 sections: controller, what stays on the device, what leaves it, ads and choices, purchases, sharing with Vung, invite codes, hosting and logs, retention, rights, international transfers, children, planned price contributions (not in this version), changes.
- Terms of Use, 9 sections: licence, not financial advice, your data, Free plan and ads, vTasku Plus, invite codes, acceptable use, warranty and liability, governing law.
- Support: export or delete data, cancel a subscription, restore purchases, Apple Pay capture through Shortcuts, sharing with Vung, invite codes, iCloud backup.

## What the policies say about data

A short summary. The pages themselves are the binding text.

| | Vung | vTasku |
|---|---|---|
| Data the user enters | Stays on the device | Stays on the device |
| Account or sign-in | None | None |
| Ads | Google AdMob in the free version, non-personalised, consent form in the EEA, UK and Switzerland, none with Plus | Google AdMob on the Free plan, not personalised on iOS, consent form in the EEA, UK and Switzerland, none with Plus |
| Purchases | Apple or Google, with RevenueCat for the Plus status | Apple or Google, with RevenueCat for the Plus status |
| Own server | Heroku, EU region (Ireland). Stores a random support ID, invite codes and records, free Plus grants and App Attest key IDs | Heroku, EU region (Ireland). Stores a random ID, the invite code, the end date of bonus Plus time and an App Attest key |
| Other data flows | Euribor rate lookup at the European Central Bank's data portal | Optional iCloud backup (Plus) in the user's own iCloud. Optional on-device file with monthly totals per category that Vung can read |
| Analytics and tracking | No own analytics, no cross-app tracking, no sale of data | No analytics or AI services on user data, no cross-app tracking |
| Deletion | "Delete all data" in the app, server data by email | "Delete all data" in the app, which also removes the server record and the iCloud copy |
| Minimum age | 18 | 18 |
| Governing law | Finland | Finland |

## `app-ads.txt`

One file at the root of the repository serves both apps:

```text
google.com, pub-1515902454811810, DIRECT, f08c47fec0942fa0
```

Google reads the file from the root of the developer website listed in the store, so it is served at `https://privacy.thinhdinh.tech/app-ads.txt`. The developer website in App Store Connect and Google Play has to be on that domain.

## Changing a policy

Apple and Google compare these pages with the app and with the privacy answers in the store. Change the policy before the app change ships.

1. Edit the English text, then every translation.
2. Update the date: `effectiveDate` in `vtasku/site.config.json`, or the "Last updated" and "Effective from" lines in each Vung page.
3. vTasku only: run `node build.mjs --strict` in `vtasku/` and commit the generated pages.
4. Commit and push. The git history is the record of earlier versions, and the Vung policy refers to it.
5. Update the App Privacy answers in App Store Connect and the Data safety form in Google Play when the data handling changed.

## Adding another app

1. Create a folder named after the app. Its pages will be served under `/<folder>/`.
2. Use one of the two setups above: Markdown pages whose `permalink` starts with `/<folder>/`, or a generator that writes HTML into the folder.
3. Provide at least Privacy Policy, Terms of Use and Support in English.
4. Add source files that must not be published to `exclude` in `_config.yml`.
5. Add the app to [index.md](index.md) and to the tables at the top of this file.

## Open items (11 November 2026)

- **Vung, Finnish, Swedish and German pages** were brought in line with the English text on 11 November 2026. The new parts (support ID, invites, free Plus, server) have not been read by a native speaker, and the menu names in them should be checked against the words the app shows.
- **`vung/only-local`** is listed in `.gitignore` but its two files are still tracked, so they stay in the public repository until they are removed from git.

## Not legal advice

These texts were written for how the apps work and for the Apple and Google requirements. They are not a substitute for review by a lawyer who knows Finnish and EU law.
