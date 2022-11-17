import { useState, useEffect } from "react";

import IncomeForm from "./components/IncomeForm";
import ExpenseForm from "./components/ExpenseForm";
import FetchExpense from "./components/FetchExpense";
import FetchIncome from "./components/FetchIncome";
import ContactForm from "./components/ContactForm";
import DisplayFAQs from "./components/DisplayFAQs";
import FinancialStatus from "./components/FinancialStatus";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { database } from "./data/indexedDB";
import { IncomeContext, ExpenseContext } from "./context/GlobalState";

// custom css
import "./App.css";

function App() {
  const [income, setIncome] = useState([]);
  const [isIncomeAvailable, setIsIncomeAvailable] = useState(false);
  const [totalIncome, setTotalIncome] = useState();
  const [expense, setExpense] = useState([]);
  const [isExpenseAvailable, setIsExpenseAvailable] = useState(false);
  const [totalExpense, setTotalExpense] = useState();

  const getIncome = async () => {
    (await database).getAll("incomeStore").then((data) => {
      setIncome(data);
      setTotalIncome(
        data.map((d) => +d.amount).reduce((acc, item) => (acc += item), 0)
      );
      data.length ? setIsIncomeAvailable(true) : setIsIncomeAvailable(false);
    });
  };

  const getExpense = async () => {
    (await database).getAll("expenseStore").then((data) => {
      setExpense(data);
      setTotalExpense(
        data.map((d) => +d.amount).reduce((acc, item) => (acc += item), 0)
      );
      data.length ? setIsExpenseAvailable(true) : setIsExpenseAvailable(false);
    });
  };

  useEffect(() => {
    getIncome();
    getExpense();
  }, [income, expense]);
  const incomeValue = [income, isIncomeAvailable, totalIncome];
  const expenseValue = [expense, isExpenseAvailable, totalExpense];
  return (
    <ExpenseContext.Provider value={expenseValue}>
      <IncomeContext.Provider value={incomeValue}>
        <Header />
        <main>
          <FinancialStatus />
          <section className="container" id="income">
            <IncomeForm />
            <FetchIncome />
          </section>
          <section className="container" id="expense">
            <ExpenseForm />
            <FetchExpense />
          </section>
          <section className="container" id="contact">
            <DisplayFAQs />
            <ContactForm />
          </section>
        </main>
        <Footer />
      </IncomeContext.Provider>
    </ExpenseContext.Provider>
  );
}

export default App;
