import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useStateContext } from '../../state/StateContext'
import Delay from '../../components/Delay'
import media, { homeProducts } from '../../media'

const Vegetables = () => {
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
                Vegetables - Our Farm
              </div>

            </h2>
            <Delay delay={400}>
              <div className='slideUp'>
                Agricavenue is a pioneering farm business dedicated to vegetable production, pioneering innovative techniques to cultivate a wide range of nutrient-rich vegetables. Our farm leverages cutting-edge technology such as hydroponics and vertical farming to optimize space and resources, ensuring a consistent and abundant harvest year-round.
                <div className="mt-3">
                  Located on the outskirts of the city, Agricavenue prioritizes sustainability, utilizing renewable energy sources and minimizing waste through efficient water management systems. From leafy greens to exotic heirloom varieties, Agricavenue prides itself on delivering fresh, pesticide-free vegetables directly to consumers through local markets and community-supported agriculture programs.
                  <div className="mt-3">
                    Committed to revolutionizing urban agriculture, Agricavenue strives to provide wholesome, locally grown produce while promoting environmental responsibility and food security.
                  </div>
                </div>
                <div className="mt-3">
                  Our vegetable farm specializes in the following:
                </div>
              </div>
            </Delay>
            <Delay delay={600}>
              <div className={`row`}>
                <Delay delay={100}>
                  <div className="col-12 col-md-6 col-xl-4 mt-4 slideUp">
                    <div className={`hovShade h-100 shadow`}>
                      <LazyLoadImage effect='opacity' className='img-fluid acbg rounded shadow' placeholderSrc='/Media/placeholder.avif' src={homeProducts[0].image} alt="" />
                      <h4 className="h4 mb-2">Tomatoes</h4>
                      <p>
                        Widely cultivated for their juicy and versatile fruits, tomatoes are used in various cuisines worldwide.
                      </p>
                    </div>
                  </div>
                </Delay>
                <Delay delay={200}>
                  <div className="col-12 col-md-6 col-xl-4 mt-4 slideUp">
                    <div className={`hovShade h-100 shadow`}>
                      <LazyLoadImage effect='opacity' className='img-fluid acbg rounded shadow' placeholderSrc='/Media/placeholder.avif' src={'/Media/Lettuce-Explain-Header.jpg'} alt="" />
                      <h4 className="h4 mb-2">Letuce</h4>
                      <p>
                        With several varieties such as romaine, iceberg, and leaf lettuce, this leafy green vegetable is a staple in salads and sandwiches.
                      </p>
                    </div>
                  </div>
                </Delay>
                <Delay delay={300}>
                  <div className="col-12 col-md-6 col-xl-4 mt-4 slideUp">
                    <div className={`hovShade h-100 shadow`}>
                      <LazyLoadImage effect='opacity' className='img-fluid acbg rounded shadow' placeholderSrc='/Media/placeholder.avif' src={'/Media/Veg_crop_carrot-2743498_1920_Pix.jpg'} alt="" />
                      <h4 className="h4 mb-2">Carrots</h4>
                      <p>
                        Known for their vibrant orange color and sweet flavor, carrots are rich in vitamins and commonly used in salads, soups, and as a snack.
                      </p>
                    </div>
                  </div>
                </Delay>
                <Delay delay={0}>
                  <div className="col-12 col-md-6 col-xl-4 mt-4">
                    <div className={`hovShade h-100 shadow`}>
                      <LazyLoadImage effect='opacity' className='img-fluid acbg rounded shadow' placeholderSrc='/Media/placeholder.avif' src={'/Media/Bell-Pepper-.jpg'} alt="" />
                      <h4 className="h4 mb-2">Bell Peppers</h4>
                      <p>
                        These colorful peppers come in various hues, including green, red, yellow, and orange, and are often used in salads, stir-fries, and as a stuffing ingredient.
                      </p>
                    </div>
                  </div>
                </Delay>
                <Delay delay={0}>
                  <div className="col-12 col-md-6 col-xl-4 mt-4">
                    <div className={`hovShade h-100 shadow`}>
                      <LazyLoadImage effect='opacity' className='img-fluid acbg rounded shadow' placeholderSrc='/Media/placeholder.avif' src={'/Media/Types-of-Cucumbers-FB.jpg'} alt="" />
                      <h4 className="h4 mb-2">Cucumbers</h4>
                      <p>
                        Crisp and refreshing, cucumbers are popular for salads, pickling, and as a raw snack.
                      </p>
                    </div>
                  </div>
                </Delay> 
                <Delay delay={0}>
                  <div className="col-12 col-md-6 col-xl-4 mt-4">
                    <div className={`hovShade h-100 shadow`}>
                      <LazyLoadImage effect='opacity' className='img-fluid acbg rounded shadow' placeholderSrc='/Media/placeholder.avif' src={'/Media/Broccoli.jpeg'} alt="" />
                      <h4 className="h4 mb-2">Broccoli</h4>
                      <p>
                        This nutrient-rich vegetable is prized for its edible florets and is commonly steamed, stir-fried, or added to salads.
                      </p>
                    </div>
                  </div>
                </Delay>
                <Delay delay={0}>
                  <div className="col-12 col-md-6 col-xl-4 mt-4">
                    <div className={`hovShade h-100 shadow`}>
                      <LazyLoadImage effect='opacity' className='img-fluid acbg rounded shadow' placeholderSrc='/Media/placeholder.avif' src={'/Media/Onions.jpg'} alt="" />
                      <h4 className="h4 mb-2">Onions</h4>
                      <p>
                        A staple ingredient in countless dishes, onions come in various types, including red, white, and yellow, and add flavor to soups, stews, and savory dishes.
                      </p>
                    </div>
                  </div>
                </Delay>
                <Delay delay={0}>
                  <div className="col-12 col-md-6 col-xl-4 mt-4">
                    <div className={`hovShade h-100 shadow`}>
                      <LazyLoadImage effect='opacity' className='img-fluid acbg rounded shadow' placeholderSrc='/Media/placeholder.avif' src={'/Media/Spinach.jpg'} alt="" />
                      <h4 className="h4 mb-2">Spinach</h4>
                      <p>
                        Packed with iron and other nutrients, spinach is versatile and can be eaten raw in salads, sautéed as a side dish, or used as an ingredient in various recipes.
                      </p>
                    </div>
                  </div>
                </Delay>
                <Delay delay={0}>
                  <div className="col-12 col-md-6 col-xl-4 mt-4">
                    <div className={`hovShade h-100 shadow`}>
                      <LazyLoadImage effect='opacity' className='img-fluid acbg rounded shadow' placeholderSrc='/Media/placeholder.avif' src={'/Media/Zucchini.jpg'} alt="" />
                      <h4 className="h4 mb-2">Zuchinni</h4>
                      <p>
                        With its mild flavor and tender texture, zucchini is often grilled, roasted, or used in baking, particularly in dishes like zucchini bread.
                      </p>
                    </div>
                  </div>
                </Delay> <Delay delay={0}>
                  <div className="col-12 col-md-6 col-xl-4 mt-4">
                    <div className={`hovShade h-100 shadow`}>
                      <LazyLoadImage effect='opacity' className='img-fluid acbg rounded shadow' placeholderSrc='/Media/placeholder.avif' src={'/Media/Green-Beans.jpg'} alt="" />
                      <h4 className="h4 mb-2">Green Beans</h4>
                      <p>
                      These crisp and tender beans are commonly steamed, sautéed, or added to casseroles as a nutritious side dish.
                      </p>
                    </div>
                  </div>
                </Delay>
              </div>
            </Delay>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Vegetables