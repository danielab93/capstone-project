import { alreadyInFavourites, removeFromFavourites } from "./favourites";

describe("is card already on the favourites list", () => {
  it("should return false if the card is not on the favourites list", () => {
    const favouriteCards = [{ name: "Gasthaus zur Post", id: 1 }];
    const favouriteCardToAdd = { name: "Gasthaus zur Post", id: 1 };

    expect(alreadyInFavourites(favouriteCards, favouriteCardToAdd)).toBe(true);
  });

  it("should return false if card is not yet on the favourites list", () => {
    const favouriteCards = [];
    const favouriteCardToAdd = { name: "Gasthaus zur Post", id: 1 };

    expect(alreadyInFavourites(favouriteCards, favouriteCardToAdd)).toBe(false);
  });
});

describe("Remove Card from favourites", () => {
  it("should return a new array in which the favourited card is not included anymore", () => {
    const favouriteCards = [
      { name: "Gasthaus zur Post", id: 1 },
      { name: "Tajmahal", id: 2 },
    ];
    const favouriteCardToRemove = { name: "Tajmahal", id: 2 };
    const result = removeFromFavourites(favouriteCards, favouriteCardToRemove);

    expect(result).toEqual([{ name: "Gasthaus zur Post", id: 1 }]);
  });
});
