const PANASZ = {
  NINCS_NET = 0x01,
  NINCS_TV = 0x02,
  NEM_TUDTA_HIVNI_AZ_UGYFELSZOLGALATOT = 0x04
}

const KOSZONJUK = [
  '',
  'megértésed köszönjük',
  'együttműködésed köszönjük',
  'türelmed köszönjük'
]

const KERUNK = [
  '',
  'további türelmet kérünk',
  'az okozott kellemetlenség miatt elnézést kérünk'
]

const SZOLGALTATAS = [
  '',
  'bízunk benne, hogy már helyreállt Nálad a szolgáltatás'
]

const HIVJ_MINKET_MERT = [
  '',
  'várjuk megkeresésed, hogy segíthessünk',
  'várjuk megkeresésed, hogy minél előbb segítségedre lehessünk és visszaállíthassuk a minőségi szolgáltatást'
]

// mindegyik URL ide mutat: https://www.upc.hu/ugyfelszolgalat/kapcsolat/
const URL = [
  'https://bit.ly/34kOWGL',
  'https://bit.ly/2UXAJJo',
  'https://bit.ly/2VuUicj'
]

const ISMERETLEN_HELYSZIN = [
  'igyekszünk mielőbb javítani az ilyen váratlan szolgáltatás kieséseket, de pontos időpontot sajnos nem tudunk meghatározni',
  'a javítás időpontjáról ügyfélszolgálatunk egyelőre nem rendelkezik információval, türelmedet kérnénk ennek megtörténtéig',
  'felelős munkatársaink értesültek a szolgáltatás nem megfelelő működéséről, és a javítás jelenleg is folyamatban van.'
]

const ISMERT_HELYSZIN_JAVITVA = [
  '%%HOL%% bizonyos részein fennakadás volt tapasztalható a szolgáltatásban, mely nyilvántartásunk szerint %%MIKOR%% javítva lett.',
]

const ISMERT_HELYSZIN_FOLYAMATBAN = [
  'Jelenleg központi fennakadás tapasztalható a %%HOL%%. Munkatársaink már dolgoznak rajta, hogy minél hamarabb visszaállíthassák a szolgáltatást.',
  '%%HOL%% van tudomásunk központi fennakadásról, azonban mivel egyéni előfizetésedre nem látunk rá, így csak általánosságban tudunk tájékoztatni.',
  '%%HOL%% bizonyos részein központi fennakadás tapasztalható, melyről már tudomásunk van, és dolgozunk azon, hogy helyreálljon a szolgáltatás.'
]

const CANT_DO_SHIT_ON_FACEBOOK = [
  '',
  'itt, Facebook oldalunkon általános kérdésekben szívesen segítünk, de egyéni előfizetéseddel kapcsolatban ügyfélszolgálatunk lehet segítségedre.',
  'itt, a Facebook oldalunkon csak általános kérdésekben lehetünk segítségedre, egyedi előfizetésedet érintő kérdésekben kérjük, keress minket telefonos ügyfélszolgálatunkon, a 1270-es számon, vagy további elérhetőségeink egyikén: ' + random(URL)
]

const KONTAKT_JAVASLAT_PREFIX = [
  'javasoljuk a megoldás érdekében, hogy',
  'javasoljuk, hogy a mielőbbi megoldás érdekében',
  'amennyiben továbbra sem működik megfelelően Nálad a szolgáltatás, javasoljuk, hogy',
  'amennyiben továbbra is ezt tapasztalod, érdemes',
  'mindenképpen szeretnénk segíteni, ezért arra kérünk,',
  'szeretnénk utánanézni, hogy mi lehet a gond, ezért arra kérünk,',
  'javasoljuk, hogy ha szolgáltatásunk nem működik megfelelően, akkor',
  'ha továbbra is fennakadást érzékelsz a szolgáltatásokban, kérjük',
  'amennyiben továbbra is fennakadást tapasztalsz a szolgáltatásban, kérjük,'
]

const KONTAKT_PRIMARY = [
  'egyeztess 1270-es telefonszámon elérhető ügyfélszolgálatunkkal',
  'a 1270-es telefonszámon vedd fel a kapcsolatot munkatársainkkal',
  'jelezd az általad tapasztaltakat a 1270-es telefonszámon ügyfélszolgálatunkon',
  'ismét megpróbálni a 1270-es telefonszámot',
  'vedd fel velünk a kapcsolatot a 1270-es számon',
  'jelezd a 1270-es telefonszámon elérhető ügyfélszolgálatunkon az általad tapasztaltakat',
  'jelezd a 1270-es telefonszámon'
]

const KONTAKT_PRIMARY_EZERT = [
  '',
  ', hogy utánanézhessünk',
  ', a mielőbbi megoldás érdekében',
  ', hogy segíthessünk',
  ', hogy mielőbb utánanézhessünk, és megoldást találhassunk rá'
]

const KONTAKT_SECONDARY = [
  '',
  `illetve a ${random(URL)} hivatkozáson online is megteheted bejelentésed`,
  `amennyiben mégsem sikerült felvenni velük a kapcsolatot, további elérhetőségeinket itt találod: ${random(URL)}`,
  `vagy írásban, a ${random(URL)} oldalunkon keresztül érdeklődni`,
  `vagy a ${random(URL)} oldalon megadott elérhetőségeink egyikén`
]

const AKKOR_IS_KONTAKT_HA_AZ_TUL_VAN_TERHELVE = [
  'bizonyos időszakokban valóban megnövekedhet az ügyfélszolgálatunkon érdeklődők száma',
  'az elmúlt időszakban kiemelkedően nagy terhelést kapott ügyfélszolgálatunk és emiatt megnövekedhet a várokozási idő',
  'sajnos előfordulhatnak, olyan időszakok, amikor megnövekszik a várakozási idő munkatársaink kapcsolásáig'
]

const DE_MI_MEGIS_KIRALYOK_VAGYUNK = [
  'azonban minden esetben igyekszünk a magas minőségű kiszolgálás mellett a lehető leggyorsabban ügyfeleink segítségére lenni',
  'azonban 1270-es ügyfélszolgálatunk a nap 24 órájában elérhető',
  'telefonos ügyfélszolgálatunk a nap 24 órájában elérhető, ezért érdemes később is felhívni minket',
  'de mindent megteszünk annak érdekében, hogy minden megkeresésre mielőbb válaszoljunk'
]

const BOCSI_TUL_SOKAIG_VART = [
  'elnézésedet kérjük, ha hosszas várakozási időt tapasztaltál',
  'elnézésed kérjük a hosszas várakozási idő miatt',
  'elnézésedet kérjük, ha hosszas várakozást tapasztaltál'
]

const BOCSI_GENERIC = [
  'elnézést a kellemetlenségért',
  'elnézést kérünk a kellemetlenségekért',
  'elnézésedet kérjük a felmerült kellemetlenségért',
  'elnézést kérünk a tapasztaltakért',
  'elnézésed kérjük a kellemetlenségért'
]

// ------------------------------

const random = array => {
  return array[Math.floor(Math.random() * array.length)]
}

const appendIfNotEmpty = (phrase, addition) => {
  if (phrase !== '') {
    return phrase + addition
  } else {
    return ''
  }
}

const isNotEmpty = x => {
  return x.length !== 0
}

// ------------------------------

const reply = (panasz, panaszHelye, panaszosNeve, botNeve, tudunkAHibarol, hibaJavitva = null) => {
  const koszonettel = appendIfNotEmpty([random(KOSZONJUK), random(KERUNK), random(SZOLGALTATAS), random(HIVJ_MINKET_MERT)].filter(isNotEmpty).join(' és '), '!')

  const facebookonNemTudunkSegiteni = random(CANT_DO_SHIT_ON_FACEBOOK)

  let bocsanat = random(BOCSI_GENERIC)
  let panaszValasz = ''
  let kontaktAjanlo = [random(KONTAKT_JAVASLAT_PREFIX), random(KONTAKT_PRIMARY), random(KONTAKT_PRIMARY_EZERT), random(KONTAKT_SECONDARY)].join(' ') + '!'

  switch (panasz) {
    case PANASZ.NEM_TUDTA_HIVNI_AZ_UGYFELSZOLGALATOT:
      bocsanat = random(BOCSI_TUL_SOKAIG_VART)
      panaszValasz = random(AKKOR_IS_KONTAKT_HA_AZ_TUL_VAN_TERHELVE) + ', ' + random(DE_MI_MEGIS_KIRALYOK_VAGYUNK) + '.'
      kontaktAjanlo = ''
      break
    case PANASZ.NINCS_NET:
    case PANASZ.NINCS_TV:
      if (tudunkAHibarol) {
        panaszValasz = random(hibaJavitva === null ? ISMERT_HELYSZIN_FOLYAMATBAN : ISMERT_HELYSZIN_JAVITVA).replace('%%HOL%%', panaszHelye).replace('%%MIKOR%%', hibaJavitva)
      } else {
        panaszValasz = random(ISMERETLEN_HELYSZIN)
      }
      break
  }

  return `
    Szia ${panaszosNeve}!
    ${bocsanat}.
    ${panaszValasz}.
    ${facebookonNemTudunkSegiteni}.
    ${kontaktAjanlo}
    ${koszonettel}
    Üdv: *${botNeve}
  `
}
