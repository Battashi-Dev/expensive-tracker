import { z } from "zod";
import { categories } from "./constant";

export const schema = z.object({
  description: z
    .string()
    .min(3, "Description must contain at least 3 characters")
    .max(50),
  amount: z.number().min(0.01, "Amount is required").max(100_000),
  category: z.enum(categories, {
    message: "Category is required",
  }),
});

export const expenseSchema = schema.extend({
  id: z.string()
});

export type Expense = z.infer<typeof expenseSchema>;
export type FormData = z.infer<typeof schema>;
