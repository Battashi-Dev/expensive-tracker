import { Grid, GridItem } from "@chakra-ui/react";
import ExpensiveList from "./Components/ExpensiveList";
import { useState } from "react";
import ExpensiveFilter from "./Components/ExpensiveFilter";
import NavBar from "./Components/NavBar";
import ExpensiveForm from "./Components/ExpensiveForm";
import useExpense from "./Components/Hooks/useExpense";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const { expenses, addExpense, removeExpense } = useExpense();

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;
  return (
    <Grid templateAreas={`"nav" "main" "foot"`} p={3}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="main">
        <ExpensiveForm
          onSubmit={addExpense}
          defaultValues={{}}
          submitLabel="Submit"
        />
        <ExpensiveFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />

        <ExpensiveList expenses={visibleExpenses} onDelete={removeExpense} />
      </GridItem>
      <GridItem area="footer"></GridItem>
    </Grid>
  );
}

export default App;
