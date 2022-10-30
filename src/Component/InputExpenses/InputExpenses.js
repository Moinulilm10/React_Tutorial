import React from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./InputExpenses.css";

const InputExpenses = () => {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
};

export default InputExpenses;
