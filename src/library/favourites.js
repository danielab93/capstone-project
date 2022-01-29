function alreadyInFavourites(favouriteCards, favouriteCardToAdd) {
  return favouriteCards.some(
    (everyFavouriteCard) => everyFavouriteCard?.id === favouriteCardToAdd.id
  ); // return true or false
}

function removeFromFavourites(favouriteCards, favouriteCardToRemove) {
  const updatedFavouriteCards = favouriteCards.filter(
    (everyFavouriteCard) => everyFavouriteCard?.id !== favouriteCardToRemove.id
  );
  return updatedFavouriteCards;
}

function addCardToFavourites(favouriteCards, favouriteCardToAdd) {
  if (alreadyInFavourites(favouriteCards, favouriteCardToAdd)) {
    return removeFromFavourites(favouriteCards, favouriteCardToAdd);
  } else {
    return [...favouriteCards, favouriteCardToAdd];
  }
}

export { alreadyInFavourites, removeFromFavourites, addCardToFavourites };
