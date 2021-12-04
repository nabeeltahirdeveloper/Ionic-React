import React from 'react'

export const Qbanner = () => {
    return (
        <div>
            <center>
                <div className="bannerBg row">
                    <span className="qTab col-10">
                        <div className="textTab">
                            <h3 className="bannerHeading">Have Questions?</h3>
                            <h3 className="bannerHeading2">Ask our Solution Consultants</h3>
                            <hr className="bannerHr" />
                            <p className="bannerText">Call Us +1 (XXX) XXX-XXXX</p>
                        </div>
                    </span>
                    <span className="callBtn col-2">
                        <button className="call rounded-pill">Get a Call Back</button>
                    </span>
                </div>
            </center>
        </div>
    )
}
