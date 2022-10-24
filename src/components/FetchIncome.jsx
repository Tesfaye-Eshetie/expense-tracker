import React, { useState, useEffect } from "react";
import { database } from "../detabase/indexedDB";
import DisplayTable from "./DisplayTable";
import Card from "react-bootstrap/Card";

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
    <Card className="m-4">
      <Card.Body className="p-4">
        <h4 className="text-capitalize pb-3">Income Chart</h4>
        <DisplayTable name={"Income source"} data={income} />
      </Card.Body>
    </Card>
  ) : null;
}
