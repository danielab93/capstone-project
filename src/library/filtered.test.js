import { isCategoryEmpty, filterLocationsByCategory } from "./filtered";

describe("is category empty", () => {
  it("should return true if NO category is selected", () => {
    const category = "";

    expect(isCategoryEmpty(category)).toBe(true);
  });
  it("should return false if a category is selected", () => {
    const category = "asiatisch";

    expect(isCategoryEmpty(category)).toBe(false);
  });
});

describe("filter locations by selected category", () => {
  it("should return a new array in which only the selected categories are included", () => {
    const locations = [
      { name: "Vegan Burger spot", kategorie: "Fast Food" },
      { name: "Very Vegan Sushi", kategorie: "Sushi" },
    ];
    const category = [{ name: "Very Vegan Sushi", kategorie: "Sushi" }];
    const result = filterLocationsByCategory(category, locations);

    expect(result).toEqual([{ name: "Very Vegan Sushi", kategorie: "Sushi" }]);
  });
});
