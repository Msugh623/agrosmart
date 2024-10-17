import React, { useEffect, useState } from 'react'
import { BsEnvelopeAtFill } from 'react-icons/bs'
import Nav from '../components/Nav'
import media, { homeProducts } from '../media'
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component'
import { useStateContext } from '../state/StateContext'
import { Link } from 'react-router-dom'
import { FaFacebook } from 'react-icons/fa6'

const Home = () => {
    const { scrollData, hero, setTitle } = useStateContext()

    useEffect(() => {
        setTitle('')
    }, [])

    return (
        <div className="index-page">
            <div className="fixed-top">
                {
                    scrollData.y < 510 ?
                        <div className="slideIn">
                            <Nav trans={true} hasBg={true} />
                        </div>
                        : <Nav />
                }
            </div>

            <main className="main">
                <section id="hero" className="hero section dark-background">

                    {true && <LazyLoadImage effect='opacity' className='animate__animated fadeIn animate__slow' placeholderSrc='/Media/placeholder.avif' src={media.heroBg1} alt="" />}
                    {/* {hero == media.heroBg2 && <LazyLoadImage effect='opacity' className='animate__animated fadeIn animate__slow' placeholderSrc='/Media/placeholder.avif' src={media.heroBg2} alt="" />} */}

                    <div className="container " data-aos="zoom-out">
                        <div className='ps-2 ps-md-3 ps-lg-0 ms-lg-0'>
                            <div className="row justify-content-center">
                                <div className="col-lg-9">
                                    <h1 className='slideUp fw-bold mt-5 pt-5'>Agricavenue</h1>
                                    <p className='fs-6 col-11 col-md-9'>
                                        <Delay delay={100}>
                                            <div className="slideUp">
                                                Your Gateway to Sustainable Agriculture!
                                                <br /><br />
                                            </div>
                                        </Delay>
                                        <Delay delay={200}>
                                            <div className="slideUp">
                                                Discover a diverse array of premium agricultural products, proudly grown and harvested with care on our innovative farms
                                            </div>
                                        </Delay>
                                    </p>
                                    <div className="social-links slideUp">
                                        <Delay inline={true} delay={1500}>
                                            <a className='slideIn fs-5' target='_blank' href="https://web.facebook.com/kareleoodua/"><FaFacebook /></a>
                                        </Delay>
                                        <Delay inline={true} delay={1900}>
                                            <a className='slideRight fs-5' target='_blank' href="mailto:Info@agricavenue.com.ng"><BsEnvelopeAtFill /></a>
                                        </Delay>
                                    </div>
                                    {/* <Delay inline={true} delay={3000}>
                                        <div className="slideUp p-0 mt-3">
                                            <StarredBar />
                                        </div>
                                    </Delay> */}
                                </div>

                            </div>
                        </div>
                    </div>

                </section>

            </main>
            <section id='services' className=" py-5 section services">
                {true &&
                    <div className="container">
                        <div className="mb-4 px-md-5">
                            <h2 className="h2 heading mb-4 mt-5 slideUp">About Us</h2>
                            <div className="row">
                                <div className="col-md-7">
                                    <div className='pe-md-2'>
                                        <Delay delay={500}>
                                            <div className='slideUp'>
                                                At Agricavenue, we’re passionate about cultivating a brighter future for agriculture, one harvest at a time. As you explore our website, you’ll discover a diverse array of premium agricultural products, proudly grown and harvested with care on our innovative farms. From fresh vegetables bursting with flavor to succulent meats raised with ethical and sustainable practices, Agricavenue offers a bounty of wholesome goodness straight from the fields to your table.
                                                <br /><br />
                                                But Agricavenue is more than just a purveyor of exceptional produce – we’re pioneers in shaping the future of agriculture. With a steadfast commitment to innovation and sustainability, we’re constantly exploring new technologies and methods to enhance productivity, minimize environmental impact, and promote food security.
                                                <div className='pt-3 mt-5 d-none d-md-flex pt-md-0'>
                                                    <Link to={'/about-us'} className='readmore custom-navmenu mt-5 mt-md-0 text-light no-dec growIn'>
                                                        Learn More
                                                    </Link>
                                                </div>
                                            </div>
                                        </Delay>
                                        <br />
                                        <Delay delay={800}>
                                            <div className="">
                                                <LazyLoadImage scrollPosition={scrollData} effect='opacity' className='img-fluid acbg rounded shadow' placeholderSrc='/Media/placeholder.avif' src={media.img1} alt="" />
                                            </div>
                                        </Delay>
                                        <br />
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className='ps-md-2'>
                                        <Delay delay={600}>
                                            <div className="mb-3 slideUp">
                                                <LazyLoadImage scrollPosition={scrollData} effect='opacity' className='img-fluid acbg rounded shadow' placeholderSrc='/Media/placeholder.avif' src={media.img2} alt="" />
                                            </div>
                                        </Delay>
                                    </div>
                                </div>
                                <div className='pt-3 pt-md-0 d-md-none'>
                                    <Link to={'/about-us'} className='readmore custom-navmenu mt-5 mt-md-0 text-light no-dec growIn'>
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="mt-5 px-md-5 mb-5">
                            <h2 className="h2 heading mb-2 mt-5 pt-5 slideUp d-flex">
                                <div className='mt-auto'>
                                    Our Farm
                                </div>
                                <Link to={'/our-farm'} className='ms-auto readmore custom-navmenu mt-5 mt-md-0 text-light no-dec growIn'>
                                    View All
                                </Link>
                            </h2>
                            <div className="justify-content-center row">
                                {
                                    homeProducts.slice(0, 3).map((product, i) => (
                                        <div className="col-12 col-sm-6 col-md-4 mt-4" key={product.image}>
                                            <div className="hovShade shadow">
                                                <LazyLoadImage effect='opacity' className='img-fluid acbg rounded shadow' placeholderSrc='/Media/placeholder.avif' src={product.image} alt="" />
                                                <h4 className={`h4 mb-2 ${i == 2 && 'mt-4'}`}>{product.name}</h4>
                                                <p>
                                                    {product.about}
                                                </p>
                                                <Link to={product.url} className='readmore custom-navmenu mt-5 mt-md-0 text-light no-dec growIn'>
                                                    Learn More
                                                </Link>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        {/* <section className="section pb-0">
                            <InsiderPics />
                        </section> */}
                    </div>
                }
            </section>
            {/* <section className="pb-0 pt-0">
                <div className="custom-navmenu themebg text-light py-5">
                    <div className="container">
                        <h2 className='mt-5'>
                            Plan an Unforgettable Experience with Us
                        </h2>
                        We can help you fit your stay and experience within your allotted budget.
                        <div className="mt-5">Book Your Stay Now</div>
                        <div class="h1">08182283683</div>
                    </div>
                </div>

            </section> */}
        </div >
    )
}

export default trackWindowScroll(Home)


const Delay = ({ delay, children, inline }) => {
    const [arch, setArch] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setArch(true)
        }, delay || 700);
    }, [])

    return arch ? children : <div className={inline ? 'd-inline' : ''} style={{ opacity: 0 }}>
        {children}
    </div>
}
