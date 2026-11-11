export default {
  lang: 'en', label: 'English', other: { code: 'vi', label: 'Tiếng Việt' },
  nav: { privacy: 'Privacy Policy', terms: 'Terms of Use', support: 'Support' },
  updated: 'Effective date', home: { title: 'vTasku', lead: 'A simple personal expense tracker. Your spending stays on your phone.' },
  privacy: { title: 'Privacy Policy', html: `
<p>This policy explains what vTasku (“the app”) does with information. The short version: <strong>your expenses, notes, receipt photos and budgets stay on your device. We have no user accounts and we cannot read them.</strong></p>

<h2>1. Who is responsible</h2>
<p>vTasku is operated by {{operator}}, {{country}}. Contact for privacy questions: <a href="mailto:{{email}}">{{email}}</a>.</p>

<h2>2. What stays on your device</h2>
<p>All expenses, categories, notes, receipt photos, budgets, recurring expenses, searches and settings are stored only on your device. vTasku does not connect to your bank or wallet. The Apple Pay capture feature only receives the amount and merchant name that <em>you</em> set up in an Apple Shortcut, and keeps them on your device.</p>

<h2>3. What leaves your device</h2>
<table>
<tr><th>Feature</th><th>What is sent</th><th>To whom</th></tr>
<tr><td>Ads (Free plan)</td><td>Device identifiers, IP address (approximate location), ad interactions, diagnostics</td><td>Google AdMob</td></tr>
<tr><td>Plus purchase</td><td>An anonymous user ID and your purchase history</td><td>RevenueCat, with Apple App Store / Google Play</td></tr>
<tr><td>Invite codes (when available)</td><td>A random ID made on your device, your invite code, a code you enter, and an Apple App Attest key (see section 7)</td><td>Our server</td></tr>
<tr><td>iCloud backup (Plus, optional)</td><td>A copy of your expenses, budgets, labels and recurring items</td><td>Your own iCloud account, stored by Apple</td></tr>
</table>
<p>The iCloud backup is off until you turn it on in Settings. Apple stores the copy in your iCloud account and only vTasku on your devices can read it; we have no access. Delete all data also removes the iCloud copy.</p>
<p>Nothing else leaves your device. We do not use analytics or AI services on your data. We do not use the data of the app to track you across other apps and websites.</p>

<h2>4. Ads and your choices</h2>
<p>The Free plan shows ads provided by Google AdMob. Google may receive device identifiers, your IP address, ad interaction data and diagnostics. On iOS the ads are not personalized and vTasku does not ask to track you across apps. In the European Economic Area, the United Kingdom and Switzerland we ask for your consent first, and you can change your choice any time in Settings (Ad options). Plus users see no ads and the app does not send data to AdMob. See <a href="https://policies.google.com/technologies/partner-sites">how Google uses information</a>.</p>

<h2>5. Purchases</h2>
<p>Purchases are handled by the Apple App Store or Google Play; we never see your card or payment details. To confirm your Plus access we use RevenueCat, which receives an anonymous user ID and your purchase history.</p>

<h2>6. Sharing with the Vung app</h2>
<p>If you turn it on, vTasku writes monthly totals per category to a file on your device so the Vung app, made by the same developer, can read them. The data does not travel over the network. Individual expenses, places, notes and receipt photos are not shared. You can turn this off and remove the shared file in Settings.</p>

<h2>7. Invite codes and bonus Plus time</h2>
<p>If you use invite codes, our server stores: a random user ID created on your device, your invite code, the end date of any bonus Plus time, and the public key and a counter of an Apple App Attest key. App Attest lets us check that requests come from a genuine copy of the app, and Apple takes part in this check. We do not store your name, email, IP address or expenses. When you use <em>Delete all data</em> in the app, your server record is deleted. A referral record may remain without any ID so that yearly limits keep working.</p>

<h2>8. Hosting and logs</h2>
<p>The server runs on Heroku in {{serverRegion}}. Heroku’s routing logs can contain IP addresses for a short time; our own logs contain only the request path, status code and duration. We use your IP address in memory only, to limit abuse.</p>

<h2>9. How long we keep data</h2>
<p>Data on your device stays until you delete it or remove the app. Server records stay until you use Delete all data or ask us to delete them. Third parties (Google, RevenueCat, Apple) keep data under their own policies.</p>

<h2>10. Your rights</h2>
<p>You can export your data (CSV) and delete everything in the app (Settings → Data and privacy). For data held by third parties or by our server you can ask for access, correction, deletion or objection under the law where you live (for example the GDPR in the EU/UK or Vietnam’s personal data protection law) by emailing <a href="mailto:{{email}}">{{email}}</a>. We answer within 30 days. You may also complain to your data protection authority.</p>

<h2>11. International transfers</h2>
<p>Google and RevenueCat may process data in countries outside yours, including the United States. They rely on safeguards such as standard contractual clauses; see their policies.</p>

<h2>12. Children</h2>
<p>vTasku is for people aged 18 and over and does not knowingly collect data from anyone younger.</p>

<h2>13. Planned: anonymous price contributions (not in this version)</h2>
<p>A later version may offer an optional, off-by-default switch to contribute prices anonymously (public place name, category, amount and date, without time, location, notes, photos, IP address or user ID). It will show you exactly what is sent, can be turned off at any time, and we will update this policy and ask for your consent in the app before it starts.</p>

<h2>14. Changes</h2>
<p>For important changes we will tell you in the app before they apply. Effective date: {{effectiveDate}}.</p>
` },
  terms: { title: 'Terms of Use', html: `
<p>These terms apply to the vTasku app. They are used together with Apple’s <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">Standard End User License Agreement</a>; if they conflict, Apple’s terms prevail for the licence itself.</p>

<h2>1. Licence</h2>
<p>You may use vTasku for personal, non-transferable use. You may not copy, reverse engineer or resell the app. You must be at least 18.</p>

<h2>2. Not financial advice</h2>
<p>vTasku only helps you record and view spending. Charts, totals, forecasts and comparisons are for information and are not financial, tax, investment or legal advice. You are responsible for your own financial decisions.</p>

<h2>3. Your data</h2>
<p>Your spending data is on your device. If you delete the app or change phones without a backup (operating system backup or CSV export), you may lose it and we cannot restore it. Export CSV regularly.</p>

<h2>4. Free plan and ads</h2>
<p>The Free plan shows ads from third parties. We are not responsible for advertisers or the pages their ads lead to.</p>

<h2>5. vTasku Plus</h2>
<ul>
<li>Monthly and yearly plans renew automatically unless you cancel at least 24 hours before the current period ends.</li>
<li>Payment is charged to your Apple ID or Google Play account when you confirm the purchase; renewal is charged within 24 hours before the period ends.</li>
<li>You manage or cancel in your store account settings; deleting the app does not cancel a subscription.</li>
<li>The lifetime plan is paid once, does not renew, and belongs to your store account; use Restore when you change phone.</li>
<li>Refunds are decided by Apple or Google, not by us. Prices are shown in your currency and may change.</li>
</ul>

<h2>6. Invite codes</h2>
<p>Invite codes give bonus Plus time to you and to the person who invited you, up to a yearly limit per inviter. Bonus time has no cash value, cannot be sold, and is never conditional on a review or rating of the app. We may refuse or remove bonus time given through abuse or fraud, and we may change or end the programme.</p>

<h2>7. Acceptable use</h2>
<p>Do not use vTasku to break the law, harm the service or its servers, or submit false data. We may block requests that look abusive.</p>

<h2>8. Warranty and liability</h2>
<p>The app is provided “as is”. To the extent allowed by law we are not liable for indirect damage or loss of data, and our total liability is limited to the amount you paid in the last 12 months. Mandatory consumer rights under the law where you live are not affected.</p>

<h2>9. Changes, ending, governing law</h2>
<p>You can stop using the app at any time. We may update these terms and will tell you in the app about important changes. Governing law: {{governingLaw}}; consumers in the EU keep the rights given by the law of the country where they live. Contact: <a href="mailto:{{email}}">{{email}}</a>. Effective date: {{effectiveDate}}.</p>
` },
  support: { title: 'Support', html: `
<p>Questions, bugs or privacy requests: <a href="mailto:{{email}}">{{email}}</a>. We read every message and usually answer within a few days.</p>

<h2>Export or delete my data</h2>
<p>Settings → Data and privacy → <em>Export CSV</em> or <em>Delete all data</em>. Deleting is immediate and cannot be undone.</p>

<h2>Cancel my subscription</h2>
<p>On iPhone: Settings → your name → Subscriptions → vTasku. Deleting the app does not cancel it. For refunds, use Apple’s “Report a problem” page.</p>

<h2>Restore purchases or move to a new phone</h2>
<p>Open vTasku Plus and tap <em>Restore purchases</em> while signed in to the same Apple ID. Expense data is stored only on the phone: use an iPhone backup or export CSV before changing phones.</p>

<h2>Record Apple Pay payments automatically</h2>
<ol>
<li>Open the Shortcuts app → Automation → New Automation → Transaction.</li>
<li>Choose the cards, then add the action <em>Open URLs</em>.</li>
<li>Use the address <code>vtasku://add?amount=[Amount]&amp;merchant=[Merchant]</code> and insert the Amount and Merchant variables.</li>
<li>Set it to run immediately. New payments appear in the “Pending” list in vTasku for you to confirm.</li>
</ol>

<h2>Share with Vung</h2>
<p>Turn it on in Settings → Vung. Only monthly totals per category are written to a file on your phone; nothing is sent over the internet. You can turn it off and remove the file at any time.</p>

<h2>Invite codes (coming soon)</h2>
<p>Share your code from Settings. When a friend enters it, you both get bonus Plus time (yearly limit applies). Delete all data removes your server record.</p>

<h2>iCloud backup (Plus)</h2>
<p>Settings → iCloud backup keeps a copy of your data in your own iCloud. On a new phone: install vTasku, open vTasku Plus, tap <em>Restore purchases</em>, then open Settings → iCloud backup and tap <em>Restore from iCloud</em>. Delete all data also removes the copy.</p>

<h2>Legal</h2>
<p><a href="{{base}}privacy/">Privacy Policy</a> · <a href="{{base}}terms/">Terms of Use</a></p>
` },
};
