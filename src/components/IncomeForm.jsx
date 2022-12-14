import { useState } from "react";
import { addIncome } from "../data/indexedDB";
import { v4 as uuid } from "uuid";

export default function IncomeForm() {
  const [income, setIncome] = useState({});
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setIncome((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const key = uuid();
    const d = new Date();
    const data = `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;

    if (
      income.source &&
      income.source !== "" &&
      income.amount &&
      income.amount !== ""
    ) {
      addIncome(key, {
        source: income.source,
        amount: income.amount,
        date: data,
        id: key,
      });
      setIsError(false);
    } else {
      setIsError(true);
    }
    setIncome({});
  };

  return (
    <form action="/" className="form" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Enter Your Income Information</legend>
        <div className="input-control">
          <input
            type="text"
            name="source"
            value={income.source || ""}
            onChange={handleChange}
            placeholder="Source of income..."
          />
          {isError ? (
            <div className="error">
              <p>Source of income is requered?</p>
            </div>
          ) : null}
        </div>
        <div className="input-control">
          <input
            type="number"
            name="amount"
            value={income.amount || ""}
            onChange={handleChange}
            placeholder="Amount..."
          />
          {isError ? (
            <div className="error">
              <p>Amount is requered?</p>
            </div>
          ) : null}
        </div>
        <button type="submit">Add Income</button>
      </fieldset>
    </form>
  );
}
