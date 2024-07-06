import axios from "axios";

const BACKEND_URL =
  "https://react-native-course-dbf86-default-rtdb.firebaseio.com";

//儲存firebase  並返回firebase的id
export async function storeExpense(expenseData) {
  const response = await axios.post(
    BACKEND_URL + "/expenses.json",
    expenseData
  );
  const id = response.data.name;
  return id;
}

//獲取所有資料
export async function fetchExpenses() {
  const response = await axios.get(BACKEND_URL + "/expenses.json");

  const expenses = [];
  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }

  return expenses;
}

//更新firebase
export function updateExpenses(id, expenseData) {
  return axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
}

//刪除firebase
export function deleteExpenses(id) {
  return axios.delete(BACKEND_URL + `/expenses/${id}.json`);
}
