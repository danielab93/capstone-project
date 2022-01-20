import styled from "styled-components";

function Co2Calculator({}) {
  return (
    <CalculatorContainer>
      <section>
        <p>
          Ich bin <br />
          <Input type="text" /> Km Auto gefahren
          <Input type="text" /> Km Bahn gefahren
          <Input type="text" /> Km geflogen
        </p>
        <button>Hinzufügen</button>
      </section>
      <section>
        <Table>
          <tr>
            <TableHeader>Gesamt Kilometer</TableHeader>
            <TableHeader>Co2-Ausstoß</TableHeader>
          </tr>
          <tr>
            <td>... Km Auto gefahren</td>
            <TableDataRight>... Kg Co2</TableDataRight>
          </tr>
          <tr>
            <td>... Km Bahn gefahren</td>
            <TableDataRight>... Kg Co2</TableDataRight>
          </tr>
          <tr>
            <td>... Km geflogen</td>
            <TableDataRight>... Kg Co2</TableDataRight>
          </tr>
          <tr>
            <TableHeader>Co2 Budget</TableHeader>
          </tr>
          <tr>
            <td>Dein Jahresbudget: </td>
            <TableDataRight>1.500 Kg Co2</TableDataRight>
          </tr>
          <tr>
            <td>Bereits verbraucht: </td>
            <TableDataRight>... Kg Co2</TableDataRight>
          </tr>
          <tr>
            <td>Noch übrig: </td>
            <TableDataRight>... Kg Co2</TableDataRight>
          </tr>
        </Table>
      </section>
      <button>Alles zurücksetzen</button>
    </CalculatorContainer>
  );
}

export default Co2Calculator;

const CalculatorContainer = styled.div`
  border: 3px solid var(--color-three);
  border-radius: 10px;
  margin: 0.7rem;
  padding: 1rem;
`;

const Input = styled.input`
  border: 1px solid var(--color-three);
  border-radius: 5px;
  margin: 0.2rem;
  width: 30%;
`;

const Table = styled.table`
  margin-top: 1rem;
`;

const TableHeader = styled.th`
  text-align: left;
`;

const TableDataRight = styled.td`
  text-align: right;
`;
