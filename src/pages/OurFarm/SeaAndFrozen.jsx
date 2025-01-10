import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useStateContext } from '../../state/StateContext'
import Delay from '../../components/Delay'
import media, { homeProducts } from '../../media'
import { ControlBar, Player } from 'video-react'
import 'video-react/dist/video-react.css';

const SeaAndFrozen = () => {
  const { setTitle } = useStateContext()

  useEffect(() => {
    scroll({ top: 0 })
    setTitle('Livestock')
  }, [])

  return (
    <section id='services' className="py-5 pt-o section services">
      <div className="container">
        <div className="mb-4 px-md-5">
          <div className="mt-0 px-md-5">
            <h2 className="h2 heading mb-2 slideUp">
              <div className='mt-auto'>
                ⁠Sea and frozen products - Our Farm
              </div>

            </h2>
            <Delay delay={400}>
              <div className='slideUp'>
                Agrosmart is a pioneering farm business that specializes in fish production, harnessing sustainable aquaculture practices to cultivate premium-quality seafood. Nestled in pristine waters, our farm maintains a healthy and natural environment for our fish, ensuring optimal growth and flavor. From freshwater favorites like tilapia and trout to saltwater specialties such as salmon and sea bass, Agrosmart offers a diverse selection of responsibly raised fish to cater to various culinary preferences.

                <div className="mt-3">
                  Committed to environmental stewardship, we prioritize water conservation and waste management to minimize our ecological footprint. Agrosmart’s fish products are not only delicious and nutritious but also reflect our dedication to sustainable farming practices and the preservation of marine ecosystems. We pride ourselves on producing a variety of high-quality fish species using sustainable aquaculture methods.
                </div>
                <div className="mt-3">
                  Some examples of fish produced at Agrosmart include:
                </div>
              </div>
            </Delay>
            <Delay delay={600}>
              <div className={`row`}>
                <Delay delay={100}>
                  <div className="col-12 col-md-6 col-xl-4 mt-4 slideUp">
                    <div className={`hovShade shadow h-100`}>
                      <LazyLoadImage effect='opacity' className='img-fluid acbg rounded shadow' placeholderSrc='/Media/placeholder.avif' src={'/Media/Tilapia.jpg'} alt="" />
                      <h4 className="h4 mb-2">Tilapia</h4>
                      <p>
                        Known for its mild flavor and firm texture, tilapia is a versatile fish that can be grilled, baked, or fried, making it a popular choice for various recipes.
                      </p>
                    </div>
                  </div>
                </Delay>
                <Delay delay={200}>
                  <div className="col-12 col-md-6 col-xl-4 mt-4 slideUp">
                    <div className={`hovShade shadow h-100`}>
                      <LazyLoadImage effect='opacity' className='img-fluid acbg rounded shadow' placeholderSrc='/Media/placeholder.avif' src={'/Media/Trout.webp'} alt="" />
                      <h4 className="h4 mb-2">Trout</h4>
                      <p>
                        With its delicate flavor and tender flesh, trout is prized for its versatility and can be cooked whole, filleted, or smoked to enhance its natural taste.
                      </p>
                    </div>
                  </div>
                </Delay>
                <Delay delay={300}>
                  <div className="col-12 col-md-6 col-xl-4 mt-4 slideUp">
                    <div className={`hovShade shadow h-100`}>
                      <LazyLoadImage effect='opacity' className='img-fluid acbg rounded shadow' placeholderSrc='/Media/placeholder.avif' src={'/Media/Salmon.jpg'} alt="" />
                      <h4 className="h4 mb-2">Salmon</h4>
                      <p>
                        Renowned for its rich flavor and omega-3 fatty acids, salmon is a highly sought-after fish that can be grilled, broiled, or roasted to perfection.
                      </p>
                    </div>
                  </div>
                </Delay>
                <Delay delay={0}>
                  <div className="col-12 col-md-6 col-xl-4 mt-4">
                    <div className={`hovShade shadow h-100`}>
                      <LazyLoadImage effect='opacity' className='img-fluid acbg rounded shadow' placeholderSrc='/Media/placeholder.avif' src={'/Media/giant_sea_bass_1600-1.jpg'} alt="" />
                      <h4 className="h4 mb-2">Sea bass</h4>
                      <p>
                        With its flaky white flesh and mild flavor, sea bass is a favorite among seafood lovers and can be prepared in a variety of ways, including steamed, pan-seared, or baked.
                      </p>
                    </div>
                  </div>
                </Delay>
                <Delay delay={0}>
                  <div className="col-12 col-md-6 col-xl-4 mt-4">
                    <div className={`hovShade shadow h-100`}>
                      <LazyLoadImage effect='opacity' className='img-fluid acbg rounded shadow' placeholderSrc='/Media/placeholder.avif' src={'/Media/Carp.webp'} alt="" />
                      <h4 className="h4 mb-2">Carp</h4>
                      <p>
                        Known for its firm texture and earthy flavor, carp is a versatile fish that can be baked, grilled, or stewed for a hearty and satisfying meal.
                      </p>
                    </div>
                  </div>
                </Delay>
                <Delay delay={0}>
                  <div className="col-12 col-md-6 col-xl-4 mt-4">
                    <div className={`hovShade shadow h-100`}>
                      <LazyLoadImage effect='opacity' className='img-fluid acbg rounded shadow' placeholderSrc='/Media/placeholder.avif' src={'/Media/Barramundi.jpg'} alt="" />
                      <h4 className="h4 mb-2">Barramundi</h4>
                      <p>
                        With its buttery texture and mild flavor, barramundi is a versatile fish that can be grilled, roasted, or sautéed for a delicious and nutritious meal.
                      </p>
                    </div>
                  </div>
                </Delay>
              </div>
            </Delay>
            <div className="mt-3">
              Experience the freshness and quality of Agrosmart’s sustainably raised fish, where every bite reflects our commitment to responsible aquaculture practices and exceptional taste.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SeaAndFrozen