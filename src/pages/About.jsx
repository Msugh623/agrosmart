import React, { useEffect } from 'react'
import Delay from '../components/Delay'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import media from '../media'
import { useStateContext } from '../state/StateContext'

const About = () => {
  const { setTitle } = useStateContext()

  useEffect(() => {
    scroll({ top: 0 })
    setTitle('About Us')
  }, [])


  return (
    <section id='services' className="py-5 pt-3 section services">
      {true &&
        <div className="container">
          <div className="mb-4 px-md-5">
            <h2 className="h2 heading mb-4 slideUp">About Us</h2>
            <div className="row">
              <Delay delay={150}>
                <div className="px-md-3 pb-3 slideUp">
                  At Agricavenue, we’re passionate about cultivating a brighter future for agriculture, one harvest at a time. As you explore our website, you’ll discover a diverse array of premium agricultural products, proudly grown and harvested with care on our innovative farms. From fresh vegetables bursting with flavor to succulent meats raised with ethical and sustainable practices, Agricavenue offers a bounty of wholesome goodness straight from the fields to your table.
                </div>
              </Delay>
              <div className="col-md-6">
                <div className='pe-md-2'>
                  <Delay delay={500}>
                    <div className="">
                      <LazyLoadImage effect='opacity' className='img-fluid acbg rounded shadow' placeholderSrc='/Media/placeholder.avif' src={media.about1} alt="" />
                    </div>
                  </Delay>
                  <br />
                  <Delay delay={800}>
                    <div className='slideUp'>
                      As you navigate our website, you’ll not only discover the incredible range of products we offer but also glimpse into the future of Agricavenue in the agricultural sector. From expanding our organic farming practices to embracing precision agriculture and agrotech solutions, we’re dedicated to pushing the boundaries of what’s possible in sustainable farming. Join us on this journey as we cultivate a brighter, greener future for agriculture together.
                    </div>
                  </Delay>
                  <br />

                </div>
              </div>
              <div className="col-md-6">
                <div className='ps-md-2'>
                  <Delay>
                    <div className='slideUp'>
                      But Agricavenue is more than just a purveyor of exceptional produce – we’re pioneers in shaping the future of agriculture. With a steadfast commitment to innovation and sustainability, we’re constantly exploring new technologies and methods to enhance productivity, minimize environmental impact, and promote food security. Our greenhouse projects harness the power of controlled environments to ensure year-round crop production, while our aquaculture initiatives revolutionize seafood farming with responsible practices and premium-quality fish.
                    </div>
                  </Delay>
                  <br />
                  <Delay delay={600}>
                    <div className="mb-3 slideUp">
                      <LazyLoadImage effect='opacity' className='img-fluid acbg rounded shadow' placeholderSrc='/Media/placeholder.avif' src={media.about2} alt="" />
                    </div>
                  </Delay>
                </div>
              </div>
              <p>
                Welcome to Agricavenue – where innovation meets tradition, and the future of agriculture begins today.
              </p>
            </div>
          </div>
        </div>
      }
    </section>
  )
}

export default About
