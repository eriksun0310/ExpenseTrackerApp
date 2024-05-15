import { View, Text, FlatList } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "鞋",
    amount: 2000,
    date: new Date("2023-01-13"),
  },
  {
    id: "e2",
    description: "襪子",
    amount: 100,
    date: new Date("2023-02-23"),
  },
  {
    id: "e3",
    description: "衣服",
    amount: 399,
    date: new Date("2023-05-11"),
  },
  {
    id: "e4",
    description: "帽子",
    amount: 450,
    date: new Date("2023-05-10"),
  },
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
//   console.log("expensesPeriod", expensesPeriod);
  const filter = () => {
    return DUMMY_EXPENSES
  };

  const a = filter()
  console.log('a  ===>', a === DUMMY_EXPENSES)
  console.log('DUMMY_EXPENSES ===>', DUMMY_EXPENSES)

  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;
