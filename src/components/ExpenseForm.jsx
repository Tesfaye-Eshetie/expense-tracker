import React, { useState } from "react";
import { addExpense } from "../detabase/indexedDB";
import { v4 as uuid } from "uuid";

export default function ExpenseForm() {
  const [expense, setExpense] = useState({});
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setExpense((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      expense.item &&
      expense.item !== "" &&
      expense.amount &&
      expense.amount !== ""
    ) {
      addExpense(uuid(), {
        category: expense.category,
        item: expense.item,
        amount: expense.amount,
        date: new Date().toString().slice(0, 15),
      });
    } else {
      setError("Item and amount are required...");
    }
    setExpense({});
  };

  return (
    <form className="form" action="/" onSubmit={handleSubmit}>
      <div className="input-control">
        <div id="input-flex">
          <label className="label">
            Category:
            <select
              name="category"
              value={expense.category || "other"}
              onChange={handleChange}
            >
              <option value="Mortgage/Rent">Mortgage/Rent</option>
              <option value="Grocery">Grocery</option>
              <option value="other">other</option>
            </select>
          </label>
        </div>
      </div>
      <div className="input-control">
        <div className="input-flex">
          <label className="label">
            Item
            <input
              type="text"
              name="item"
              value={expense.item || ""}
              onChange={handleChange}
              placeholder="Source of Expense..."
            />
          </label>
        </div>
        <div className="error">{error}</div>
      </div>
      <div className="input-control">
        <div className="input-flex">
          <label className="label">
            Amount:
            <input
              type="text"
              name="amount"
              value={expense.amount || ""}
              onChange={handleChange}
              placeholder="amount..."
            />
          </label>
        </div>
        <div className="error">{error}</div>
      </div>
      <button type="submit">Expense</button>
    </form>
  );
}
