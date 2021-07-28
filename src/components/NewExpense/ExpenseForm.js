import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = () => {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState(""); OR you can use single state still

  const [userInpunt, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    EnteredDate: "",
  });

  const titleChangeHandler = (event) => {
    //setEnteredTitle(event.target.value); OR
    setUserInput({
      ...userInpunt,
      enteredTitle: event.target.value,
    });
  };

  const amountChangeHandler = (event) => {
    //setEnteredAmount(event.target.value); OR
    setUserInput({
      ...userInpunt,
      enteredAmount: event.target.value,
    });
  };

  const dateChangeHandler = (event) => {
    //setEnteredDate(event.target.value); OR
    setUserInput({
      ...userInpunt,
      enteredDate: event.target.value,
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
            min="2019-01-01"
            max="2023-12-30"
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
