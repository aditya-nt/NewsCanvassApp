import React, { Component, useState, useEffect } from 'react'
import { rdb } from '../../../firebase'
import Navigation from '../../Navigation';
import Footer from '../../Footer';
import "./styles.css"
import RightPanel from '../../RightPanel';
import HorizontalSlider from '../../HorizontalSlider';


function YouTube(props) {
    var videoSrc =
        props.video + "?autoplay=" +
        props.autoplay + "&rel=" +
        props.rel + "&modestbranding=" +
        props.modest;
    return (
        <div className="y-container">
            <iframe className="y-player" type="text/html" width="100%" height="100%"
                src={videoSrc}
                frameborder="0" />
        </div>
    );
}


export default class NewsDecoded extends Component {

    constructor(props) {
        super(props);
        this.onDataChange = this.onDataChange.bind(this);
        this.viewArticle = this.viewArticle.bind(this);

        this.state = {
            db: rdb.ref("/Posts/NewsDecodedPosts"),
            key: "",
            id: "none",
            title: "none",
            articleDate: "none",
            videoUrl: "https://www.youtube.com/embed/",
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
            videoUrl: data.videoUrl,
            // published: data.published,
            // submitted: data.submitted,

        });

    }

    componentDidMount() {
        this.state.db.child(this.props.match.params.id).on("value", this.onDataChange);
    }

    componentWillUnmount() {
        this.state.db.child(this.props.match.params.id).off("value", this.onDataChange);
    }

    componentDidUpdate() {
        this.state.db.child(this.state.id).off("value", this.onDataChange);

        if (this.state.id !== this.props.match.params.id) {
            this.state.db.child(this.props.match.params.id).on("value", this.onDataChange);

        }

    }


    render() {


        const containerStyle = {
            marginTop: '70px',
        }

        console.log(this.state.title)

        return (



            <>

                <Navigation />
                <div className="ns-container container">
                    <div className="row">
                        <h4 style={{ color: 'rgb(235 174 52)' }}>
                            {this.state.title}
                        </h4>

                    </div>

                    <div className="row" style={{ marginLeft: "0px" }}>
                        {this.state.articleDate}
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-md-8 ">
                            <div className="row">
                                <YouTube video={this.state.videoUrl} autoplay="0" rel="0" modest="1" />

                            </div>

                            <br />
                            <hr />
                            <div className="text-center">0 comments</div>
                            <hr />
                            <br />
                            <br />
                            <h5 className="text-center" style={{ color: 'white' }}>Related Articles</h5>
                            <br />
                            <br />

                            <HorizontalSlider news='decoded'/>

                            <br />
                            <br />

                        </div>
                        <div className="col"></div>

                        <div className="col-sm-12 col-md-3 ">
                            <RightPanel limit={5} />
                        </div>
                    </div>


                </div>


                <Footer />

            </>

        )

    }
}

// <div className="row">
//                     <div class="embed-responsive embed-responsive-16by9">
//                         <iframe class="embed-responsive-item" src={this.state.videoUrl}></iframe>
//                     </div>

//                 </div>


{/* <iframe width="853" height="480" src="https://www.youtube.com/embed/tBnV3RoYdTg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */ }