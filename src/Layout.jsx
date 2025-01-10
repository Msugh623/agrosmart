import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './pages/Home'
import StateContext, { useStateContext } from './state/StateContext'
import About from './pages/About'
import GreenHouseProject from './pages/GreenHouseProject'
import Travels from './pages/Travels'
import Contact from './pages/Contact'
import AppBody from './components/AppBody'
import Tours from './pages/OurFarm'
import Vegetables from './pages/OurFarm/Vegetables'
import Fruits from './pages/OurFarm/Fruits'
import LiveStock from './pages/OurFarm/LiveStock'
import OilProducts from './pages/OurFarm/OilProducts'
import SeaAndFrozen from './pages/OurFarm/SeaAndFrozen'

const ViewPort = () => {
    const { scrollData, title } = useStateContext()
    return (
        <BrowserRouter>
            <main className='p-0 m-0 themebg'>
                <header>
                    <title>{title && `${title} - `}Agrosmart</title>
                </header>
                <Routes>
                    <Route path='/' element={<AppBody />}>
                        <Route index element={<Home />} />
                        <Route path='/about-us' element={<About />} />
                        <Route path='/some-other-page' element={<GreenHouseProject />} />
                        <Route path='/travels' element={<Travels />} />
                        <Route path='/contact-us' element={<Contact />} />
                        <Route path='/our-farm' element={<Tours />} />

                        {/* Our Farm Sub Parts */}
                        <Route path='/our-farm/vegetables' element={<Vegetables />} />
                        <Route path='/our-farm/fruits' element={<Fruits />} />
                        <Route path='/our-farm/oil-production' element={<OilProducts />} />
                        <Route path='/our-farm/livestock' element={<LiveStock />} />
                        <Route path='/our-farm/sea-and-frozen' element={<SeaAndFrozen />} />

                    </Route>
                </Routes>
                <div className="content pb-0 mb-0">
                    <Footer />
                </div>
                <div className="themebg themetxt px-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                {/* <div style={{ position: 'fixed', top: '200px', zIndex: 1000 }} className='text-light bg-primary'>
                    {JSON.stringify(scrollData)}
                </div> */}
            </main>
        </BrowserRouter>
    )
}

const Layout = () => {
    return <StateContext>
        <ViewPort />
    </StateContext>
}

export default Layout