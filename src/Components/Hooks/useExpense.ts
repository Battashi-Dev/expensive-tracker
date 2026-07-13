import { useEffect, useState } from "react";
import type { Expense, FormData } from "../Validation";

const STORAGE_KEY = "expensive-tracker: expenses";

function loadExpenses(): Expense[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveExpenses(expenses: Expense[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
  } catch {
    return [];
  }
}

export const useExpense = () => {
  const [expenses, setExpenses] = useState<Expense[]>(loadExpenses);

  useEffect(() => {
    saveExpenses(expenses);
  }, [expenses]);

  const addExpense = (expense: FormData) =>
    setExpenses([...expenses, { ...expense, id: crypto.randomUUID() }]);

  const removeExpense = (id: string) =>
    setExpenses(expenses.filter((expense) => expense.id !== id));
  return { expenses, addExpense, removeExpense };
};

export default useExpense;
