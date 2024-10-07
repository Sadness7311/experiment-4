import QuoteCard from "./QuoteCard";
import { useEffect } from 'react'
import gsap from 'gsap'
export default function S2() {

    useEffect(() => {
        window.addEventListener('pointermove', e => gsap.to('.logo-container div', { skewX: e.clientX / 100, skewY: e.clientY / 100 }))
    }, [])
    return (
        <div className="s2 d-f-c">
            <h1 data-scroll data-scroll-speed='-0.04'>Beyond Simple</h1>
            <p >Passionate Web Developer and Designer with a creative vision and a knack for turning ideas into digital experiences. With a foundation in both frontend and backend technologies!</p>
            <h2>Things I know</h2>
            <p>These are the libraries and frameworks I am capable of using to the fullest extent.</p>
            
            <div className="logo-container">
                <div style={ { backgroundImage: "url('react-logo.svg')" }}></div>
                <div style={ { backgroundImage: "url('three-logo.svg')" }}></div>
                <div style={ { backgroundImage: "url('express-logo.svg')" }}></div>
            </div>
            <div className="logo-container">
                <div style={ { backgroundImage: "url('next-logo.svg')" }}></div>
                <div style={ { backgroundImage: "url('gsap-logo.svg')" }}></div>
                <div style={ { backgroundImage: "url('mongo-logo.svg')" }}></div>
            </div>
        </div>
    )
}
