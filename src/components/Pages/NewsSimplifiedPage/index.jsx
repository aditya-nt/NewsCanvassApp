import React, { Component } from 'react'
import { rdb } from '../../../firebase'
import Footer from '../../Footer';
import Navigation from '../../Navigation';
import NewsSimplifiedCard from '../../Posts/NewsSimplifiedCard';
import NewsSimplifiedCardElongated from '../../Posts/NewsSimplifiedCardElongated';



export default class NewsSimplifiedPage extends Component {

    constructor(props) {
        super(props);
        this.onDataChange = this.onDataChange.bind(this);
        this.viewArticle = this.viewArticle.bind(this);

        this.state = {
            entries: [],
            db: rdb.ref("/Posts/NewsSimplifiedPosts")
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
                imageUrl: data.imageUrl,
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

<NewsSimplifiedCardElongated history={this.props.history} entry={entry} />


        )


    }


    render() {



        const { entries } = this.state;



        return (

            <>

                <Navigation/>
                <div className="ns-container container " style={{paddingRight : '10%',paddingLeft : '10%'}}>


                <div className="row">
                        <div className="text-center " >
                            <h1 style={{color : 'white'}}>News Simplified</h1>
                            <br/>
                        </div>
                    </div>



                        <div className="">

                            {entries &&
                                entries.map((entry, index) => (
                                    this.planCard(entry, index)
                                ))}

                         
                        </div>


                    </div>


                <Footer />

            </>


        )

    }
}
