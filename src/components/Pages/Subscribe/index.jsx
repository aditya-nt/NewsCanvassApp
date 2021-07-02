import React, { Component } from 'react'
import { db, rdb } from '../../../firebase'
// import Navigation from '../../Navigation';
import { Form, Button, Card, Alert, Row, Col, Image } from "react-bootstrap"
import './styles.css';
import Navigation from '../../Navigation';


export default class Subscribe extends Component {


    constructor(props) {
        super(props);
        this.onDataChange = this.onDataChange.bind(this);

        this.state = {
            entries: [],
            db: rdb.ref("/Pages/SubscribePage")
        }
    }

    onDataChange(items) {
        let entries = [];

        items.forEach((item) => {
            let key = item.key;
            let data = item.val();
            entries.push({
                key: key,
                A_line1: data.A_line1,
                A_line2: data.A_line2,
                A_line3: data.A_line3,
                B_line1: data.B_line1,
                B_line2: data.B_line2,
                B_line3: data.B_line3,
                C_bull1: data.C_bull1,
                C_bull2: data.C_bull2,
                C_bull3: data.C_bull3,
                C_bull4: data.C_bull4,
                C_bull5: data.C_bull5,
                C_bull6: data.C_bull6,
                C_bull7: data.C_bull7,
                C_bull8: data.C_bull8,
                C_bull9: data.C_bull9,
                purchaseUrl : data.purchaseUrl
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


            <div className="col-lg-6 p-lg-5" key={index}>

                <div className="px-5 mb-5" style={{}}>
                    <div className=" " style={{ borderRadius: '6px 6px 6px 6px', backgroundColor: '#ffffff' }}>
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-75e2810 elementor-widget elementor-widget-text-editor" data-id="75e2810" data-element_type="widget" data-widget_type="text-editor.default">
                                <div className="elementor-widget-container">
                                    <div className="elementor-text-editor elementor-clearfix" style={{ backgroundColor: '#ffffff', paddingBottom: '5px' }}>
                                        <h4 style={{ backgroundColor: '#181a1c', padding: '30px', borderRadius: '6px 6px 0 0', textAlign: 'center' }}>
                                            {entry.A_line1 && <div><span style={{ color: '#fff' }}>{entry.A_line1}</span><br /></div>}
                                            {entry.A_line2 && <div><span style={{ color: '#fff' }}>{entry.A_line2}</span><br /></div>}
                                            {entry.A_line3 && <div><span style={{ color: '#fff' }}>{entry.A_line3}</span></div>}


                                        </h4>
                                        <h3 style={{ textAlign: 'center' }}><span style={{ color: '#fece1a' }}><strong>{entry.B_line1}</strong></span></h3>
                                        <p style={{ textAlign: 'center' }}><strong><span style={{ color: '#000000' }}><del>{entry.B_line2}</del></span></strong></p>
                                        <ul style={{ padding: '0 50px 30px' }}>
                                            {entry.C_bull1 && <li style={{ textAlign: 'left' }}><span style={{ color: '#000000' }}>{entry.C_bull1}</span></li>}
                                            {entry.C_bull2 && <li style={{ textAlign: 'left' }}><span style={{ color: '#000000' }}>{entry.C_bull2}</span></li>}
                                            {entry.C_bull3 && <li style={{ textAlign: 'left' }}><span style={{ color: '#000000' }}>{entry.C_bull3}</span></li>}
                                            {entry.C_bull4 && <li style={{ textAlign: 'left' }}><span style={{ color: '#000000' }}>{entry.C_bull4}</span></li>}
                                            {entry.C_bull5 && <li style={{ textAlign: 'left' }}><span style={{ color: '#000000' }}>{entry.C_bull5}</span></li>}
                                            {entry.C_bull6 && <li style={{ textAlign: 'left' }}><span style={{ color: '#000000' }}>{entry.C_bull6}</span></li>}
                                            {entry.C_bull7 && <li style={{ textAlign: 'left' }}><span style={{ color: '#000000' }}>{entry.C_bull7}</span></li>}
                                            {entry.C_bull8 && <li style={{ textAlign: 'left' }}><span style={{ color: '#000000' }}>{entry.C_bull8}</span></li>}
                                            {entry.C_bull9 && <li style={{ textAlign: 'left' }}><span style={{ color: '#000000' }}>{entry.C_bull9}</span></li>}


                                        </ul>
                                        {entry.purchaseUrl &&   <div className="elementor-element elementor-element-d5b7ad8 elementor-widget elementor-widget-text-editor" data-id="d5b7ad8" data-element_type="widget" data-widget_type="text-editor.default">
                                            <div className="elementor-widget-container">
                                                <div className="elementor-text-editor elementor-clearfix"><p style={{ textAlign: 'center' }}><a className="clat_btn" href={entry.purchaseUrl} target="_blank" rel="noopener">Purchase Now</a></p></div>
                                            </div>
                                        </div>}
                                    </div>

                                    <br />

                                </div>

                            </div>
                        </div>


                    </div>
                </div>

            </div>

        )


    }


    render() {



        const { entries } = this.state;

        const containerStyle = {
        }


        return (
            <div style={{ backgroundColor: "#FECE1A" }}>
                <Navigation />
                <div className="container" >
                    <div className="row justify-content-center mb-5">
                        <div className="elementor-widget-container">
                            <h1 className="elementor-heading-title elementor-size-default text-center">Subscription Plans</h1>		</div>
                    </div>
                    <div className="row">


                        {entries &&
                            entries.map((entry, index) => (
                                this.planCard(entry, index)
                            ))}

                    </div>
                </div>
            </div>
        )
    }
}
