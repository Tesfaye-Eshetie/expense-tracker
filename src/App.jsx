import IncomeForm from "./components/IncomeForm";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import FetchData from "./components/FetchExpense";

function App() {
  return (
    <>
      <IncomeForm />
      <ExpenseForm />
      <FetchData />
    </>
  );
}

export default App;
