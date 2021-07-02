import React, { Component, useState, useEffect } from 'react'
import Navigation from '../../Navigation';
import Image from '../../../images/aboutus-cover.jpg';
import P1 from '../../../images/p1.gif';
import P2 from '../../../images/p2.gif';
import P3 from '../../../images/p3.gif';


import "./styles.css"
import Footer from '../../Footer';
import RecentsPostsCardHolder from '../../CardHolder/RecentsPostsCardHolder';
import SocialFollow from '../../SocialFollow';
import { useHistory } from 'react-router-dom';
import RightPanel from '../../RightPanel';
import KnowMoreClatPage from '../KnowMoreClatPage';
import { rdb } from '../../../firebase';

function AboutCLATExam() {

    const history = useHistory();
    const [selected, setSelected] = useState("");
    const [state, setState] = useState({
        entries: [],
        db: rdb.ref("/Posts/KnowMoreClatPosts"),
        selected: "clat_career_2"

    })



    useEffect(() => {
        state.db.on("value", onDataChange);



        return () => {
            state.db.off("value", onDataChange);
        }

    }, [])


    const onData = (items) => {
        items.forEach(item => {
            let key = item.key;
            let data = item.val()
            console.log(data)
        })
    }



    const onDataChange = (items) => {
        let entries = []

        items.forEach(item => {
            let key = item.key;
            let data = item.val();
            entries.push({
                key: key,
                id: data.id,
                title: data.title,
                articleDate: data.articleDate,
                imageUrl: data.imageUrl,
                desc: data.desc,
            });


        });


        entries.sort((a, b) => {
            if (a.orderNo < b.orderNo)
                return 1
            else
                return -1
        })

        setSelected(entries[0].key)

        setState({
            entries: entries
        })

    }




    const handleClick = () => {

    }



    return (

        <>

            <Navigation />
            <div className="ns-container container">





                <div className="row ">
                    <div className="col-xs-12   col-lg-3 mt-4 ">

                        <div className="card" style={{ border: 'none', margin: '10px', borderRadius: '5px', height: '100%' }}>
                            <div className="card-body">
                                <h4 className="card-title" style={{ color: '#faad14' }} ><u>Qui</u>ck Links</h4>
                                <ul className="ul-font" style={{ color: '#111111', margin: '25px', listStyleType: 'square' }}>


                                    {
                                        state.entries.map((entry, index) => {
                                            return <li key={index} onClick={() =>
                                                setSelected(entry.key)
                                            }>{entry.title} </li>
                                        })
                                    }
                                    {/* 
                                    <li>Best Way To Prepare for CLAT GK 2021</li>
                                    <li>Career in law after CLAT exam</li>
                                    <li>CLAT 2020 Analysis</li>
                                    <li>How to prepare for Legal Aptitude</li>
                                    <li>How to prepare for CLAT logical reasoning section</li>
                                    <li>How do I study CLAT along with my 12th boards?</li>
                                    <li>CLAT 2020 GK Analysis</li>
                                    <li>What Qualities Do Good Law Student Have</li>
                                    <li>Last minute tips for CLAT 2021</li>
                                    <li>List of top Private Colleges for Law</li>
                                    <li>How to Prepare For CLAT as a Student of Class 11th?</li>
                                    <li>Difference between LSAT, CLAT and AILET</li>
                                    <li>Mistakes to avoid before CLAT exam</li>
                                    <li>How to crack clat exam</li> */}
                                </ul>
                            </div>

                            <div className="card-body">


                            </div>
                        </div>
                    </div>


                    <div className="col-xs-12   col-lg-9 mt-4 ">


                        <div className="card px-4 py-2" style={{ border: 'none', margin: '10px', borderRadius: '5px', height: '100%' }}>
                            <div className="card-body">
                                <KnowMoreClatPage id={selected} />
                            </div>


                        </div>
                    </div>

                </div>


            </div>


            <Footer />

        </>
    )

}


export default AboutCLATExam;