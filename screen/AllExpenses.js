import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput.js/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";

const AllExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod="total"
      fallbackText="No registered expenses found!"
    />
  );
};

export default AllExpenses;
