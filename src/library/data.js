const restaurants = [
  {
    id: 1,
    name: "Bodhi - vegan living",
    art: "Asiatisch",
    adresse: [
      { strasse: "Borgweg", hausnummer: "11", plz: "22303", ort: "Hamburg" },
    ],
    zeiten: "So – Do: 11.30 – 22.30 Uhr, Fr + Sa: 11.30 – 23.00 Uhr",
    telefon: "040 27880368",
    email: "service@bodhihamburg.de",
    website: "https://www.bodhihamburg.de/",
    image:
      "https://static.lieferando.de/images/restaurants/de/O7RNR0PN/logo_465x320.png",
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
    zeiten: "Mo - So: 10 - 16 Uhr, Dienstag: Ruhetag",
    telefon: "040 37026944",
    email: "mama@mamaknows.de",
    website: "https://mamaknows.de/",
    image: "https://prinz.de/wp-content/uploads/2013/10/mamalicious-1.jpg",
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
      "Mo - Do: 12 - 23 Uhr, Fr - Sa: 12 - 01.30 Uhr",
      "So - Fr: 12 - 23 Uhr, Sa: 12 - 0 Uhr",
    ],
    telefon: "040 18007371",
    email: "",
    website: "https://azeitona.de/",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-p/07/bd/79/c9/azeitona.jpg",
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
      "Mo - Sa: 11 - 19 Uhr, So: Geschlossen",
      "So - Do: 11.30 - 21 Uhr, Fr - Sa: 11.30 – 22 Uhr",
      "Mo - Sa: 11.30 - 19.30 Uhr, So: Geschlossen",
    ],
    telefon: ["040 76753852", "040 30086531", "040 30377285"],
    email: "info@vincent-vegan.com",
    website: "https://vincent-vegan.com/",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/1c/d9/c9/83/vincent-vegan.jpg",
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
    zeiten: "Do - Mo: 18 - 23 Uhr",
    telefon: "040 476731",
    email: "more@raw-like-sushi.de",
    website: "https://www.raw-like-sushi.de/",
    image:
      "https://www.raw-like-sushi.de/images/image_slider/home/IMG_0735-bm-1900.jpg",
  },
];

const shops = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    imageId: "MK3eW3A",
  },
];

const beautyspots = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    imageId: "MK3eW3A",
  },
];

export { restaurants, shops, beautyspots };
