import React from "react";
export default function footer() {
  return (
    <div className="grad1 row justify-content-md-center">
      <div>
        <div className="container-fluid">
          <div className="row my-5">
            <div className="col-md-6 footerText"><h3>Try Our Services</h3> <h3>Free For 30</h3></div>
            <div className="col-md-6">
              <div className="emailButton">
                <input
                  type="text"
                  placeholder="Type your email address"
                  className="emailSub"
                ></input>

                <button className="subButton">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
