import IncomeForm from "./components/IncomeForm";
import ExpenseForm from "./components/ExpenseForm";
import FetchExpense from "./components/FetchExpense";
import FetchIncome from "./components/FetchIncome";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DisplayFAQs from "./components/DisplayFAQs";

// custom css
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
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
    </>
  );
}

export default App;
