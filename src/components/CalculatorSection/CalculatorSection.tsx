import React from "react";
import "../../styles/CalculatorSection.css";
import Calculator from "../Calculator/Calculator";

const CalculatorSection: React.FC = () => {
  return (
    <section className="calculator-section">
      <div className="calculator-section__info">
        <h2 className="calculator-section__info-heading">
          Płać 5 razy mniej za wywóz odpadów szklanych.
        </h2>
        <p className="calculator-section__info-text">
          Kruszarka zmniejsza gabaryty szklanych śmieci, a Ty płacisz
          PIĘ-CIO-KROT-NIE niższe rachunki za ich wywóz.
        </p>
      </div>
      <Calculator />
      <p className="calculator-section__text">
        To na co wydasz zaoszczędzoną gotówkę?
      </p>
      <button className="calculator-section__btn">
        <span>KUP</span> 8499 zł
      </button>
      <h3 className="calculator-section__heading--h3">
        Brzmi dobrze? Uważaj. Dopiero się rozkręcamy!
      </h3>
    </section>
  );
};

export default CalculatorSection;
