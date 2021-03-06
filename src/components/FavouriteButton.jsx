import styled from "styled-components";

function FavouriteButton({ onAddToFavourites, isFavourite, location }) {
  return (
    <>
      <FavouriteIcon
        onClick={() => onAddToFavourites(location)}
        width="20"
        height="20"
        viewBox="0 0 84 70"
        fill={isFavourite ? "var(--color-three)" : "var(--main-background)"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.5 3C11.7321 3 3 10.9527 3 20.7643C3 28.6847 6.4125 47.4825 40.0032 66.4849C40.6049 66.8218 41.2957 67 42 67C42.7043 67 43.3951 66.8218 43.9968 66.4849C77.5875 47.4825 81 28.6847 81 20.7643C81 10.9527 72.2679 3 61.5 3C50.7321 3 42 13.7662 42 13.7662C42 13.7662 33.2679 3 22.5 3Z"
          stroke={isFavourite ? "" : "var(--color-three)"}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </FavouriteIcon>
    </>
  );
}

export default FavouriteButton;

const FavouriteIcon = styled.svg`
  fill: ${(props) => props.fill};
  float: right;
  margin-right: -0.2rem;
  stroke: ${(props) => props.stroke};
  vertical-align: middle;
  width: 2rem;
`;
