import React from "react";
import SpImage from "../assets/images/Supportimage.png"
export default function Support() {
  return (
    <div>
        <div className="whyAce">
            <center>
                <h4>
                    <span>
                        Why Ace Cloud
                    </span>
                    <span className="hosting">
                        Hosting?
                    </span>
                </h4>
            </center>
        </div>
      <div className="row container mx-5">
        <div className="col-md-12 col-lg-6">
          <div>
            <div className="row"></div>
            <div className="dot"></div>
            <h3 className="supportHeading">Always On Support</h3>
          </div>
          <hr className="supportHr"></hr>
          <p className="supportP">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et 
          </p>
        </div>
        <div className="col-md-12 col-lg-6">
        <img className="supportImage" src={SpImage} alt="img"></img>
        </div>
      </div>
    </div>
  );
}
