import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { categories } from "./constant";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z.string().min(3).max(50),
  amount: z.coerce.number().min(0.01).max(100_000),
  category: z.enum(categories),
});

type FormData = z.infer<typeof schema>;

const ExpensiveForm = () => {
  const { register } = useForm<FormData>({ resolver: zodResolver(schema) });
  return (
    <form>
      <FormControl>
        <FormLabel>Description</FormLabel>
        <Input {...register} type="text" />
      </FormControl>
      <FormControl>
        <FormLabel>Amount</FormLabel>
        <Input {...register} type="number" />
      </FormControl>
      <FormControl>
        <FormLabel>Description</FormLabel>
        <Select {...register} placeholder="Select Option">
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </Select>
      </FormControl>
      <Button>Submit</Button>
    </form>
  );
};

export default ExpensiveForm;
