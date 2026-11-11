# vung-policy

Privacy Policy, Terms of Use and Support pages for the Vung app (English and Vietnamese).

## Before you publish: fill in the placeholders

| Placeholder | Replace with |
|---|---|
| `[OPERATOR NAME]` / `[TÊN ĐƠN VỊ VẬN HÀNH]` | Your legal name or company name (must match your Apple Developer account) |
| `[Business ID (Y-tunnus), if any]` | Your business ID, or delete the bracket |
| `[STREET ADDRESS, POSTCODE, CITY]` / `[ĐỊA CHỈ, MÃ BƯU ĐIỆN, THÀNH PHỐ]` | Your address (Apple requires trader contact details for EU apps) |
| `[CONTACT EMAIL]` / `[EMAIL LIÊN HỆ]` | A support email you read |
| `[RELEASE DATE]` / `[NGÀY PHÁT HÀNH]` | The date the app goes live |

Find them all with: `grep -rn "\[OPERATOR\|\[STREET\|\[CONTACT\|\[RELEASE\|\[TÊN\|\[ĐỊA\|\[EMAIL\|\[NGÀY" .`

## Publish with GitHub Pages
1. Create a **public** repository named `vung-policy` and push these files to `main`.
2. Repository → Settings → Pages → Source: *Deploy from a branch* → `main` / `/ (root)`.
3. After a minute the pages are at `https://<your-github-username>.github.io/vung-policy/`:
   - Privacy Policy: `.../privacy/`
   - Terms of Use: `.../terms/`
   - Support: `.../support/`
   - Vietnamese: `.../vi/privacy/`, `.../vi/terms/`, `.../vi/support/`
4. Use these URLs in App Store Connect (Privacy Policy URL, Support URL, and the Terms of Use link in the app description) and inside the app (Profile and the paywall).

## Keep the policy true
Apple and users hold you to what the policy says. Whenever the app changes how it handles data (new SDK, sign-in, cloud backup, analytics), update the policy **first**, change the "Last updated" date, and commit the change. The git history is your record of earlier versions.

## Languages
English is the authoritative text. Finnish, Swedish and German versions should be added (as `fi/`, `sv/`, `de/`) before the app is released in those languages. Have a lawyer review the English text first, then translate the final version.

## Not legal advice
These texts are a well-structured starting point written for this app's design, not a substitute for review by a lawyer who knows Finnish and EU law.
