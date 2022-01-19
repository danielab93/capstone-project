import FooterNavbar from "../components/FooterNavbar";
import Header from "../components/Header";
import favoritenheader from "../images/Favoriten.png";
import InformationCards from "../components/InformationCards";
import Filter from "../components/Filter";
import { filterOptions } from "../library/filterOptions";
import { useEffect } from "react";

function Favourites({ onAddToFavourites, favouriteCards, onFilterLocations }) {
  const allFavourites = favouriteCards?.map((favouriteCard) => (
    <InformationCards
      key={favouriteCard?.id}
      name={favouriteCard?.name}
      category={favouriteCard?.kategorie}
      info={favouriteCard?.info}
      contact={favouriteCard?.kontakt}
      email={favouriteCard?.email}
      website={favouriteCard?.website}
      image={favouriteCard?.image}
      onAddToFavourites={onAddToFavourites}
      isFavourite={true}
      location={favouriteCard}
    />
  ));
  return (
    <>
      <Header image={favoritenheader} altText="Favoriten Header" />
      <main>
        <Filter
          name="category"
          value={favouriteCards.kategorie}
          options={filterOptions(favouriteCards)}
          onFilterLocations={onFilterLocations}
          locations={favouriteCards}
        />
        <section>{allFavourites}</section>
      </main>
      <FooterNavbar />
    </>
  );
}

export default Favourites;
