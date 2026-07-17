import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { categories, useThemeColors } from "./constant.ts";

interface Props {
  onSelectCategory: (category: string) => void;
}
const ExpensiveFilter = ({ onSelectCategory }: Props) => {
  const { text } = useThemeColors();
  return (
    <FormControl>
      <FormLabel fontSize="sm" fontWeight="md" mb={1} color={text}>
        Filter by category
      </FormLabel>
      <Select
        size="sm"
        borderRadius={10}
        maxW="250px"
        placeholder="All Categories"
        onChange={(event) => onSelectCategory(event.target.value)}
      >
        {categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </Select>
    </FormControl>
  );
};

export default ExpensiveFilter;
