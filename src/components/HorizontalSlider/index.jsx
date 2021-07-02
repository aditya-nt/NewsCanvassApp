import React, { Component } from 'react'
import { rdb } from '../../firebase'
import { Row, Col, ListGroup } from "react-bootstrap"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import "./styles.css"


import {firebase} from "../../firebase"
import { useHistory } from 'react-router-dom';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}



function HorizontalSlider(props) {
   const history = useHistory()
  return (
    <HorizontalSliderChild history={history}/>
  );
}


class HorizontalSliderChild extends Component {

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

  viewArticle(data) {

  }


  onNewsDecodedDataChange(items) {
    let entries = [];

    items.forEach((item) => {
      let key = item.key;
      let data = item.val();

      let imgs = []
      imgs = data.videoUrl.split('/')

      const imageUrl = "https://img.youtube.com/vi/" + imgs[imgs.length - 1] + "/0.jpg"


      entries.push({
        key: key,
        date: data.date,
        desc: data.desc,
        email: data.email,
        id: data.id,
        clickCount: data.ClickCount,
        rawDate: data.rawdate,
        type: 'NewsDecodedPosts',
        imageUrl: imageUrl,
        articleDate: data.articleDate,
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
        rawDate: data.rawdate,
        type: 'NewsSimplifiedPosts',
        clickCount: data.ClickCount,
        imageUrl: data.imageUrl,
        articleDate: data.articleDate,
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

  handleClicks = (entry) => {

    this.addClick(entry)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
    this.props.history.push("/" + entry.type + "/" + entry.id)
  }




  addClick(entry) {
    const updates = {};
    updates[`/Posts/${entry.type}/${entry.id}/ClickCount`] = firebase.database.ServerValue.increment(1);
    firebase.database().ref().update(updates);
  }


  planCard = (entry, index) => {

    return (


      <ListGroup.Item className="data-slide" key={entry.id} onClick={() => this.handleClicks(entry)} style={{margin: '10px'}}>
            <img onClick={() => this.viewArticle(entry)} src={entry.imageUrl} className="img-fluid  mb-4" alt="things" width="100px" height="100px" />
          <br />
            <h6>{entry.title} </h6>
            {entry.articleDate}

      </ListGroup.Item>

    )


  }


  render() {


    if(this.props.news === 'decoded')
    var entries = this.state.entries2
    else
    var entries = this.state.entries1

    entries.sort((a, b) => {
      if (a.rawDate < b.rawDate)
        return 1
      else
        return -1
    })

    entries = entries.slice(0, this.props.limit)

    const containerStyle = {
      marginTop: '70px',
    }


    return (


      <Carousel 
      swipeable={true}
  draggable={true}
  showDots={true}
  responsive={responsive}
  // ssr={true} // means to render carousel on server-side.
  // infinite={true}
  // autoPlay={this.props.deviceType !== "mobile" ? true : false}
  // autoPlaySpeed={1000}
  keyBoardControl={true}
  // customTransition="all .5"
  // transitionDuration={5000000}
  containerClass="carousel-container"
  // removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-10-px">
        {entries &&
          entries.map((entry, index) => (
            this.planCard(entry, index)
          ))}

      </Carousel>

    )

  }
}


export default HorizontalSlider;