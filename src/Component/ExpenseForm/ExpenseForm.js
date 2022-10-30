import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  //   const [enterTitle, setEnterTitle] = useState("");
  //   const [enterAmount, setEnterAmount] = useState("");
  //   const [enterDate, setEnterDate] = useState("");

  const [userInput, setUserInput] = useState({
    enterTitle: "",
    enterAmount: "",
    enterDate: "",
  });

  const titleChangeHandler = (e) => {
    //   setEnterTitle(e.target.value);
    setUserInput({
      ...userInput,
      enterTitle: e.target.value,
    });
  };
  const amountChangeHandler = (e) => {
    //   setEnterAmount(e.target.value);
    setUserInput({
      ...userInput,
      enterAmount: e.target.value,
    });
  };
  const dateChangeHandler = (e) => {
    // setEnterDate(e.target.value);
    setUserInput({
      ...userInput,
      enterDate: e.target.value,
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-01-01"
            max="2024-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
