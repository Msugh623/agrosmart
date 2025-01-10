import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="themebg">
            <footer id="footer"  >
                <div className="footer-top pt-5"  >
                    <div className="container">
                        <div className="row">

                            <div className="col-md-9">
                                <div className="footer-info" >

                                    <div className='row'>
                                        <div className="col-md-6">
                                            <h3>Agrosmart</h3>
                                            <p>
                                                Discover a diverse array of premium agricultural products, proudly grown and harvested with care on our innovative farms.
                                            </p>
                                            <p>
                                                <div className="fs-5 mb-2">
                                                    <FaLocationDot className='icon ' /> Address
                                                </div>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ut ex temporibus
                                            </p>
                                        </div>
                                        <div className="col-md-6 px-md-5">
                                            <h4>Contacts</h4>

                                            <div onClick={() => {
                                                navigator.clipboard.writeText('+234 812 166 7177')
                                            }}>
                                                <div>
                                                    Phone:
                                                </div>
                                                +234 812 166 7177
                                            </div>

                                            <div className='text-light mt-3'>
                                                <div>
                                                    Email:
                                                </div>
                                                <a href="mailto:dataswift@agrosmart.com.ng">dataswift@agrosmart.com.ng</a>
                                                <br />
                                                <a href="mailto:Info@agrosmart.com.ng">Info@agrosmart.com.ng</a>
                                            </div>
                                            <br />
                                        </div>
                                    </div>
                                    <div className="social-links mt-3">
                                        {/* Social Links */}
                                        /... /
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 text-light" >
                                <h4>Quick Links</h4>
                                <Link to={'/some-other-page'} className='d-block' style={{
                                    textDecoration: 'underline'
                                }}>Some  Other Project</Link>
                                <Link to={'/our-farm'} className='d-block' style={{
                                    textDecoration: 'underline'
                                }}>Our Farm</Link>
                                <Link to={'/about-us'} className='d-block' style={{
                                    textDecoration: 'underline'
                                }}>About Us</Link>
                                <Link to={'/contact-us'} className='d-block' style={{
                                    textDecoration: 'underline'
                                }}>Contact Us</Link>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="copyright text-center mt-5" >
                        &copy; Copyright <strong><span><a className='text-light' href="https://sprintet.onrender.com/menu">Sprintet 2025</a></span></strong>. All Rights Reserved
                    </div>
                </div>
                <div className="credits container text-center">
                    Designed by <a className='text-light' href="https://github.com/msugh623">Chia Ernest</a>
                </div>
            </footer>
        </div>
    )
}

export default Footer