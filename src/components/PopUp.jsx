import styled from "styled-components";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function PopUp({ text }) {
  return (
    <Popup trigger={<ModalButton> ? </ModalButton>} modal position="right top">
      <ModalDiv>
        <p>{text}</p>
      </ModalDiv>
    </Popup>
  );
}

export default PopUp;

const ModalButton = styled.button`
  background-color: var(--color-two);
  border: none;
  border-radius: 5px;
  color: var(--logo-one);
  font-size: 1rem;
  padding: 0.2rem 0.3rem 0.2rem 0.3rem;
  position: absolute;
  right: 1.3rem;
  top: 4.95rem;
  width: fit-content;
  z-index: 10;
`;

const ModalDiv = styled.div`
  background-color: var(--main-background);
  padding: 0.5rem;
`;
