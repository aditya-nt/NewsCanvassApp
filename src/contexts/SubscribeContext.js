import React, { createContext, useContext, useEffect, useState } from 'react';
import { rdb } from '../firebase';
import { useAuth } from './AuthContext';


const SubscribeContext = createContext()

export const useSubsContext = () => {
    return useContext(SubscribeContext)
}

function SubscribeProvider({ children }) {
    const [loading, setLoading] = useState(true)
    const { currentUser } = useAuth() 
    const [subscribed, setSubscribed] = useState(false)
    const [plan,setPlan] = useState("NoAccessPlan")

    const [state, setState] = useState({
        subrcriber : null,
        subscribed : false,

    })


    const onDataChange = (items) => {
        let entries = []

        items.forEach(item => {
            var key = item.key
            var data = item.val()
            entries.push({
                key: key,
                email: data.email,
                planName: data.planName,
                subscribed: data.subscribed,
            })
        });

        if (entries.length !== 0) {

            setState({
                subrcriber: entries[0],
            })
            setSubscribed(entries[0].subscribed)
            setPlan(entries[0].planName)

        }
        else{
            setState({
                subscribed : false
            })
        }

     

        setLoading(false)
    }

    useEffect(() => {
        if(currentUser!==null){
        
        rdb.ref("/Subscription/Subscribers").orderByChild("email").equalTo(currentUser.email).on("value", onDataChange);
        return () => {
            rdb.ref("/Subscription/Subscribers").orderByChild("email").equalTo(currentUser.email).off("value", onDataChange);
        }
    }

        setLoading(false)
    }, [currentUser])

    const value =  { 
        subscriber : state.subrcriber,
        subscribed : subscribed,
        planName : plan
    }



    return (
        <SubscribeContext.Provider value={value}>
            {!loading && children}
        </SubscribeContext.Provider>
       
    );
}

export default SubscribeProvider;