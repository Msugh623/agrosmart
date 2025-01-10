import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useStateContext } from '../../state/StateContext'
import Delay from '../../components/Delay'
import media, { homeProducts } from '../../media'
import { ControlBar, Player } from 'video-react'
import 'video-react/dist/video-react.css';

const LiveStock = () => {
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
                Livestock - Our Farm
              </div>

            </h2>
            <Delay delay={400}>
              <div className='slideUp'>
                Agrosmart is a renowned farm business specializing in livestock production, renowned for its commitment to ethical and sustainable farming practices. Our sprawling pastures provide a nurturing environment for a variety of livestock, including grass-fed cattle, pasture-raised poultry, heritage breed pigs, and free-range eggs. Our grass-fed beef offers a rich, flavorful taste while promoting animal welfare and environmental sustainability.
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mt-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi nulla est repudiandae sint delectus nemo numquam, ea odit architecto quaerat odio expedita, quibusdam cupiditate nobis enim quod! Obcaecati, praesentium pariatur.
                      Asperiores natus sed doloribus rem eveniet inventore deserunt quasi quam non qui enim maiores, autem pariatur omnis velit fugiat? Porro unde doloremque veniam expedita error quasi, recusandae quam alias rerum?
                      <div className="mt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quos ut harum fuga vitae veritatis facilis maxime. Maiores repellendus, modi tempora sapiente eaque facere deserunt, commodi iste quo amet sed.
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex flex-column pt-3">
                    <Player preload='true' height={'100%'} aspectRatio='auto' src="https://res.cloudinary.com/dqbgai7xd/video/upload/v1736540005/19982294-hd_1920_1080_30fps_f0cqd8.mp4">
                      <ControlBar autoHide={false} className="my-class" />
                    </Player>
                  </div>

                </div>
                <div className="mt-3">
                  At Agrosmart Farm, we pride ourselves on producing a diverse range of high-quality livestock products. Some examples include:
                </div>
              </div>
            </Delay>
            <Delay delay={600}>
              <div className={`row`}>
                <Delay delay={100}>
                  <div className="col-12 col-md-6 col-xl-4 mt-4 slideUp">
                    <div className={`hovShade shadow h-100`}>
                      <LazyLoadImage effect='opacity' className='img-fluid acbg rounded shadow' placeholderSrc='/Media/placeholder.avif' src={'/Media/Grass-fed-beef.webp'} alt="" />
                      <h4 className="h4 mb-2">Grass-fed beef</h4>
                      <p>
                        Our cattle roam freely on lush pastures, resulting in tender and flavorful cuts of beef, including steaks, roasts, and ground beef.
                      </p>
                    </div>
                  </div>
                </Delay>
                <Delay delay={200}>
                  <div className="col-12 col-md-6 col-xl-4 mt-4 slideUp">
                    <div className={`hovShade shadow h-100`}>
                      <LazyLoadImage effect='opacity' className='img-fluid acbg rounded shadow' placeholderSrc='/Media/placeholder.avif' src={'/Media/Pasture-raised-poultry.jpeg'} alt="" />
                      <h4 className="h4 mb-2">Pasture-raised poultry</h4>
                      <p>
                        Our chickens enjoy plenty of space to forage and exercise, resulting in delicious and nutritious eggs as well as tender, juicy chicken meat.
                      </p>
                    </div>
                  </div>
                </Delay>
                <Delay delay={300}>
                  <div className="col-12 col-md-6 col-xl-4 mt-4 slideUp">
                    <div className={`hovShade shadow h-100`}>
                      <LazyLoadImage effect='opacity' className='img-fluid acbg rounded shadow' placeholderSrc='/Media/placeholder.avif' src={'/Media/Heritage-breed-pork.webp'} alt="" />
                      <h4 className="h4 mb-2">Heritage breed pork</h4>
                      <p>
                        Raised with care and respect, our heritage breed pigs produce succulent pork cuts, such as chops, ribs, and bacon, known for their exceptional flavor and marbling.
                      </p>
                    </div>
                  </div>
                </Delay>
                <Delay delay={0}>
                  <div className="col-12 col-md-6 col-xl-4 mt-4">
                    <div className={`hovShade shadow h-100`}>
                      <LazyLoadImage effect='opacity' className='img-fluid acbg rounded shadow' placeholderSrc='/Media/placeholder.avif' src={'/Media/Free-range-eggs.jpg'} alt="" />
                      <h4 className="h4 mb-2">Free-range eggs</h4>
                      <p>
                        Our hens roam freely outdoors, producing eggs with vibrant yolks and superior taste, perfect for baking, cooking, or enjoying on their own.
                      </p>
                    </div>
                  </div>
                </Delay>
                <Delay delay={0}>
                  <div className="col-12 col-md-6 col-xl-4 mt-4">
                    <div className={`hovShade shadow h-100`}>
                      <LazyLoadImage effect='opacity' className='img-fluid acbg rounded shadow' placeholderSrc='/Media/placeholder.avif' src={'/Media/milk-farm-products-vector-25454397-e1712768908903.jpg'} alt="" />
                      <h4 className="h4 mb-2">Farm-fresh diary products</h4>
                      <p>
                        From creamy milk to rich cheeses and butter, our dairy products are made from the milk of happy and healthy cows, ensuring freshness and quality in every bite.
                      </p>
                    </div>
                  </div>
                </Delay>
              </div>
            </Delay>
            <div className="mt-3">
              Experience the difference with Agrosmart’s responsibly raised livestock products, where taste, quality, and ethics converge.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LiveStock