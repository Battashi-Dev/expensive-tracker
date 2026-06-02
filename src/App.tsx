import { Grid, GridItem } from "@chakra-ui/react";
import ExpensiveList from "./Components/ExpensiveList";
import { useState } from "react";
import ExpensiveFilter from "./Components/ExpensiveFilter";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Food", amount: 50, category: "Grocery" },
    { id: 2, description: "Water", amount: 1000, category: "Utilities" },
    { id: 4, description: "movie", amount: 200, category: "Entertainment" },
  ]);

  return (
    <Grid>
      <GridItem p={3}>
        <ExpensiveFilter />
        <ExpensiveList
          expenses={expenses}
          onDelete={(id) =>
            setExpenses(expenses.filter((expense) => expense.id !== id))
          }
        />
      </GridItem>
    </Grid>
  );
}

export default App;
