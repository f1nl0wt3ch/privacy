export default {
  lang: 'sv', label: 'Svenska',
  nav: { privacy: 'Integritetspolicy', terms: 'Användarvillkor', support: 'Support' },
  updated: 'Gäller från', home: { title: 'vTasku', lead: 'En enkel personlig utgiftsspårare. Dina utgifter stannar på din telefon.' },
  privacy: { title: 'Integritetspolicy', html: `
<p>Den här policyn förklarar vad vTasku (”appen”) gör med information. Kort sagt: <strong>dina utgifter, anteckningar, kvittofoton och budgetar stannar på din enhet. Vi har inga användarkonton och kan inte läsa dem.</strong></p>

<h2>1. Ansvarig</h2>
<p>vTasku drivs av {{operator}}, {{country}}. Kontakt för integritetsfrågor: <a href="mailto:{{email}}">{{email}}</a>.</p>

<h2>2. Vad som stannar på din enhet</h2>
<p>Alla utgifter, kategorier, anteckningar, kvittofoton, budgetar, återkommande utgifter, sökningar och inställningar lagras bara på din enhet. vTasku ansluter inte till din bank eller plånbok. Apple Pay-funktionen får bara det belopp och det butiksnamn som <em>du</em> ställer in i en Apple-genväg och sparar dem på din enhet.</p>

<h2>3. Vad som lämnar din enhet</h2>
<table>
<tr><th>Funktion</th><th>Vad som skickas</th><th>Till vem</th></tr>
<tr><td>Annonser (Free-planen)</td><td>Enhetsidentifierare, IP-adress (ungefärlig plats), interaktion med annonser, diagnostik</td><td>Google AdMob</td></tr>
<tr><td>Plus-köp</td><td>Ett anonymt användar-ID och din köphistorik</td><td>RevenueCat, tillsammans med Apple App Store / Google Play</td></tr>
<tr><td>Inbjudningskoder (när de finns)</td><td>Ett slumpmässigt ID skapat på din enhet, din inbjudningskod, en kod du anger och en Apple App Attest-nyckel (se avsnitt 7)</td><td>Vår server</td></tr>
<tr><td>iCloud-säkerhetskopia (Plus, valfri)</td><td>En kopia av dina utgifter, budgetar, etiketter och återkommande utgifter</td><td>Ditt eget iCloud-konto, lagrat av Apple</td></tr>
</table>
<p>iCloud-säkerhetskopian är avstängd tills du slår på den i Inställningar. Apple lagrar kopian i ditt iCloud-konto och den kan bara läsas av vTasku på dina enheter; vi har ingen åtkomst. Radera alla data tar också bort iCloud-kopian.</p>
<p>Inget annat lämnar din enhet. Vi använder inga analys- eller AI-tjänster på dina data. Vi använder inte appens data för att spåra dig över andra appar och webbplatser.</p>

<h2>4. Annonser och dina val</h2>
<p>Free-planen visar annonser från Google AdMob. Google kan ta emot enhetsidentifierare, din IP-adress, data om interaktion med annonser och diagnostik. På iOS är annonserna inte personanpassade, och vTasku ber inte om att få spåra dig över appar. I Europeiska ekonomiska samarbetsområdet, Storbritannien och Schweiz frågar vi först efter ditt samtycke, och du kan ändra ditt val när som helst i Inställningar (Val för annonsintegritet). Plus-användare ser inga annonser och appen skickar inga data till AdMob. Se <a href="https://policies.google.com/technologies/partner-sites">hur Google använder information</a>.</p>

<h2>5. Köp</h2>
<p>Köp hanteras av Apple App Store eller Google Play; vi ser aldrig dina kort- eller betalningsuppgifter. För att bekräfta din Plus-åtkomst använder vi RevenueCat, som får ett anonymt användar-ID och din köphistorik.</p>

<h2>6. Delning med appen Vung</h2>
<p>Om du slår på det skriver vTasku månadssummor per kategori till en fil på din enhet så att appen Vung från samma utvecklare kan läsa dem. Uppgifterna skickas inte över nätverket. Enskilda utgifter, platser, anteckningar och kvittofoton delas inte. Du kan stänga av det och ta bort den delade filen i Inställningar.</p>

<h2>7. Inbjudningskoder och bonustid för Plus</h2>
<p>Om du använder inbjudningskoder lagrar vår server: ett slumpmässigt användar-ID skapat på din enhet, din inbjudningskod, slutdatum för eventuell bonustid för Plus samt den publika nyckeln och en räknare för en Apple App Attest-nyckel. Med App Attest kontrollerar vi att förfrågningar kommer från en äkta kopia av appen, och Apple deltar i kontrollen. Vi lagrar inte ditt namn, din e-postadress, IP-adress eller dina utgifter. När du använder <em>Radera alla data</em> i appen raderas din serverpost. En inbjudningspost kan finnas kvar utan något ID så att årsgränserna fortsätter fungera.</p>

<h2>8. Drift och loggar</h2>
<p>Servern körs på Heroku i {{serverRegion}}. Herokus routningsloggar kan under en kort tid innehålla IP-adresser; våra egna loggar innehåller bara sökväg, statuskod och varaktighet. Vi använder din IP-adress endast i minnet för att begränsa missbruk.</p>

<h2>9. Hur länge vi sparar data</h2>
<p>Data på din enhet finns kvar tills du raderar dem eller tar bort appen. Serverposter finns kvar tills du använder Radera alla data eller ber oss radera dem. Tredje parter (Google, RevenueCat, Apple) sparar data enligt sina egna policyer.</p>

<h2>10. Dina rättigheter</h2>
<p>Du kan exportera dina data (CSV) och radera allt i appen (Inställningar → Data och integritet). För data hos tredje parter eller på vår server kan du begära tillgång, rättelse, radering eller invända enligt lagen där du bor (till exempel GDPR i EU/Storbritannien eller Vietnams lag om skydd av personuppgifter) genom att mejla <a href="mailto:{{email}}">{{email}}</a>. Vi svarar inom 30 dagar. Du kan också klaga hos din tillsynsmyndighet för dataskydd.</p>

<h2>11. Internationella överföringar</h2>
<p>Google och RevenueCat kan behandla data i andra länder än ditt eget, bland annat i USA. De stödjer sig på skyddsåtgärder som standardavtalsklausuler; se deras policyer.</p>

<h2>12. Barn</h2>
<p>vTasku är till för personer som är 18 år eller äldre och samlar inte medvetet in data från någon yngre.</p>

<h2>13. Planerat: anonyma prisbidrag (inte i den här versionen)</h2>
<p>En senare version kan erbjuda en valfri funktion, avstängd från början, för att bidra med priser anonymt (offentligt platsnamn, kategori, belopp och datum, utan klockslag, plats, anteckningar, foton, IP-adress eller användar-ID). Den visar exakt vad som skickas, kan stängas av när som helst, och vi uppdaterar den här policyn och ber om ditt samtycke i appen innan den startar.</p>

<h2>14. Ändringar</h2>
<p>Vid viktiga ändringar meddelar vi dig i appen innan de börjar gälla. Gäller från: {{effectiveDate}}.</p>
` },
  terms: { title: 'Användarvillkor', html: `
<p>De här villkoren gäller appen vTasku. De används tillsammans med Apples <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">standardlicensavtal för slutanvändare</a>; vid konflikt gäller Apples villkor för själva licensen.</p>

<h2>1. Licens</h2>
<p>Du får använda vTasku för personligt bruk som inte kan överlåtas. Du får inte kopiera, dekompilera eller sälja vidare appen. Du måste vara minst 18 år.</p>

<h2>2. Ingen finansiell rådgivning</h2>
<p>vTasku hjälper dig bara att registrera och se utgifter. Diagram, summor, prognoser och jämförelser är till för information och utgör inte finansiell, skatte-, investerings- eller juridisk rådgivning. Du ansvarar själv för dina ekonomiska beslut.</p>

<h2>3. Dina data</h2>
<p>Dina utgiftsdata finns på din enhet. Om du raderar appen eller byter telefon utan säkerhetskopia (operativsystemets säkerhetskopia eller CSV-export) kan du förlora dem och vi kan inte återställa dem. Exportera CSV regelbundet.</p>

<h2>4. Free-planen och annonser</h2>
<p>Free-planen visar annonser från tredje parter. Vi ansvarar inte för annonsörer eller de sidor deras annonser leder till.</p>

<h2>5. vTasku Plus</h2>
<ul>
<li>Månads- och årsplaner förnyas automatiskt om du inte säger upp minst 24 timmar före slutet av den pågående perioden.</li>
<li>Betalningen debiteras ditt Apple-ID eller ditt Google Play-konto när du bekräftar köpet; förnyelsen debiteras inom 24 timmar före periodens slut.</li>
<li>Du hanterar eller säger upp i inställningarna för ditt butikskonto; att radera appen avslutar inte en prenumeration.</li>
<li>Livstidsplanen betalas en gång, förnyas inte och tillhör ditt butikskonto; använd Återställ köp när du byter telefon.</li>
<li>Återbetalningar avgörs av Apple eller Google, inte av oss. Priser visas i din valuta och kan ändras.</li>
</ul>

<h2>6. Inbjudningskoder</h2>
<p>Inbjudningskoder ger bonustid för Plus till dig och till personen som bjöd in dig, upp till en årsgräns per inbjudare. Bonustid har inget kontantvärde, kan inte säljas och är aldrig villkorad av ett omdöme eller betyg av appen. Vi kan avvisa eller ta bort bonustid som uppnåtts genom missbruk eller bedrägeri, och vi kan ändra eller avsluta programmet.</p>

<h2>7. Tillåten användning</h2>
<p>Använd inte vTasku för att bryta mot lagen, skada tjänsten eller dess servrar eller skicka in falska data. Vi kan blockera förfrågningar som ser ut som missbruk.</p>

<h2>8. Garanti och ansvar</h2>
<p>Appen tillhandahålls ”i befintligt skick”. I den utsträckning lagen tillåter ansvarar vi inte för indirekta skador eller förlust av data, och vårt totala ansvar är begränsat till det belopp du betalat de senaste 12 månaderna. Tvingande konsumenträttigheter enligt lagen där du bor påverkas inte.</p>

<h2>9. Ändringar, avslut, tillämplig lag</h2>
<p>Du kan sluta använda appen när som helst. Vi kan uppdatera villkoren och meddelar dig i appen om viktiga ändringar. Tillämplig lag: {{governingLaw}}; konsumenter i EU behåller de rättigheter som lagen i det land där de bor ger. Kontakt: <a href="mailto:{{email}}">{{email}}</a>. Gäller från: {{effectiveDate}}.</p>
` },
  support: { title: 'Support', html: `
<p>Frågor, buggar eller integritetsförfrågningar: <a href="mailto:{{email}}">{{email}}</a>. Vi läser varje meddelande och svarar oftast inom några dagar.</p>

<h2>Exportera eller radera mina data</h2>
<p>Inställningar → Data och integritet → <em>Exportera data (CSV)</em> eller <em>Radera alla data</em>. Raderingen sker direkt och kan inte ångras.</p>

<h2>Säga upp min prenumeration</h2>
<p>På iPhone: Inställningar → ditt namn → Prenumerationer → vTasku. Att radera appen avslutar den inte. För återbetalningar, använd Apples sida ”Rapportera ett problem”.</p>

<h2>Återställa köp eller byta till en ny telefon</h2>
<p>Öppna vTasku Plus och tryck på <em>Återställ köp</em> medan du är inloggad med samma Apple-ID. Utgiftsdata lagras bara på telefonen: använd en iPhone-säkerhetskopia eller exportera CSV innan du byter telefon.</p>

<h2>Registrera Apple Pay-betalningar automatiskt</h2>
<ol>
<li>Öppna appen Genvägar → Automation → Ny automation → Transaktion.</li>
<li>Välj korten och lägg sedan till åtgärden <em>Öppna webbadresser</em>.</li>
<li>Använd adressen <code>vtasku://add?amount=[Belopp]&amp;merchant=[Handlare]</code> och infoga variablerna Belopp och Handlare.</li>
<li>Ställ in att den körs direkt. Nya betalningar visas i listan ”Väntar på kategori” i vTasku så att du kan bekräfta dem.</li>
</ol>

<h2>Dela med Vung</h2>
<p>Slå på det i Inställningar → Anslut till Vung. Bara månadssummor per kategori skrivs till en fil på din telefon; inget skickas över internet. Du kan stänga av det och ta bort filen när som helst.</p>

<h2>Inbjudningskoder (kommer snart)</h2>
<p>Dela din kod från Inställningar. När en vän anger den får ni båda bonustid för Plus (årsgräns gäller). Radera alla data tar bort din serverpost.</p>

<h2>iCloud-säkerhetskopia (Plus)</h2>
<p>Inställningar → iCloud-säkerhetskopia sparar en kopia av dina data i din egen iCloud. På en ny telefon: installera vTasku, öppna vTasku Plus, tryck på <em>Återställ köp</em>, öppna sedan Inställningar → iCloud-säkerhetskopia och tryck på <em>Återställ från iCloud</em>. Radera alla data tar också bort kopian.</p>

<h2>Juridik</h2>
<p><a href="{{base}}privacy/sv/">Integritetspolicy</a> · <a href="{{base}}terms/sv/">Användarvillkor</a></p>
` },
};
