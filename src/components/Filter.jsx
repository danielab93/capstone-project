import styled from "styled-components";

function Filter({
  name,
  value,
  children,
  options,
  onFilterLocations,
  locations,
}) {
  const handleFilterCards = (event) => {
    onFilterLocations(event.target.value, locations);
  };

  return (
    <>
      <label htmlFor={name}>{children}</label>
      <Select value={value} onChange={handleFilterCards} name={name} id={name}>
        <option value="">Alle</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </>
  );
}

export default Filter;

const Select = styled.select`
  background-color: var(--color-two);
  border: none;
  border-radius: 6px;
  color: var(--logo-one);
  font-size: 1rem;
  margin: 1.2rem 0rem 0rem 1.3rem;
  padding: 0.2rem;
`;
