import { useContext, useState, useEffect } from "react";
import { formatCurrency } from "../utilities/formatCurrency";
import { IncomeContext, ExpenseContext } from "../context/GlobalState";
import { database } from "../data/indexedDB";
import { FetchGiphy } from "./FetchGiphy";

export default function FinancialStatus() {
  const incomeValue = useContext(IncomeContext);
  const expenseValue = useContext(ExpenseContext);
  const [randomGiphy, setRandomGiphy] = useState();

  const getRandomHappyGiphy = async (key) => {
    (await database).get("happyGiphy", key).then((data) => {
      setRandomGiphy(data[Math.floor(Math.random() * data.length)]);
    });
  };

  useEffect(() => {
    getRandomHappyGiphy("happy");
  }, []);

  return (
    <div className="container">
      <div className="card">
        <div className="card__body">
          <h3 className="card__title">Financial status Balance</h3>
          <div className="gif-wrap">
            <img
              src={randomGiphy?.images.fixed_height.url}
              alt="random giphy happy animation"
              loading="lazy"
            />
          </div>
          <h3 className="card__title">
            {formatCurrency(incomeValue[2] - expenseValue[2])}
          </h3>
        </div>
      </div>
      {!randomGiphy && <FetchGiphy />}
    </div>
  );
}
