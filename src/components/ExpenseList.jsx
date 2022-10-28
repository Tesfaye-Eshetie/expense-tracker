import React from "react";
import ExpenseItem from "./ExpenseItem";

// Dummy data for expense list. 
const ExpenseList = () => {
    const expenses = [
        { id: 12, name: "video games", cost: 270 },
        { id: 13, name: "vacation", cost: 1500 },
        { id: 14, name: "phone bill", cost: 150 },
    ];


return (
    <ul className="list-group">
        {expenses.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
        ))}
    </ul>
   )

};

export default ExpenseList;