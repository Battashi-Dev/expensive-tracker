import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { categories } from "./constant";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must contain at least 3 characters" })
    .max(50),
  amount: z.number().min(0.01, { message: "Amount is required" }).max(100_000),
  category: z.enum(categories, {
    message: "Category is required",
  }),
});

type FormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: FormData) => void;
}

const ExpensiveForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <FormControl>
        <FormLabel>Description</FormLabel>
        <Input {...register("description")} type="text" />
        {errors.description && (
          <Text color="red">{errors.description.message}</Text>
        )}
      </FormControl>
      <FormControl>
        <FormLabel>Amount</FormLabel>
        <Input {...register("amount", { valueAsNumber: true })} type="number" />
        {errors.amount && <Text color="red">{errors.amount.message}</Text>}
      </FormControl>
      <FormControl>
        <FormLabel>Description</FormLabel>
        <Select {...register("category")} placeholder="Select Option">
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </Select>
        {errors.category && <Text color="red">{errors.category.message}</Text>}
      </FormControl>
      <Button type="submit" colorScheme="blue">
        Submit
      </Button>
    </form>
  );
};

export default ExpensiveForm;
