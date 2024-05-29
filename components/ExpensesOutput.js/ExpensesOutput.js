import { View, Text, FlatList, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";



const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  //   console.log("expensesPeriod", expensesPeriod);
  const filter = () => {
    return DUMMY_EXPENSES;
  };

  const a = filter();
  console.log("a  ===>", a === DUMMY_EXPENSES);
  console.log("DUMMY_EXPENSES ===>", DUMMY_EXPENSES);

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop:24,
    paddingBottom:0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
