import React, { useState, useEffect } from "react";
import { database } from "../detabase/indexedDB";
import DisplayTable from "./DisplayTable";
import Container from "react-bootstrap/Container";

export default function FetchIncome() {
  const [income, setIncome] = useState([]);

  const getIncome = async () => {
    (await database).getAll("incomeStore").then((data) => {
      setIncome(data);
    });
  };

  useEffect(() => {
    getIncome();
  }, [income]);
  return (
    <Container className="p-4">
      <h2>Income Chart</h2>
      <DisplayTable name={"Income source"} data={income} />
    </Container>
  );
}
