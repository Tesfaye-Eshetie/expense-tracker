import { useContext } from "react";
import { IncomeContext } from "../context/GlobalState";
import DisplayTable from "./DisplayTable";

export default function FetchIncome() {
  const incomeValue = useContext(IncomeContext);

  return incomeValue[1] ? (
    <div className="card">
      <div className="card__body">
        <h3 className="card__title">Income Chart</h3>
        <DisplayTable
          reason={"Source"}
          data={incomeValue[0]}
          name="Income"
          total={incomeValue[2]}
        />
      </div>
    </div>
  ) : null;
}
