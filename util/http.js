import axios from "axios";

export function storeExpense(expenseData) {
    console.log('storeExpense', expenseData);
    axios.post(
      "https://react-native-course-dbf86-default-rtdb.firebaseio.com/expenses.json",
      expenseData
    )
    .then(response => {
      console.log('Data stored successfully:', response.data);
    })
    .catch(error => {
      console.error('Error storing data:', error);
    });
  }
  