import React, { useEffect } from 'react'
import { FaFacebook, FaLocationDot } from 'react-icons/fa6'
import { GrContactInfo } from 'react-icons/gr'
import Delay from '../components/Delay'
import { BsEnvelopeAtFill } from 'react-icons/bs'
import { useStateContext } from '../state/StateContext'

const Contact = () => {
  const {setTitle}=useStateContext()

  useEffect(() => {
    scroll({ top: 0 })
    setTitle('Contact Us')
  }, [])


  return (
    <section id='services' className="py-5 pt-3 section services">
      <div className="container">
        <div className="mb-4 px-md-5">
          <h2 className="h2 heading mb-2 mt-3 slideUp">Contact Us</h2>
          <Delay delay={100}>
            <div className="mb-4 fs-5 slideUp">
              Reach out to us to experience the finest products and solutions from our farms.
              We're dedicated to delivering the highest quality, straight from our fields to you.
            </div>
          </Delay>
          <div className="row">
            <div className="col-md-6">
              <Delay delay={300}>
                <div className="mb-4 slideRight">
                  <h6 >
                    <FaLocationDot className='icon' /> Address:
                  </h6>
                  <h5 className='mb-1'>
                    Block C5 Suite 2, Aje International Ultra Modern Market, Osogbo, Osun State, Nigeria
                  </h5>
                </div>
              </Delay>
              <Delay delay={500}>
                <div className="mb-2 slideRight ">
                  <h6 className='mb-1'>
                    <GrContactInfo className='icon fs-4' /> Contact:
                  </h6>
                  <h5>
                    0706 845 5265
                    <br /><br />
                    ⁠safakeye@agricavenue.com.ng
                    <br />
                    Info@agricavenue.com.ng
                  </h5>
                </div>
              </Delay>
              <div className="social-links slideUp text-dark">
                <Delay inline={true} delay={600}>
                  <a className='slideIn fs-4 me-2' target='_blank' href="https://web.facebook.com/kareleoodua/"><FaFacebook /></a>
                </Delay>
                <Delay inline={true} delay={1000}>
                  <a className='slideRight fs-4' target='_blank' href="mailto:Info@agricavenue.com.ng">< BsEnvelopeAtFill /></a>
                </Delay>
              </div>
            </div>
            <div className="col-md-6 ">

              <Delay delay={300} preRender={true}>
                {/* <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                yesIWantToUseGoogleMapApiInternals
              >
              </GoogleMapReact> */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63420.65572051701!2d3.28396!3d6.548055!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1726785875044!5m2!1sen!2sus"
                  className='shadow-lg'
                  width="100%"
                  height="300"
                  style={{}}
                  allowfullscreen=""
                  loading="lazy"
                  // eslint-disable-next-line react/no-unknown-property
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </Delay>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 