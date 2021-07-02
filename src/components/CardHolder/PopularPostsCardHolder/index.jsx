import React, { Component } from 'react'
import {  rdb } from '../../../firebase'
import { Row, Col, ListGroup} from "react-bootstrap"
import ColumnGroup from 'antd/lib/table/ColumnGroup';
import firebase from 'firebase';




export default class PopularPostsCardHolder extends Component {

    constructor(props) {
        super(props);
        this.onNewsDecodedDataChange = this.onNewsDecodedDataChange.bind(this);
        this.onNewsSimplifiedDataChange = this.onNewsSimplifiedDataChange.bind(this);
        this.handleClicks = this.handleClicks.bind(this);
        this.viewArticle = this.viewArticle.bind(this);

        this.state = {
            entries1: [],
            entries2: [],
            db1: rdb.ref("/Posts/NewsDecodedPosts"),
            db2: rdb.ref("/Posts/NewsSimplifiedPosts")
        }
    }

    viewArticle(data){

    }


    onNewsDecodedDataChange(items) {
        let entries = [];

        items.forEach((item) => {
            let key = item.key;
            let data = item.val();
            
            let imgs = []
            imgs = data.videoUrl.split('/')

            const imageUrl = "https://img.youtube.com/vi/"+imgs[imgs.length-1]+"/0.jpg"
            

            entries.push({
                key: key,
                date: data.date,
                desc: data.desc,
                email: data.email,
                id: data.id,
                rawDate : data.rawdate,
                clickCount : data.ClickCount,
                type : 'NewsDecodedPosts',
                imageUrl: imageUrl,
                articleDate : data.articleDate,
                title: data.title,
               
            });
        })


        this.setState({
            entries1: entries
        })


    }



    onNewsSimplifiedDataChange(items) {
        let entries = [];

        items.forEach((item) => {
            let key = item.key;
            let data = item.val();
            
            // let imgs = []
            // imgs = data.videoUrl.split('/')

            // const imageUrl = "https://img.youtube.com/vi/"+imgs[imgs.length-1]+"/0.jpg"
            

            entries.push({
                key: key,
                date: data.date,
                desc: data.desc,
                email: data.email,
                id: data.id,
                rawDate : data.rawdate,
                type : 'NewsSimplifiedPosts',
                clickCount : data.ClickCount,
                imageUrl: data.imageUrl,
                articleDate : data.articleDate,
                title: data.title,
               
            });
        })


        this.setState({
            entries2: entries
        })


    }

    componentDidMount() {
        this.state.db1.on("value", this.onNewsDecodedDataChange);
        this.state.db2.on("value", this.onNewsSimplifiedDataChange);
    }

    componentWillUnmount() {
        this.state.db1.off("value", this.onNewsDecodedDataChange);
        this.state.db2.off("value", this.onNewsSimplifiedDataChange);
    }

    handleClicks= (entry) => {

        this.addClick(entry)
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
          });
    this.props.history.push("/"+entry.type+"/" + entry.id)
    }




     addClick(entry) {
        const updates = {};
        updates[`/Posts/${entry.type}/${entry.id}/ClickCount`] = firebase.database.ServerValue.increment(1);
        firebase.database().ref().update(updates);
      }
      

    planCard = (entry, index) => {

        return (


            <ListGroup.Item className="data" key={entry.id} onClick={() => this.handleClicks(entry)}>
            <Row>
            <Col sm={4}>
                    <img onClick={() => this.viewArticle(entry)} src={entry.imageUrl} className="img-fluid  mb-4" alt="things" width="100px" height="100px" />
                </Col>
                <br />
                <Col  sm={8} xs={12} onClick={() => this.viewArticle(entry)}>
                    <h6>{entry.title} </h6>
                    {entry.articleDate}

                </Col>
            </Row>
        </ListGroup.Item>

        )


    }


    render() {



        var  entries  = [...this.state.entries1,...this.state.entries2];


        entries.sort((a,b) => {
            if(a.clickCount < b.clickCount)
            return 1
            else
            return -1
        })

        entries = entries.slice(0,4)

        const containerStyle = {
            marginTop: '70px',
        }


        return (


            <ListGroup variant="flush" xl={12} lg={12} md={12} sm={12} xs={12}>

             


                {entries &&
                    entries.map((entry, index) => (
                        this.planCard(entry, index)
                    ))}




                <span>
                </span>
            </ListGroup>

        )

    }
}
