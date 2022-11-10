import React, { useState } from "react";
import { addExpense } from "../data/indexedDB";
import { v4 as uuid } from "uuid";

export default function ExpenseForm() {
  const [expense, setExpense] = useState({});
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setExpense((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const key = uuid();
    const d = new Date();
    const data = `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;

    if (
      expense.item &&
      expense.item !== "" &&
      expense.amount &&
      expense.amount !== ""
    ) {
      addExpense(key, {
        category: expense.category,
        item: expense.item,
        amount: expense.amount,
        date: data,
        id: key,
      });
      setIsError(false);
    } else {
      setIsError(true);
    }
    setExpense({});
  };

  return (
    <form action="/" className="form" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Inter your expense Information</legend>
        <div className="input-control">
          <div id="input-flex">
            <label className="label">
              Expense Category:
              <select
                name="category"
                value={expense.category || "other"}
                onChange={handleChange}
              >
                <option value="Amazon">Amazon</option>
                <option value="Clothing">Clothing</option>
                <option value="Education">Education</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Food">Food and Drinks</option>
                <option value="Grocery">Grocery</option>
                <option value="Household">Household Supplies</option>
                <option value="Miscellaneous">Miscellaneous</option>
                <option value="Mortgage/Rent">Mortgage/Rent</option>
                <option value="Personal">Personal Care</option>
                <option value="Pets">Pets</option>
                <option value="Transportation">Transportation</option>
                <option value="Travel">Travel</option>
                <option value="Utilities">Utilities</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>
        </div>
        <div className="input-control">
          <div className="input-flex">
            <label className="label">
              Reason of Expense:
              <input
                type="text"
                name="item"
                value={expense.item || ""}
                onChange={handleChange}
              />
            </label>
          </div>
          {isError ? (
            <div className="error">
              <p>Reason of Expense is requered?</p>
            </div>
          ) : null}
        </div>
        <div className="input-control">
          <div className="input-flex">
            <label className="label">
              Amount:
              <input
                type="number"
                name="amount"
                value={expense.amount || ""}
                onChange={handleChange}
              />
            </label>
          </div>
          {isError ? (
            <div className="error">
              <p>Amount is requered?</p>
            </div>
          ) : null}
        </div>
        <button type="submit">Add Expense</button>
      </fieldset>
    </form>
  );
}
