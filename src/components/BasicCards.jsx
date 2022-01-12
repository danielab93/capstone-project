import styled from "styled-components";

function BasicCards({ name, type, address, hours }) {
  const fullAddress = address.map((singleAddress, index) => {
    return (
      <>
        <div key={index}>
          {singleAddress.strasse} {singleAddress.hausnummer} {singleAddress.plz}{" "}
          {singleAddress.ort}
        </div>
      </>
    );
  });

  return (
    <>
      <CardContainer>
        <CardHeadline>{name}</CardHeadline>
        <ul>
          <li>Art: {type}</li>
          <li>Adresse: {fullAddress}</li>
          <li>Öffnungszeiten: {hours}</li>
        </ul>
      </CardContainer>
    </>
  );
}

export default BasicCards;

const CardContainer = styled.div`
  background-image: linear-gradient(
    180deg,
    var(--main-background),
    var(--logo-two)
  );
  color: var(--logo-one);
  border: 3px solid var(--logo-one);
  border-radius: 10px;
  margin: 1.2rem;
  padding: 0.3rem;
`;

const CardHeadline = styled.h3`
  margin: 0 0 0.5rem 0;
`;
