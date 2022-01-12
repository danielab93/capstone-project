import styled from "styled-components";
import { Routes, Route, NavLink, Link } from "react-router-dom";

function Header({ image, altText }) {
  return (
    <StyledHeader>
      <Link to="/">
        <LogoImage src={image} alt={altText} />
      </Link>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  background: var(--main-background);
  border-bottom: 2px solid var(--logo-one);
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 20;
  overflow: hidden;
`;

const LogoImage = styled.img`
  margin-top: 0.5rem;
  justify-self: center;
  display: block;
  width: auto;
  height: 50px;
`;
