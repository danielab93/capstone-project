function isCategoryEmpty(category) {
  return category === "";
}

function showAllLocations(locations) {
  setFilteredLocations(locations);
}

function filterLocationsByCategory(category, locations) {
  const updatedFilteredLocations = locations.filter(
    (location) => location.kategorie === category
  );
  return updatedFilteredLocations;
}

function filterLocations(category, locations) {
  if (isCategoryEmpty(category)) {
    showAllLocations(locations);
  } else {
    return filterLocationsByCategory(category, locations);
  }
}

export {
  isCategoryEmpty,
  showAllLocations,
  filterLocationsByCategory,
  filterLocations,
};
