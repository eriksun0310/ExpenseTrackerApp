import { createContext, useReducer } from "react";

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
  {
    id: "e5",
    description: "襪子",
    amount: 100,
    date: new Date("2023-02-23"),
  },
  {
    id: "e6",
    description: "衣服",
    amount: 399,
    date: new Date("2023-05-11"),
  },
  {
    id: "e7",
    description: "帽子",
    amount: 450,
    date: new Date("2023-05-10"),
  },
  {
    id: "e8",
    description: "襪子",
    amount: 100,
    date: new Date("2023-02-23"),
  },
  {
    id: "e9",
    description: "衣服",
    amount: 399,
    date: new Date("2023-05-11"),
  },
  {
    id: "e10",
    description: "帽子",
    amount: 450,
    date: new Date("2023-05-10"),
  },
  {
    id: "e11",
    description: "襪子",
    amount: 100,
    date: new Date("2023-02-23"),
  },
  {
    id: "e12",
    description: "衣服",
    amount: 399,
    date: new Date("2023-05-11"),
  },
  {
    id: "e13",
    description: "帽子",
    amount: 450,
    date: new Date("2023-05-10"),
  },
];
export const ExpensesContext = createContext({
  expense: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expenseReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = {
        ...updatableExpense,
        ...action.payload.data,
      };

      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;

      return updatedExpenses;

    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expenseReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({
      type: "ADD",
      payload: expenseData,
    });
  }
  function deleteExpense(id) {
    dispatch({
      type: "ADD",
      payload: id,
    });
  }
  function updateExpense(id, expenseData) {
    dispatch({
      type: "UPDATE",
      payload: {
        id: id,
        data: expenseData,
      },
    });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
