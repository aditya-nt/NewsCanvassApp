import React, { Component, useState, useEffect } from 'react'
import { rdb } from '../../../firebase'
import Navigation from '../../Navigation';
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";

import ImageLoader from "react-load-image";
import "./styles.css"

function Preloader(props) {
    return <h1></h1>;
}


export default class KnowMoreClatPage extends Component {

    constructor(props) {
        super(props);
        this.onDataChange = this.onDataChange.bind(this);
        this.viewArticle = this.viewArticle.bind(this);

        this.state = {
            db: rdb.ref("/Posts/KnowMoreClatPosts"),
            key: "",
            id: "none",
            title: "Please Wait...",
            articleDate: "Loading...",
            imageUrl: "none",
            desc: null,

        }
    }

    viewArticle(data) {

    }


    onDataChange(item) {

        let key = item.key;
        let data = item.val();
        this.setState({
            key: key,
            id: data.id,
            title: data.title,
            articleDate: data.articleDate,
            imageUrl: data.imageUrl,
            desc: data.desc,
        });

    }

    scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
    };


    componentDidMount() {
        if (this.state.id !== this.props.id && this.props.id !== "") {


            this.state.db.child(this.props.id).on("value", this.onDataChange);

        }

        this.scrollToTop()
    }

    componentDidUpdate() {


        this.state.db.child(this.state.id).off("value", this.onDataChange);

        if (this.state.id !== this.props.id && this.props.id !== "") {
            this.state.db.child(this.props.id).on("value", this.onDataChange);
        }

    }

    componentWillUnmount() {
        this.state.db.child(this.props.id).off("value", this.onDataChange);
    }


    render() {

        return (

            <div className="know-card">
                {/* <img className="col-md-10 col-sm-12" src={this.state.imageUrl} /> */}
                <h2 style={{ color: '#faad14' }} >{this.state.title}</h2>
                <br />

                <div className="row ">
                    <div className="col d-flex justify-content-center">
                    <ImageLoader src={this.state.imageUrl}>
                        <img />
                        <div>Fetching Url</div>
                        <Preloader />
                    </ImageLoader>
                    </div>
                  
                </div>



                <br />
                <br />

                <div style={{ fontFamily: 'fantasy' }} dangerouslySetInnerHTML={{ __html: this.state.desc }} />

                <br />
                <br />
            </div>
        )

    }
}
