import { useContext } from "react";
import { IncomeContext } from "../context/GlobalState";
import DisplayTable from "./DisplayTable";
import { clearIncome } from "../data/indexedDB";

export default function FetchIncome() {
  const incomeValue = useContext(IncomeContext);

  const handleClearIncome = () => {
    clearIncome();
  };

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
      <button className="bnt__clear" type="button" onClick={handleClearIncome}>
        Clear Income
      </button>
    </div>
  ) : null;
}
