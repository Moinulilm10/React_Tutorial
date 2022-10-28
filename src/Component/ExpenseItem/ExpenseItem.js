import React from "react";
import Card from "../Card/Card";
import ExpensesDate from "../ExpensesDate/ExpensesDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log("clicked......");
  };

  return (
    <Card className="expense-item">
      <ExpensesDate date={props.date} />
      {/* <div>{props.date.toISOString()}</div> */}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>change title</button>
    </Card>
  );
};

export default ExpenseItem;
