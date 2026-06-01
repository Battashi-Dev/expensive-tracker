import { Table, Tbody, Td, Thead, Tr } from "@chakra-ui/react";

interface Expenses {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expenses[];
}
const ExpensiveList = ({ expenses }: Props) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Td>Description</Td>
          <Td>Amount</Td>
          <Td>Category</Td>
          <Td></Td>
        </Tr>
      </Thead>
      <Tbody>
        {expenses.map((expense) => (
          <Tr key={expense.id}>
            <Td>{expense.description}</Td>
            <Td>{expense.amount}</Td>
            <Td>{expense.category}</Td>
            <Td></Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default ExpensiveList;
