import FooterNavbar from "../components/FooterNavbar";
import Header from "../components/Header";
import favoritenheader from "../images/Favoriten.png";
import InformationCards from "../components/InformationCards";
import Filter from "../components/Filter";
import { filterOptions } from "../library/filterOptions";
import { useEffect } from "react";

function Favourites({
  onAddToFavourites,
  favouriteCards,
  onFilterLocations,
  filteredLocations,
  onResetfilter,
}) {
  useEffect(() => {
    onResetfilter();
  }, []);
  const filteredFavourites =
    filteredLocations.length > 0 ? filteredLocations : favouriteCards;

  const allFavourites = filteredFavourites?.map((favouriteCard) => (
    <InformationCards
      key={favouriteCard?.id}
      name={favouriteCard?.name}
      category={favouriteCard?.kategorie}
      info={favouriteCard?.info}
      contact={favouriteCard?.kontakt}
      email={favouriteCard?.email}
      website={favouriteCard?.website}
      image={favouriteCard?.image}
      position={favouriteCard?.position}
      center={favouriteCard?.center}
      onAddToFavourites={onAddToFavourites}
      isFavourite={true}
      location={favouriteCard}
    />
  ));
  return (
    <>
      <Header image={favoritenheader} altText="Favoriten Header" />
      <main>
        <section>{allFavourites}</section>
      </main>
      <FooterNavbar />
    </>
  );
}

export default Favourites;
