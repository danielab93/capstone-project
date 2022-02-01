function isCategoryEmpty(category) {
  return category === "";
}

function filterLocationsByCategory(category, locations) {
  const updatedFilteredLocations = locations.filter(
    (location) => location.kategorie === category
  );
  return updatedFilteredLocations;
}

function filterLocations(category, locations) {
  if (isCategoryEmpty(category)) {
    return locations;
  } else {
    return filterLocationsByCategory(category, locations);
  }
}

export { isCategoryEmpty, filterLocationsByCategory, filterLocations };
