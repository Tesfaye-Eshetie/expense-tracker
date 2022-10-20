import React, { useState, useEffect } from "react";
import { database } from "../detabase/indexedDB";

export default function FetchExpense() {
  const [expense, setExpense] = useState([]);

  const getExpense = async () => {
    (await database).getAll("expenseStore").then((data) => {
      setExpense(data);
    });
  };

  useEffect(() => {
    getExpense();
  }, [expense]);

  return (
    <section className="expense_container">
      <h2>Expense Chart</h2>
      {expense.map((exp) => (
        <div className="exp_card" key={exp.id}>
          <h4>Category: {exp.category}</h4>
          <ul>
            <li>Item: {exp.item}</li>
            <li>Amount: {exp.amount}</li>
            <li>Date: {exp.date}</li>
          </ul>
        </div>
      ))}
    </section>
  );
}
