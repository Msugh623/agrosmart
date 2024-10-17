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
                                            <h3>Agricavenue</h3>
                                            <p>
                                                Discover a diverse array of premium agricultural products, proudly grown and harvested with care on our innovative farms.
                                            </p>
                                            <p>
                                                <div className="fs-5 mb-2">
                                                    <FaLocationDot className='icon ' /> Address
                                                </div>
                                                Block C5 Suite 2, Aje International Ultra Modern Market, Osogbo, Osun State, Nigeria
                                            </p>
                                        </div>
                                        <div className="col-md-6 px-md-5">
                                            <h4>Contacts</h4>

                                            <div onClick={() => {
                                                navigator.clipboard.writeText('08182283683')
                                            }}>
                                                <div>
                                                    Phone:
                                                </div>
                                                08182283683
                                            </div>

                                            <div className='text-light mt-3'>
                                                <div>
                                                    Email:
                                                </div>
                                                <a href="mailto:⁠safakeye@agricavenue.com.ng">⁠safakeye@agricavenue.com.ng</a>
                                                <br />
                                                <a href="mailto:Info@agricavenue.com.ng">Info@agricavenue.com.ng</a>
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
                                <Link to={'/green-house-project'} className='d-block' style={{
                                    textDecoration: 'underline'
                                }}>Green House Project</Link>
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
                        {/* &copy; Copyright <strong><span>{'<*********************>'}</span></strong>. All Rights Reserved */}
                    </div>
                    {/* <div className="credits" style={{
                backgroundColor: palate.background.default,
                color: palate.neutral.light
            }}>
        Designed by <a href="#">Chia Ernest</a>
    </div> */}
                </div>
            </footer>
        </div>
    )
}

export default Footer