import React from "react";
import Fridge from "../../assets/images/fridge.png";
import "../../styles/WelcomeSection.css";
import BagIcon from "../../assets/icons/icon_shopping_bag.png";

const WelcomeSection: React.FC = () => {
  return (
    <section className="welcome-section">
      <h1 className="welcome-section__heading">
        Inteligentna kruszarka, która zamienia szkło w piasek.
      </h1>
      <div className="welcome-section__img-wrapper">
        <img
          src={Fridge}
          alt="mass loop fridge"
          className="welcome-section__img"
        />
      </div>
      <button className="welcome-section__buy-btn">
        <img src={BagIcon} alt="shopping bag icon" />
      </button>
    </section>
  );
};

export default WelcomeSection;
