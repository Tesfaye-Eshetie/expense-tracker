import { useContext, useState, useEffect } from "react";
import { formatCurrency } from "../utilities/formatCurrency";
import { IncomeContext, ExpenseContext } from "../context/GlobalState";
import picture from "/images/photo.avif";
import axios from "axios";
import FetchQuote from "./FetchQuote";

export default function FinancialStatus() {
  const incomeValue = useContext(IncomeContext);
  const expenseValue = useContext(ExpenseContext);
  const [randomPhoto, setRandomPhoto] = useState({ download_url: picture });

  useEffect(() => {
    const interval = setInterval(() => {
      fetchRandomPhotes();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchRandomPhotes = async () => {
    try {
      const { data } = await axios.get(
        "https://picsum.photos/v2/list?limit=60"
      );
      const photo = data[Math.floor(Math.random() * data.length)];
      setRandomPhoto(photo);
    } catch (err) {
      console.log("Error fetching and parsing data", err);
    }
  };

  return (
    <div className="container">
      <div className="card img__wrap">
        <img
          src={randomPhoto?.download_url}
          alt=""
          loading="lazy"
          className="photo__wrap"
        />
        <div className="photo__text">
          {" "}
          <h3 className="status__title">Income and Expense Balance</h3>{" "}
          <h3 className="status__title">
            {formatCurrency(incomeValue[2] - expenseValue[2])}
          </h3>
        </div>
      </div>
      <FetchQuote />
    </div>
  );
}
