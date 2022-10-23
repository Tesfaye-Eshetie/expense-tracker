import IncomeForm from "./components/IncomeForm";
import reactLogo from "./assets/react.svg";
import ExpenseForm from "./components/ExpenseForm";
import FetchData from "./components/FetchExpense";
import FetchIncome from "./components/FetchIncome";

// custom css
import "./App.css";

function App() {
  return (
    <>
      <IncomeForm />
      <ExpenseForm />
      <FetchIncome />
      <FetchData />
    </>
  );
}

export default App;
