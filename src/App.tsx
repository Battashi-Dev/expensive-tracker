import { Box, Stack } from "@chakra-ui/react";
import ExpensiveList from "./Components/ExpensiveList";
import { useState } from "react";
import ExpensiveFilter from "./Components/ExpensiveFilter";
import NavBar from "./Components/NavBar";
import ExpensiveForm from "./Components/ExpensiveForm";
import useExpense from "./Components/Hooks/useExpense";
import { useThemeColors } from "./Components/constant";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const { expenses, addExpense, removeExpense } = useExpense();
  const { bg, cardBg } = useThemeColors();

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;
  return (
    <Box p={2} bg={bg} minH="100vh">
      <NavBar />
      <Box  mx="auto" px={4} py={6}>
        <Stack spacing={6}>
          <Box bg={cardBg} p={6} borderRadius="lg" boxShadow="sm">
            <ExpensiveForm
              onSubmit={addExpense}
              defaultValues={{}}
              submitLabel="Submit"
            />
          </Box>
          
            <ExpensiveFilter
              onSelectCategory={(category) => setSelectedCategory(category)}
            />
         
          <ExpensiveList expenses={visibleExpenses} onDelete={removeExpense} />
        </Stack>
      </Box>
    </Box>
  );
}

export default App;
