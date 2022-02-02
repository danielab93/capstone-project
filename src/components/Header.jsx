import { Link } from "react-router-dom";
import styled from "styled-components";

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
  overflow: hidden;
  position: sticky;
  top: 0;
  z-index: 20;
`;

const LogoImage = styled.img`
  display: block;
  height: 50px;
  justify-self: center;
  margin-top: 0.5rem;
  width: auto;
`;
