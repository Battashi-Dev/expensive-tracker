import { Select } from "@chakra-ui/react";
import { categories } from "./constant.ts";

interface Props {
  onSelectCategory: (category: string) => void;
}
const ExpensiveFilter = ({ onSelectCategory }: Props) => {
  return (
    <Select
      placeholder="All Categories"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      {categories.map((category) => (
        <option key={category}>{category}</option>
      ))}
    </Select>
  );
};

export default ExpensiveFilter;
