import { Box, Stack } from "@chakra-ui/react";
import ExpensiveList from "./Components/ExpensiveList";
import { useState } from "react";
import ExpensiveFilter from "./Components/ExpensiveFilter";
import NavBar from "./Components/NavBar";
import ExpensiveForm from "./Components/ExpensiveForm";
import useExpense from "./Components/Hooks/useExpense";
import { useThemeColors } from "./Components/constant";
import type { Expense } from "./Components/Validation";

function App() {
  const [editId, setEditId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const { expenses, addExpense, removeExpense, editExpense } = useExpense();
  const { bg, cardBg } = useThemeColors();

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  const editingExpense = expenses.find((e) => e.id === editId);

  const handleSubmit = (data: Omit<Expense, "id">) => {
    if (editId) {
      editExpense(editId, data);
      setEditId(null);
    } else {
      addExpense(data);
    }
  };
  return (
    <main>
    <Box p={2} bg={bg} minH="100vh">
      <NavBar />
      <Box mx="auto" px={4} py={6}>
        <Stack spacing={6}>
          <Box bg={cardBg} p={6} borderRadius="lg" boxShadow="sm">
            <ExpensiveForm
              key={editId ?? "new"}
              onSubmit={handleSubmit}
              defaultValues={editingExpense ?? {}}
              submitLabel="Submit"
            />
          </Box>

          <ExpensiveFilter
            onSelectCategory={(category) => setSelectedCategory(category)}
          />

          <ExpensiveList
            expenses={visibleExpenses}
            onDelete={removeExpense}
            onEdit={(id) => setEditId(id)}
          />
        </Stack>
      </Box>
    </Box>
    </main>
  );
}

export default App;
