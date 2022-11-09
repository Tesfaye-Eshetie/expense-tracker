import React, { useState, useEffect } from "react";
import { database } from "../data/indexedDB";
import DisplayTable from "./DisplayTable";

export default function FetchIncome() {
  const [income, setIncome] = useState([]);
  const [isDataAvailable, setIsDataAvailable] = useState(false);

  const getIncome = async () => {
    (await database).getAll("incomeStore").then((data) => {
      setIncome(data);
      data.length ? setIsDataAvailable(true) : setIsDataAvailable(false);
    });
  };

  useEffect(() => {
    getIncome();
  }, [income]);
  return isDataAvailable ? (
    <div className="card">
      <div className="card__body">
        <h3 className="card__title">Income Chart</h3>
        <DisplayTable reason={"Income source"} data={income} name="Income" />
      </div>
    </div>
  ) : null;
}
