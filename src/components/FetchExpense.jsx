import { useContext } from "react";
import { ExpenseContext } from "../context/GlobalState";
import DisplayTable from "./DisplayTable";
import { clearExpense } from "../data/indexedDB";

export default function FetchExpense() {
  const expenseValue = useContext(ExpenseContext);

  const handleClearExpense = () => {
    clearExpense();
  };

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
      <button className="bnt__clear" type="button" onClick={handleClearExpense}>
        Clear Expense
      </button>
    </div>
  ) : null;
}
