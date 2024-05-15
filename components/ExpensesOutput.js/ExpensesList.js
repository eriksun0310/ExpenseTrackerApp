import { FlatList, Text } from "react-native";

const renderExpenseItem = (itemData)=>{
    return <Text>{itemData.item.description}</Text>
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
