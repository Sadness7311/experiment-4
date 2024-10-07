import Logo from "./Logo";
import Menu from "./Menu";
import MenuHandler from "./MenuHandler";

export default function S1() { 
    return (
        <div className="s1 d-f-c">
            <h1 data-scroll data-scroll-speed=".3">Developer</h1>
            <h1 data-scroll data-scroll-speed=".2">Designer</h1>
            <h1 data-scroll data-scroll-speed=".1">Dynamic</h1>
            <p data-scroll data-scroll-speed="-0.4" >Scroll or die.</p>
            <button style={{ bottom: '10%', right: '5%' }} 
            data-scroll data-scroll-speed="-0.4" onClick={() => document.querySelector('.s3').scrollIntoView()}>Projects</button>
            <Logo />
            <Menu />
            <MenuHandler />
        </div>
    )
}
