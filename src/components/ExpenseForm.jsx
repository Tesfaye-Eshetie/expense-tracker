import React, { useState } from "react";
import { addExpense } from "../detabase/indexedDB";
import { v4 as uuid } from "uuid";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

export default function ExpenseForm() {
  const [expense, setExpense] = useState({});
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setExpense((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const key = uuid();
    const d = new Date();
    const data = `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;

    if (
      expense.item &&
      expense.item !== "" &&
      expense.amount &&
      expense.amount !== ""
    ) {
      addExpense(key, {
        category: expense.category,
        item: expense.item,
        amount: expense.amount,
        date: data,
        id: key,
      });
      setIsError(false);
    } else {
      setIsError(true);
    }
    setExpense({});
  };

  return (
    <Card className="m-4">
      <Card.Body className="p-4">
        <h4 className="text-capitalize pb-3">Inter your expense Information</h4>
        <Form action="/" onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="fw-bolder">Expense Category:</Form.Label>
            <Form.Select
              name="category"
              value={expense.category || "other"}
              onChange={handleChange}
              aria-label="other"
            >
              <option value="Amazon">Amazon</option>
              <option value="Clothing">Clothing</option>
              <option value="Education">Education</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Food">Food and Drinks</option>
              <option value="Grocery">Grocery</option>
              <option value="Household">Household Supplies</option>
              <option value="Miscellaneous">Miscellaneous</option>
              <option value="Mortgage/Rent">Mortgage/Rent</option>
              <option value="Personal">Personal Care</option>
              <option value="Pets">Pets</option>
              <option value="Transportation">Transportation</option>
              <option value="Travel">Travel</option>
              <option value="Utilities">Utilities</option>
              <option value="other">Other</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="fw-bolder">Reason of Expense</Form.Label>
            <Form.Control
              type="text"
              name="item"
              value={expense.item || ""}
              onChange={handleChange}
              placeholder="Enter reason of Expense ..."
            />
            {isError ? (
              <Form.Text>
                <p className="text-danger">Reason of Expense is requered?</p>
              </Form.Text>
            ) : null}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="fw-bolder">Amount</Form.Label>
            <Form.Control
              type="text"
              placeholder="amount..."
              name="amount"
              value={expense.amount || ""}
              onChange={handleChange}
            />
            {isError ? (
              <Form.Text>
                <p className="text-danger">Amount is requered?</p>
              </Form.Text>
            ) : null}
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Expense
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
