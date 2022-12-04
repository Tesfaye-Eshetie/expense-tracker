import { useState } from "react";
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
        <legend>Enter Your Expense Information</legend>
        <div className="input-control">
          <input
            type="text"
            name="item"
            value={expense.item || ""}
            onChange={handleChange}
            placeholder="Reason of expense..."
          />
          {isError ? (
            <div className="error">
              <p>Reason of Expense is requered?</p>
            </div>
          ) : null}
        </div>
        <div className="input-control">
          <input
            type="number"
            name="amount"
            value={expense.amount || ""}
            onChange={handleChange}
            placeholder="Amount..."
          />
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
