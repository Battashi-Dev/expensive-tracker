import { Button, Table, Tbody, Td, Tfoot, Thead, Tr } from "@chakra-ui/react";
import { type Expense } from "./Validation";

interface Props {
  expenses: Expense[];
  onDelete: (id: string) => void;
}
const ExpensiveList = ({ expenses, onDelete }: Props) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Td>Description</Td>
          <Td>Amount</Td>
          <Td>Category</Td>
        </Tr>
      </Thead>
      <Tbody>
        {expenses.map((expense) => (
          <Tr key={expense.id}>
            <Td>{expense.description}</Td>
            <Td>{expense.amount}</Td>
            <Td>{expense.category}</Td>
            <Td>
              <Button
                onClick={() => onDelete(expense.id)}
                colorScheme="red"
                variant="outline"
              >
                Delete
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
      <Tfoot>
        <Tr>
          <Td>Total</Td>
          <Td>
            {expenses
              .reduce((acc, expense) => acc + expense.amount, 0)
              .toFixed(2)}
          </Td>
          <Td></Td>
          <Td></Td>
        </Tr>
      </Tfoot>
    </Table>
  );
};

export default ExpensiveList;
