export default {
  lang: 'de', label: 'Deutsch',
  nav: { privacy: 'Datenschutzerklärung', terms: 'Nutzungsbedingungen', support: 'Support' },
  updated: 'Gültig ab', home: { title: 'vTasku', lead: 'Ein einfacher persönlicher Ausgabentracker. Deine Ausgaben bleiben auf deinem Handy.' },
  privacy: { title: 'Datenschutzerklärung', html: `
<p>Diese Erklärung beschreibt, was vTasku („die App“) mit Informationen macht. Kurz gesagt: <strong>Deine Ausgaben, Notizen, Belegfotos und Budgets bleiben auf deinem Gerät. Wir haben keine Nutzerkonten und können sie nicht einsehen.</strong></p>

<h2>1. Verantwortlicher</h2>
<p>vTasku wird betrieben von {{operator}}, {{country}}. Kontakt bei Datenschutzfragen: <a href="mailto:{{email}}">{{email}}</a>.</p>

<h2>2. Was auf deinem Gerät bleibt</h2>
<p>Alle Ausgaben, Kategorien, Notizen, Belegfotos, Budgets, wiederkehrenden Ausgaben, Suchen und Einstellungen werden nur auf deinem Gerät gespeichert. vTasku verbindet sich nicht mit deiner Bank oder deinem Wallet. Die Apple-Pay-Erfassung erhält nur den Betrag und den Händlernamen, die <em>du</em> in einem Apple-Kurzbefehl festlegst, und speichert sie auf deinem Gerät.</p>

<h2>3. Was dein Gerät verlässt</h2>
<table>
<tr><th>Funktion</th><th>Was gesendet wird</th><th>An wen</th></tr>
<tr><td>Werbung (Free-Tarif)</td><td>Gerätekennungen, IP-Adresse (ungefährer Standort), Interaktionen mit Anzeigen, Diagnosedaten</td><td>Google AdMob</td></tr>
<tr><td>Plus-Kauf</td><td>Eine anonyme Nutzer-ID und dein Kaufverlauf</td><td>RevenueCat, mit Apple App Store / Google Play</td></tr>
<tr><td>Einladungscodes (sofern verfügbar)</td><td>Eine zufällige, auf deinem Gerät erzeugte ID, dein Einladungscode, ein von dir eingegebener Code und ein Apple-App-Attest-Schlüssel (siehe Abschnitt 7)</td><td>Unser Server</td></tr>
<tr><td>iCloud-Backup (Plus, optional)</td><td>Eine Kopie deiner Ausgaben, Budgets, Labels und wiederkehrenden Ausgaben</td><td>Dein eigenes iCloud-Konto, gespeichert von Apple</td></tr>
</table>
<p>Das iCloud-Backup ist aus, bis du es in den Einstellungen einschaltest. Die Kopie liegt bei Apple in deinem iCloud-Konto und kann nur von vTasku auf deinen Geräten gelesen werden; wir haben keinen Zugriff. „Alle Daten löschen“ entfernt auch die iCloud-Kopie.</p>
<p>Sonst verlässt nichts dein Gerät. Wir nutzen keine Analyse- oder KI-Dienste für deine Daten. Wir verwenden die Daten der App nicht, um dich über andere Apps und Websites hinweg zu verfolgen.</p>

<h2>4. Werbung und deine Wahlmöglichkeiten</h2>
<p>Der Free-Tarif zeigt Werbung von Google AdMob. Google kann Gerätekennungen, deine IP-Adresse, Daten zu Interaktionen mit Anzeigen und Diagnosedaten erhalten. Unter iOS ist die Werbung nicht personalisiert, und vTasku bittet nicht um Tracking über Apps hinweg. Im Europäischen Wirtschaftsraum, im Vereinigten Königreich und in der Schweiz fragen wir zuerst nach deiner Einwilligung; du kannst deine Wahl jederzeit in den Einstellungen ändern (Datenschutzoptionen für Werbung). Plus-Nutzer sehen keine Werbung, und die App sendet keine Daten an AdMob. Siehe <a href="https://policies.google.com/technologies/partner-sites">wie Google Informationen verwendet</a>.</p>

<h2>5. Käufe</h2>
<p>Käufe werden vom Apple App Store oder von Google Play abgewickelt; wir sehen niemals deine Karten- oder Zahlungsdaten. Um deinen Plus-Zugang zu bestätigen, nutzen wir RevenueCat, das eine anonyme Nutzer-ID und deinen Kaufverlauf erhält.</p>

<h2>6. Austausch mit der App Vung</h2>
<p>Wenn du es aktivierst, schreibt vTasku monatliche Summen pro Kategorie in eine Datei auf deinem Gerät, damit die App Vung desselben Entwicklers sie lesen kann. Die Daten werden nicht über das Netzwerk übertragen. Einzelne Ausgaben, Orte, Notizen und Belegfotos werden nicht geteilt. Du kannst das in den Einstellungen ausschalten und die geteilte Datei entfernen.</p>

<h2>7. Einladungscodes und Plus-Bonuszeit</h2>
<p>Wenn du Einladungscodes nutzt, speichert unser Server: eine zufällige, auf deinem Gerät erzeugte Nutzer-ID, deinen Einladungscode, das Enddatum einer eventuellen Plus-Bonuszeit sowie den öffentlichen Schlüssel und einen Zähler eines Apple-App-Attest-Schlüssels. Mit App Attest prüfen wir, ob Anfragen von einer echten Kopie der App stammen; Apple ist an dieser Prüfung beteiligt. Wir speichern weder deinen Namen noch deine E-Mail-Adresse, IP-Adresse oder Ausgaben. Wenn du in der App <em>Alle Daten löschen</em> verwendest, wird dein Serverdatensatz gelöscht. Ein Einladungsdatensatz kann ohne jede ID bestehen bleiben, damit die jährlichen Limits weiter funktionieren.</p>

<h2>8. Hosting und Protokolle</h2>
<p>Der Server läuft bei Heroku in {{serverRegion}}. Die Routing-Protokolle von Heroku können kurzzeitig IP-Adressen enthalten; unsere eigenen Protokolle enthalten nur Pfad, Statuscode und Dauer der Anfrage. Deine IP-Adresse verwenden wir nur im Arbeitsspeicher, um Missbrauch zu begrenzen.</p>

<h2>9. Speicherdauer</h2>
<p>Daten auf deinem Gerät bleiben, bis du sie löschst oder die App entfernst. Serverdatensätze bleiben, bis du „Alle Daten löschen“ verwendest oder uns um Löschung bittest. Dritte (Google, RevenueCat, Apple) speichern Daten nach ihren eigenen Richtlinien.</p>

<h2>10. Deine Rechte</h2>
<p>Du kannst deine Daten exportieren (CSV) und in der App alles löschen (Einstellungen → Daten und Datenschutz). Für Daten bei Dritten oder auf unserem Server kannst du nach dem an deinem Wohnort geltenden Recht (z. B. DSGVO in der EU/im Vereinigten Königreich oder das vietnamesische Datenschutzgesetz) Auskunft, Berichtigung, Löschung oder Widerspruch verlangen, indem du an <a href="mailto:{{email}}">{{email}}</a> schreibst. Wir antworten innerhalb von 30 Tagen. Du kannst dich auch bei deiner Datenschutzaufsichtsbehörde beschweren.</p>

<h2>11. Internationale Übermittlungen</h2>
<p>Google und RevenueCat können Daten in Ländern außerhalb deines Landes verarbeiten, auch in den USA. Sie stützen sich auf Garantien wie Standardvertragsklauseln; siehe deren Richtlinien.</p>

<h2>12. Kinder</h2>
<p>vTasku richtet sich an Personen ab 18 Jahren und erhebt wissentlich keine Daten von jüngeren Personen.</p>

<h2>13. Geplant: anonyme Preisbeiträge (nicht in dieser Version)</h2>
<p>Eine spätere Version kann einen optionalen, standardmäßig ausgeschalteten Schalter anbieten, um Preise anonym beizutragen (öffentlicher Ortsname, Kategorie, Betrag und Datum, ohne Uhrzeit, Standort, Notizen, Fotos, IP-Adresse oder Nutzer-ID). Er zeigt dir genau, was gesendet wird, kann jederzeit ausgeschaltet werden, und wir aktualisieren diese Erklärung und holen deine Einwilligung in der App ein, bevor es beginnt.</p>

<h2>14. Änderungen</h2>
<p>Über wichtige Änderungen informieren wir dich in der App, bevor sie gelten. Gültig ab: {{effectiveDate}}.</p>
` },
  terms: { title: 'Nutzungsbedingungen', html: `
<p>Diese Bedingungen gelten für die App vTasku. Sie werden zusammen mit Apples <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">Standard-Endnutzer-Lizenzvertrag</a> verwendet; bei Widersprüchen gehen Apples Bedingungen für die Lizenz selbst vor.</p>

<h2>1. Lizenz</h2>
<p>Du darfst vTasku für den persönlichen, nicht übertragbaren Gebrauch nutzen. Du darfst die App nicht kopieren, zurückentwickeln oder weiterverkaufen. Du musst mindestens 18 Jahre alt sein.</p>

<h2>2. Keine Finanzberatung</h2>
<p>vTasku hilft dir nur, Ausgaben zu erfassen und anzusehen. Diagramme, Summen, Prognosen und Vergleiche dienen der Information und sind keine Finanz-, Steuer-, Anlage- oder Rechtsberatung. Für deine finanziellen Entscheidungen bist du selbst verantwortlich.</p>

<h2>3. Deine Daten</h2>
<p>Deine Ausgabendaten liegen auf deinem Gerät. Wenn du die App löschst oder das Handy ohne Sicherung (Betriebssystem-Backup oder CSV-Export) wechselst, kannst du sie verlieren, und wir können sie nicht wiederherstellen. Exportiere regelmäßig als CSV.</p>

<h2>4. Free-Tarif und Werbung</h2>
<p>Der Free-Tarif zeigt Werbung von Dritten. Wir sind nicht verantwortlich für Werbetreibende oder die Seiten, zu denen ihre Anzeigen führen.</p>

<h2>5. vTasku Plus</h2>
<ul>
<li>Monats- und Jahrespläne verlängern sich automatisch, sofern du nicht mindestens 24 Stunden vor Ende des aktuellen Zeitraums kündigst.</li>
<li>Die Zahlung wird deiner Apple-ID oder deinem Google-Play-Konto belastet, wenn du den Kauf bestätigst; die Verlängerung wird innerhalb von 24 Stunden vor Ende des Zeitraums belastet.</li>
<li>Du verwaltest oder kündigst in den Einstellungen deines Store-Kontos; das Löschen der App kündigt kein Abonnement.</li>
<li>Der Lifetime-Plan wird einmal bezahlt, verlängert sich nicht und gehört zu deinem Store-Konto; nutze „Käufe wiederherstellen“, wenn du das Handy wechselst.</li>
<li>Über Erstattungen entscheiden Apple oder Google, nicht wir. Preise werden in deiner Währung angezeigt und können sich ändern.</li>
</ul>

<h2>6. Einladungscodes</h2>
<p>Einladungscodes geben dir und der einladenden Person Plus-Bonuszeit, bis zu einem jährlichen Limit pro einladender Person. Bonuszeit hat keinen Barwert, kann nicht verkauft werden und hängt nie von einer Bewertung der App ab. Wir können Bonuszeit, die durch Missbrauch oder Betrug erlangt wurde, ablehnen oder entfernen, und wir können das Programm ändern oder beenden.</p>

<h2>7. Zulässige Nutzung</h2>
<p>Nutze vTasku nicht, um Gesetze zu brechen, den Dienst oder seine Server zu schädigen oder falsche Daten zu übermitteln. Wir können Anfragen blockieren, die missbräuchlich wirken.</p>

<h2>8. Gewährleistung und Haftung</h2>
<p>Die App wird „wie besehen“ bereitgestellt. Soweit gesetzlich zulässig haften wir nicht für indirekte Schäden oder Datenverlust, und unsere Gesamthaftung ist auf den Betrag begrenzt, den du in den letzten 12 Monaten bezahlt hast. Zwingende Verbraucherrechte nach dem an deinem Wohnort geltenden Recht bleiben unberührt.</p>

<h2>9. Änderungen, Beendigung, anwendbares Recht</h2>
<p>Du kannst die App jederzeit nicht mehr nutzen. Wir können diese Bedingungen aktualisieren und informieren dich in der App über wichtige Änderungen. Anwendbares Recht: {{governingLaw}}; Verbraucher in der EU behalten die Rechte, die ihnen das Recht ihres Wohnsitzlandes gibt. Kontakt: <a href="mailto:{{email}}">{{email}}</a>. Gültig ab: {{effectiveDate}}.</p>
` },
  support: { title: 'Support', html: `
<p>Fragen, Fehler oder Datenschutzanfragen: <a href="mailto:{{email}}">{{email}}</a>. Wir lesen jede Nachricht und antworten meist innerhalb weniger Tage.</p>

<h2>Meine Daten exportieren oder löschen</h2>
<p>Einstellungen → Daten und Datenschutz → <em>Daten exportieren (CSV)</em> oder <em>Alle Daten löschen</em>. Das Löschen erfolgt sofort und kann nicht rückgängig gemacht werden.</p>

<h2>Mein Abonnement kündigen</h2>
<p>Auf dem iPhone: Einstellungen → dein Name → Abonnements → vTasku. Das Löschen der App kündigt es nicht. Für Erstattungen nutze Apples Seite „Problem melden“.</p>

<h2>Käufe wiederherstellen oder auf ein neues Handy wechseln</h2>
<p>Öffne vTasku Plus und tippe auf <em>Käufe wiederherstellen</em>, während du mit derselben Apple-ID angemeldet bist. Ausgabendaten liegen nur auf dem Handy: Nutze vor dem Wechsel ein iPhone-Backup oder exportiere als CSV.</p>

<h2>Apple-Pay-Zahlungen automatisch erfassen</h2>
<ol>
<li>Öffne die App „Kurzbefehle“ → Automation → Neue Automation → Transaktion.</li>
<li>Wähle die Karten und füge dann die Aktion <em>URLs öffnen</em> hinzu.</li>
<li>Verwende die Adresse <code>vtasku://add?amount=[Betrag]&amp;merchant=[Händler]</code> und füge die Variablen Betrag und Händler ein.</li>
<li>Stelle sie auf sofortige Ausführung. Neue Zahlungen erscheinen in vTasku in der Liste „Wartet auf Kategorie“ zur Bestätigung.</li>
</ol>

<h2>Mit Vung teilen</h2>
<p>Aktiviere es unter Einstellungen → Mit Vung verbinden. Nur monatliche Summen pro Kategorie werden in eine Datei auf deinem Handy geschrieben; nichts wird über das Internet gesendet. Du kannst es jederzeit ausschalten und die Datei entfernen.</p>

<h2>Einladungscodes (demnächst)</h2>
<p>Teile deinen Code in den Einstellungen. Wenn ein Freund ihn eingibt, erhaltet ihr beide Plus-Bonuszeit (jährliches Limit gilt). „Alle Daten löschen“ entfernt deinen Serverdatensatz.</p>

<h2>iCloud-Backup (Plus)</h2>
<p>Einstellungen → iCloud-Backup hält eine Kopie deiner Daten in deinem eigenen iCloud. Auf einem neuen Handy: vTasku installieren, vTasku Plus öffnen, <em>Käufe wiederherstellen</em> tippen, dann Einstellungen → iCloud-Backup öffnen und <em>Aus iCloud wiederherstellen</em> tippen. „Alle Daten löschen“ entfernt auch die Kopie.</p>

<h2>Rechtliches</h2>
<p><a href="{{base}}privacy/de/">Datenschutzerklärung</a> · <a href="{{base}}terms/de/">Nutzungsbedingungen</a></p>
` },
};
