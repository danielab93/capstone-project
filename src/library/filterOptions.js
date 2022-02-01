const filterOptions = (locations) =>
  [...new Set(locations.map((location) => location.kategorie))].sort();

export { filterOptions };
