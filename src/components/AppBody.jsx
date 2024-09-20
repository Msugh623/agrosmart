import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Nav from './Nav'

const AppBody = () => {
    const location = useLocation()
    return (
        <div>
            {location.pathname !== '/' && <Nav />}
            <Outlet />
        </div>
    )
}

export default AppBody