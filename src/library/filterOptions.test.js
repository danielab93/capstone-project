import { filterOptions } from "./filterOptions";

describe("unique filter options", () => {
  it("should return an array with unique items inside in alphabetical order", () => {
    const locations = [
      { name: "Kosmetikstudio Schiller", kategorie: "Kosmetik" },
      { name: "Kosmetiksalon Kirst", kategorie: "Kosmetik" },
      { name: "Friseursalon Blase", kategorie: "Friseur" },
    ];

    expect(filterOptions(locations)).toEqual(["Friseur", "Kosmetik"]);
  });
});
