import React, { useState } from "react";
import { addIncome } from "../detabase/indexedDB";
import { v4 as uuid } from "uuid";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

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
    <Card className="m-4">
      <Card.Body className="p-4">
        <Form action="/" onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label class="fw-bolder">Income Source</Form.Label>
            <Form.Control
              type="text"
              name="source"
              value={income.source || ""}
              onChange={handleChange}
              placeholder="Enter source of income..."
            />
            {isError && (
              <Form.Text className="text-muted">
                <p className="text-danger">Source of income is requered?</p>
              </Form.Text>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label class="fw-bolder">Amount</Form.Label>
            <Form.Control
              type="text"
              placeholder="amount..."
              name="amount"
              value={income.amount || ""}
              onChange={handleChange}
            />
            {isError && (
              <Form.Text className="text-muted">
                <p className="text-danger">Amount is requered?</p>
              </Form.Text>
            )}
          </Form.Group>
          <Button variant="outline-primary" type="submit">
            Add Income
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
