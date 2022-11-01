import React from "react";
import "./ExpensesDate.css";

const ExpensesDate = (props) => {
  console.log(
    "🚀 ~ file: ExpensesDate.js ~ line 5 ~ ExpensesDate ~ props",
    props
  );
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

export default ExpensesDate;
