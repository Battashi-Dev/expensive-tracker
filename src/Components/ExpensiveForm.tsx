import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { categories, useThemeColors } from "./constant";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, type FormData } from "./Validation";

interface Props {
  onSubmit: (data: FormData) => void;
  defaultValues: Partial<FormData>;
  submitLabel: string;
}

const ExpensiveForm = ({ onSubmit, defaultValues, submitLabel }: Props) => {
 const {text} = useThemeColors();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema), defaultValues });
  return (
   
    <form 
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <FormControl py={2} isInvalid={!!errors.description} >
        <FormLabel color={text} >Description</FormLabel>
        <Input
          {...register("description")}
          size="sm"
          borderRadius={10} p={3}
          type="text"
        />
        <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
      </FormControl>
      <FormControl  py={2} isInvalid={!!errors.amount} >
        <FormLabel color={text}>Amount</FormLabel>
        <Input
        p={3}
          size="sm"
          borderRadius={10}
          {...register("amount", { valueAsNumber: true })}
          type="number"
        />
        <FormErrorMessage>{errors.amount?.message}</FormErrorMessage>
      </FormControl >
      <FormControl  py={2} isInvalid={!!errors.category} >
        <FormLabel color={text}>Category</FormLabel>
        <Select
          {...register("category")}
          size="sm"
          borderRadius={10} 
          placeholder="Select Option"
        >
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </Select>
        <FormErrorMessage>{errors.category?.message}</FormErrorMessage>
      </FormControl>
      <Button mt={4} size="sm" borderRadius={10} type="submit" colorScheme="blue">
        {submitLabel}
      </Button>
    </form>
   
  );
};

export default ExpensiveForm;
