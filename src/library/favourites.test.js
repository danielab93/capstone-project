import {
  alreadyInFavourites,
  removeFromFavourites,
  addCardToFavourites,
} from "./favourites";

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

describe("add card to the favourites list", () => {
  it("should return a new array that includes the already favourited cards plus the newly favourited card if card is not already part of the favourites list", () => {
    const favouriteCards = [
      { name: "Gasthaus zur Post", kategorie: "Bayerisch", id: 1 },
      { name: "Taj Mahal", kategorie: "Indisch", id: 2 },
    ];
    const favouriteCardToAdd = {
      name: "Poseidon",
      kategorie: "Griechisch",
      id: 3,
    };
    const resultingArray = [
      { name: "Gasthaus zur Post", kategorie: "Bayerisch", id: 1 },
      { name: "Taj Mahal", kategorie: "Indisch", id: 2 },
      {
        name: "Poseidon",
        kategorie: "Griechisch",
        id: 3,
      },
    ];
    expect(addCardToFavourites(favouriteCards, favouriteCardToAdd)).toEqual(
      resultingArray
    );
  });
  it("should not return an array that includes two or more identic cards", () => {
    const favouriteCards = [
      { name: "Gasthaus zur Post", kategorie: "Bayerisch", id: 1 },
      { name: "Taj Mahal", kategorie: "Indisch", id: 2 },
    ];
    const favouriteCardToAdd = {
      name: "Poseidon",
      kategorie: "Griechisch",
      id: 3,
    };

    expect(
      addCardToFavourites(favouriteCards, favouriteCardToAdd)
    ).toHaveLength(3);
  });
});
