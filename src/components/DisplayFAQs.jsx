import React from "react";
import Accordion from "react-bootstrap/Accordion";
import FAQs from "../data/FAQs.json";

export default function DisplayFAQs() {
  return (
    <Accordion defaultActiveKey="1">
      <h4 className="text-capitalize pb-3">Frequently asked questions</h4>
      {FAQs.map((FAQ) => (
        <Accordion.Item eventKey={FAQ.id} key={FAQ.id}>
          <Accordion.Header>{FAQ.Question}</Accordion.Header>
          <Accordion.Body>{FAQ.Answer}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
