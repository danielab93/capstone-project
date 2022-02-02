import styled from "styled-components";
import FavouriteButton from "./FavouriteButton";
import ToggleButton from "./ToggleButton";

function InformationCards({
  name,
  category,
  info,
  contact,
  email,
  website,
  image,
  onAddToFavourites,
  isFavourite,
  location,
  center,
  position,
}) {
  return (
    <>
      <SingleCardContainer>
        <CardHeadline>
          {name}
          <FavouriteButton
            onAddToFavourites={onAddToFavourites}
            isFavourite={isFavourite}
            location={location}
          />
        </CardHeadline>
        <InfoContainer>
          <ul>
            <CategoryText>{category}</CategoryText>
            <InfoText>{info}</InfoText>
          </ul>
          <div>
            <CardImage src={image} alt="" />
          </div>
        </InfoContainer>
        <ToggleButton
          contact={contact}
          email={email}
          website={website}
          center={center}
          position={position}
        />
      </SingleCardContainer>
    </>
  );
}

export default InformationCards;

const SingleCardContainer = styled.section`
  background: var(--main-background);
  border-radius: 10px;
  box-shadow: 3px 3px 8px 5px var(--logo-two);
  color: var(--color-one);
  margin: 1.2rem;
  padding: 0.3rem;
`;

const CardHeadline = styled.h3`
  background-color: var(--logo-two);
  border-radius: 5px;
  color: var(--logo-one);
  margin: 0 0 0.5rem 0;
  padding: 0.2rem;
`;

const InfoContainer = styled.div`
  display: grid;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
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
  height: 160px;
  object-fit: cover;
  width: 160px;
`;
