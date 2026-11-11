export default {
  lang: 'fi', label: 'Suomi',
  nav: { privacy: 'Tietosuojakäytäntö', terms: 'Käyttöehdot', support: 'Tuki' },
  updated: 'Voimassa alkaen', home: { title: 'vTasku', lead: 'Yksinkertainen henkilökohtainen menojen seuranta. Menosi pysyvät puhelimessasi.' },
  privacy: { title: 'Tietosuojakäytäntö', html: `
<p>Tämä käytäntö kertoo, mitä vTasku (”sovellus”) tekee tiedoille. Lyhyesti: <strong>menosi, muistiinpanosi, kuittikuvasi ja budjettisi pysyvät laitteellasi. Meillä ei ole käyttäjätilejä emmekä voi lukea niitä.</strong></p>

<h2>1. Rekisterinpitäjä</h2>
<p>vTaskua ylläpitää {{operator}}, {{country}}. Yhteystiedot tietosuojakysymyksiin: <a href="mailto:{{email}}">{{email}}</a>.</p>

<h2>2. Mikä pysyy laitteellasi</h2>
<p>Kaikki menot, luokat, muistiinpanot, kuittikuvat, budjetit, toistuvat menot, haut ja asetukset tallennetaan vain laitteellesi. vTasku ei yhdisty pankkiisi tai lompakkoosi. Apple Pay -tallennus saa vain summan ja kauppiaan nimen, jotka <em>itse</em> määrität Apple-oikotiessä, ja säilyttää ne laitteellasi.</p>

<h2>3. Mikä poistuu laitteeltasi</h2>
<table>
<tr><th>Toiminto</th><th>Mitä lähetetään</th><th>Kenelle</th></tr>
<tr><td>Mainokset (Free-paketti)</td><td>Laitetunnisteet, IP-osoite (likimääräinen sijainti), mainosten käyttö, diagnostiikka</td><td>Google AdMob</td></tr>
<tr><td>Plus-osto</td><td>Anonyymi käyttäjätunnus ja ostohistoriasi</td><td>RevenueCat sekä Apple App Store / Google Play</td></tr>
<tr><td>Kutsukoodit (kun saatavilla)</td><td>Laitteellasi luotu satunnainen tunnus, kutsukoodisi, antamasi koodi ja Apple App Attest -avain (ks. kohta 7)</td><td>Palvelimemme</td></tr>
<tr><td>iCloud-varmuuskopio (Plus, valinnainen)</td><td>Kopio menoistasi, budjeteistasi, nimikkeistäsi ja toistuvista menoistasi</td><td>Oma iCloud-tilisi, Applen säilyttämä</td></tr>
</table>
<p>iCloud-varmuuskopio on pois päältä, kunnes otat sen käyttöön Asetuksissa. Apple säilyttää kopion iCloud-tililläsi, ja vain vTasku laitteillasi voi lukea sen; meillä ei ole pääsyä siihen. Poista kaikki tiedot poistaa myös iCloud-kopion.</p>
<p>Mikään muu ei poistu laitteeltasi. Emme käytä tietojasi analytiikka- tai tekoälypalveluissa. Emme käytä sovelluksen tietoja seuraamaan sinua muissa sovelluksissa ja verkkosivustoilla.</p>

<h2>4. Mainokset ja valintasi</h2>
<p>Free-paketti näyttää Google AdMobin tarjoamia mainoksia. Google voi saada laitetunnisteita, IP-osoitteesi, tietoja mainosten käytöstä ja diagnostiikkaa. iOS:ssä mainokset eivät ole personoituja, eikä vTasku pyydä lupaa seurata sinua sovellusten välillä. Euroopan talousalueella, Yhdistyneessä kuningaskunnassa ja Sveitsissä pyydämme ensin suostumuksesi, ja voit muuttaa valintaasi milloin tahansa Asetuksissa (Mainosten tietosuojavalinnat). Plus-käyttäjät eivät näe mainoksia, eikä sovellus lähetä tietoja AdMobille. Katso <a href="https://policies.google.com/technologies/partner-sites">miten Google käyttää tietoja</a>.</p>

<h2>5. Ostot</h2>
<p>Ostoja käsittelee Apple App Store tai Google Play; emme koskaan näe kortti- tai maksutietojasi. Plus-oikeutesi vahvistamiseen käytämme RevenueCatia, joka saa anonyymin käyttäjätunnuksen ja ostohistoriasi.</p>

<h2>6. Jakaminen Vung-sovelluksen kanssa</h2>
<p>Jos otat sen käyttöön, vTasku kirjoittaa kuukausisummat luokittain tiedostoon laitteellasi, jotta saman kehittäjän Vung-sovellus voi lukea ne. Tietoja ei siirretä verkon yli. Yksittäisiä menoja, paikkoja, muistiinpanoja tai kuittikuvia ei jaeta. Voit poistaa jakamisen käytöstä ja poistaa jaetun tiedoston Asetuksissa.</p>

<h2>7. Kutsukoodit ja Plus-bonusaika</h2>
<p>Jos käytät kutsukoodeja, palvelimemme tallentaa: laitteellasi luodun satunnaisen käyttäjätunnuksen, kutsukoodisi, mahdollisen Plus-bonusajan päättymispäivän sekä Apple App Attest -avaimen julkisen avaimen ja laskurin. App Attestilla tarkistamme, että pyynnöt tulevat aidosta sovelluksen kopiosta, ja Apple osallistuu tähän tarkistukseen. Emme tallenna nimeäsi, sähköpostiosoitettasi, IP-osoitettasi tai menojasi. Kun käytät sovelluksessa toimintoa <em>Poista kaikki tiedot</em>, palvelinrekisterisi poistetaan. Kutsutietue voi jäädä ilman mitään tunnusta, jotta vuosirajat toimivat edelleen.</p>

<h2>8. Palvelinympäristö ja lokit</h2>
<p>Palvelin toimii Herokussa alueella {{serverRegion}}. Herokun reitityslokit voivat sisältää IP-osoitteita lyhyen aikaa; omat lokimme sisältävät vain pyynnön polun, tilakoodin ja keston. Käytämme IP-osoitettasi vain muistissa väärinkäytön rajoittamiseen.</p>

<h2>9. Kuinka kauan säilytämme tietoja</h2>
<p>Laitteellasi olevat tiedot säilyvät, kunnes poistat ne tai poistat sovelluksen. Palvelintietueet säilyvät, kunnes käytät toimintoa Poista kaikki tiedot tai pyydät meitä poistamaan ne. Kolmannet osapuolet (Google, RevenueCat, Apple) säilyttävät tietoja omien käytäntöjensä mukaan.</p>

<h2>10. Oikeutesi</h2>
<p>Voit viedä tietosi (CSV) ja poistaa kaiken sovelluksessa (Asetukset → Tiedot ja yksityisyys). Kolmansien osapuolten tai palvelimemme hallussa olevien tietojen osalta voit pyytää pääsyä, oikaisua, poistamista tai vastustaa käsittelyä asuinmaasi lain mukaan (esimerkiksi EU:n/Yhdistyneen kuningaskunnan GDPR tai Vietnamin henkilötietolaki) lähettämällä sähköpostia osoitteeseen <a href="mailto:{{email}}">{{email}}</a>. Vastaamme 30 päivän kuluessa. Voit myös tehdä valituksen tietosuojaviranomaiselle.</p>

<h2>11. Kansainväliset siirrot</h2>
<p>Google ja RevenueCat voivat käsitellä tietoja muissa kuin asuinmaassasi sijaitsevissa maissa, myös Yhdysvalloissa. Ne nojaavat suojatoimiin, kuten vakiosopimuslausekkeisiin; katso niiden käytännöt.</p>

<h2>12. Lapset</h2>
<p>vTasku on tarkoitettu vähintään 18-vuotiaille, emmekä tietoisesti kerää tietoja nuoremmilta.</p>

<h2>13. Suunnitteilla: anonyymit hintapanokset (ei tässä versiossa)</h2>
<p>Myöhempi versio voi tarjota valinnaisen, oletuksena pois päältä olevan kytkimen hintojen anonyymiin jakamiseen (julkinen paikan nimi, luokka, summa ja päivämäärä, ilman kellonaikaa, sijaintia, muistiinpanoja, kuvia, IP-osoitetta tai käyttäjätunnusta). Se näyttää tarkasti, mitä lähetetään, sen voi sammuttaa milloin tahansa, ja päivitämme tämän käytännön ja pyydämme suostumuksesi sovelluksessa ennen kuin se alkaa.</p>

<h2>14. Muutokset</h2>
<p>Tärkeistä muutoksista ilmoitamme sovelluksessa ennen niiden voimaantuloa. Voimassa alkaen: {{effectiveDate}}.</p>
` },
  terms: { title: 'Käyttöehdot', html: `
<p>Nämä ehdot koskevat vTasku-sovellusta. Niitä sovelletaan yhdessä Applen <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">vakiomuotoisen loppukäyttäjän lisenssisopimuksen</a> kanssa; ristiriitatilanteessa Applen ehdot ovat ensisijaisia itse lisenssin osalta.</p>

<h2>1. Lisenssi</h2>
<p>Saat käyttää vTaskua henkilökohtaiseen, siirtokelvottomaan käyttöön. Et saa kopioida, purkaa tai myydä sovellusta edelleen. Sinun on oltava vähintään 18-vuotias.</p>

<h2>2. Ei talousneuvontaa</h2>
<p>vTasku auttaa vain kirjaamaan ja tarkastelemaan menoja. Kaaviot, summat, ennusteet ja vertailut ovat tiedoksi, eivätkä ne ole talous-, vero-, sijoitus- tai lakineuvontaa. Vastaat itse talouspäätöksistäsi.</p>

<h2>3. Tietosi</h2>
<p>Menotietosi ovat laitteellasi. Jos poistat sovelluksen tai vaihdat puhelinta ilman varmuuskopiota (käyttöjärjestelmän varmuuskopio tai CSV-vienti), saatat menettää ne, emmekä voi palauttaa niitä. Vie CSV säännöllisesti.</p>

<h2>4. Free-paketti ja mainokset</h2>
<p>Free-paketti näyttää kolmansien osapuolten mainoksia. Emme vastaa mainostajista tai sivuista, joille heidän mainoksensa johtavat.</p>

<h2>5. vTasku Plus</h2>
<ul>
<li>Kuukausi- ja vuosipaketit uusiutuvat automaattisesti, ellet peruuta vähintään 24 tuntia ennen kuluvan jakson päättymistä.</li>
<li>Maksu veloitetaan Apple ID:ltäsi tai Google Play -tililtäsi, kun vahvistat oston; uusiminen veloitetaan 24 tunnin sisällä ennen jakson päättymistä.</li>
<li>Hallitset tai peruutat tilauksen kauppatilisi asetuksissa; sovelluksen poistaminen ei peruuta tilausta.</li>
<li>Kertamaksuinen elinikäinen paketti maksetaan kerran, ei uusiudu ja kuuluu kauppatilillesi; käytä Palauta ostot -toimintoa, kun vaihdat puhelinta.</li>
<li>Hyvityksistä päättävät Apple tai Google, eivät me. Hinnat näytetään valuutassasi ja voivat muuttua.</li>
</ul>

<h2>6. Kutsukoodit</h2>
<p>Kutsukoodit antavat Plus-bonusaikaa sinulle ja sinut kutsuneelle henkilölle, kutsujakohtaiseen vuosirajaan asti. Bonusajalla ei ole rahallista arvoa, sitä ei voi myydä, eikä se koskaan edellytä sovelluksen arvostelua tai arvosanaa. Voimme hylätä tai poistaa väärinkäytöllä tai petoksella saadun bonusajan, ja voimme muuttaa ohjelmaa tai lopettaa sen.</p>

<h2>7. Sallittu käyttö</h2>
<p>Älä käytä vTaskua lain rikkomiseen, palvelun tai sen palvelimien vahingoittamiseen tai vääriin tietoihin. Voimme estää väärinkäytökseltä näyttäviä pyyntöjä.</p>

<h2>8. Takuu ja vastuu</h2>
<p>Sovellus toimitetaan ”sellaisenaan”. Lain sallimissa rajoissa emme vastaa välillisistä vahingoista tai tietojen menetyksestä, ja kokonaisvastuumme rajoittuu summaan, jonka olet maksanut viimeisten 12 kuukauden aikana. Asuinmaasi lain mukaiset pakottavat kuluttajansuojaoikeudet säilyvät.</p>

<h2>9. Muutokset, päättyminen, sovellettava laki</h2>
<p>Voit lopettaa sovelluksen käytön milloin tahansa. Voimme päivittää näitä ehtoja ja ilmoitamme tärkeistä muutoksista sovelluksessa. Sovellettava laki: {{governingLaw}}; EU:n kuluttajat säilyttävät asuinmaansa lain antamat oikeudet. Yhteystiedot: <a href="mailto:{{email}}">{{email}}</a>. Voimassa alkaen: {{effectiveDate}}.</p>
` },
  support: { title: 'Tuki', html: `
<p>Kysymykset, viat tai tietosuojapyynnöt: <a href="mailto:{{email}}">{{email}}</a>. Luemme jokaisen viestin ja vastaamme yleensä muutaman päivän kuluessa.</p>

<h2>Tietojeni vieminen tai poistaminen</h2>
<p>Asetukset → Tiedot ja yksityisyys → <em>Vie tiedot (CSV)</em> tai <em>Poista kaikki tiedot</em>. Poistaminen tapahtuu heti, eikä sitä voi perua.</p>

<h2>Tilauksen peruuttaminen</h2>
<p>iPhonessa: Asetukset → oma nimesi → Tilaukset → vTasku. Sovelluksen poistaminen ei peruuta tilausta. Hyvityksiä varten käytä Applen sivua ”Ilmoita ongelmasta”.</p>

<h2>Ostojen palauttaminen tai siirtyminen uuteen puhelimeen</h2>
<p>Avaa vTasku Plus ja napauta <em>Palauta ostot</em>, kun olet kirjautuneena samalla Apple ID:llä. Menotiedot tallennetaan vain puhelimeen: käytä iPhonen varmuuskopiota tai vie CSV ennen puhelimen vaihtoa.</p>

<h2>Apple Pay -maksujen tallennus automaattisesti</h2>
<ol>
<li>Avaa Oikotiet-sovellus → Automaatio → Uusi automaatio → Tapahtuma.</li>
<li>Valitse kortit ja lisää sitten toiminto <em>Avaa URL-osoitteet</em>.</li>
<li>Käytä osoitetta <code>vtasku://add?amount=[Summa]&amp;merchant=[Kauppias]</code> ja lisää muuttujat Summa ja Kauppias.</li>
<li>Aseta se suoritettavaksi heti. Uudet maksut näkyvät vTaskun ”Odottaa luokkaa” -listassa vahvistettavaksi.</li>
</ol>

<h2>Jakaminen Vungin kanssa</h2>
<p>Ota käyttöön kohdassa Asetukset → Yhdistä Vungiin. Vain kuukausisummat luokittain kirjoitetaan tiedostoon puhelimessasi; mitään ei lähetetä internetin kautta. Voit poistaa sen käytöstä ja poistaa tiedoston milloin tahansa.</p>

<h2>Kutsukoodit (tulossa pian)</h2>
<p>Jaa koodisi Asetuksista. Kun ystävä syöttää sen, molemmat saatte Plus-bonusaikaa (vuosiraja on voimassa). Poista kaikki tiedot poistaa palvelinrekisterisi.</p>

<h2>iCloud-varmuuskopio (Plus)</h2>
<p>Asetukset → iCloud-varmuuskopio säilyttää kopion tiedoistasi omassa iCloudissasi. Uudessa puhelimessa: asenna vTasku, avaa vTasku Plus, napauta <em>Palauta ostot</em>, avaa sitten Asetukset → iCloud-varmuuskopio ja napauta <em>Palauta iCloudista</em>. Poista kaikki tiedot poistaa myös kopion.</p>

<h2>Juridiset asiat</h2>
<p><a href="{{base}}privacy/fi/">Tietosuojakäytäntö</a> · <a href="{{base}}terms/fi/">Käyttöehdot</a></p>
` },
};
