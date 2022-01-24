import styled from "styled-components";

function NumberInput({
  name,
  value,
  placeholder,
  onNumberInputChange,
  children,
}) {
  function handleChange(event) {
    const parsedValue = parseFloat(event.target.value);
    onNumberInputChange(event.target.name, parsedValue);
  }

  return (
    <>
      <label htmlFor={name}>{children}</label>
      <Input type="number" name={name} value={value} onChange={handleChange} />
    </>
  );
}

export default NumberInput;

const Input = styled.input`
  border: 1px solid var(--color-three);
  border-radius: 5px;
  margin: 0.2rem;
  width: 30%;
`;
