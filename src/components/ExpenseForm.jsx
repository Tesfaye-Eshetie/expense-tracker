import React, { useState } from "react";
import { addExpense } from "../detabase/indexedDB";
import { v4 as uuid } from "uuid";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

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
        date: new Date().toString().slice(0, 15),
        id: key,
      });
      setIsError(false);
    } else {
      setIsError(true);
    }
    setExpense({});
  };

  return (
    <Form className="form" action="/" onSubmit={handleSubmit}>
      <div className="input-control">
        <div id="input-flex">
          <label className="label">
            Expense Category:
            <select
              name="category"
              value={expense.category || "other"}
              onChange={handleChange}
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
              <option value="other" selected>
                Other
              </option>
            </select>
          </label>
        </div>
      </div>
      <Form.Group className="mb-3 input-control">
        <Form.Label>Reason of Expense</Form.Label>
        <Form.Control
          type="text"
          name="item"
          value={expense.item || ""}
          onChange={handleChange}
          placeholder="Enter reason of Expense ..."
        />
        {isError && (
          <Form.Text className="text-muted">
            Reason of Expense is requered?
          </Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-3 input-control">
        <Form.Label>Amount</Form.Label>
        <Form.Control
          type="text"
          placeholder="amount..."
          name="amount"
          value={expense.amount || ""}
          onChange={handleChange}
        />
        {isError && (
          <Form.Text className="text-muted">Amount is requered?</Form.Text>
        )}
      </Form.Group>
      <Button variant="primary" type="submit" className="button">
        Add Expense
      </Button>
    </Form>
  );
}
