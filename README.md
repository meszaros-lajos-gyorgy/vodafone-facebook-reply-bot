# vodafone-facebook-reply-bot

Bújj be te is egy vodafone facebook ügyfélszolgálati asszisztens bőrébe és oldd meg az ügyfelek problémáit!

## hogyan használd

másold be konzolba az index.js tartalmát, majd hívd meg paraméterekkel a `panaszkezeles` függvényt

### paraméterek

`panasz` - 3 értéket vehet fel jelenleg: `PANASZ.NINCS_NET`, `PANASZ.NINCS_TV` és `PANASZ.NEM_VESZI_FEL_AZ_UGYFELSZOLGALAT_A_TELEFONT`

`panaszosNeve` - szöveg, macskakörmök közé írd be a keresztnevét annak, aki a hibát jelenti

`panaszHelye` - szöveg, macskakörmök közé írj be egy várost, vagy kerületet, mindenképpen nagyobb egység legyen, ne utca és házszám

`botNeve` - szöveg, macskakörmök közé írd be a nevedet, az ő nevében fogsz választ írni

`tudunkAHibarol` - 2 értéke lehet, vagy ISMERT_HIBA, vagy ISMERETLEN_HIBA

`hibaJavitva` - opcionális paraméter. ha kitöltöd, akkor szöveget írj bele, macskakörmök közé kerüljön valamilyen dátum, vagy időpont

## példák

`panaszkezeles(PANASZ.NINCS_NET, "Ottó", "Dömsöd", "Jocó", ISMERT_HIBA)`

Válasz:
```
Szia Ottó!
elnézést kérünk a kellemetlenségekért.
Dömsöd bizonyos részein központi fennakadás tapasztalható, melyről már tudomásunk van, és dolgozunk azon, hogy helyreálljon a szolgáltatás.
itt, Facebook oldalunkon általános kérdésekben szívesen segítünk, de egyéni előfizetéseddel kapcsolatban ügyfélszolgálatunk lehet segítségedre.
ha továbbra is fennakadást érzékelsz a szolgáltatásokban, kérjük jelezd az általad tapasztaltakat a 1270-es telefonszámon ügyfélszolgálatunkon , a mielőbbi megoldás érdekében vagy írásban, a https://bit.ly/2UXAJJo oldalunkon keresztül érdeklődni!
együttműködésed köszönjük és az okozott kellemetlenség miatt elnézést kérünk és bízunk benne, hogy már helyreállt Nálad a szolgáltatás és várjuk megkeresésed, hogy minél előbb segítségedre lehessünk és visszaállíthassuk a minőségi szolgáltatást!
Üdv: *Jocó
```

`panaszkezeles(PANASZ.NINCS_TV, "Csilla", "Budapest 2. kerület", "Antal", ISMERETLEN_HIBA)`

Válasz:
```
Szia Csilla!
elnézést kérünk a tapasztaltakért.
igyekszünk mielőbb javítani az ilyen váratlan szolgáltatás kieséseket, de pontos időpontot sajnos nem tudunk meghatározni.

amennyiben továbbra is ezt tapasztalod, érdemes jelezd az általad tapasztaltakat a 1270-es telefonszámon ügyfélszolgálatunkon , hogy segíthessünk vagy írásban, a https://bit.ly/34kOWGL oldalunkon keresztül érdeklődni!
további türelmet kérünk és bízunk benne, hogy már helyreállt Nálad a szolgáltatás!
Üdv: *Antal
```

## disclaimer

Minden igyekezetem ellenére nem garantált a nyelvtani helyesség.

Kiegészítéseket szívesen látok pull request-ek formájában.

## minta, ami alapján a kód készült

Szia Gábor! Teszteltük alkalmazásunkat és megfelelően működik. Az általad leírtak alapján, egyéni előfizetésedhez tartozó okok miatt tapasztalható a jelenség. Javasoljuk a megoldás érdekében, hogy egyeztess 1270-es telefonszámon elérhető ügyfélszolgálatunkkal, illetve a https://bit.ly/34kOWGL hivatkozáson online is megteheted bejelentésed. Együttműködésed köszönjük! Üdv: *Beus

Szia Ildikó!
Szécsény bizonyos részein fennakadás volt tapasztalható a szolgáltatásban, mely nyilvántartásunk szerint ma délelőtt javítva lett. Amennyiben továbbra sem működik megfelelően Nálad a szolgáltatás, javasoljuk, hogy a 1270-es telefonszámon vedd fel a kapcsolatot munkatársainkkal, hogy utánanézhessünk.
Az okozott kellemetlenség miatt elnézést kérünk!
Üdv: *Gábor

Szia Zsolt!
Az elmúlt időszakban kiemelkedően nagy terhelést kapott ügyfélszolgálatunk és emiatt megnövekedhet a várokozási idő, azonban 1270-es ügyfélszolgálatunk a nap 24 órájában elérhető. Elnézésedet kérjük, ha hosszas várakozási időt tapasztaltál! Itt, Facebook oldalunkon általános kérdésekben szívesen segítünk, de egyéni előfizetéseddel kapcsolatban ügyfélszolgálatunk lehet segítségedre. Megértésed köszönjük!
Üdv: *Gábor

Szia Lajos!
Az elmúlt időszakban kiemelkedően nagy terhelést kapott ügyfélszolgálatunk és emiatt megnövekedhet a várokozási idő, azonban 1270-es ügyfélszolgálatunk a nap 24 órájában elérhető. Elnézésedet kérjük, ha hosszas várakozási időt tapasztaltál! Bízunk benne, hogy már helyreállt Nálad a szolgáltatás!
Üdv: *Gábor

Sziasztok! Elnézést a kellemetlenségért! Jelenleg központi fennakadás tapasztalható a 2. kerületben. Munkatársaink már dolgoznak rajta, hogy minél hamarabb visszaállíthassák a szolgáltatást. Türelmeteket köszönjük. Üdv: *Norbi

Szia Nikolett! A nem fogadott hívásról is küldünk értesítő SMS-t folyamataink szerint, ami természetesen díjmentes. Üdv: *Marcsi

Szia Dénes! Elnézésed kérjük a hosszas várakozási idő miatt! Bizonyos időszakokban valóban megnövekedhet az ügyfélszolgálatunkon érdeklődők száma, azonban minden esetben igyekszünk a magas minőségű kiszolgálás mellett a lehető leggyorsabban ügyfeleink segítségére lenni! Telefonos ügyfélszolgálatunk a nap 24 órájában elérhető, ezért érdemes később is felhívni minket. Üdv: *Norbi

Szia Dániel! Elnézésed kérjük a hosszas várakozási idő miatt! Bizonyos időszakokban valóban megnövekedhet az ügyfélszolgálatunkon érdeklődők száma, azonban minden esetben igyekszünk a magas minőségű kiszolgálás mellett a lehető leggyorsabban ügyfeleink segítségére lenni! Telefonos ügyfélszolgálatunk a nap 24 órájában elérhető, ezért érdemes később is felhívni minket. Üdv: *Norbi

Szia Róbert!
Budapest II. kerületének bizonyos részein központi fennakadás tapasztalható, melyről már tudomásunk van, és dolgozunk azon, hogy helyreálljon a szolgáltatás. Igyekszünk mielőbb javítani az ilyen váratlan szolgáltatás kieséseket, de pontos időpontot sajnos nem tudunk meghatározni. Megértésed köszönjük, és további türelmet kérünk!
Üdv: *Gábor

Szia Ivett!
Elnézést kérünk a kellemetlenségekért!
Sajnos előfordulhatnak, olyan időszakok, amikor megnövekszik a várakozási idő munkatársaink kapcsolásáig, de mindent megteszünk annak érdekében, hogy minden megkeresésre mielőbb válaszoljunk. Amennyiben mégsem sikerült felvenni velük a kapcsolatot, további elérhetőségeinket itt találod: https://bit.ly/2UXAJJo
Üdv: *Gábor

Köszönjük jelzésedet! Felelős munkatársaink értesültek a szolgáltatás nem megfelelő működéséről, és a javítás jelenleg is folyamatban van. Az elmúlt időszakban kiemelkedően nagy terhelést kapott az ügyfélszolgálat és emiatt megnövekedhet a várokozási idő. Elnézésedet kérjük, ha hosszas várakozást tapasztaltál! A javítás időpontjáról ügyfélszolgálatunk egyelőre nem rendelkezik információval, türelmedet kérnénk ennek megtörténtéig! Adatvédelmi okok miatt, kérjük szerkeszd vagy töröld bejegyzésedet, mely tartalmazza az azonosító számodat! Megértésed köszönjük! Üdv: *Beus

Szia Imre!
Javasoljuk, hogy a mielőbbi megoldás érdekében jelezd az általad tapasztaltakat a 1270-es telefonszámon ügyfélszolgálatunkon. Együttműködésed köszönjük!
Üdv: *Gábor

Szia Áron!
Sajnos előfordulhatnak, olyan időszakok, amikor megnövekszik a várakozási idő munkatársaink kapcsolásáig, de mindent megteszünk annak érdekében, hogy minden megkeresésre mielőbb válaszoljunk. Amennyiben mégsem sikerült felvenni velük a kapcsolatot, további elérhetőségeinket itt találod: https://bit.ly/2UXAJJo
Üdv: *Gábor

Szia Dániel!
Budapest 2. kerületében van tudomásunk központi fennakadásról, azonban mivel egyéni előfizetésedre nem látunk rá, így csak általánosságban tudunk tájékoztatni.
Amennyiben továbbra is ezt tapasztalod, érdemes ismét megpróbálni a 1270-es telefonszámot, vagy írásban, a https://bit.ly/2UXAJJo oldalunkon keresztül érdeklődni.
Üdv: *Gábor

Szia Imre!
Ercsi bizonyos részein központi fennakadás tapasztalható, melyről már tudomásunk van, és dolgozunk azon, hogy helyreálljon a szolgáltatás. Igyekszünk mielőbb javítani az ilyen váratlan szolgáltatás kieséseket, de pontos időpontot sajnos nem tudunk meghatározni.Megértésed köszönjük, és további türelmet kérünk!
Üdv: *Gábor

Szia Attila! Mindenképpen szeretnénk segíteni, ezért arra kérünk, vedd fel velünk a kapcsolatot a 1270-es számon vagy a https://bit.ly/2VuUicj oldalon megadott elérhetőségeink egyikén! Várjuk megkeresésed, hogy minél előbb segítségedre lehessünk és visszaállíthassuk a minőségi szolgáltatást! Üdv: *Norbi

Szia Ildikó! Szeretnénk utánanézni, hogy mi lehet a gond, ezért arra kérünk, vedd fel velünk a kapcsolatot a 1270-es számon vagy a https://bit.ly/2VuUicj oldalon megadott elérhetőségeink egyikén! Várjuk megkeresésed, hogy minél előbb segítségedre lehessünk és visszaállíthassuk a minőségi szolgáltatást! Üdv: *Norbi

Szia Attila! Elnézésedet kérjük a felmerült kellemetlenségért! Javasoljuk, hogy ha szolgáltatásunk nem működik megfelelően, akkor jelezd a 1270-es telefonszámon elérhető ügyfélszolgálatunkon az általad tapasztaltakat, a mielőbbi megoldás érdekében. Együttműködésed köszönjük! Üdv: *Norbi

Szia Éva!
Sajnos előfordulhatnak, olyan időszakok, amikor megnövekszik a várakozási idő munkatársaink kapcsolásáig, de mindent megteszünk annak érdekében, hogy minden megkeresésre mielőbb válaszoljunk. Amennyiben mégsem sikerült felvenni velük a kapcsolatot, további elérhetőségeinket itt találod: https://bit.ly/2UXAJJo
Üdv: *Gábor

Szia Fruzsi!
Elnézést kérünk a tapasztaltakért! Ha továbbra is fennakadást érzékelsz a szolgáltatásokban, kérjük, jelezd a 1270-es telefonszámon, hogy segíthessünk!
Sajnos előfordulhatnak, olyan időszakok, amikor megnövekszik a várakozási idő munkatársaink kapcsolásáig, de mindent megteszünk annak érdekében, hogy minden megkeresésre mielőbb válaszoljunk. Amennyiben mégsem sikerült felvenni velük a kapcsolatot, további elérhetőségeinket itt találod: https://bit.ly/2UXAJJo
Üdv: *Gábor

Szia Tamás!
Fót bizonyos részein fennakadás volt tapasztalható a szolgáltatásban, mely nyilvántartásunk szerint a mai napon, 11 óra körül javítva lett. Amennyiben továbbra sem működik megfelelően Nálad a szolgáltatás, javasoljuk, hogy a 1270-es telefonszámon vedd fel a kapcsolatot munkatársainkkal, hogy utánanézhessünk.
Az okozott kellemetlenség miatt elnézést kérünk!
Üdv: *Gábor

Szia Ágnes! Elnézésed kérjük a kellemetlenségért. Itt, a Facebook oldalunkon csak általános kérdésekben lehetünk segítségedre, egyedi előfizetésedet érintő kérdésekben kérjük, keress minket telefonos ügyfélszolgálatunkon, a 1270-es számon, vagy további elérhetőségeink egyikén: https://bit.ly/2VuUicj. Várjuk megkeresésed, hogy segíthessünk! Üdv: *Norbi

Szia Szabina!
Amennyiben továbbra is fennakadást tapasztalsz a szolgáltatásban, kérjük, a 1270-es telefonszámon vedd fel a kapcsolatot munkatársainkkal, hogy mielőbb utánanézhessünk, és megoldást találhassunk rá!
Üdv: *Gábor

Szia Tamás!
Tárnok bizonyos részein központi fennakadás tapasztalható, melyről már tudomásunk van, és dolgozunk azon, hogy helyreálljon a szolgáltatás. Igyekszünk mielőbb javítani az ilyen váratlan szolgáltatás kieséseket, de pontos időpontot sajnos nem tudunk meghatározni.
Megértésed köszönjük, és további türelmet kérünk!
Üdv: *Gábor
