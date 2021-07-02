import React, { Component, useState, useEffect } from 'react'
import { rdb } from '../../../firebase'
import Navigation from '../../Navigation';
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";

import ImageLoader from "react-load-image";
import "./styles.css"
import Footer from '../../Footer';
import RightPanel from '../../RightPanel';
import { Gif } from "../../../images/dark-loader.gif";

function Preloader(props) {
    return <h1></h1>;
  }


export default class NewsSimplified extends Component {

    constructor(props) {
        super(props);
        this.onDataChange = this.onDataChange.bind(this);
        this.viewArticle = this.viewArticle.bind(this);

        this.state = {
            db: rdb.ref("/Posts/NewsSimplifiedPosts"),
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
        this.state.db.child(this.props.match.params.id).on("value", this.onDataChange);

        this.scrollToTop()
    }

    componentDidUpdate() {


        this.state.db.child(this.state.id).off("value", this.onDataChange);

        if (this.state.id !== this.props.match.params.id) {
            this.state.db.child(this.props.match.params.id).on("value", this.onDataChange);
        }

    }

    componentWillUnmount() {
        this.state.db.child(this.props.match.params.id).off("value", this.onDataChange);
    }


    render() {




        return (

            <>

                <Navigation />
                <div className="ns-container container">

                    <div className="row px-4">
                        <div className="col-md-8 col-sm-12 p-2">
                            <div className="row">
                                <h4 style={{ color: 'rgb(235 174 52)' }}>
                                    {this.state.title}
                                </h4>
                            </div>

                            <div className="row" style={{ marginLeft: "0px" }}>
                                {this.state.articleDate}
                            </div>
                            <br />



                            {/* <img className="col-md-10 col-sm-12" src={this.state.imageUrl} /> */}

                            <ImageLoader src={this.state.imageUrl}>
                                <img />
                                <div>Fetching Url</div>
                                <Preloader />
                            </ImageLoader>

                            {/* <div className="row">
                                <div className="container" dangerouslySetInnerHTML={{ __html: this.state.desc }} />
                            </div> */}

                            <br />
                            <br />

                            <div dangerouslySetInnerHTML={{ __html: this.state.desc }} />

                            <br />
                            <br />

                            {/* <ReactQuill value={this.state.desc } theme="bubble" readOnly /> */}
                        </div>

                        <div className="col">
                        </div>

                        <div className="col-md-3 col-sm-12  ">
                            <RightPanel limit={10} />
                        </div>

                        {/* <div className="col-6">
                            <div className="row">
                                <h4>
                                    {this.state.title}
                                </h4>
                            </div>

                            <div className="row" style={{ marginLeft: "0px" }}>
                                {this.state.articleDate}
                            </div>

                            <img className="ns-image" src={this.state.imageUrl} />

                            <div className="row">
                                <div className="container" dangerouslySetInnerHTML={{ __html: this.state.desc }} />
                            </div>
                        </div> */}
                    </div>
                </div>


                <Footer />

            </>
        )

    }
}
