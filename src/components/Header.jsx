import styled from "styled-components";

function Header({ image, altText }) {
  return (
    <StyledHeader>
      <LogoImage src={image} alt={altText} />
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  background: var(--main-background);
  border-bottom: 2px solid var(--logo-one);
  display: flex;
  justify-content: center;
  margin-top: -1rem;
`;

const LogoImage = styled.img`
  justify-self: center;
  display: block;
  width: auto;
  height: 50px;
`;
