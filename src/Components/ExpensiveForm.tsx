import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { categories } from "./constant";
import { zodResolver } from "@hookform/resolvers/zod";
import {  schema, type FormData} from './Validation'


interface Props {
  onSubmit: (data: FormData) => void;
  defaultValues: Partial<FormData>;
  submitLabel: string;
}

const ExpensiveForm = ({ onSubmit, defaultValues, submitLabel= "Add "}: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema), defaultValues, });
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
        {submitLabel}
      </Button>
    </form>
  );
};

export default ExpensiveForm;
