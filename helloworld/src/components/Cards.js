import React from "react";
import p1 from "../assets/images/men1.png";
import p2 from "../assets/images/men2.png";
import p3 from "../assets/images/men3.png";
import stars from "../assets/images/cpa_rate.png";

export default function cards() {
  return (
    <div>
        <center>
        <div className="container-fluid">
            <h4> <span className="cardHeading1">Customer </span>
            <span className="cardHeading2">Testimonials</span></h4>
        </div>
        </center>
      <div className="container">
        <div className="row">
          <div className="col-md-1 d-none d-md-block">
            <span className="left"></span>
          </div>
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-4 d-none d-md-block">
                <div className="card">
                  <div className="fadeCardBg">
                    <img src={p1} className="card-img-top cardimg" alt="..." />
                  </div>
                  <div className="card-body">
                    <div className="card-text">
                      <center>
                        <h4 className="FadeCardHeading">Name one</h4>
                        <img src={stars} alt="..."></img>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry...
                        </p>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="maincard">
                  <div className="mainCardBg">
                    <img src={p2} className="card-img-top cardimg" alt="..." />
                  </div>
                  <div className="card-body">
                    <div className="card-text">
                      <center>
                        <h4 className="FadeCardHeading">Name Two</h4>
                        <img src={stars} alt="..."></img>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry...
                        </p>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-none d-md-block">
                <div className="card">
                  <div className="fadeCardBg">
                    <img src={p3} className="card-img-top cardimg" alt="..." />
                  </div>
                  <div className="card-body">
                    <div className="card-text">
                      <center>
                        <h4 className="FadeCardHeading">Name Three</h4>
                        <img src={stars} alt="..."></img>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry...
                        </p>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1 d-none d-md-block">
            <span className="right"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
