import React, { Component } from 'react';
import "./styles.css"

export default class NewsDecodedCardElongated extends Component {

    constructor(props){
        super(props)
    }


    render() {
        
        return (
            <div className="video_box_longer  p-3" onClick={() => this.props.history.push("/NewsDecodedPosts/"+this.props.entry.id)}>

                    <h6>{this.props.entry.title}</h6>
                    <br/>
                <div className="fluid-width-video-wrapper" style={{ paddingTop: '32.4653%' }}>
                    <iframe src={this.props.entry.videoUrl} name="fitvid2" />
                </div>
                <p className=" p-0 m-0 font-weight-bold  " style={{color : '#ff9800'}}>
                Read More
                
                </p>
                <br/>
                <i className="fa fa-chevron-right" />
            </div>
        )
    }
}
