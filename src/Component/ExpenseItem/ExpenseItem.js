import React from "react";
import Card from "../Card/Card";
import ExpensesDate from "../ExpensesDate/ExpensesDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   setTitle("updated");
  //   console.log(title);
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpensesDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>change title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
