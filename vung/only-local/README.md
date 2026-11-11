# Vung legal pages (maintainer notes)

Privacy Policy, Terms of Use and Support pages for the Vung app, in English, Vietnamese, Finnish, Swedish and German. They are published together with the rest of this repository at `https://privacy.thinhdinh.tech/vung/`.

## URLs

| Page | English | Other languages |
|---|---|---|
| Overview | `https://privacy.thinhdinh.tech/vung/` | n/a |
| Privacy Policy | `https://privacy.thinhdinh.tech/vung/privacy/` | `.../vung/<lang>/privacy/` |
| Terms of Use | `https://privacy.thinhdinh.tech/vung/terms/` | `.../vung/<lang>/terms/` |
| Support | `https://privacy.thinhdinh.tech/vung/support/` | `.../vung/<lang>/support/` |

Use these URLs in App Store Connect (Privacy Policy URL, Support URL, and the Terms of Use link in the app description) and inside the app (Profile and the paywall).

## How the pages work
- GitHub Pages renders the Markdown files with Jekyll. The site settings are in `_config.yml` at the root of the repository.
- Each file sets its address with `permalink:` in the front matter. It has to start with `/vung/`.
- Links between the pages are relative, so they keep working as long as the folder structure stays the same.
- The operator name, address, email and the dates are written in every page. A change has to be made in all 15 files.

## Keep the policy true
Apple and users hold you to what the policy says. Whenever the app changes how it handles data (new SDK, sign-in, cloud backup, analytics), update the policy **first**, change the "Last updated" date, and commit the change. The git history is your record of earlier versions.

## Languages
English is the authoritative text. Change the English page first, then the four translations. Have a lawyer review the English text, and have a native speaker read the Finnish, Swedish and German pages before the app is released in those languages. Check that the menu names in the translations (for example Support ID, Invite friends, Privacy and ads choices) match the words the app shows.

## Not legal advice
These texts are a well-structured starting point written for this app's design, not a substitute for review by a lawyer who knows Finnish and EU law.
