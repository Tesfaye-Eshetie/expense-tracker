import React, { useState } from "react";
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
        <legend>Inter your Income Information</legend>
        <div className="input-control">
          <div className="input-flex">
            <label className="label">
              Income Source:
              <input
                type="text"
                name="source"
                value={income.source || ""}
                onChange={handleChange}
              />
            </label>
          </div>
          {isError ? (
            <div className="error">
              <p className="text-danger">Source of income is requered?</p>
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
                value={income.amount || ""}
                onChange={handleChange}
              />
            </label>
          </div>
          {isError ? (
            <div className="error">
              <p className="text-danger">Amount is requered?</p>
            </div>
          ) : null}
        </div>
        <button type="submit">Add Income</button>
      </fieldset>
    </form>
  );
}
