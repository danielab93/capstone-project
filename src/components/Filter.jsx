import styled from "styled-components";

function Filter({ name, value, children, options, onFilterLocations }) {
  const handleFilterCards = (event) => {
    onFilterLocations(event.target.value);
  };

  return (
    <>
      <label htmlFor={name}>{children}</label>
      <select value={value} onChange={handleFilterCards} name={name} id={name}>
        <option value="">Alle</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
}

export default Filter;
