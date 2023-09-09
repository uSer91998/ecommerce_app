import React from "react";
import plane from "../assets/plane.png";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp} from "react-icons/bs";





const Footer = () => {
    return (
        <>
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-5">
                            <div className="footer-top-data d-flex gap-30 align-items-center">
                                <img src={plane} width={150} />
                                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
                            </div>
                        </div>
                        <div className="col-7">
                            <div class="input-group">
                                <input 
                                    type="text" 
                                    className="form-control py-1" 
                                    placeholder="Your Email Address" 
                                    aria-label="Your Email Address" 
                                    aria-describedby="basic-addon2"
                                />
                                <span className="input-group-text p-2" id="basic-addon2">
                                    Subscribe
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>  
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-4">
                            <h4 className="text-white mb-4">Contact US</h4>
                            <div>
                                <address className="text-white fs-15">
                                    Hno : 277 Near Vill chopal, <br/> Sonipat, Haryana <br/>
                                    PinCode: 131103
                                </address>
                                <a 
                                    href="tel:+374 98091998" 
                                    className="mt-4 d-block mb-3 text-white">
                                    +374 98091998
                                </a>
                                <a 
                                    href="https://www.mail.com/"  
                                    className="mt-4 d-block mb-3 text-white" 
                                    target="_blank"
                                    ><AiOutlineMail />   
                                </a>
                                <div className="social_icons d-flex align-items-center gap-15 mt-4">
                                    <a className="text-white" href="" target="_blank"><AiOutlineLinkedin className="fs-4"/></a>
                                    <a className="text-white" href="" target="_blank"><BsGithub className="fs-4"/></a>
                                    <a className="text-white" href="https://www.instagram.com/black_pr_company/" target="_blank"><BsInstagram className="fs-4"/></a>
                                    <a className="text-white" href=""><BsWhatsapp className="fs-4"/></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className="text-white mb-4">Information</h4>
                            <div className="footer-link d-flex flex-column">
                                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                                <Link className="text-white py-2 mb-1">Terms & Conditions</Link>
                                <Link className="text-white py-2 mb-1">Blogs</Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className="text-white mb-4">Account</h4>
                            <div className="footer-link d-flex flex-column">
                                <Link className="text-white py-2 mb-1">About Us</Link>
                                <Link className="text-white py-2 mb-1">Faq</Link>
                                <Link className="text-white py-2 mb-1">Contact</Link>
                            </div>
                        </div>
                        <div className="col-2">
                            <h4 className="text-white mb-4">Quick Links</h4>
                            <div className="footer-link d-flex flex-column">
                                <Link className="text-white py-2 mb-1">Laptops</Link>
                                <Link className="text-white py-2 mb-1">HeadPhones</Link>
                                <Link className="text-white py-2 mb-1">Tablets</Link>
                                <Link className="text-white py-2 mb-1">Watch</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-4">
                <div className="row">
                    <div className="col-12">
                        <p className="text-center mb-0 text-white">
                            &copy; { new Date().getFullYear() }; Powered by Developer's Corner
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;