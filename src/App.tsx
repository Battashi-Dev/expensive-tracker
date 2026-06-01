import { Grid, GridItem } from "@chakra-ui/react";
import ExpensiveList from "./Components/ExpensiveList";

function App() {
  const expenses = [
    { id: 1, description: "Food", amount: 50, category: "Grocery" },
    { id: 2, description: "Water", amount: 1000, category: "Utilities" },
    { id: 4, description: "movie", amount: 200, category: "Entertainment" },
  ];
  return (
    <Grid>
      <GridItem>
        <ExpensiveList expenses={expenses} />
      </GridItem>
    </Grid>
  );
}

export default App;
