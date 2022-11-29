import { useContext, useState, useEffect } from "react";
import { formatCurrency } from "../utilities/formatCurrency";
import { IncomeContext, ExpenseContext } from "../context/GlobalState";
import axios from "axios";

export default function FinancialStatus() {
  const incomeValue = useContext(IncomeContext);
  const expenseValue = useContext(ExpenseContext);
  const [randomGif, setRandomGif] = useState();

  useEffect(
    () => async () => {
      let query;
      if (incomeValue && expenseValue && incomeValue >= expenseValue) {
        query = "happy";
      } else {
        query = "sad";
      }
      try {
        const { data } = await axios.get(
          `https://api.giphy.com/v1/gifs/search?q=${query}&limit=6&api_key=n9Ckrer7sonqSKbjISSzcG1qxwDAzGPl`
        );
        const gifs = data.data;
        setRandomGif(gifs[Math.floor(Math.random() * gifs.length)]);
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
            <img src={randomGif?.images.fixed_height.url} alt="" />
          </div>
          <h3 className="card__title">
            {formatCurrency(incomeValue[2] - expenseValue[2])}
          </h3>
        </div>
      </div>
    </div>
  );
}
