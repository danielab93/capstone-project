import bodhi from "../images/bodhi.png";
import mamalicious from "../images/mamalicious.png";
import azeitona from "../images/azeitona.png";
import vincentvegan from "../images/vincentvegan.png";
import rawlikesushi from "../images/rawlikesushi.png";

const restaurants = [
  {
    id: 1,
    name: "Bodhi - vegan living",
    art: "Asiatisch",
    adresse: [
      { strasse: "Borgweg", hausnummer: "11", plz: "22303", ort: "Hamburg" },
    ],
    zeiten: "So – Do: 11.30 – 22.30 Uhr, Fr + Sa: 11.30 – 23.00 Uhr ",
    telefon: "040 27880368",
    email: "service@bodhihamburg.de",
    website: "https://www.bodhihamburg.de/",
    image: bodhi,
  },
  {
    id: 2,
    name: "Mamalicious",
    art: "Amerikanisch",
    adresse: [
      {
        strasse: "Max-Brauer-Allee",
        hausnummer: "277",
        plz: "22769",
        ort: "Hamburg",
      },
    ],
    zeiten: "Mo - So: 10 - 16 Uhr, Dienstag: Ruhetag ",
    telefon: "040 37026944",
    email: "mama@mamaknows.de",
    website: "https://mamaknows.de/",
    image: mamalicious,
  },
  {
    id: 3,
    name: "Azeitona",
    art: "Orientalisch",
    adresse: [
      { strasse: "Beckstraße", hausnummer: "19", plz: "20357", ort: "Hamburg" },
      {
        strasse: "Osterstraße",
        hausnummer: "173",
        plz: "20255",
        ort: "Hamburg",
      },
    ],
    zeiten: [
      "Mo - Do: 12 - 23 Uhr, Fr - Sa: 12 - 01.30 Uhr ",
      "So - Fr: 12 - 23 Uhr, Sa: 12 - 0 Uhr ",
    ],
    telefon: "040 18007371",
    email: "",
    website: "https://azeitona.de/",
    image: azeitona,
  },
  {
    id: 4,
    name: "Vincent Vegan",
    art: "Fast Food",
    adresse: [
      { strasse: "Ballindamm", hausnummer: "40", plz: "20095", ort: "Hamburg" },
      {
        strasse: "Steintorwall",
        hausnummer: "20",
        plz: "20095",
        ort: "Hamburg",
      },
      {
        strasse: "Ottenser Hauptstraße",
        hausnummer: "10",
        plz: "22765",
        ort: "Hamburg",
      },
    ],
    zeiten: [
      "Mo - Sa: 11 - 19 Uhr, So: Geschlossen ",
      "So - Do: 11.30 - 21 Uhr, Fr - Sa: 11.30 – 22 Uhr ",
      "Mo - Sa: 11.30 - 19.30 Uhr, So: Geschlossen ",
    ],
    telefon: ["040 76753852", "040 30086531", "040 30377285"],
    email: "info@vincent-vegan.com",
    website: "https://vincent-vegan.com/",
    image: vincentvegan,
  },
  {
    id: 5,
    name: "raw like sushi & more",
    art: "Sushi",
    adresse: [
      {
        strasse: "Martinistraße",
        hausnummer: "5",
        plz: "20251",
        ort: "Hamburg",
      },
    ],
    zeiten: "Do - Mo: 18 - 23 Uhr ",
    telefon: "040 476731",
    email: "more@raw-like-sushi.de",
    website: "https://www.raw-like-sushi.de/",
    image: rawlikesushi,
  },
];

const shops = [
  {
    id: 1,
    name: "Bio.lose",
    art: "Lebensmittel",
    adresse: [
      {
        strasse: "Osterstraße",
        hausnummer: "81",
        plz: "20259",
        ort: "Hamburg",
      },
    ],
    zeiten: "Mo - Fr: 8 - 20 Uhr, Sa: 8 - 18 Uhr",
    telefon: "040 40195700",
    email: "info@biolose.de",
    website: "https://www.biolose.de/",
    image: "",
  },
  {
    id: 2,
    name: "glore",
    art: "Mode",
    adresse: [
      {
        strasse: "Marktstraße",
        hausnummer: "31",
        plz: "20357",
        ort: "Hamburg",
      },
    ],
    zeiten: "Mo - Sa: 11 - 19 Uhr",
    telefon: "040 35777650",
    email: "karoviertel@glore-hamburg.de",
    website: "https://www.glore-hamburg.de/",
    image: "",
  },
  {
    id: 2,
    name: "glore",
    art: "Mode",
    adresse: [
      {
        strasse: "Marktstraße",
        hausnummer: "31",
        plz: "20357",
        ort: "Hamburg",
      },
    ],
    zeiten: "Mo - Sa: 11 - 19 Uhr",
    telefon: "040 35777650",
    email: "karoviertel@glore-hamburg.de",
    website: "https://www.glore-hamburg.de/",
    image: "",
  },
];

const beautyspots = [{}];

export { restaurants, shops, beautyspots };
