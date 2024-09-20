import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useStateContext } from '../../state/StateContext'
import Delay from '../../components/Delay'
import media, { homeProducts } from '../../media'

const OilProducts = () => {
  const { setTitle } = useStateContext()

  useEffect(() => {
    scroll({ top: 0 })
    setTitle('Vegetables')
  }, [])

  return (
    <section id='services' className="py-5 pt-o section services">
      <div className="container">
        <div className="mb-4 px-md-5">
          <div className="mt-0 px-md-5">
            <h2 className="h2 heading mb-2 slideUp">
              <div className='mt-auto'>
                Oil Production - Our Farm
              </div>

            </h2>
            <Delay delay={400}>
              <div className='slideUp'>
                Agricavenue is a pioneering farm business that specializes in vegetable oil production, harnessing the power of nature to create high-quality oils from a variety of crops. Situated on expansive fields, our farm employs innovative techniques such as cold-pressing and solvent extraction to extract pure, flavorful oils from seeds and nuts.
                <div className="mt-3">
                  From rich and nutty walnut oil to light and versatile sunflower oil, Agricavenue offers a diverse range of premium vegetable oils to cater to various culinary needs. Committed to sustainability, we carefully source our raw materials from local farmers and prioritize eco-friendly production practices to minimize waste and environmental impact.
                  <div className="mt-3">
                    Agricavenue’s vegetable oils are not only delicious but also nourishing, providing essential fatty acids and nutrients for a healthy lifestyle. Experience the essence of nature in every drop with Agricavenue’s exceptional vegetable oil products. We take pride in producing a diverse range of high-quality vegetable oils using sustainable and eco-friendly methods.
                  </div>
                </div>
                <div className="mt-3">
                  Some examples of vegetable oil production at Agricavenue include:
                </div>
              </div>
            </Delay>
            <Delay delay={600}>
              <div className={`row`}>
                <Delay delay={100}>
                  <div className="col-12 col-md-6 col-xl-4 mt-4 slideUp">
                    <div className={`hovShade h-100 shadow`}>
                      <LazyLoadImage effect='opacity' className='img-fluid acbg rounded shadow' placeholderSrc='/Media/placeholder.avif' src={'/Media/Sunflower-oil.jpeg'} alt="" />
                      <h4 className="h4 mb-2">Sunflower Oil</h4>
                      <p>
                        Extracted from sunflower seeds, our sunflower oil is light, mild, and perfect for frying, baking, and salad dressings.
                      </p>
                    </div>
                  </div>
                </Delay>
                <Delay delay={200}>
                  <div className="col-12 col-md-6 col-xl-4 mt-4 slideUp">
                    <div className={`hovShade h-100 shadow`}>
                      <LazyLoadImage effect='opacity' className='img-fluid acbg rounded shadow' placeholderSrc='/Media/placeholder.avif' src={'/Media/Olive-oil.webp'} alt="" />
                      <h4 className="h4 mb-2">Olive Oil</h4>
                      <p>
                        Made from handpicked olives grown on our farm, our extra virgin olive oil is rich in flavor and ideal for drizzling over salads, pasta, and grilled vegetables.
                      </p>
                    </div>
                  </div>
                </Delay>
                <Delay delay={300}>
                  <div className="col-12 col-md-6 col-xl-4 mt-4 slideUp">
                    <div className={`hovShade h-100 shadow`}>
                      <LazyLoadImage effect='opacity' className='img-fluid acbg rounded shadow' placeholderSrc='/Media/placeholder.avif' src={'/Media/Soybean.jpg'} alt="" />
                      <h4 className="h4 mb-2">Soyabean Oil</h4>
                      <p>
                        Derived from locally sourced soybeans, our soybean oil is versatile and suitable for a wide range of cooking methods, from sautéing to deep frying.
                      </p>
                    </div>
                  </div>
                </Delay>
                <Delay delay={0}>
                  <div className="col-12 col-md-6 col-xl-4 mt-4">
                    <div className={`hovShade h-100 shadow`}>
                      <LazyLoadImage effect='opacity' className='img-fluid acbg rounded shadow' placeholderSrc='/Media/placeholder.avif' src={'/Media/Canola.webp'} alt="" />
                      <h4 className="h4 mb-2">Canola Oil</h4>
                      <p>
                        Pressed from rapeseed plants, our canola oil is low in saturated fat and high in omega-3 fatty acids, making it a healthy choice for cooking and baking.
                      </p>
                    </div>
                  </div>
                </Delay>
                <Delay delay={0}>
                  <div className="col-12 col-md-6 col-xl-4 mt-4">
                    <div className={`hovShade h-100 shadow`}>
                      <LazyLoadImage effect='opacity' className='img-fluid acbg rounded shadow' placeholderSrc='/Media/placeholder.avif' src={'/Media/Coconut.jpg'} alt="" />
                      <h4 className="h4 mb-2">Coconut Oil</h4>
                      <p>
                        Extracted from fresh coconut meat, our coconut oil is fragrant and flavorful, perfect for adding a tropical twist to dishes or for use in beauty and skincare products.
                      </p>
                    </div>
                  </div>
                </Delay>
                <Delay delay={0}>
                  <div className="col-12 col-md-6 col-xl-4 mt-4">
                    <div className={`hovShade h-100 shadow`}>
                      <LazyLoadImage effect='opacity' className='img-fluid acbg rounded shadow' placeholderSrc='/Media/placeholder.avif' src={'/Media/Walnut.jpg'} alt="" />
                      <h4 className="h4 mb-2">Walnut Oil</h4>
                      <p>
                        Cold-pressed from premium quality walnuts, our walnut oil has a rich, nutty flavor and is ideal for drizzling over salads, roasted vegetables, or using in vinaigrettes.
                      </p>
                    </div>
                  </div>
                </Delay>
                <Delay delay={0}>
                  <div className="col-12 col-md-6 col-xl-4 mt-4">
                    <div className={`hovShade h-100 shadow`}>
                      <LazyLoadImage effect='opacity' className='img-fluid acbg rounded shadow' placeholderSrc='/Media/placeholder.avif' src={'/Media/Avocado.jpg'} alt="" />
                      <h4 className="h4 mb-2">Avocado Oil</h4>
                      <p>
                        Cold-pressed from ripe avocados, our avocado oil is rich in monounsaturated fats and has a smooth, buttery texture, making it perfect for high-heat cooking or as a finishing oil. Experience the purity and quality of Agricavenue's vegetable oils, crafted with care and integrity from farm to table.
                      </p>
                    </div>
                  </div>
                </Delay>
              </div>
            </Delay>
            <div className="mt-3">
              Experience the freshness and quality of Agricavenue’s sustainably raised fish, where every bite reflects our commitment to responsible aquaculture practices and exceptional taste.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OilProducts