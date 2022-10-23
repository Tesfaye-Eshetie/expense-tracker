import React, { useState } from "react";
import { addIncome } from "../detabase/indexedDB";
import { v4 as uuid } from "uuid";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

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
      setIsError(false);
    } else {
      setIsError(true);
    }
    setIncome({});
  };

  return (
    <Form className="form" action="/" onSubmit={handleSubmit}>
      <Form.Group className="mb-3 input-control">
        <Form.Label>Income Source</Form.Label>
        <Form.Control
          type="text"
          name="source"
          value={income.source || ""}
          onChange={handleChange}
          placeholder="Enter source of income..."
        />
        {isError && (
          <Form.Text className="text-muted" variant="danger">
            Source of income is requered?
          </Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-3 input-control">
        <Form.Label>Amount</Form.Label>
        <Form.Control
          type="text"
          placeholder="amount..."
          name="amount"
          value={income.amount || ""}
          onChange={handleChange}
        />
        {isError && (
          <Form.Text className="text-muted">Amount is requered?</Form.Text>
        )}
      </Form.Group>
      <Button variant="primary" type="submit" className="button">
        Add Income
      </Button>
    </Form>
  );
}
