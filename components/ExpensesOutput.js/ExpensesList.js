import { FlatList, Text } from "react-native";
import ExpensesItem from "./ExpensesItem";

const renderExpenseItem = (itemData)=>{
    return <ExpensesItem {...itemData.item}/>
}

const ExpensesList = ({ expenses }) => {
    // console.log('expenses', expenses)
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;
