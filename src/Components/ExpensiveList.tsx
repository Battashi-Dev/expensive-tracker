import { Button, Table, Tbody, Td, Thead, Tr } from "@chakra-ui/react";

interface Expenses {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expenses[];
  onDelete: (id: number) => void;
}
const ExpensiveList = ({ expenses, onDelete }: Props) => {
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
            <Td>
              <Button onClick={() => onDelete(expense.id)} colorScheme="red" variant="outline">
                Delete
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default ExpensiveList;
