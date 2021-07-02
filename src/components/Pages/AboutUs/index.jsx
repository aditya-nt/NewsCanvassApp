import React, { Component, useState, useEffect } from 'react'
import Navigation from '../../Navigation';
import Image from '../../../images/aboutus-cover.jpg';
import P1 from '../../../images/p1.gif';
import P2 from '../../../images/p2.gif';
import P3 from '../../../images/p3.gif';


import "./styles.css"
import Footer from '../../Footer';
import RecentsPostsCardHolder from '../../CardHolder/RecentsPostsCardHolder';
import SocialFollow from '../../SocialFollow';
import { useHistory } from 'react-router-dom';
import RightPanel from '../../RightPanel';

function AboutUs() {

    const history = useHistory();




        return (

            <>

                <Navigation />
                <div className="ns-container container">

                    <div className="row ">
                        <div className="col-md-8 col-sm-12 p-2  ">
                            <div className="row">
                                <h3 className="text-center" style={{ color: 'rgb(255 255 255)' }}>
                                    ABOUT US
                                </h3>
                            </div>

                            <br />


                            <img className="col" src={Image} />



                            <br />
                            <br />





                            <p style={{ color: 'white' }}>
                                Newscanvass is a team of enthusiasts focused towards analysing events and trying to drive impact of what is happening across the globe.
                                Newscanvass with its decade of experience in analysis has been successful in touching lives of more than 100000+ users on its various platforms. We at Newscanvass believe in just one thing which is that News events have an impact and knowing just the headlines cannot make you aware of what is happening across the globe.
                            </p>
                            <br />
                            <p style={{ color: 'white' }}>
                                It all started with analysing stocks to analysing companies balance sheet which led to the ideation of analysing a small policy change leading to a quantum impact on the economy. With all this in mind and various policy changes and news events happening all the time it had become the need of the hour to analyse the impact and overcome the headlines phenomena because news is not just headlines.
                            </p>
                            <br />

                            <p style={{ color: 'white' }}>

                                When one says NEWS the word itself is holistic and covers all the four directions which North, East, West and South which can be encompassed to a circle one cannot even imagine. So, if one has to know a news it cannot be just the headlines but the entire story behind what’s in it for the readers. That is what our inspiration has been since inception of providing the right NEWS to our readers.
                            </p>


                            <br />
                            <br />

                            <h5 className="text-center" style={{ color: 'white' }}>Want to learn how we analyse news? Come join us in the journey to change the way people look at NEWS.</h5>
                            <br />
                            <br />

                            <h4 className="text-center" style={{ color: '#ff9800' }}> <u> WANT TO KNOW MORE ABOUT US</u></h4>

                            <br />
                            <br />
                            <div className="row">
                                <div className="col">
                                    <img className="col-md-12 col-sm-12" src={P1} />

                                </div>
                                <div className="col">
                                    <img className="col-md-12 col-sm-12" src={P2} />

                                </div>
                                <div className="col">
                                    <img className="col-md-12 col-sm-12" src={P3} />

                                </div>
                            </div>






                        </div>

                        <div className="col justify-content-center">

                        </div>

                        <div className="col-md-3 col-sm-12  ">
                           <RightPanel limit={7}/>
                        </div>
                        </div>
                    </div>


                    <Footer />

            </>
                )

}


export default AboutUs;