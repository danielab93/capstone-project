import { useState } from "react";
import styled from "styled-components";
import Map from "./Map";

function ToggleButton({ contact, email, website, center, position }) {
  const [showMore, setShowMore] = useState(false);

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  const contactData = contact.map((singleContact, index) => {
    return (
      <SingleContactContainer key={index}>
        <li>
          <ContactTitle> Standort: </ContactTitle> {singleContact.standort}
        </li>
        <li>
          <ContactTitle> Adresse: </ContactTitle>
          {singleContact.strasse} {singleContact.hausnummer}
          {", "}
          {singleContact.plz} {singleContact.ort}
        </li>
        <li>
          <ContactTitle>Öffnungszeiten: </ContactTitle>
          {singleContact.zeiten}
        </li>

        <li>
          <svg
            width="20"
            height="20"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M43.975 26L29.8792 9.72917C28.2542 7.85417 25.275 7.8625 23.3875 9.75417L11.7959 21.3667C8.34587 24.8208 7.35837 29.95 9.3542 34.0625C21.2776 58.7499 41.1877 78.6879 65.8584 90.6458C69.9667 92.6417 75.0917 91.6542 78.5417 88.2L90.2417 76.4792C92.1375 74.5833 92.1417 71.5875 90.25 69.9625L73.9167 55.9417C72.2084 54.475 69.5542 54.6667 67.8417 56.3833L62.1584 62.075C61.8674 62.3799 61.4844 62.581 61.0682 62.6472C60.6519 62.7134 60.2254 62.6412 59.8542 62.4417C50.5644 57.0921 42.8583 49.376 37.5209 40.0792C37.321 39.7073 37.2486 39.2801 37.3148 38.8631C37.3811 38.4462 37.5823 38.0625 37.8875 37.7708L43.5542 32.1C45.2709 30.375 45.4584 27.7083 43.975 25.9958V26Z"
              fill=""
              stroke=""
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {singleContact.telefon}
        </li>
      </SingleContactContainer>
    );
  });

  return (
    <>
      <Button onClick={handleMoreClick}>
        {showMore ? "Weniger" : "Mehr"} Infos
      </Button>
      {showMore && (
        <ContactContainer>
          <ul>
            {contactData}
            <EmailWebContainer>
              <li>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 100 100"
                  fill=""
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M50 8.33334C27 8.33334 8.33337 27 8.33337 50C8.33337 73 27 91.6667 50 91.6667H70.8334V83.3333H50C31.9167 83.3333 16.6667 68.0833 16.6667 50C16.6667 31.9167 31.9167 16.6667 50 16.6667C68.0834 16.6667 83.3334 31.9167 83.3334 50V55.9583C83.3334 59.25 80.375 62.5 77.0834 62.5C73.7917 62.5 70.8334 59.25 70.8334 55.9583V50C70.8334 38.5 61.5 29.1667 50 29.1667C38.5 29.1667 29.1667 38.5 29.1667 50C29.1667 61.5 38.5 70.8333 50 70.8333C55.75 70.8333 61 68.5 64.75 64.7083C67.4584 68.4167 72.125 70.8333 77.0834 70.8333C85.2917 70.8333 91.6667 64.1667 91.6667 55.9583V50C91.6667 27 73 8.33334 50 8.33334ZM50 62.5C43.0834 62.5 37.5 56.9167 37.5 50C37.5 43.0833 43.0834 37.5 50 37.5C56.9167 37.5 62.5 43.0833 62.5 50C62.5 56.9167 56.9167 62.5 50 62.5Z"
                    fill=""
                    stroke=""
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {email}
              </li>
              <li>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 100 100"
                  fill=""
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M68.1667 58.3333C68.5 55.5833 68.75 52.8333 68.75 50C68.75 47.1667 68.5 44.4167 68.1667 41.6667H82.25C82.9167 44.3333 83.3334 47.125 83.3334 50C83.3334 52.875 82.9167 55.6667 82.25 58.3333H68.1667ZM60.7917 81.5C63.2917 76.875 65.2084 71.875 66.5417 66.6667H78.8334C74.7966 73.6178 68.3922 78.8833 60.7917 81.5V81.5ZM59.75 58.3333H40.25C39.8334 55.5833 39.5834 52.8333 39.5834 50C39.5834 47.1667 39.8334 44.375 40.25 41.6667H59.75C60.125 44.375 60.4167 47.1667 60.4167 50C60.4167 52.8333 60.125 55.5833 59.75 58.3333ZM50 83.1667C46.5417 78.1667 43.75 72.625 42.0417 66.6667H57.9584C56.25 72.625 53.4584 78.1667 50 83.1667ZM33.3334 33.3333H21.1667C25.1619 26.3634 31.5617 21.0895 39.1667 18.5C36.6667 23.125 34.7917 28.125 33.3334 33.3333ZM21.1667 66.6667H33.3334C34.7917 71.875 36.6667 76.875 39.1667 81.5C31.5776 78.8819 25.1869 73.6155 21.1667 66.6667V66.6667ZM17.75 58.3333C17.0834 55.6667 16.6667 52.875 16.6667 50C16.6667 47.125 17.0834 44.3333 17.75 41.6667H31.8334C31.5 44.4167 31.25 47.1667 31.25 50C31.25 52.8333 31.5 55.5833 31.8334 58.3333H17.75ZM50 16.7917C53.4584 21.7917 56.25 27.375 57.9584 33.3333H42.0417C43.75 27.375 46.5417 21.7917 50 16.7917V16.7917ZM78.8334 33.3333H66.5417C65.2376 28.1727 63.3066 23.1912 60.7917 18.5C68.4584 21.125 74.8334 26.4167 78.8334 33.3333ZM50 8.33334C26.9584 8.33334 8.33337 27.0833 8.33337 50C8.33337 61.0507 12.7232 71.6488 20.5373 79.4628C24.4064 83.3319 28.9997 86.401 34.0549 88.495C39.1101 90.5889 44.5283 91.6667 50 91.6667C61.0507 91.6667 71.6488 87.2768 79.4628 79.4628C87.2768 71.6488 91.6667 61.0507 91.6667 50C91.6667 44.5283 90.589 39.1101 88.495 34.0549C86.4011 28.9996 83.3319 24.4063 79.4628 20.5372C75.5937 16.6681 71.0004 13.599 65.9452 11.505C60.89 9.41108 55.4718 8.33334 50 8.33334V8.33334Z"
                    fill=""
                    stroke=""
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <a href={website}>Webseite besuchen</a>
              </li>
            </EmailWebContainer>
          </ul>
          <Map center={center} position={position} />
        </ContactContainer>
      )}
    </>
  );
}

export default ToggleButton;

const SingleContactContainer = styled.div`
  margin-top: 1rem;
`;

const EmailWebContainer = styled.div`
  margin-top: 1rem;
`;

const Button = styled.button`
  background-color: var(--color-two);
  color: var(--logo-one);
  border: none;
  border-radius: 5px;
  font-size: 0.85rem;
  margin-top: 0.2rem;
  padding: 0.2rem;
  width: 50%;
`;

const ContactContainer = styled.div`
  font-size: 0.9rem;
  margin-top: 0.5rem;

  svg {
    fill: var(--logo-two);
    margin-right: 0.2rem;
    stroke: var(--logo-one);
    vertical-align: middle;
  }
`;

const ContactTitle = styled.span`
  color: var(--logo-one);
  font-weight: 900;
`;
