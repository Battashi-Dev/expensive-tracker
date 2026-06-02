import { Grid, GridItem } from "@chakra-ui/react";
import ExpensiveList from "./Components/ExpensiveList";
import { useState } from "react";
import ExpensiveFilter from "./Components/ExpensiveFilter";

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
    <Grid p={3}>
      <GridItem>
        <ExpensiveFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </GridItem>
      <GridItem>
        <ExpensiveList
          expenses={visibleExpenses}
          onDelete={(id) =>
            setExpenses(expenses.filter((expense) => expense.id !== id))
          }
        />
      </GridItem>
    </Grid>
  );
}

export default App;
