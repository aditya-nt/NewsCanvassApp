import React from 'react';
import RecentsPostsCardHolder from '../CardHolder/RecentsPostsCardHolder';
import SocialFollow from '../SocialFollow';
import ClickHere from '../../images/clickhere.png';
import { useHistory } from 'react-router-dom';


function RightPanel(props) {
    const history = useHistory()

    const handleWhySubscribe = () => {
        history.push("/Subscribe")
    }

    return (
        <>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" onClick={handleWhySubscribe}>
                                    <a className="nav-link active" id="nav-newsdecoded-tab">Why Subscribe</a>
                                </li>
                            </ul>
                                <br />

                                <div style={{ display : 'flex' , justifyContent : 'center'} } onClick={handleWhySubscribe}>

                                <img  src={ClickHere} />

                                </div>

                                <br />
                                <br />
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" >
                                        <a className="nav-link active" id="nav-newsdecoded-tab">Recent Posts</a>
                                    </li>


                                </ul>
                                <br />

                                <RecentsPostsCardHolder limit={props.limit} history={history}/>
                                <br />

                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" >
                                        <a className="nav-link active" id="nav-newsdecoded-tab">Keep In Touch</a>
                                    </li>


                                </ul>

                                <br/>

                                <SocialFollow/>   
        </>
    );
}

export default RightPanel;