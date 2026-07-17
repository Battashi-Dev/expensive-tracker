import {
  Box,
  Button,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { type Expense } from "./Validation";
import { useThemeColors } from "./constant";
import { FiTrash2 } from "react-icons/fi";

interface Props {
  expenses: Expense[];
  onDelete: (id: string) => void;
}
const ExpensiveList = ({ expenses, onDelete }: Props) => {
  const { text, bgTotal } = useThemeColors();

  if (expenses.length === 0) {
    return (
      <Box textAlign="center" py={10} color={text}>
        <Text fontSize="lg" fontWeight="md">
          No Expenses yet
        </Text>
        <Text fontSize="sm" opacity={0.7}>
          Add your first expense to get started
        </Text>
      </Box>
    );
  }
  return (
    <TableContainer overflowX="auto">
      <Table variant="simple" size="sm">
        <Thead color={text}>
          <Tr>
            <Th>Description</Th>
            <Th isNumeric>Amount</Th>
            <Th>Category</Th>
            <Th>
              <Text srOnly>Actions</Text>
            </Th>
            <Th>
              <Text srOnly>Actions</Text>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {expenses.map((expense) => (
            <Tr key={expense.id}>
              <Td>{expense.description}</Td>
              <Td isNumeric>${expense.amount.toFixed(2)}</Td>
              <Td>{expense.category}</Td>
              <Td>
                <Button size="xs" colorScheme="blue" borderRadius={10}>
                  Edit
                </Button>
              </Td>
              <Td>
                <IconButton
                  aria-label="Delete expense"
                  icon={<FiTrash2 />}
                  size="sm"
                  borderRadius={10}
                  onClick={() => onDelete(expense.id)}
                  colorScheme="red"
                  variant="ghost"
                ></IconButton>
              </Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr bg={bgTotal}>
            <Td>Total</Td>
            <Td isNumeric>
              $
              {expenses
                .reduce((acc, expense) => acc + expense.amount, 0)
                .toFixed(2)}
            </Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default ExpensiveList;
