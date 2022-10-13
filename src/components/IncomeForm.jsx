import React, { useState } from "react";
import { addIncome } from "../detabase/indexedDB";

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

    if (
      income.source &&
      income.source !== "" &&
      income.amount &&
      income.amount !== ""
    ) {
      addIncome("Income", {
        source: income.source,
        amount: income.amount,
        date: Date.now(),
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
