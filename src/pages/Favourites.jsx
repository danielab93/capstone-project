import FooterNavbar from "../components/FooterNavbar";
import Header from "../components/Header";

import favoritenheader from "../images/Favoriten.png";

function Favourites() {
  return (
    <>
      <Header image={favoritenheader} altText="Favoriten Header" />
      <main>
        <h2>Favoriten</h2>
      </main>
      <FooterNavbar />
    </>
  );
}

export default Favourites;
