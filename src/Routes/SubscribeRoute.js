import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import ClatFrame from '../components/ClatFrame';
import { useSubsContext } from '../contexts/SubscribeContext';
import { rdb } from '../firebase';

function SubscribeRoute({ component: Component, ...rest }) {
    const { subscriber, subscribed , planName } = useSubsContext()
    const  [tabs,setTabs] = useState([])

    const onDataChange = (items) => {
        let entries = []

        items.forEach(item => {

            entries.push(item.val().TabName)
            
        });

        setTabs(entries)
    }

    useEffect(() => {
        rdb.ref("/Subscription/Plans").child(planName).on('value', onDataChange)

        return () => {
            rdb.ref("/Subscription/Plans").child(planName).off('value', onDataChange)

        }
    }, [subscriber])


    return (
        <Route render={props =>
            subscribed ? <ClatFrame tabs={tabs}/> : <Redirect to="/Subscribe"></Redirect>
        }></Route>
    );
}

export default SubscribeRoute;