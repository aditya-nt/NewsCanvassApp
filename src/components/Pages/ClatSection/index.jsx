import React, { Component, useState, useEffect } from 'react'
import { rdb } from '../../../firebase'
import Card_A from './Card_A';
import Card_B from './Card_B';
import Card_C from './Card_C';
import Card_D from './Card_D';
import Card_E from './Card_E';
import Card_F from './Card_F';
import Card_G from './Card_G';
import Card_H from './Card_H';
import Card_I from './Card_I';
import Card_J from './Card_J';
import Card_K from './Card_K';
import Card_L from './Card_L';
import "./styles.css";







function ClatSection(props) {

    const [entries, setEntries] = useState([])
    const [db, setDb] = useState(rdb.ref("Pages/ClatPage/Sections/" + props.section))

    function onDataChange(items) {
        let newentries = [];

        items.forEach((item) => {
            let key = item.key;
            let data = item.val();
            newentries.push(data);
        })

        setEntries(newentries)
    }

    useEffect(() => {
        db.off("value", onDataChange)
        setDb(rdb.ref("Pages/ClatPage/Sections/" + props.section))

    }, [props.section])


    useEffect(() => {
        db.on("value", onDataChange)
    }, [db])
    useEffect(() => {
        db.on("value", onDataChange)
        return () => {
            db.off("value", onDataChange)
        }
    }, [])


    const planCard = (entry, index) => {
        switch (entry.CardType) {
            case 'Card_A':
                return <Card_A entry={entry} index={index} setSection={props.setSection} key={index} />
            case 'Card_B':
                return <Card_B entry={entry} index={index} setSection={props.setSection} key={index} />
            case 'Card_C':
                return <Card_C entry={entry} index={index} setSection={props.setSection} key={index} />
            case 'Card_D':
                return <Card_D entry={entry} index={index} setSection={props.setSection} key={index} />
            case 'Card_E':
                return <Card_E entry={entry} index={index} setSection={props.setSection} key={index} />
            case 'Card_F':
                return <Card_F entry={entry} index={index} setSection={props.setSection} key={index} />
                case 'Card_G':
                    return <Card_G entry={entry} index={index} setSection={props.setSection} key={index} />
                    case 'Card_H':
                        return <Card_H entry={entry} index={index} setSection={props.setSection} key={index} />
                        case 'Card_I':
                            return <Card_I entry={entry} index={index} setSection={props.setSection} key={index} />
                            case 'Card_J':
                                return <Card_J entry={entry} index={index} setSection={props.setSection} key={index} />
                                case 'Card_K':
                                    return <Card_K entry={entry} index={index} setSection={props.setSection} key={index} />
                                    case 'Card_L':
                                        return <Card_L entry={entry} index={index} setSection={props.setSection} key={index} />
                        // case 'Card_C':
            //     return <Card_C entry={entry} index={index} setSection={props.setSection} />
            default:
                return null;
        }


    }


    return (
        <div className="container p-5">
            <div className="opp-row row ">
                {entries &&
                    entries.map((entry, index) => (
                        planCard(entry, index)
                    ))}
            </div>
        </div>
    );
}




export default ClatSection;