import FooterNavbar from "../components/FooterNavbar";
import Header from "../components/Header";
import favoritenheader from "../images/Favoriten.png";
import InformationCards from "../components/InformationCards";

function Favourites({ onAddToFavourites, favouriteCards }) {
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
      restaurant={favouriteCard}
    />
  ));
  return (
    <>
      <Header image={favoritenheader} altText="Favoriten Header" />
      <main>
        <h2>Favoriten</h2>
        <section>{allFavourites}</section>
      </main>
      <FooterNavbar />
    </>
  );
}

export default Favourites;
