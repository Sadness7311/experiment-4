import gsap from 'gsap'
export default function Menu() {
    return (
        <div className="menu" data-scroll data-scroll-speed="-0.2" >
            <div className="icon" onClick={() => gsap.to('.handler', { height: '100vh' })}>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}