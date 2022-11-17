import { useContext } from "react";
import { formatCurrency } from "../utilities/formatCurrency";
import { IncomeContext, ExpenseContext } from "../context/GlobalState";

export default function FinancialStatus() {
  const incomeValue = useContext(IncomeContext);
  const expenseValue = useContext(ExpenseContext);

  return (
    <div className="container">
      <div className="card">
        <div className="card__body">
          <h3 className="card__title">Financial status Balance</h3>
          <h3 className="card__title">
            {formatCurrency(incomeValue[2] - expenseValue[2])}
          </h3>
        </div>
      </div>
    </div>
  );
}
