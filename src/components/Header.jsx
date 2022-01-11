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
`;

const LogoImage = styled.img`
  margin-top: 0.5rem;
  justify-self: center;
  display: block;
  width: auto;
  height: 50px;
`;
