import styled from "styled-components";
import { useState } from "react";

function ToggleButton({ address, hours, phone, email, website }) {
  const [showMore, setShowMore] = useState(false);

  function handleMoreClick() {
    setShowMore(!showMore);
  }
  const onlyPhone = phone.map((singleNumber) => {
    return <>{singleNumber}</>;
  });

  const onlyHours = hours.map((singleHour) => {
    return <>{singleHour}</>;
  });

  const adressHours = address.map((singleAddress) => {
    return (
      <>
        <ul>
          <li>
            {singleAddress.strasse} {singleAddress.hausnummer}
            {", "}
            {singleAddress.plz} {singleAddress.ort}
          </li>
          <li>
            Öffnungszeiten: <br />
            {onlyHours}
          </li>
          <li>Telefon: {onlyPhone}</li>
          <br />
        </ul>
      </>
    );
  });

  return (
    <>
      <button onClick={handleMoreClick}>
        {showMore ? "Weniger" : "Mehr"} Informationen
      </button>
      {showMore && (
        <section>
          Standort(e): <br />
          {adressHours}
          <li>Email: {email}</li>
          <li>Website: </li>
          <a href={website}>Webseite besuchen</a>
        </section>
      )}
    </>
  );
}

export default ToggleButton;
