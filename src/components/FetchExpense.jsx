import { useContext } from "react";
import { ExpenseContext } from "../context/GlobalState";
import DisplayTable from "./DisplayTable";

export default function FetchExpense() {
  const expenseValue = useContext(ExpenseContext);

  return expenseValue[1] ? (
    <div className="card">
      <div className="card__body">
        <h3 className="card__title">Expense Chart</h3>
        <DisplayTable
          reason={"Reason"}
          data={expenseValue[0]}
          name="Expense"
          total={expenseValue[2]}
        />
      </div>
    </div>
  ) : null;
}
