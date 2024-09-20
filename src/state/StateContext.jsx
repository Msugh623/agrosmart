import React, { createContext, useContext, useEffect, useLayoutEffect, useState } from 'react'
import media from '../media'

const context = createContext()

const StateContext = ({ children }) => {
    const [didScroll, setDidScroll] = useState(false)
    const [scrollData, setScrollData] = useState({ x: scrollX, y: scrollY })
    const [isLooking, setIsLooking] = useState(false)
    const [toPop, setToPop] = useState(0)
    const [twitch, setTwitch] = useState(Number(new Date()))
    const [hero, _] = useState(media.heroBg)
    const [title, setTitle] = useState('')


    useEffect(() => {
        onscroll = () => {
            setDidScroll(true);
            onscroll = () => {
                setTimeout(() => {
                    setScrollData({ x: scrollX, y: scrollY })
                }, 0);
            }
        }
        !didScroll && setTimeout(() => {
            location.pathname == '/' && scrollY == 0 && (() => {
                scroll({ top: 200, behavior: 'smooth' })
                setTimeout(() => {
                    scroll({ top: 0, behavior: 'smooth' })
                }, 1200);
            })()
        }, 5000);
    }, [])


    return (
        <context.Provider
            value={{
                didScroll,
                setDidScroll,
                scrollData,
                isLooking,
                setIsLooking,
                toPop,
                setToPop,
                twitch,
                setTwitch,
                hero,
                title,
                setTitle
            }}>
            {children}
        </context.Provider>
    )
}

export default StateContext
export const useStateContext = () => useContext(context)

