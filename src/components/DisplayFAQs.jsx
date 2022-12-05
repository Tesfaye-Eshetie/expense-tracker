import { Accordion } from "./Accordion";
import FAQs from "../data/FAQs.json";

export default function DisplayFAQs() {
  return (
    <div className="container container__full" id="faq">
      <div className="card">
        <div className="accordion">
          <h3 className="card__title">Frequently asked questions</h3>
          {FAQs.map((FAQ) => (
            <Accordion
              key={FAQ.id}
              Question={FAQ.Question}
              Answer={FAQ.Answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
