---
title: Integritetspolicy – Vung
permalink: /vung/sv/privacy/
lang: sv
---

# Integritetspolicy

**App:** Vung ("Appen") · **Senast uppdaterad:** 9 november 2026 · **Gäller från:** 15 november 2026

[English](../../privacy/) (den engelska texten är originalet; om översättningen avviker gäller den engelska texten, om inte lagen i ditt land ger dig starkare rättigheter) · [Suomi](../../fi/privacy/) · [Deutsch](../../de/privacy/) · [Tiếng Việt](../../vi/privacy/)

## 1. Sammanfattning

- **Dina ekonomiska uppgifter stannar på din enhet.** Allt du anger (inkomster, utgifter, skulder, tillgångar, mål, poäng) lagras bara på din telefon. Vi tar inte emot det och vi kan inte se det.
- **Inget konto.** Du behöver inte registrera dig eller logga in. Vi frågar inte efter ditt namn, din e-postadress eller ditt telefonnummer.
- **En liten server för inbjudningar och gratis Plus, inget annat.** Om du använder **Bjud in vänner**, eller om vår support ger dig gratis Plus, lagrar vår server ett slumpmässigt ID för Appen, din inbjudningskod och belöningarna. Den tar aldrig emot dina ekonomiska uppgifter (se avsnitt 4.2).
- **Gratisversionen visar annonser. Plus har inga.** Annonserna levereras av Google AdMob, och då lämnar vissa uppgifter din enhet (se avsnitt 4.4). Vi ger aldrig annonsörer uppgifter om dina skulder, din inkomst, dina tillgångar eller din poäng.
- **Vi säljer aldrig dina personuppgifter**, och vi spårar dig inte i andra företags appar och webbplatser.
- **Du kan radera allt** när som helst, i Appen och genom att mejla oss (se avsnitt 9).

## 2. Vem som ansvarar

Appen tillhandahålls av:

**Thinh Dinh**
Kytötie 71, 04430 Järvenpää, Finland
E-post: tikki.dinh@gmail.com

Nedan avser "vi" ovanstående. För de personuppgifter som beskrivs i avsnitt 4 och som når oss eller våra tjänsteleverantörer är vi personuppgiftsansvariga enligt EU:s allmänna dataskyddsförordning (GDPR).

## 3. Det du anger stannar på din enhet

När du ställer in och använder Appen kan du ange: land, språk, valuta, ålder, kön (valfritt), yrke, om din inkomst är stabil, antal personer du försörjer, månadsinkomst och månadsutgifter, belopp för sparande och investeringar, skulder (saldon, räntor, betalningsbelopp och extra amorteringar, förfallodagar), tillgångar, sparmål, stora utgifter samt dina aviseringsinställningar.

- Uppgifterna lagras i en databas i Appens privata lagringsutrymme på din enhet.
- Vi **samlar inte in** dem. De skickas inte till oss eller till någon tredje part och används inte för reklam.
- Poäng, diagram, uppskattningar och tips beräknas på din enhet.
- Påminnelser och firanden av uppnådda mål är **lokala aviseringar** som din telefon skapar. Vi driver ingen server för pushnotiser.
- Telefonens egen säkerhetskopia (till exempel iCloud-säkerhetskopia eller en säkerhetskopia på dator) kan innehålla Appens data, beroende på dina enhetsinställningar. Den säkerhetskopian styrs av Apple eller av dig, inte av oss.

Eftersom uppgifterna stannar på din enhet **kan vi inte återställa dem** om du tar bort Appen, återställer eller tappar telefonen och saknar säkerhetskopia av enheten.

## 4. Uppgifter som lämnar din enhet

### 4.1 Prenumerations- och köpuppgifter (Vung Plus)
Köp behandlas av Apple via App Store (eller av Google på Android). Vi får inte dina betalkorts- eller Apple-ID-uppgifter. För att bekräfta om Plus är aktivt använder Appen RevenueCat, som tar emot Appens slumpmässiga ID (se 4.2), din köp- och prenumerationsstatus, Appens version, enhetsmodell och operativsystem, ditt App Store-land samt din IP-adress. RevenueCat är vårt personuppgiftsbiträde.

### 4.2 Support-ID, inbjudningar och gratis Plus (vår server)
**Support-ID.** När du öppnar Appen första gången skapar den ett slumpmässigt ID (till exempel `vung_3f9a…`). Det härleds inte från ditt namn, ditt telefonnummer, ditt Apple-ID eller någon maskinvaruidentifierare. Du ser det under **Profil → Support-ID**. Samma ID används hos RevenueCat (4.1).

**Bjud in vänner.** När du öppnar **Bjud in vänner** skickar Appen ditt support-ID till vår server, som skapar din inbjudningskod. När någon anger en kod skickar deras App:
- deras support-ID och koden;
- data från **Apple App Attest**: en ny kryptografisk nyckel som skapas i telefonens Secure Enclave, och Apples bekräftelse på att förfrågan kommer från en äkta kopia av Appen på en riktig Apple-enhet. Den innehåller inget namn, telefonnummer, Apple-ID, annons-ID eller serienummer. Vi använder den bara för att stoppa falska eller automatiserade inbjudningar, och vi sparar nyckelns identifierare så att samma nyckel inte kan användas två gånger.

Vår server lagrar sedan: båda support-ID:na, inbjudningskoden, vilket ID som bjöd in vilket, status, antalet beviljade gratisdagar och tidpunkten. Den ber RevenueCat att lägga till den kostnadsfria Plus-tiden på inbjudarens ID (den skickar support-ID:t och slutdatumet).

**Gratis Plus från oss.** Om du kontaktar supporten och skickar ditt support-ID kan vi ge dig gratis Plus eller Plus på livstid. Vi lagrar då ditt support-ID, tilldelningens typ och längd, en kort anledning (till exempel "supportärende"), när den gavs och vilket databaskonto som registrerade den. Tilldelningen når Appen via RevenueCat.

**Vad servern aldrig tar emot:** dina ekonomiska uppgifter, något du har angett i Appen, dina kontakter, din plats eller ditt annons-ID.

**Serverloggar.** Precis som alla internettjänster ser vår server och dess värdleverantör din IP-adress och tidpunkten för varje förfrågan. Vi använder detta endast för säkerhet och för att förhindra missbruk, och sparar det i upp till 30 dagar.

**Drift.** Servern och dess databas körs hos Heroku (Salesforce, Inc.) i dess EU-region (Amazon Web Services datacenter på Irland). Leverantören är vårt personuppgiftsbiträde.

### 4.3 Ränteuppgifter
Om du följer ett bolån kopplat till Euribor kan Appen hämta den senaste referensräntan från en offentlig datatjänst (Europeiska centralbankens dataportal). Precis som vid alla internetförfrågningar röjer detta din IP-adress och enhetstyp för den tjänsten. Förfrågan innehåller inga av dina ekonomiska uppgifter.

### 4.4 Reklam (endast gratisversionen)
Gratisversionen visar annonser märkta "Sponsrat", som levereras av **Google AdMob** (Google Ireland Limited / Google LLC). När en annons begärs och visas kan Google behandla din IP-adress (från vilken en ungefärlig plats härleds), enhets- och operativsystemsinformation, en appspecifik eller enhetsbunden identifierare samt information om hur du interagerar med annonser. Google kan använda detta för annonsleverans, frekvensbegränsning, mätning, bedrägeriförebyggande och säkerhet.

Det här gör vi för att begränsa detta:
- Vi begär **endast icke-personanpassade annonser**. Annonser väljs utifrån allmänt sammanhang (ditt land, ditt språk och vilken skärm du är på), inte utifrån en profil av dig.
- Vi lämnar **aldrig** dina skulder, din inkomst, dina tillgångar, din poäng eller andra uppgifter du angett till Google eller annonsörer.
- Vi ber inte om tillstånd att spåra dig i andra företags appar och webbplatser, eftersom vi inte gör det.
- Vi visar inga annonser under konfigurationen, i formulär, på poängskärmen eller på köpskärmen, och högst en annons per skärm.
- Inom Europeiska ekonomiska samarbetsområdet, i Storbritannien, i Schweiz och i andra regioner där lagen kräver det visar Appen **Googles samtyckesmeddelande** innan annonser begärs, och Googles mätning börjar först därefter. Annonser visas endast enligt ditt val; om du tackar nej kan du se färre annonser eller inga alls. Du kan öppna valen igen när som helst under **Profil → Integritet och annonser**.
- **Vung Plus stänger av all reklam**, och inga annonsförfrågningar görs så länge Plus är aktivt.

Googles egen hantering av dessa uppgifter beskrivs i [Googles integritetspolicy](https://policies.google.com/privacy) och i [How Google uses information from sites or apps that use its services](https://policies.google.com/technologies/partner-sites).

### 4.5 Uppgifter du skickar till oss
Om du mejlar oss för support får vi din e-postadress, det du skriver och ditt support-ID om du anger det. Skicka inte ekonomiska uppgifter som du inte vill att vi ska se.

### 4.6 Tekniska rapporter från Apple
Om du i enhetens inställningar har valt att dela analysdata med apputvecklare kan Apple ge oss anonyma, sammanställda krasch- och användningsrapporter. Vi kan inte identifiera dig utifrån dem.

### 4.7 Vad vi inte gör
Vi använder ingen egen analys- eller reklamprofileringsprogramvara, vi använder inte fingerprinting, vi bygger ingen profil av dig, vi köper inga uppgifter om dig och vi säljer, hyr ut eller byter inte personuppgifter.

## 5. Ändamål och rättslig grund (GDPR)

| Ändamål | Uppgifter | Rättslig grund |
|---|---|---|
| Tillhandahålla Appen på din enhet | Uppgifter du anger (endast på enheten) | Samlas inte in av oss. Behandlas på din enhet på din begäran |
| Bekräfta och hantera din Plus-prenumeration | Support-ID, köpstatus, IP, enhetsinformation | Fullgörande av avtal (art. 6.1 b) |
| Driva Bjud in vänner och ge dess belöningar | Support-ID:n, inbjudningskod, inbjudningsuppgifter, gratisdagar | Fullgörande av avtal: inbjudningsvillkoren i våra [Användarvillkor](../terms/) (art. 6.1 b) |
| Stoppa falska och automatiserade inbjudningar | App Attest-nyckelns ID, IP-adress, tidpunkter för förfrågningar | Berättigat intresse av att hålla programmet rättvist och tjänsten säker (art. 6.1 f) |
| Ge gratis Plus på din begäran eller som goodwill | Support-ID, typ av tilldelning, anledning, tidpunkt | Fullgörande av avtal (art. 6.1 b) eller berättigat intresse (art. 6.1 f) |
| Visa annonser i gratisversionen | Uppgifter som Google behandlar för annonsleverans | Ditt samtycke (art. 6.1 a) där lagen kräver det; i övrigt Googles egna rättsliga grunder |
| Hämta ränteuppgifter | IP-adress, enhetstyp | Berättigat intresse av att tillhandahålla den funktion du bett om (art. 6.1 f) |
| Besvara supportärenden | E-post, meddelande, support-ID | Berättigat intresse (art. 6.1 f) och, om det rör ditt köp, avtal |
| Fullgöra bokförings- och skatteskyldigheter | Köpuppgifter från Apple/Google | Rättslig förpliktelse (art. 6.1 c) |

## 6. Vem som tar emot uppgifter

- **Apple** (och **Google** på Android) för köp och appdistribution, samt Apple för App Attest.
- **RevenueCat, Inc.** för hantering av prenumerationer och gratis Plus-tid.
- **Heroku (Salesforce, Inc.)** för drift av vår server och databas inom EU.
- **Google AdMob** för annonser i gratisversionen.
- **Europeiska centralbanken** (offentlig datatjänst) för uppslag av räntor.
- Myndigheter, där lagen kräver det.

Vi säljer inte personuppgifter. Vi har inga andra reklam- eller datapartner.

## 7. Överföringar utanför EES

Vår server och databas finns inom EU. Vissa av leverantörerna ovan (till exempel Google, Apple, RevenueCat och Salesforce, företaget bakom Heroku) är baserade i eller behandlar uppgifter i USA eller andra länder. När detta sker förlitar vi oss på de skyddsåtgärder som GDPR kräver, till exempel EU–US Data Privacy Framework (om leverantören är certifierad) eller EU:s standardavtalsklausuler.

## 8. Hur länge vi sparar uppgifter

- **Uppgifter på din enhet:** tills du raderar dem eller Appen.
- **Inbjudningsuppgifter och inbjudningskoder på vår server:** så länge inbjudningsprogrammet pågår och upp till 24 månader efter din senaste inbjudningsaktivitet, därefter raderas de.
- **ID för App Attest-nycklar:** lika länge som den inbjudningsuppgift de hör till. Oanvända engångsutmaningar raderas inom en timme.
- **Tilldelningar av gratis Plus:** så länge tilldelningen är aktiv och upp till 24 månader efter att den upphört, som dokumentation av vad vi har gett.
- **Serverloggar (IP-adress, tidpunkt för förfrågan):** upp till 30 dagar.
- **Prenumerationsuppgifter (RevenueCat):** så länge prenumerationsförhållandet består, och därefter så länge som behövs för bokföring och rättsliga anspråk. I Finland sparas bokföringsmaterial i regel i sex år.
- **Supportmejl:** upp till 12 månader efter att ärendet avslutats.
- **Reklamdata hos Google:** enligt Googles policyer.

## 9. Dina val och rättigheter

**I Appen (Profil):**
- **Radera alla data** – raderar allt som Appen lagrar på din enhet och återställer Appen, som därefter skapar ett nytt support-ID. Detta kan inte ångras. Det raderar **inte** uppgifter på vår server eller hos RevenueCat (se nedan).
- **Integritet och annonser** – se eller ändra dina annonsval (visas där samtycke krävs).
- **Påminnelser** – ändra tid eller dölj belopp på låsskärmen.
- **Exportera mina data** (Plus) – exportera dina data som en fil.
- **Support-ID** – se eller dela det ID som vår server känner dig under.

**Radera eller se dina uppgifter på vår server:** mejla oss ditt support-ID (helst innan du använder "Radera alla data") och berätta vad du vill. Vi raderar eller skickar de inbjudningsuppgifter, koder och tilldelningar som är kopplade till det inom en månad. En tilldelning av gratis Plus upphör när vi raderar den.

**På din telefon:** ta bort Appen; återställ enhetens annonsidentifierare eller begränsa annonsspårning i iOS-inställningarna; hantera eller avsluta din prenumeration under Inställningar → ditt namn → Prenumerationer.

**Lagstadgade rättigheter.** Om GDPR gäller för dig har du rätt att få tillgång till, rätta, radera eller begränsa behandlingen av, eller invända mot behandlingen av, personuppgifter vi har om dig, rätt till dataportabilitet och rätt att när som helst återkalla ditt samtycke (återkallelsen påverkar inte tidigare behandling). Vår server känner dig bara genom ditt slumpmässiga support-ID, så vi behöver det ID:t för att hitta dina uppgifter. För att utöva rättigheter som rör uppgifter som behandlas av Google, Apple eller RevenueCat kan du också kontakta dem direkt.

Mejla oss på tikki.dinh@gmail.com. Vi svarar inom en månad.

**Klagomål.** Du kan lämna klagomål till tillsynsmyndigheten i det land där du bor eller arbetar. I Finland är det dataombudsmannens byrå (Tietosuojavaltuutetun toimisto, tietosuoja.fi). I Sverige är det IMY (imy.se), i Tyskland dataskyddsmyndigheten i din delstat.

## 10. Säkerhet

- **På din enhet:** dina uppgifter skyddas av Appens privata lagringsutrymme, av iOS- eller Android-sandlådan och av enhetens låsskärm och kryptering. **Appen lägger inte till någon egen kryptering ovanpå detta**, så vi rekommenderar starkt att du ställer in en enhetskod eller biometrisk låsning.
- **På vår server:** Appen kommunicerar endast med vår servers API över krypterad HTTPS och aldrig direkt med databasen. Databasen accepterar endast krypterade anslutningar med inloggningsuppgifter som bara vi har, och Appen har inga sådana uppgifter. Bara vi kan öppna den, via vårt värdkonto som skyddas med tvåfaktorsautentisering. Tilldelningar kan inte ändras efter att de har registrerats, och varje tilldelning och varje återkallelse loggas med tidpunkt. Nycklar till RevenueCat finns kvar på servern och finns aldrig i Appen.
- Alla anslutningar från Appen till de tjänster som beskrivs ovan använder krypterad HTTPS.

## 11. Barn

Appen är till för personer som är **18 år eller äldre**. Den riktar sig inte till barn, och vi samlar inte medvetet in barns personuppgifter. Om du tror att ett barn har använt Appen, kontakta oss så hjälper vi till att ta bort eventuella uppgifter.

## 12. Inte finansiell rådgivning

Appen är ett verktyg för personlig uppföljning och utbildning. Poängen, diagrammen, uppskattningarna och tipsen är allmänna och baseras enbart på det du anger. De är inte finansiell rådgivning, investeringsrådgivning, kreditrådgivning, skatterådgivning eller juridisk rådgivning. Se [Användarvillkor](../terms/).

## 13. Övriga regioner

- **Vietnam:** Där vietnamesisk dataskyddslagstiftning (inklusive dekret 13/2023/ND-CP) gäller behandlar vi personuppgifter enligt beskrivningen här, och rättigheterna och kontaktvägen i avsnitt 9 gäller för dig.
- **USA och övriga världen:** Vi säljer eller "delar" inte personuppgifter i den mening som dessa termer definieras i amerikanska delstaters integritetslagar, och vi använder dem inte för riktad reklam baserad på en profil av dig.

## 14. Framtida funktioner

Om vi senare lägger till funktioner som flyttar dina **ekonomiska uppgifter** från din enhet (till exempel inloggning eller molnbackup) uppdaterar vi först denna policy, informerar dig i Appen och ber om ditt samtycke innan något av det skickas. Tills dess finns dina ekonomiska uppgifter endast på din enhet.

## 15. Ändringar av denna policy

Vi kan uppdatera denna policy. Datumet högst upp visar den senaste versionen, och tidigare versioner finns kvar i det här förvarets historik. Vid väsentliga ändringar informerar vi dig i Appen innan de börjar gälla.

## 16. Kontakt

Thinh Dinh, Kytötie 71, 04430 Järvenpää, Finland · tikki.dinh@gmail.com
