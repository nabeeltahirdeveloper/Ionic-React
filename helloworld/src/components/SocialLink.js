import React from 'react'
import fb_icon from '../assets/images/fb_icon.png'
import fb_rate from '../assets/images/fb_rate.png'
import cpa_icon from '../assets/images/cpa_icon.png'
import cpa_rate from '../assets/images/cpa_rate.png'
import searchen from '../assets/images/searchen.png'
export default function SocialLink() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 mx-5">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={fb_icon}  alt="img"></img>
                            </div>
                            <div className="col-md-6">
                                <h5>Facbook Ratings</h5>
                                <img src={fb_rate} alt="img"></img>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mx-5">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={cpa_icon}  alt="img"></img>
                            </div>
                            <div className="col-md-6">
                                <h5>CPA Ratings</h5>
                                <img src={cpa_rate} alt="img"></img>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mx-5">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={searchen}  alt="img"></img>
                            </div>
                            <div className="col-md-6">
                                <h5>Searchen Ratings</h5>
                                <img src={cpa_rate} alt="img"></img>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
