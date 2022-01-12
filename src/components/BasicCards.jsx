import styled from "styled-components";

function BasicCards({ name, type, adress, hours }) {
  const streetName = adress.map((onlyStreet) => onlyStreet.strasse);
  const houseNumber = adress.map((onlyNumber) => onlyNumber.hausnummer);
  const postCode = adress.map((onlyPostcode) => onlyPostcode.plz);
  const city = adress.map((onlyCity) => onlyCity.ort);
  const fullAddress = streetName + houseNumber;
  console.log(streetName);

  return (
    <>
      <CardContainer>
        <h3>{name}</h3>
        <ul>
          <li>Art: {type}</li>
          <li>
            Adresse: {streetName.join(", ")} {houseNumber.join(" ")} {postCode}{" "}
            {city}
          </li>
          <li>Öffnungszeiten: {hours}</li>
        </ul>
      </CardContainer>
    </>
  );
}

export default BasicCards;

const CardContainer = styled.div`
  background-color: var(--main-background);
  color: var(--logo-one);
  border: 3px solid var(--logo-one);
  border-radius: 10px;
  margin: 1.2rem;
  padding: 0.3rem;
`;
