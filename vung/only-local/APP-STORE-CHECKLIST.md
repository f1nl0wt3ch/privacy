# What the app must do so it matches the policy (keep private, not part of the repo)

The policy is only as good as the app is true to it. Apple compares the App Privacy answers, the policy and what the binary does.

## A. Changes to the app (version 1)
1. **Hide sign-in.** Skip the login screen and go straight to setup (set the default session to guest). Remove the Apple/Google/Facebook buttons, the `expo-apple-authentication` plugin and `usesAppleSignIn`. Leave `EXPO_PUBLIC_API_URL` empty so no sync ever runs.
2. **Remove the old login text** ("an encrypted copy is backed up…") from all 5 languages. It is wrong for v1.
3. **Minimum age 18** in setup (the code currently allows 16+).
4. **Profile screen:** rename "Delete account and data" to **"Delete all data"** (no account exists) and make its warning text match. Add **Privacy Policy**, **Terms of Use** and **Support** links, plus **Restore purchases**.
5. **Privacy and ads** entry in Profile that reopens Google's consent form (UMP) for EEA/UK users. Replace the current "Show ads" toggle (off by default, so ads would never appear) with the UMP flow.
6. **Ads:** non-personalised only, no IDFA use, at most one ad per screen, none in setup/forms/score screen, none when Plus is active. Pass only country, language and screen name, never financial data.
7. **Paywall (guideline 3.1.2, checked against Apple's text):** show the subscription title, length, price (price must be the most prominent element; trial text smaller) and working links to Privacy Policy and Terms of Use. Also add Restore purchases and "cancel any time in Settings".
8. **Notifications:** ask permission only when the user finishes setup (already done). Nothing is sent to a server.
9. **Euribor request** goes only to the ECB data portal and contains no user data (already true).

## B. App Store Connect
- **Privacy Policy URL** → `https://privacy.thinhdinh.tech/vung/privacy/`. **Support URL** → `https://privacy.thinhdinh.tech/vung/support/`.
- **Terms of Use:** if you use Apple's standard EULA, put the link `https://privacy.thinhdinh.tech/vung/terms/` in the app description (the policy says Apple's EULA applies and the terms supplement it).
- **Trader status (EU):** enter your name, address, email and phone as a trader, since the app has paid features.
- **App Privacy answers (draft, verify against the SDK documentation when you integrate):**
  - *Purchases → Purchase history*: collected (RevenueCat), not used for tracking.
  - *Identifiers → User ID* (RevenueCat anonymous ID) and *Device ID* (ad SDK): collected, purpose Third-Party Advertising / App Functionality.
  - *Usage data → Advertising data / Product interaction*, *Diagnostics → Crash/Performance data*, *Location → Coarse (from IP)*: declare as Google's AdMob guidance says. I could not open Google's page from my workspace, so check the current list at developers.google.com/admob/ios/privacy.
  - *Financial info*: **not collected** (it never leaves the device).
  - *Tracking*: **No**, as long as ads are non-personalised, you do not use IDFA and do not share data with brokers. Then no App Tracking Transparency prompt and no `NSUserTrackingUsageDescription`. If you ever switch to personalised ads, this answer and the policy must change first.
- **Age rating:** answer the questionnaire honestly (finance app with ads, no user-generated content). Set the audience to 18+.
- **Category:** Finance. In review notes state: the app does not move money or lend, data stays on the device, no login is needed, and how to test Plus (sandbox) and restore purchases.
- **Screenshots/description:** do not promise returns or advice. Say "estimates", "tracking tool".

## C. Google Play (later)
Data safety form with the same answers as above; Financial features declaration (personal finance management, not lending); ads declaration = yes; deletion: no account, so state that data is deleted in-app or by uninstalling.

## D. Still open
- Replace the placeholders in the policy; set up the email address.
- Confirm RevenueCat and AdMob are the vendors you will really use (the policy names both). If not, edit sections 4, 6 and 7.
- Lawyer review of the English text (GDPR, Finnish consumer law, subscription terms, right of withdrawal).
