import { useEffect, useState } from "react";
import type { Expense} from "../Validation";

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

const addExpense = (data: Omit<Expense, 'id'>) => {
  const newExpense: Expense = {
    ...data, id: crypto.randomUUID()
  }
  setExpenses((expense) => [...expense, newExpense])
}

  const removeExpense = (id: string) =>
    setExpenses(expenses.filter((expense) => expense.id !== id));
 
 const editExpense = (id: Expense['id'], data: Partial<Expense>) => {
setExpenses((expense) => expense.map((e) => (e.id === id ? {...e, ...data}: e)))
 }
 
  return { expenses, addExpense, removeExpense, editExpense  };
};


export default useExpense;
