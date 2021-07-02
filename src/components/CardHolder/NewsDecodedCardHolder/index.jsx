import React, { Component } from 'react'
import {  rdb } from '../../../firebase'
import NewsDecodedCard from '../../Posts/NewsDecodedCard';


export default class NewsDecodedCardHolder extends Component {

    constructor(props) {
        super(props);
        this.onDataChange = this.onDataChange.bind(this);
        this.viewArticle = this.viewArticle.bind(this);

        this.state = {
            entries: [],
            db: rdb.ref("/Posts/NewsDecodedPosts")
        }
    }

    viewArticle(data) {

    }


    onDataChange(items) {
        let entries = [];

        items.forEach((item) => {
            let key = item.key;
            let data = item.val();
            entries.push({
                key: key,
                date: data.date,
                desc: data.desc,
                email: data.email,
                id: data.id,
                videoUrl: data.videoUrl,
                title: data.title,

            });
        })


        this.setState({
            entries: entries
        })

    }

    componentDidMount() {
        this.state.db.on("value", this.onDataChange);
    }

    componentWillUnmount() {
        this.state.db.off("value", this.onDataChange);
    }



    planCard = (entry, index) => {

        return (


            <div key={index}  className="col-xs-12 col-sm-6 col-lg-3"><NewsDecodedCard history={this.props.history} entry={entry}/></div>


        )


    }


    render() {



        const { entries } = this.state;


      

        return (


            // <ListGroup variant="flush" xl={12} lg={12} md={12} sm={12} xs={12}>




            //     {entries &&
            //         entries.map((entry, index) => (
            //             this.planCard(entry, index)
            //         ))}




            //     <span>
            //     </span>
            // </ListGroup>

            <div className="row">

                {entries &&
                    entries.map((entry, index) => (
                        this.planCard(entry, index)
                    ))}

                {/* <div className="col-xs-12 col-sm-6 col-lg-3"><NewsSimplifiedCard history={history} /></div>
                <div className="col-xs-12 col-sm-6 col-lg-3"><NewsSimplifiedCard history={history} /></div>
                <div className="col-xs-12 col-sm-6 col-lg-3"><NewsSimplifiedCard history={history} /></div> */}

            </div>




        )

    }
}
