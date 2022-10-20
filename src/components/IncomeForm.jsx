import React, { useState } from "react";
import { addIncome } from "../detabase/indexedDB";
import { v4 as uuid } from "uuid";

export default function IncomeForm() {
  const [income, setIncome] = useState({});
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setIncome((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const key = uuid();

    if (
      income.source &&
      income.source !== "" &&
      income.amount &&
      income.amount !== ""
    ) {
      addIncome(key, {
        source: income.source,
        amount: income.amount,
        date: new Date().toString().slice(0, 15),
        id: key,
      });
    } else {
      setError("Source and amount are required...");
    }
    setIncome({});
  };

  return (
    <form className="form" action="/" onSubmit={handleSubmit}>
      <div className="input-control">
        <div className="input-flex">
          <label className="label">
            Income Source
            <input
              type="text"
              name="source"
              value={income.source || ""}
              onChange={handleChange}
              placeholder="Source of income..."
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
              value={income.amount || ""}
              onChange={handleChange}
              placeholder="amount..."
            />
          </label>
        </div>
        <div className="error">{error}</div>
      </div>
      <button type="submit">Income</button>
    </form>
  );
}
