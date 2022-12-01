import { useContext, useState, useEffect } from "react";
import { formatCurrency } from "../utilities/formatCurrency";
import { IncomeContext, ExpenseContext } from "../context/GlobalState";
import { database, setPhoto } from "../data/indexedDB";
import axios from "axios";

export default function FinancialStatus() {
  const incomeValue = useContext(IncomeContext);
  const expenseValue = useContext(ExpenseContext);
  const [randomPhoto, setRandomPhoto] = useState();

  useEffect(
    () => async () => {
      try {
        const { data } = await axios.get(
          "https://picsum.photos/v2/list?limit=100"
        );
        setPhoto("photo", data);
      } catch (err) {
        console.log("Error fetching and parsing data", err);
      }
    },
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      fetchRandomPhotes("photo");
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const fetchRandomPhotes = async (key) => {
    (await database).get("photoStore", key).then((data) => {
      const randomPhoto = data[Math.floor(Math.random() * data?.length)];
      setRandomPhoto(randomPhoto);
    });
  };

  return (
    <div className="container">
      <div className="card img_wrap">
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
  );
}
