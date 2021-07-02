import React from 'react';
import './styles.css'

function Card_J({entry , index ,setSection}) {
    let column = "col-lg-"+entry.Width+" m-4"

    const redirect = () => {
        if(entry.RedirectType === "Section")
        setSection(entry.RedirectTo)
        else if(entry.RedirectType === "Link")
        window.location.replace(entry.RedirectTo);
    }


    return (
        <div className={column} key={index}>
            <div className="thing-J" onClick={redirect}>
                <h4 className="text-center">{entry.CardText} </h4>
            </div>
        </div>

    );
}


export default Card_J;