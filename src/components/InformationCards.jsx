import styled from "styled-components";
import { restaurants } from "../library/data";

function BasicCards({
  name,
  type,
  address,
  hours,
  phone,
  email,
  website,
  image,
}) {
  const separateHours = hours.map((singleHour) => {
    return <>{singleHour}</>;
  });

  const fullAddress = address.map((singleAddress) => {
    return (
      <>
        <ul>
          <li>
            Adresse: <br />
            {singleAddress.strasse} {singleAddress.hausnummer}
            {", "}
          </li>
          <li>
            {" "}
            {singleAddress.plz} {singleAddress.ort}{" "}
          </li>
          <li>Öffnungszeiten: {separateHours}</li>
        </ul>
      </>
    );
  });

  return (
    <>
      <CardContainer>
        <CardHeadline>{name}</CardHeadline>
        <ul>
          <li>Art: {type}</li>
        </ul>
        <section>{fullAddress}</section>
      </CardContainer>
    </>
  );
}

export default BasicCards;

const CardContainer = styled.div`
  background: var(--main-background);
  color: var(--color-one);
  border: 3px solid var(--color-three);
  border-radius: 10px;
  margin: 1.2rem;
  padding: 0.3rem;
`;

const CardHeadline = styled.h3`
  background-color: var(--logo-two);
  border-radius: 5px;
  margin: 0 0 0.5rem 0;
  padding: 0.2rem;
`;
