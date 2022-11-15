import IncomeForm from "./components/IncomeForm";
import ExpenseForm from "./components/ExpenseForm";
import FetchExpense from "./components/FetchExpense";
import FetchIncome from "./components/FetchIncome";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import TotalExpenses from "./components/TotalExpenses";
import ExpenseList from "./components/ExpenseList";
// custom css
import "./App.css";
import DisplayFAQs from "./components/DisplayFAQs";

function App() {
  return (
    <>
      <Header />
      <section className="container" id="budget">
        <Budget />
      </section>
      <section className="container" id="remaining">
        <Remaining />
      </section>
      <section className="container" id="totalexpenses">
        <TotalExpenses />
      </section>
      <section className="container" id="expenselist">
        <ExpenseList />
      </section>
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
      <Footer />
    </>
  );
}

export default App;
