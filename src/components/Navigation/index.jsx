import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import "./styles.css";
import { useAuth } from "../../contexts/AuthContext"
import { auth } from '../../firebase';

import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';



function Navigation(props) {
    const history = useHistory()
    const { currentUser } = useAuth()
    const [modalVisible, setModalVisible] = useState(false)


    function handleLogin() {
        history.push("/login")
    }

    function handleLogout() {
        // history.push("/login")
        setModalVisible(true)
        auth.signOut()
    }

    function handleHome() {
        history.push("/")
    }
    function handleAboutUs() {
        history.push("/aboutus")
    }
    function handleNewsDecodedPage() {
        history.push("/NewsDecodedPage")
    } function handleNewsSimplifiedPage() {
        history.push("/NewsSimplifiedPage")
    }

    function handleClat() {
        history.push("/CLAT-Section")
    }

    function handleContactUs() {
        history.push("/contactus")
    }


    function handleSubscribe() {
        history.push("/Subscribe")
    }

    function handleAboutClat() {
        history.push("/About-Clat-Exam")
    }


    function handleEduction() {
        history.push("/education")
    }
    return (
        <>
            {/* <NewModal visible={true} text="You have been successfully logged out."/> */}

            <nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: '#ff9800' }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">| <b>NewsCanvass</b></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item" onClick={handleHome}>
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item" onClick={handleEduction}>
                                <a className="nav-link" href="#">Education</a>
                            </li>
                            <li className="nav-item" onClick={handleClat}>
                                <a className="nav-link" href="#">CLAT Section</a>
                            </li>
                            {/* <li className="nav-item">
                            <a className="nav-link" href="#">Know more about CLAT</a>
                        </li>*/}

                            {/* <li className="nav-item" onClick={handleNewsDecodedPage}>
                                <a className="nav-link" href="#">News Decoded</a>
                            </li>
                            <li className="nav-item" onClick={handleNewsSimplifiedPage}>
                                <a className="nav-link" href="#">News Simplified</a>
                            </li> */}
                            <li className="nav-item" onClick={handleAboutClat}>
                                <a className="nav-link" href="#">About CLAT Exam</a>
                            </li>
                            <li className="nav-item" onClick={handleSubscribe}>
                                <a className="nav-link" href="#">Subscribe</a>
                            </li>
                            <li className="nav-item" onClick={handleAboutUs}>
                                <a className="nav-link" href="#">About Us</a>
                            </li>
                            <li className="nav-item" onClick={handleContactUs}>
                                <a className="nav-link" href="#">Contact Us</a>
                            </li>


                        </ul>
                        <form className="d-flex">
                            <Modal
                                title="Account"
                                style={{ top: 20 }}
                                visible={modalVisible}
                                onOk={() => setModalVisible(false)}
                                onCancel={() => setModalVisible(false)}
                            >
                                <p>You are successfully logged out. </p>
                            </Modal>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                {currentUser ? <button className="btn btn-outline-dark" type="button" onClick={handleLogout}>
                                    Sign Out
                                </button> :
                                    <button className="btn btn-outline-dark" type="button" onClick={handleLogin}>
                                        Sign In
                                    </button>
                                }
                            </ul>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navigation;