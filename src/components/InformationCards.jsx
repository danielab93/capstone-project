import styled from "styled-components";
import ToggleButton from "./ToggleButton";

function BasicCards({ name, category, info, contact, email, website, image }) {
  return (
    <>
      <SingleCardContainer>
        <CardHeadline>{name}</CardHeadline>
        <InfoContainer>
          <ul>
            <CategoryText>{category}</CategoryText>
            <InfoText>{info}</InfoText>
          </ul>
          <div>
            <CardImage src={image} alt="" />
          </div>
        </InfoContainer>
        <ToggleButton contact={contact} email={email} website={website} />
      </SingleCardContainer>
    </>
  );
}

export default BasicCards;

const SingleCardContainer = styled.section`
  background: var(--main-background);
  color: var(--color-one);
  border: 3px solid var(--color-three);
  border-radius: 10px;
  margin: 1.2rem;
  padding: 0.3rem;
`;

const CardHeadline = styled.h3`
  background-color: var(--logo-two);
  color: var(--logo-one);
  border-radius: 5px;
  margin: 0 0 0.5rem 0;
  padding: 0.2rem;
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const CategoryText = styled.li`
  font-weight: 900;
`;

const InfoText = styled.li`
  font-size: 0.9rem;
`;

const CardImage = styled.img`
  border-radius: 5px;
  display: block;
  float: right;
  width: 160px;
  height: 160px;
  object-fit: cover;
`;
