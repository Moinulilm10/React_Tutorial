import "./App.css";
import Expenses from "./Component/Expenses/Expenses";
import InputExpenses from "./Component/InputExpenses/InputExpenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("in app.js");
    console.log(expense);
  };
  console.log(
    "🚀 ~ file: App.js ~ line 37 ~ addExpenseHandler ~ addExpenseHandler",
    addExpenseHandler
  );

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "white" }}>Expense details</h1>
      <InputExpenses onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}
export default App;
