import { Grid, GridItem } from "@chakra-ui/react";
import ExpensiveList from "./Components/ExpensiveList";
import { useState } from "react";
import ExpensiveFilter from "./Components/ExpensiveFilter";
import NavBar from "./Components/NavBar";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Food", amount: 50, category: "Grocery" },
    { id: 2, description: "Water", amount: 1000, category: "Utilities" },
    { id: 4, description: "movie", amount: 200, category: "Entertainment" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;
  return (
    <Grid templateAreas={`"nav" "main" "foot"`} p={3}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="main">
        <ExpensiveFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />

        <ExpensiveList
          expenses={visibleExpenses}
          onDelete={(id) =>
            setExpenses(expenses.filter((expense) => expense.id !== id))
          }
        />
      </GridItem>
      <GridItem area="footer"></GridItem>
    </Grid>
  );
}

export default App;
