const filterOptions = (locations) => [
  ...new Set(locations.map((location) => location.kategorie)),
];

export { filterOptions };
