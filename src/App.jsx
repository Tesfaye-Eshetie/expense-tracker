import IncomeForm from "./components/IncomeForm";
import reactLogo from "./assets/react.svg";
import ExpenseForm from "./components/ExpenseForm";
import FetchExpense from "./components/FetchExpense";
import FetchIncome from "./components/FetchIncome";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import TotalExpenses from "./components/TotalExpenses";
import ExpenseList from "./components/ExpenseList";

// custom css
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col md={12} lg={6}>
            <IncomeForm />
          </Col>
          <Col md={12} lg={6}>
            <ExpenseForm />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={12} lg={6}>
            <FetchIncome />
          </Col>
          <Col md={12} lg={6}>
            <FetchExpense />
          </Col>
        </Row>
      </Container>
      <div className="container">
        <h1 className="mt-3">Budget Planner</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <TotalExpenses />
          </div>
          </div>
          <h3 className="mt-3">Expenses</h3>
          <div className="row mt-3">
          <div className="col-sm">
          <ExpenseList />
        </div>
        </div>
      </div>
      <div className="mt-3"> 
      <Footer />
      </div>
    </>
  );
}

export default App;
