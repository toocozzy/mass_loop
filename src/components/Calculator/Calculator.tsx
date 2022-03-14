import React from "react";
import "../../styles/Calculator.css";

const Calculator: React.FC = () => {
  return (
    <div className="calculator">
      <h2 className="calculator__heading">Ile zaoszczędzisz?</h2>
      <p className="calculator__text">Rachunek jest prosty.</p>
      <div className="calculator__forms-wrapper">
        <form className="calculator__form">
          <label className="calculator__form-label">
            Ile pojemników na szkło zapełniasz miesięcznie?
          </label>
          <input
            type="number"
            placeholder="20"
            className="calculator__form-input"
          />
        </form>
        <form className="calculator__form">
          <label className="calculator__form-label">
            Ile płacisz za wywóz jednego pojemnika na szkło?
          </label>
          <input
            type="number"
            placeholder="20"
            className="calculator__form-input"
          />
        </form>
      </div>
      <div className="calculator__output-wrapper">
        <h4 className="calculator__output-heading">
          Dzięki kruszarce zaoszczędzisz
        </h4>
        <span className="calculator__output">900zł</span>
        <h4 className="calculator__output-heading">rocznie.</h4>
      </div>
    </div>
  );
};

export default Calculator;
