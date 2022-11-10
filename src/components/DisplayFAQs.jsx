import { Accordion } from "./Accordion";
import FAQs from "../data/FAQs.json";

export default function DisplayFAQs() {
  return (
    <div className="accordion" id="faq">
      <h3 className="accordion__title">Frequently asked questions</h3>
      {FAQs.map((FAQ) => (
        <Accordion key={FAQ.id} Question={FAQ.Question} Answer={FAQ.Answer} />
      ))}
    </div>
  );
}
