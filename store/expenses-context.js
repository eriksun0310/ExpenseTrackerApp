import { createContext } from "react";
export const ExpensesContext = createContext({
  expense: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function ExpensesContextProvider({ children }) {
  return <ExpensesContext.Provider></ExpensesContext.Provider>;
}

export default ExpensesContextProvider;
