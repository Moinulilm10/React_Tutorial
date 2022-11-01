import React from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./InputExpenses.css";

const InputExpenses = (props) => {
  console.log(
    "🚀 ~ file: InputExpenses.js ~ line 6 ~ InputExpenses ~ props",
    props
  );
  const saveExpenseData = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseData} />
    </div>
  );
};

export default InputExpenses;
