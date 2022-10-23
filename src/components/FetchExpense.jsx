import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { database } from "../detabase/indexedDB";
import DisplayTable from "./DisplayTable";

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
    <Container className="p-4">
      <h2>Expense Chart</h2>
      <DisplayTable name={"Reason for Expense"} data={expense} />
    </Container>
  );
}
