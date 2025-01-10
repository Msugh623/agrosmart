import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useStateContext } from '../../state/StateContext'
import Delay from '../../components/Delay'
import media, { homeProducts } from '../../media'

const Fruits = () => {
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
                Fruits - Our Farm
              </div>

            </h2>
            <Delay delay={400}>
              <div className='slideUp'>
                Agrosmart is a leading farm business specializing in fruit production, dedicated to cultivating an extensive variety of delicious and nutritious fruits. Situated in an idyllic countryside setting, our farm utilizes sustainable farming practices to ensure the highest quality harvest while minimizing environmental impact. From succulent strawberries and crisp apples to juicy oranges and exotic tropical fruits, Agrosmart prides itself on delivering fresh, flavorful produce straight from the orchard to consumers.
                <div className="mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quo est tempora iste sed provident laborum, impedit nostrum, culpa numquam, dolores repellat nobis delectus. At deserunt explicabo nisi dolorum tempore.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, dolor voluptate! Natus laborum, quibusdam voluptate ut laudantium nesciunt architecto ad unde perspiciatis sapiente obcaecati dolores, dolorum odit labore, tempore adipisci!
                </div>
                <div className="mt-3">
                  Agrosmart Farm boasts a diverse selection of fruits cultivated with care and precision. Some examples of fruits produced include:
                </div>
              </div>
            </Delay>
            <Delay delay={600}>
              <div className={`row`}>
                <Delay delay={100}>
                  <div className="col-12 col-md-6 col-xl-4 mt-4 slideUp">
                    <div className={`hovShade h-100 shadow`}>
                      <LazyLoadImage effect='opacity' className='img-fluid acbg rounded shadow' placeholderSrc='/Media/placeholder.avif' src={homeProducts[1].image} alt="" />
                      <h4 className="h4 mb-2">Apples</h4>
                      <p>
                        Agrosmart offers a variety of apples, from crisp and tart Granny Smith to sweet and aromatic Fuji, perfect for snacking or baking.
                      </p>
                    </div>
                  </div>
                </Delay>
                <Delay delay={200}>
                  <div className="col-12 col-md-6 col-xl-4 mt-4 slideUp">
                    <div className={`hovShade h-100 shadow`}>
                      <LazyLoadImage effect='opacity' className='img-fluid acbg rounded shadow' placeholderSrc='/Media/placeholder.avif' src={'/Media/Strawberries.webp'} alt="" />
                      <h4 className="h4 mb-2">Strawberries</h4>
                      <p>
                        Plump and juicy strawberries grown at Agrosmart are bursting with flavor, ideal for enjoying fresh or adding to desserts and salads.
                      </p>
                    </div>
                  </div>
                </Delay>
                <Delay delay={300}>
                  <div className="col-12 col-md-6 col-xl-4 mt-4 slideUp">
                    <div className={`hovShade h-100 shadow`}>
                      <LazyLoadImage effect='opacity' className='img-fluid acbg rounded shadow' placeholderSrc='/Media/placeholder.avif' src={'/Media/Oranges-mix6-1.webp'} alt="" />
                      <h4 className="h4 mb-2">Oranges</h4>
                      <p>
                        Agrosmart's orange groves yield citrusy delights, providing a refreshing burst of flavor whether consumed fresh or juiced.
                      </p>
                    </div>
                  </div>
                </Delay>
                <Delay delay={0}>
                  <div className="col-12 col-md-6 col-xl-4 mt-4">
                    <div className={`hovShade h-100 shadow`}>
                      <LazyLoadImage effect='opacity' className='img-fluid acbg rounded shadow' placeholderSrc='/Media/placeholder.avif' src={'/Media/Bananas.webp'} alt="" />
                      <h4 className="h4 mb-2">Bannanas</h4>
                      <p>
                        Grown in Agrosmart's tropical climate-controlled environments, bananas are harvested at optimal ripeness, offering a sweet and creamy taste.
                      </p>
                    </div>
                  </div>
                </Delay>
                <Delay delay={0}>
                  <div className="col-12 col-md-6 col-xl-4 mt-4">
                    <div className={`hovShade h-100 shadow`}>
                      <LazyLoadImage effect='opacity' className='img-fluid acbg rounded shadow' placeholderSrc='/Media/placeholder.avif' src={'/Media/Peaches.webp'} alt="" />
                      <h4 className="h4 mb-2">Peaches</h4>
                      <p>
                        Agrosmart's succulent peaches are prized for their delicate flavor and tender flesh, perfect for enjoying on their own or incorporated into pies and preserves.
                      </p>
                    </div>
                  </div>
                </Delay>
                <Delay delay={0}>
                  <div className="col-12 col-md-6 col-xl-4 mt-4">
                    <div className={`hovShade h-100 shadow`}>
                      <LazyLoadImage effect='opacity' className='img-fluid acbg rounded shadow' placeholderSrc='/Media/placeholder.avif' src={'/Media/Mangoes-tree.webp'} alt="" />
                      <h4 className="h4 mb-2">Mangoes</h4>
                      <p>
                        With their tropical flair and rich sweetness, Agrosmart's mangoes are a tropical delight, enjoyed fresh or used in smoothies and fruit salads.
                      </p>
                    </div>
                  </div>
                </Delay>
                <Delay delay={0}>
                  <div className="col-12 col-md-6 col-xl-4 mt-4">
                    <div className={`hovShade h-100 shadow`}>
                      <LazyLoadImage effect='opacity' className='img-fluid acbg rounded shadow' placeholderSrc='/Media/placeholder.avif' src={'/Media/Grapes.jpg'} alt="" />
                      <h4 className="h4 mb-2">Grapes</h4>
                      <p>
                        Agrosmart's vineyards produce plump and juicy grapes, perfect for snacking or transforming into delicious wines and jams.
                      </p>
                    </div>
                  </div>
                </Delay>
                <Delay delay={0}>
                  <div className="col-12 col-md-6 col-xl-4 mt-4">
                    <div className={`hovShade h-100 shadow`}>
                      <LazyLoadImage effect='opacity' className='img-fluid acbg rounded shadow' placeholderSrc='/Media/placeholder.avif' src={'/Media/Blueberries.jpg'} alt="" />
                      <h4 className="h4 mb-2">Blueberries</h4>
                      <p>
                        Bursting with antioxidants and flavor, Agrosmart's blueberries are a versatile fruit ideal for enjoying fresh, baked into muffins, or added to breakfast cereals.
                      </p>
                    </div>
                  </div>
                </Delay>
                <Delay delay={0}>
                  <div className="col-12 col-md-6 col-xl-4 mt-4">
                    <div className={`hovShade h-100 shadow`}>
                      <LazyLoadImage effect='opacity' className='img-fluid acbg rounded shadow' placeholderSrc='/Media/placeholder.avif' src={'/Media/Papayas.jpg'} alt="" />
                      <h4 className="h4 mb-2">Papayas</h4>
                      <p>
                        Grown in Agrosmart's tropical climate, papayas offer a sweet and tropical taste, enjoyed fresh or blended into refreshing smoothies.
                      </p>
                    </div>
                  </div>
                </Delay> <Delay delay={0}>
                  <div className="col-12 col-md-6 col-xl-4 mt-4">
                    <div className={`hovShade h-100 shadow`}>
                      <LazyLoadImage effect='opacity' className='img-fluid acbg rounded shadow' placeholderSrc='/Media/placeholder.avif' src={'/Media/Green-Beans.jpg'} alt="" />
                      <h4 className="h4 mb-2">Pineapples</h4>
                      <p>
                        Agrosmart's pineapples are sweet, tangy, and bursting with tropical flavor, perfect for enjoying fresh or grilled for a delicious dessert.
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

export default Fruits