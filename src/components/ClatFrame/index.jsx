import React, { useState } from 'react';
import Navigation from '../Navigation';
import ClatSidebar from '../ClatSidebar';
import "./styles.css";
import ClatSection from '../Pages/ClatSection';
import { useEffect } from 'react';



function ClatFrame(props) {


  const [isActive, setActive] = useState("true");
  const [state,setState] = useState(JSON.parse(window.localStorage.getItem('state')) || {activeTab : -1, section : "Section00" });

  function handleToggleButton() {
    setActive(!isActive);
  };

  function setSection(section){
    setState({...state,
      section : section
    })
  }

  useEffect(()=>{
    window.localStorage.setItem('state', JSON.stringify(state));
  },[state])

  



  return (
    <div className="wrapper">
      <ClatSidebar isActive={isActive} setSection={setSection} setState={setState}  activeTab={state.activeTab} tabs={props.tabs}/> 
      
      <div id="content">
        <Navigation />
        <button id="slide-btn" type="button" className="btn btn-primary" onClick={handleToggleButton}></button>

        <ClatSection section={state.section}  setSection={setSection}/>
        {/* <Main handleToggleButton={handleToggleButton}/> */}
      </div>
    </div>
  );
}

export default ClatFrame;
