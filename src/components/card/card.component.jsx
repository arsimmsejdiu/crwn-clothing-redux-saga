import React from "react";

import "./card.styles.css";
import jackets from "../../assets/jackets.png";

const Card = ({ title, imageUrl, ...otherSectionProps }) => {
  return (
    <div className="card">
      <div className="wrap">
        <div className="profile">
          <div className="title">EDITOR'S PICK</div>
          <div className="description">10 bijoux incontournable</div>
          <img className="img" src={jackets} alt="" />
        </div>
      </div>

      <div className="wrap">
        <div className="profile">
          <div className="title">EXPERT'S CORNER</div>
          <div className="description">TOP 10 ADVICE'S</div>
          <img className="img" src={jackets} alt="" />
        </div>
      </div>

      <div className="wrap">
        <div className="profile">
          <div className="title">INSIDE CRWN</div>
          <div className="description">
            The Perfect Choise For a Better Style
          </div>
          <img className="img" src={jackets} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
