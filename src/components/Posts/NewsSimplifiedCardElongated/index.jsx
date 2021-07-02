import React, { Component } from 'react';

import './styles.css';



export default class NewsSimplifiedCardElongated extends Component {

    constructor(props) {
        super(props)
    }


    render() {

        // const text = convert(this.props.entry.desc, {
        //     wordwrap: 130
        //   });

        //   console.log("text",text)

        var text2 = this.props.entry.desc.replace(/(<([^>]+)>)/g, "");
        var text = text2.slice(0,150);

        return (

            <div className="post_box_long mb-2"
                onClick={() => this.props.history.push("/NewsSimplifiedPosts/" + this.props.entry.id)}>




                <div className="row" >

                    <div className="col-md-4 col-sm-12 ">
                        <img src={this.props.entry.imageUrl} alt="" width="300" height="200"/>

                    </div>

                    <div className="col-md-8 col-sm-12 myCol">
                        <h5>{this.props.entry.title}</h5>
                        <br/>
                        <p >{text}.. <b style={{color : 'orange'}}>ReadMore</b></p>
                    </div>
                </div>
            </div>
        )

    }
}





