import React, { Component } from 'react';

import './styles.css';



export default class NewsSimplifiedCard extends Component {

    constructor(props) {
        super(props)
    }


    render() {
        return (

            <div className="post_box"
                onClick={() => this.props.history.push("/NewsSimplifiedPosts/" + this.props.entry.id)}>


                <h6>{this.props.entry.title}</h6>
                <br/>
                {/* <div className="post_bg_img" style={{ backgroundImage: 'url("https://secureservercdn.net/198.71.233.179/qht.b4c.myftpupload.com/wp-content/uploads/2021/05/financial-crisis-544944_1920.jpg")' }}>
                </div> */}

                <img src={this.props.entry.imageUrl} alt="" />
                <p>Background:- The Covid-19 pandemic and continuous lock down of Indian Economy since March 2020…</p>
                Read More <i className="fa fa-chevron-right" />
            </div>
        )

    }
}





