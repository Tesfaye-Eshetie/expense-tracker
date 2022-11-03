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
import ContactForm from "./components/ContactForm";

// custom css
import "./App.css";
import DisplayFAQs from "./components/DisplayFAQs";
// import './App.css'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import ContactForm from './components/ContactForm'
// function App() {
//   return (
//     <div className="App">
//       <ContactForm />
//     </div>
//   )
// }
// export default App

function App() {
  return (
    <>
      <Header />
      <Container id="income">
        <Row>
          <Col md={12} lg={6}>
            <IncomeForm />
          </Col>
          <Col md={12} lg={6}>
            <FetchIncome />
          </Col>
        </Row>
      </Container>
      <Container id="expense">
        <Row>
          <Col md={12} lg={6}>
            <ExpenseForm />
          </Col>
          <Col md={12} lg={6}>
            <FetchExpense />
          </Col>
        </Row>
      </Container>
      <Container id="faq">
        <DisplayFAQs />
      </Container>
      <Container id="contact">
        <ContactForm />
      </Container>
      <Footer />
    </>
  );
}

export default App;
