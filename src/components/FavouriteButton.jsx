import styled from "styled-components";
import { useState } from "react";

function FavouriteButton({
  onAddToFavourites,
  favouriteCards,
  restaurant,
  shop,
  beauty,
}) {
  return (
    <>
      <FavouriteIcon
        onClick={() => onAddToFavourites(restaurant || shop || beauty)}
        width="20"
        height="20"
        viewBox="0 0 84 70"
        fill={
          favouriteCards?.some((favourite) => favourite.id === restaurant.id)
            ? "fill: red"
            : "fill: blue"
        }
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.5 3C11.7321 3 3 10.9527 3 20.7643C3 28.6847 6.4125 47.4825 40.0032 66.4849C40.6049 66.8218 41.2957 67 42 67C42.7043 67 43.3951 66.8218 43.9968 66.4849C77.5875 47.4825 81 28.6847 81 20.7643C81 10.9527 72.2679 3 61.5 3C50.7321 3 42 13.7662 42 13.7662C42 13.7662 33.2679 3 22.5 3Z"
          stroke=""
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/*  {favouriteCards?.some((favourite) => favourite.id === restaurant.id)
          ? "fill: red"
          : "fill: blue"} */}
      </FavouriteIcon>
    </>
  );
}

export default FavouriteButton;

const FavouriteIcon = styled.svg`
  float: right;
  vertical-align: middle;
  fill: var(--color-two);
  stroke: var(--color-three);
`;
