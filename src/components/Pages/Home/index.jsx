import React from 'react';
import Footer from '../../Footer';
import Navigation from '../../Navigation';
import { useHistory } from "react-router-dom";

import HomeCard from '../../Posts/HomeCard';
import NewsDecodedCard from '../../Posts/NewsDecodedCard';
import NewsSimplifiedCard from '../../Posts/NewsSimplifiedCard';
import "./styles.css";
import NewsDecodedCardHolder from '../../CardHolder/NewsDecodedCardHolder';
import NewsSimplifiedCardHolder from '../../CardHolder/NewsSimplifiedCardHolder';
// import NewsDecodedCardHolder from '../../CardHolder/NewsDecodedeCardHolder';

function Home(props) {
    const history = useHistory()

    const handleVA_NS = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
          });
        history.push("/NewsSimplifiedPage")
    }

    const handleVA_ND = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
          });
        history.push("/NewsDecodedPage")

    }


    return (
        <React.Fragment>
            <Navigation />

            <div className="container px-5">


                <br />
                <br />
                <div className="row">

                    <HomeCard />

                </div>
                <br />
                <br />

                <div className="row">

                    <div className="col-3 ">
                        <h2 className="home_gallery_title" style={{ color: '#afafaf' }}>News Simplified</h2>
                    </div>
                    <div className="col-7 p-0">
                        <hr className="hr-my" />
                    </div>
                    <div className="col-2 p-0 view-all-the" style={{ display: 'flex', justifyContent: 'flex-end', alignContent: 'flex-end' }}>
                        <h5 style={{ color: '#ff9800' }} onClick={handleVA_NS}>
                            View All

                        </h5>
                    </div>

                </div>
                <br />
                <br />

                <div className="row">

                    <NewsSimplifiedCardHolder  history={history}/>


                </div>


                <br />
                <br />
                <br />
                <br />

                <div className="row">
                    <div className="col-3 ">
                        <h2 className="home_gallery_title" style={{ color: '#afafaf' }}>News Decoded</h2>
                    </div>
                    <div className="col-7 p-0">
                        <hr className="hr-my" />
                    </div>
                    <div className="col-2 p-0 view-all-the" style={{ display: 'flex', justifyContent: 'flex-end', alignContent: 'flex-end' }}>
                        <h5 style={{ color: '#ff9800' }} onClick={handleVA_ND}>
                            View All

                        </h5>
                    </div>

                </div>
                <br />
                <br />

                    <NewsDecodedCardHolder  history={history} />   
                    {/* <NewsDecodedCardHolder/>    */}


                <br />
                <br />

            </div>


            <Footer />
        </React.Fragment>
    );
}

export default Home;