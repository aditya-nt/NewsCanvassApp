import React from "react";
import './styles.css';
import Logo from "../../images/NClogo.jpg"
import RecentsPostsCardHolder from "../CardHolder/RecentsPostsCardHolder";
import PopularPostsCardHolder from "../CardHolder/PopularPostsCardHolder";
import { useHistory } from "react-router-dom";


const Footer = () => {
 
    const history = useHistory();

    return (
        <div className="mt-5  footer">
            {/* <Container className="" style={containerStyle} fluid> */}
            <div className="container  fluid "  >
                <br/>
            <div className="row mt-10 ">
           

                    <div className="col-lg-4 col-xs-12 mt-sm-2   mb-sm-5   about-company">
                        <h5 className="  ml-3">About Us</h5>
                        <hr />
                        {/* <hr style={{width:50%;text-align:left;margin-left:0}}/> */}


                        <div className="p-3">    
                            <img className="center mb-4" src={Logo}></img>
                            <br />
                            <br />
                            <p className=" text-50">Canvassites don’t just know the news, they know how will it impact our economy /industry/business. Only Canvassities can link the chain and give the impact. </p>
                            <p><a href="#"><i className="fa fa-facebook-square mr-1"></i></a><a href="#"><i className="fa fa-linkedin-square"></i></a></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-xs-12  mt-sm-2   mb-sm-5    links">
                        <h5 className="mt-lg-0 mt-sm-3  ml-3">Recent Posts</h5>
                        <hr />
                        <RecentsPostsCardHolder history={history} limit={4}/>
                    </div>

                    <div className="col-lg-4 col-xs-12 mt-2 location">
                        <h5 className="mt-lg-0 mt-sm-4  ml-3">Popular Posts</h5>
                        <hr />
                        <PopularPostsCardHolder history={history}/>
                    </div>

                </div>
                <hr/>
                <div className="row ">
                    <div className="col " onClick={() => window.scrollTo(0,0)}>
                    © 2019. All Rights Reserved.
                    </div>
                </div>

            </div>

        </div>
    );
};
export default Footer;
