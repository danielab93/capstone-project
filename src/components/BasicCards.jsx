import styled from "styled-components";

function BasicCards({ name, art, adresse, zeiten }) {
  return (
    <>
      <CardContainer>
        <h3>{name}</h3>
        <ul>
          <li>Art: {art}</li>
          <li>Adresse: {adresse}</li>
          <li>Öffnungszeiten: {zeiten}</li>
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
