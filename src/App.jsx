import IncomeForm from "./components/IncomeForm";
import reactLogo from "./assets/react.svg";
import ExpenseForm from "./components/ExpenseForm";
import FetchExpense from "./components/FetchExpense";
import FetchIncome from "./components/FetchIncome";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// custom css
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <IncomeForm />
          </Col>
          <Col xs={12} md={6}>
            <ExpenseForm />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <FetchIncome />
          </Col>
          <Col xs={12} md={6}>
            <FetchExpense />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
