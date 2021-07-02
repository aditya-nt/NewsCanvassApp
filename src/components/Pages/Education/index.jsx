import React from 'react';
import Footer from '../../Footer';
import Navigation from '../../Navigation';
import { useHistory } from "react-router-dom";


import "./styles.css";
import AnimatedSlider from '../../AnimatedSlider';
// import NewsDecodedCardHolder from '../../CardHolder/NewsDecodedeCardHolder';


import CLAT1 from "../../../images/CLAT.jpeg";
import CLAT2 from "../../../images/clat-career.jpeg";
import CLAT3 from "../../../images/BestWay.png";
import CLAT4 from "../../../images/logical-reasoning.jpeg";

import MOT1 from "../../../images/Spend-only-a-few-minutes.jpeg";
import MOT2 from "../../../images/Become-more-Knowledeable-1.jpeg";
import MOT3 from "../../../images/Stay-ahead-from-your-competition.jpeg";

import LOG1 from "../../../images/logo-1.png";



function Education(props) {
    const history = useHistory()




    return (
        <React.Fragment>
            <Navigation />
            <AnimatedSlider />


            <br />
            <br />
            <br />
            <div className="div">
                <div className="container px-5">


                    <div className="row">
                        <h2 style={{ color: '#ff9800' }}>| GK STRATEGY</h2>
                    </div>
                    <br />
                    <div className="row">

                        <div className="col-md-6 col-xs-12 p-4">
                            <br />

                            <span style={{ color: 'white', fontSize: '19px' }}> <b>Are You Preparing For GK Randomly??</b>
                            </span>
                            <br />
                            <br />
                            <p style={{ color: 'white', fontSize: '18px' }}>
                                Have you ever thought of a strategy for GK which could help you ace your score in this section?? If not it’s time to plan & strategize your preparation..We are here to help you..Open our strategy to know more.
                            </p>
                        </div>
                        <div className="col"></div>
                        <div className="col-md-5 col-xs-12">
                            <iframe src="https://drive.google.com/file/d/1NHzWS00MhIjye5yFSczZt5GnbT5ERkB0/preview" width="100%" height="300px" allow="autoplay"></iframe>
                        </div>
                    </div>
                    <br />
                    <br />

                    <hr style={{ color: '#ff9800', height: 'calc( 0.5 * 1vh)', opacity: '1' }} />

                    <div className="row ">
                        <div className="text-center" style={{ color: 'white', fontSize: '15px' }}>
                            " Perfection is Achieved Not When There Is Nothing More to Add, But When There Is Nothing Left to Take Away "

                        </div>
                    </div>

                </div>

                <br />
                <br />
                <br />


                <div className="div" style={{ background: '#ff9800' }}>
                    <div className="container px-5">
                        <br />
                        <br />

                        <div className="row">
                            <h2 style={{ color: '#000' }}>| KNOW MORE ABOUT CLAT</h2>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-xs-12 col-md-6 col-lg-3">

                                <div className="card" style={{ width: '16rem', border: 'none', borderRadius: '10px', height: '400px' }}>
                                    <img className="card-img-top" src={CLAT1} alt="Card image cap" style={{ borderRadius: '10px 10px 0px 0px', height: '134px' }} />
                                    <div className="card-body">
                                        <h5 className="card-title">Overview of CLAT 2020</h5>
                                        <p className="card-text">The common law admission test which is conducted on rotational basis by 19 National Law University.

                                        </p>
                                    </div>

                                    <div className="card-body">
                                        <a href="#" class="btn btn-secondary">Read More...</a>

                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-6 col-lg-3">

                                <div className="card" style={{ width: '16rem', border: 'none', borderRadius: '10px', height: '400px' }}>
                                    <img className="card-img-top" src={CLAT2} alt="Card image cap" style={{ borderRadius: '10px 10px 0px 0px', height: '134px' }} />
                                    <div className="card-body">
                                        <h5 className="card-title">Overview of CLAT 2020</h5>
                                        <p className="card-text">The common law admission test which is conducted on rotational basis by 19 National Law University.

                                        </p>
                                    </div>

                                    <div className="card-body">
                                        <a href="#" class="btn btn-secondary">Read More...</a>

                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-6 col-lg-3">

                                <div className="card" style={{ width: '16rem', border: 'none', borderRadius: '10px', height: '400px' }}>
                                    <img className="card-img-top" src={CLAT3} alt="Card image cap" style={{ borderRadius: '10px 10px 0px 0px', height: '134px' }} />
                                    <div className="card-body">
                                        <h5 className="card-title">Overview of CLAT 2020</h5>
                                        <p className="card-text">The common law admission test which is conducted on rotational basis by 19 National Law University.

                                        </p>
                                    </div>

                                    <div className="card-body">
                                        <a href="#" class="btn btn-secondary">Read More...</a>

                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-6 col-lg-3">

                                <div className="card" style={{ width: '16rem', border: 'none', borderRadius: '10px', height: '400px' }}>
                                    <img className="card-img-top" src={CLAT4} alt="Card image cap" style={{ borderRadius: '10px 10px 0px 0px', height: '134px' }} />
                                    <div className="card-body">
                                        <h5 className="card-title">Overview of CLAT 2020</h5>
                                        <p className="card-text">The common law admission test which is conducted on rotational basis by 19 National Law University.

                                        </p>
                                    </div>

                                    <div className="card-body">
                                        <a href="#" class="btn btn-secondary">Read More...</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />



                    </div>
                </div>

                <br />
                <br />
                <br />

                <div className="container px-5">



                    <div className="row" >
                        <h1 className="text-center" style={{ color: '#ff9800' }}>NewsCanvassEdu
                        </h1>
                    </div>
                    <br />
                    <div className="row">
                        <h5 className="text-center" style={{ color: '#ffffff' }}>We Aim To Be Your Partner In Success. "Curated Notes,Holistic Approach & Mentoring" Is What We Stand For</h5>



                    </div>
                    <br />
                    <hr style={{ color: '#ff9800', height: 'calc( 0.5 * 1vh)', opacity: '1' }} />

                    <br />

                    <div className="row">
                        <div className="col">
                            <div className="card" style={{ width: '100%', border: 'none' }}>
                                <img className="card-img-top" src={MOT1} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-text text-center">Save Time..

                                    </h5>
                                </div>
                            </div>



                        </div>
                        <div className="col">
                            <div className="card" style={{ width: '100%', border: 'none' }}>
                                <img className="card-img-top" src={MOT2} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-text text-center">Get Curated Content..

                                    </h5>
                                </div>
                            </div>



                        </div>
                        <div className="col">
                            <div className="card" style={{ width: '100%', border: 'none' }}>
                                <img className="card-img-top" src={MOT3} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-text text-center">Stay Ahead Of The Curve..


                                    </h5>
                                </div>
                            </div>



                        </div>
                    </div>
                    <br />




                </div>


                <br />
                <br />


                <div className="div" style={{ background: '#ff9800' }}>
                    <div className="container px-5">
                        <br />
                        <br />

                     
                        <br />
                        <div className="row">
                            <div className="col-xs-12 col-md-6">

                            <div className="row">
                            <h2 style={{ color: '#000' }}>| OUR COLLABORATION
</h2>
                        </div>
                        <br />

                                <div className="text-center " style={{ fontSize : '19px'}}>Our quality can be proven with the work we are doing and our collaborations just reitraite our commitments towards quality.
</div>
                            </div>
                            <div className="col-xs-12 col-md-6  " style={{ display : 'flex' , justifyContent : 'center'}}>

                                <img src={LOG1} />
                            </div>
                            
                        </div>
                        <br />
                        <br />
                        <br />



                    </div>
                </div>


            </div>

            


            <Footer />
        </React.Fragment>
    );
}

export default Education;