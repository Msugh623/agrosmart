import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'
import media from '../media'
import { FaChevronDown } from 'react-icons/fa6'

const Nav = (props) => {
    const [hasPop, setHasPop] = useState(props.hasPop)
    return (
        <div className={!props?.hov && 'sticky-top'}>
            {hasPop &&
                <nav className="navbar text-light custom-navmenu themebg pt-0 growIn">
                    <div className="container py-4 ">
                        <div className='col-lg-4 mb-3 mb-md-0 small'>
                            Discover a diverse array of premium agricultural products, proudly grown and harvested with care on our innovative farms.
                        </div>
                        <div className="ms-auto me-auto me-md-2">
                            <Link to={'/'} className='me-1 mb-1 mb-md-0 subnav-btn rounded btn' onClick={() => window.scroll({ top: 0 })}>Home</Link>
                            <Link to={'our-farm'} className='me-1 mb-1 mb-md-0 subnav-btn rounded btn ndd'>
                                Our Farm <FaChevronDown className='icon' fontSize={'.7em'} />
                                <div className="dropdown">
                                    <div className="d-inner slideUp" onClick={() => {
                                        setTimeout(() => {
                                            setHasPop(false)
                                        }, 200);
                                    }}>
                                        <li><Link to="/our-farm/vegetables">Vegetables</Link></li>
                                        <li><Link to="/our-farm/fruits">Fruits</Link></li>
                                        <li><Link to="/our-farm/oil-production">Oil Production</Link></li>
                                        <li><Link to="/our-farm/livestock">Livestock</Link></li>
                                        <li><Link to="/our-farm/sea-and-frozen">Sea And Frozen Products</Link></li>
                                    </div>
                                </div>
                            </Link>
                            <Link to={'/some-other-page'} className='me-1 mb-1 mb-md-0 subnav-btn rounded btn'>Some  Other Project</Link>
                            <Link to={'/about-us'} className='me-1 mb-1 mb-md-0 subnav-btn rounded btn'>About Us</Link>
                            <Link to={'/contact-us'} className='me-1 mb-1 mb-md-0 subnav-btn rounded btn'>Contact</Link>
                        </div>
                    </div>
                </nav>
            }
            <nav className={`navbar slideIn custom-navbar pt-0 ${!props.hasBg ? 'bg-light' : 'text-light dd'} shadow-sm`} style={{
                background: props?.trans && '#efefef20',
                color: props?.trans && '#efefef !important'
            }}>
                <div className="container py-3 pb-2 px-2">
                    <h2 className='m-0'>
                        <Link to={'/'} onClick={() => window.scroll({ top: 0 })}>
                            <LazyLoadImage src={media.logoSm} effect='opacity' alt="Agrosmart Logo" about='Agrosmart Logo' height={props?.hasBg ? '80px' : '50px'} className='rounded' />
                            <span className='m-0' style={{ position: 'relative', top: '5px' }}>

                            </span>
                        </Link>
                    </h2>
                    {!hasPop &&
                        <div className="ms-auto me-2 d-none d-lg-block nav-links">
                            <Link to={'/'} className={`me-1 rounded btn ${props?.hasBg ? 'text-light shadow-sm acbg' : 'text-dark'}`} onClick={() => window.scroll({ top: 0 })}>Home</Link>
                            <Link to={'/our-farm'} className={`me-1 rounded ndd btn ${props?.hasBg ? 'text-light shadow-sm acbg' : 'text-dark'}`}>
                                Our Farm <FaChevronDown className='icon' fontSize={'.7em'} />
                                <div className="dropdown">
                                    <div className="d-inner slideUp shadow-lg" >
                                        <li><Link to="/our-farm/vegetables">Vegetables</Link></li>
                                        <li><Link to="/our-farm/fruits">Fruits</Link></li>
                                        <li><Link to="/our-farm/oil-production">Oil Production</Link></li>
                                        <li><Link to="/our-farm/livestock">Livestock</Link></li>
                                        <li><Link to="/our-farm/sea-and-frozen">Sea And Frozen Products</Link></li>
                                    </div>
                                </div></Link>
                            <Link to={'/some-other-page'} className={`me-1 rounded btn ${props?.hasBg ? 'text-light shadow-sm acbg' : 'text-dark'}`}>Some  Other Project</Link>
                            <Link to={'/about-us'} className={`me-1 rounded btn ${props?.hasBg ? 'text-light shadow-sm acbg' : 'text-dark'}`}>About Us</Link>
                            <Link to={'/contact-us'} className={`me-1 rounded btn ${props?.hasBg ? 'text-light shadow-sm acbg' : 'text-dark'}`}>Contact</Link>                        </div>
                    }
                    <a className={`burger ${hasPop && 'active'} ${props?.hasBg && 'text-light'} d-md-none`} data-bs-toggle="collapse" data-bs-target="#main-navbar" onClick={() => {
                        setHasPop(prev => !prev)
                    }}>
                        <span ></span>
                    </a>
                </div>
            </nav >
        </div >
    )
}

export default Nav