import React from "react";
import PR from "../assets/PR.png";
import PR_BLACK from "../assets/PR_BLACK.png";
import  { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { PiPianoKeysFill } from "react-icons/pi";
import { AiFillRobot } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsController } from "react-icons/bs";






const Header = () => {
    return (
        <>
            <header className="header-top-strip py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <p className="text-white mb-0">Free Shipping Over $100 & Free Returns</p>
                        </div>
                        <div className="col-6">
                            <p className="text-end text-white mb-0">
                                Hotline: <a href="tel:+37498091998">+37498091998</a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-upper py-3">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <h1>
                                <Link className="text-white button" to="/"><img src={PR} width={90} alt="#"/></Link>
                            </h1>
                        </div>
                        <div className="col-5">
                            <div class="input-group">
                                <input 
                                    type="text" 
                                    className="form-control py-2" 
                                    placeholder="Search Product Here..." 
                                    aria-label="Search Product Here..." 
                                    aria-describedby="basic-addon2"
                                />
                                <span className="input-group-text p-3" id="basic-addon2"><BsSearch className="fs-5"/></span>
                            </div>
                        </div>

                        <div className="col-5">
                            <div className="header-upper-links d-flex align-items-center justify-content-between">
                                <div>
                                    <Link className="d-flex align-items-center gap-10 text-white">
                                        <AiOutlineHeart />
                                        <p className="mb-0">Favourite <br/> wishlist</p>
                                    </Link>
                                </div><div>
                                    <Link className="d-flex align-items-center gap-10 text-white">
                                        <AiOutlineUser />
                                        <p className="mb-0">Log in <br/> My Account</p>
                                    </Link>
                                </div><div>
                                    <Link className="d-flex align-items-center gap-10 text-white">
                                        <SlBasket />
                                       <div className="d-flex flex-column">
                                        <span className="badge bg-white text-dark">0</span>
                                        <p className="mb-0">$ 500</p>
                                       </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-bottom py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="menu-bottom d-flex align-items-centet gap-30">
                                <div>
                                    <div className="dropdown">
                                        <button 
                                            className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 me-5 d-flex align-items-cemter" 
                                            type="button" 
                                            id="dropdownMenuButton1" 
                                            data-bs-toggle="dropdown" 
                                            aria-expanded="false">
                                            <PiPianoKeysFill />
                                            <span className="me-5 d-inline-block">Shop Categories</span>
                                                
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a className="dropdown-item" href="#">Following A Non-Real person  <AiFillRobot className="logos"/></a></li>
                                            <li><a className="dropdown-item" href="#">Real People Following  <BsFillPeopleFill className="logos"/></a></li>
                                            <li><a className="dropdown-item" href="#">Setting Up Social Networks  <BsController className="logos"/></a></li>
                                        </ul>
                                    </div>
                                </div>                           
                                <div className="menu-links">
                                    <div className="d-flex align-items-center gap-15">
                                        <NavLink to="/home">Home</NavLink>
                                        <NavLink to="/our">Our</NavLink>
                                        <NavLink to="/blogs">Blogs</NavLink>
                                        <NavLink to="/contact">Contact</NavLink> 
                                    </div>
                                </div>     
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;