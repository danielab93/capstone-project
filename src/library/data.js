import bodhi from "../images/bodhi.png";
import mamalicious from "../images/mamalicious.png";
import azeitona from "../images/azeitona.png";
import vincentvegan from "../images/vincentvegan.png";
import rawlikesushi from "../images/rawlikesushi.png";
import biolose from "../images/biolose.png";
import stueckgut from "../images/stueckgut.png";
import glore from "../images/glore.png";
import vunderland from "../images/vunderland.png";
import wochenmarkt from "../images/wochenmarkt-eppendorf.png";
import schnittstubeverde from "../images/schnittstube-verde.png";
import stinevega from "../images/stine-vega.png";
import heikevossberg from "../images/naturkosmetikum-heikevossberg.png";
import mimulus from "../images/mimulus.png";
import jeannie from "../images/jeannie.png";

const restaurants = [
  {
    id: 1,
    name: "Bodhi - vegan living",
    kategorie: "Asiatisch",
    info: "Authentische asiatische Rezepte auf veganer Basis erfreuen Veganer als auch Fleisch- liebhaber.",
    adresse: [
      { strasse: "Borgweg", hausnummer: "11", plz: "22303", ort: "Hamburg" },
    ],
    zeiten: ["So–Do: 11.30–22.30 Uhr, Fr-Sa: 11.30–23.00 Uhr "],
    telefon: ["040 27880368"],
    email: "service@bodhihamburg.de",
    website: "https://www.bodhihamburg.de/",
    image: bodhi,
  },
  {
    id: 2,
    name: "Mamalicious",
    kategorie: "Amerikanisch",
    info: "Buntes Café mit vegetarischen und veganen Gerichten wie Pancakes und Eiern sowie pflanzlicher Currywurst.",
    adresse: [
      {
        strasse: "Max-Brauer-Allee",
        hausnummer: "277",
        plz: "22769",
        ort: "Hamburg",
      },
    ],
    zeiten: ["Mo-So: 10-16 Uhr, Di: Ruhetag "],
    telefon: ["040 37026944"],
    email: "mama@mamaknows.de",
    website: "https://mamaknows.de/",
    image: mamalicious,
  },
  {
    id: 3,
    name: "Azeitona",
    kategorie: "Orientalisch",
    info: "Zwangloses libanesisches Lokal mit veganen Vorspeisentellern, Dips, Salaten und Falafel-Sandwiches.",
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
      "Mo-Do: 12-23 Uhr, Fr-Sa: 12-01.30 Uhr, ",
      "So-Fr: 12-23 Uhr, Sa: 12-0 Uhr ",
    ],
    telefon: ["040 18007371", "040 53277020"],
    email: "/",
    website: "https://azeitona.de/",
    image: azeitona,
  },
  {
    id: 4,
    name: "Vincent Vegan",
    kategorie: "Fast Food",
    info: "Burger, Wurst, Pommes und Co. Alles rein-pflanzlich, individuell und lecker. Gut für das Karma, noch besser für das Klima.",
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
      "Mo-Sa: 11-19 Uhr, So: Geschlossen, ",
      "So-Do: 11.30-21 Uhr, Fr-Sa: 11.30–22 Uhr, ",
      "Mo-Sa: 11.30-19.30 Uhr, So: Geschlossen",
    ],
    telefon: ["040 76753852", "040 30086531", "040 30377285"],
    email: "info@vincent-vegan.com",
    website: "https://vincent-vegan.com/",
    image: vincentvegan,
  },
  {
    id: 5,
    name: "raw like sushi & more",
    kategorie: "Sushi",
    info: "Warme Gerichte, Poke Bowls und leckeres Sushi – alles mit einer großen Auswahl vegetarischer und veganer Gerichte.",
    adresse: [
      {
        strasse: "Martinistraße",
        hausnummer: "5",
        plz: "20251",
        ort: "Hamburg",
      },
    ],
    zeiten: ["Do-Mo: 18-23 Uhr "],
    telefon: ["040 476731"],
    email: "more@raw-like-sushi.de",
    website: "https://www.raw-like-sushi.de/",
    image: rawlikesushi,
  },
];

/* ----------- SHOPPING ----------- */

const shops = [
  {
    id: 1,
    name: "Bio.lose",
    kategorie: "Lebensmittel & Drogerie",
    info: "Bio-Lebensmittel und Artikel ohne Einwegverpack- ungen. Hier wird nachhaltiges Einkaufen Wirklichkeit.",
    adresse: [
      {
        strasse: "Osterstraße",
        hausnummer: "81",
        plz: "20259",
        ort: "Hamburg",
      },
    ],
    zeiten: "Mo-Fr: 8-20 Uhr, Sa: 8-18 Uhr",
    telefon: "040 40195700",
    email: "info@biolose.de",
    website: "https://www.biolose.de/",
    image: biolose,
  },
  {
    id: 2,
    name: "Stückgut - Unverpackt Einkaufen",
    kategorie: "Lebensmittel & Drogerie",
    info: "Lebensmittel sowie Produkte für Haushalt und Körperhygiene - unverpackt und umweltverträglich.",
    adresse: [
      {
        strasse: "Friedensallee",
        hausnummer: "1",
        plz: "22765",
        ort: "Hamburg",
      },
      {
        strasse: "Neuer Kamp",
        hausnummer: "31/ Rindermarkthalle",
        plz: "20359",
        ort: "Hamburg",
      },
    ],
    zeiten: ["Mo-Fr: 10-19 Uhr, Sa: 11-17 Uhr", "Mo-Sa 10-20 Uhr"],
    telefon: ["040 36915961", "040 37504250"],
    email: "info@stueckgut-hamburg.de",
    website: "https://www.stueckgut-hamburg.de",
    image: stueckgut,
  },
  {
    id: 3,
    name: "glore",
    kategorie: "Mode",
    info: "Wir haben die größte Auswahl an organic & fairtrade Jeans Hamburgs. Gemeinsam finden wir deinen neuen Lieblings-Fit.",
    adresse: [
      {
        strasse: "Marktstraße",
        hausnummer: "31",
        plz: "20357",
        ort: "Hamburg",
      },
    ],
    zeiten: "Mo-Sa: 11-19 Uhr",
    telefon: "040 35777650",
    email: "karoviertel@glore-hamburg.de",
    website: "https://www.glore-hamburg.de/",
    image: glore,
  },

  {
    id: 4,
    name: "Vunderland",
    kategorie: "Mode",
    info: "Vegane Kleidung, Schuhe, Taschen, Schmuck & Accessoires, Kunst und Kosmetik. ",
    adresse: [
      {
        strasse: "Marktstraße",
        hausnummer: "137",
        plz: "20357",
        ort: "Hamburg",
      },
    ],
    zeiten: ["Mo-Sa: 11-19 Uhr"],
    telefon: "040 36916422",
    email: "vunderlandshop@gmail.com",
    website: "https://vunderland.de",
    image: vunderland,
  },
  {
    id: 5,
    name: "Bio-Wochenmarkt Eppendorf",
    kategorie: "Lebensmittel",
    info: "Produkte aus ökologischer Erzeugung sowie verantwortungsvoll produzierte Waren aus der Region.",
    adresse: [
      {
        strasse: "Marie-Jonas-Platz",
        hausnummer: "",
        plz: "20249",
        ort: "Hamburg",
      },
    ],
    zeiten: ["Di: 11-18.30 Uhr ", "Do: 11-18.30 Uhr, ", "Sa: 10-15 Uhr"],
    telefon: "040 67384181",
    email: "",
    website: "https://www.bio-wochenmarkt-regionales.de/maerkte/eppendorf/",
    image: wochenmarkt,
  },
];

/* ----------- BEAUTY----------- */

const beautyspots = [
  {
    id: 1,
    name: "Schnittstube Verde",
    kategorie: "Friseur",
    info: "Wir arbeiten mit naturnaher Haarkosmetik, die keine Wünsche offen lässt.",
    adresse: [
      {
        strasse: "Zimmerstrasse",
        hausnummer: "14",
        plz: "22085",
        ort: "Hamburg",
      },
    ],
    zeiten: ["Di-Fr: 10-19 Uhr, Sa: 10-15 Uhr"],
    telefon: "040 80797864",
    email: "info@schnittstube-verde.de",
    website: "https://schnittstube-verde.de/",
    image: schnittstubeverde,
  },
  {
    id: 2,
    name: "Stine Vega",
    kategorie: "Friseur",
    info: "Stine Vega überzeugt mit ihrer professionellen Arbeit und verwendet zudem hochwertige vegane Produkte.",
    adresse: [
      {
        strasse: "Koppel",
        hausnummer: "29",
        plz: "20099",
        ort: "Hamburg",
      },
    ],
    zeiten: ["Di-Sa: 10-18 Uhr"],
    telefon: "0176 55497445",
    email: "stine.vega.hair@gmail.com",
    website: "https://www.stinevega.com/",
    image: stinevega,
  },
  {
    id: 3,
    name: "Jeannie Nagelstudio",
    kategorie: "Kosmetik",
    info: "Healthy, Vegan und Cruelty-Free! Lass dich bei uns verwöhnen.",
    adresse: [
      {
        strasse: "Borgweg",
        hausnummer: "3",
        plz: "22303",
        ort: "Hamburg",
      },
    ],
    zeiten: ["Mo-Fr: 10-20 Uhr, Sa: 10-18 Uhr"],
    telefon: "040 60950950",
    email: "kundenservice@jeannie-nagelstudio.de",
    website: "http://jeannie-nagelstudio.de/",
    image: jeannie,
  },

  {
    id: 4,
    name: "NATURKOSMETIKUM - Heike Vossberg",
    kategorie: "Kosmetik",
    info: "Jede Haut ist empfindsam und einzigartig. Und genau so behandeln wir sie.",
    adresse: [
      {
        strasse: "Klosterallee",
        hausnummer: "108",
        plz: "20144",
        ort: "Hamburg",
      },
    ],
    zeiten: ["Di-Fr: 10-19 Uhr, Sa: 10-16.30 Uhr"],
    telefon: "040 48096305",
    email: "info@naturkosmetikum.com",
    website: "https://www.naturkosmetikum.com/",
    image: heikevossberg,
  },
  {
    id: 5,
    name: "Mimulus Naturkosmetik",
    kategorie: "Kosmetik",
    info: "MIMULUS bietet ein breites Sortiment von Naturkosmetik aus aller Welt und überzeugt mit kompetenter Beratung.",
    adresse: [
      {
        strasse: "Schanzenstraße",
        hausnummer: "39",
        plz: "20357",
        ort: "Hamburg",
      },
    ],
    zeiten: ["Mo-Fr: 10-18.30 Uhr, Sa: 11-16.30 Uhr"],
    telefon: "040 4308037 ",
    email: "info@mimulus-kosmetik.de",
    website: "https://mimulus-kosmetik.de/",
    image: mimulus,
  },
];

export { restaurants, shops, beautyspots };
