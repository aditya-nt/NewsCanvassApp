import React, { Component } from 'react';
import Navigation from '../../Navigation';

import "./styles.css"

export default class HomeCard extends Component {
    render() {
        return (
            <div className="row">

                <div className="col-xs-12 col-md-8" style={{display : 'flex'}}>
                    <div className="hero_text">
                        <h1>NEWS SIMPLIFIED…</h1>
                        <br/>
                        <h5>
                            Canvassites Don’t Just Know The News, They Know How Will It Impact Our Economy /Industry/Business. Only Canvassities Can Link The Chain And Give The Impact..
                        </h5>
                    </div>
                </div>
                <div className="col-xs-12 col-md-4">

                    <div className="hero_image">
                        <img src="https://secureservercdn.net/198.71.233.179/qht.b4c.myftpupload.com/wp-content/uploads/2021/05/NC-Homepage.jpg" alt="Newscanvass" data-opt-lazy-loaded="false" />
                    </div>
                </div>




            </div>
        )
    }
}
