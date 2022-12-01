import { useContext, useState, useEffect } from "react";
import { formatCurrency } from "../utilities/formatCurrency";
import { IncomeContext, ExpenseContext } from "../context/GlobalState";
import axios from "axios";

export default function FinancialStatus() {
  const incomeValue = useContext(IncomeContext);
  const expenseValue = useContext(ExpenseContext);
  const [randomPhoto, setRandomPhoto] = useState();

  const URL = "https://picsum.photos/v2/list?limit=100";
  useEffect(() => {
    const interval = setInterval(() => {
      fetchRandomPhotes();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const fetchRandomPhotes = async () => {
    try {
      const { data } = await axios.get(URL);
      const randomPhoto = await data[Math.floor(Math.random() * data.length)];
      console.log(randomPhoto);
      setRandomPhoto(randomPhoto);
    } catch (err) {
      if (err instanceof Error) {
        console.log("Error fetching and parsing data", err);
      }
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card__body">
          <img
            src={randomPhoto?.download_url}
            alt="random photo"
            loading="lazy"
            className="photo_wrap"
          />
          <div className="photo_text">
            {" "}
            <h3 className="card__title">Financial status Balance</h3>{" "}
            <h3 className="card__title">
              {formatCurrency(incomeValue[2] - expenseValue[2])}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
