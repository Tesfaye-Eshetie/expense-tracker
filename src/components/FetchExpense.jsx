import React, { useState, useEffect } from "react";
import { database } from "../data/indexedDB";
import DisplayTable from "./DisplayTable";

export default function FetchExpense() {
  const [expense, setExpense] = useState([]);
  const [isDataAvailable, setIsDataAvailable] = useState(false);

  const getExpense = async () => {
    (await database).getAll("expenseStore").then((data) => {
      setExpense(data);
      data.length ? setIsDataAvailable(true) : setIsDataAvailable(false);
    });
  };

  useEffect(() => {
    getExpense();
  }, [expense]);

  return isDataAvailable ? (
    <div className="card">
      <div className="card__body">
        <h3 className="card__title">Expense Chart</h3>
        <DisplayTable reason={"Reason"} data={expense} name="Expense" />
      </div>
    </div>
  ) : null;
}
