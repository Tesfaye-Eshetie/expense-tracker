import { useContext, useState, useEffect } from "react";
import { formatCurrency } from "../utilities/formatCurrency";
import { IncomeContext, ExpenseContext } from "../context/GlobalState";
import axios from "axios";

export default function FinancialStatus() {
  const incomeValue = useContext(IncomeContext);
  const expenseValue = useContext(ExpenseContext);
  const [randomGiphy, setRandomGiphy] = useState();

  useEffect(
    () => async () => {
      try {
        const { data } = await axios.get(
          `https://api.giphy.com/v1/gifs/search?q=happy&limit=12&api_key=n9Ckrer7sonqSKbjISSzcG1qxwDAzGPl`
        );
        const gifs = data.data;
        const gif = gifs[Math.floor(Math.random() * gifs?.length)];
        setRandomGiphy(gif);
      } catch (err) {
        console.log("Error fetching and parsing data", err);
      }
    },
    []
  );

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
    </div>
  );
}
