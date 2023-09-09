import React from "react";
import { Link } from "react-router-dom";
import FortMinor from "../assets/FortMinorX.jpeg";
import fortMinor from "../assets/Mike Shinoda.jpeg";
import Eminem from "../assets/Eminem.jpeg";
import pac from "../assets/2pac.jpeg";

const Home = () => {
    return (
        <>
        <section className="home-wrapper-1 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-6">
                        <div className="small-banner position-relative p-3">
                            <img 
                                src={pac} 
                                className="img-fluid rounded-3"
                                alt="2pac"
                            />
                            <div className="main-banner-content position-absolute">
                                <h4>if you buy followers from us, I will personally follow you on my secret page.</h4>
                                <h5>I can rent my employee to manage your page ideally.</h5>
                                <p>and if not, I can provide fake pages at very cheap prices, but they will not follow you over time.</p>
                                <Link className="button">BUY NOW</Link>
                            </div>
                        </div>

                        <div className="small-banner position-relative p-3">
                            <img 
                                src={Eminem} 
                                className="img-fluid rounded-3"
                                alt="Eminem"
                            />
                            <div className="main-banner-content position-absolute">
                                <h4>if you buy followers from us, I will personally follow you on my secret page.</h4>
                                <h5>I can rent my employee to manage your page ideally.</h5>
                                <p>and if not, I can provide fake pages at very cheap prices, but they will not follow you over time.</p>
                                <Link className="button">BUY NOW</Link>
                            </div>
                        </div>

                    </div>
                    <div className="col-6">
                        <div className="d-flex flex-wrap justify-content-between align-items-cenrer">


                            <div className="small-banner position-relative p-3">
                                <img 
                                    src={FortMinor} 
                                    className="img-fluid rounded-3"
                                    alt="Fort minor"
                                />
                                <div className="main-banner-content position-absolute">
                                    <h4>if you buy followers from us, I will personally follow you on my secret page.</h4>
                                    <h5>I can rent my employee to manage your page ideally.</h5>
                                    <p>and if not, I can provide fake pages at very cheap prices, but they will not follow you over time.</p>
                                    <Link className="button">BUY NOW</Link>
                                </div>
                            </div>
                            
                            <div className="small-banner position-relative p-3">
                                <img 
                                    src={fortMinor} 
                                    className="img-fluid rounded-3"
                                    alt="Fort minor"
                                />
                                <div className="main-banner-content position-absolute">
                                    <h4>if you buy followers from us, I will personally follow you on my secret page.</h4>
                                    <h5>I can rent my employee to manage your page ideally.</h5>
                                    <p>and if not, I can provide fake pages at very cheap prices, but they will not follow you over time.</p>
                                    <Link className="button">BUY NOW</Link>
                                </div>
                            </div>
                            

                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default Home;