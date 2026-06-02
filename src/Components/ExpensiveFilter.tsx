import { Select } from "@chakra-ui/react";
import { categories } from "./constant.ts";
const ExpensiveFilter = () => {
  return (
    <Select placeholder="All Categories">
      {categories.map((category) => (
        <option key={category}>{category}</option>
      ))}
    </Select>
  );
};

export default ExpensiveFilter;
