import React, { useState, useEffect } from "react";
import { database } from "../detabase/indexedDB";
import DisplayTable from "./DisplayTable";
import Card from "react-bootstrap/Card";

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
    <Card className="m-4">
      <Card.Body className="p-4">
        <Card.Title className="text-capitalize pb-3 fw-bolder">
          Expense Chart
        </Card.Title>
        <DisplayTable
          reason={"Reason for Expense"}
          data={expense}
          name="Expense"
        />
      </Card.Body>
    </Card>
  ) : null;
}
