import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import FAQs from "../data/FAQs.json";

export default function DisplayFAQs() {
  return (
    <Card className="m-4">
      <Card.Body className="p-4">
        <Card.Title className="text-capitalize pb-3 fw-bolder">
          Frequently asked questions
        </Card.Title>
        <Accordion defaultActiveKey="1">
          {FAQs.map((FAQ) => (
            <Accordion.Item eventKey={FAQ.id} key={FAQ.id}>
              <Accordion.Header>{FAQ.Question}</Accordion.Header>
              <Accordion.Body>{FAQ.Answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Card.Body>
    </Card>
  );
}
