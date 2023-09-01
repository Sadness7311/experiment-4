import { useEffect} from 'react'
import gsap from 'gsap'

export default function MenuHandler() {

    useEffect(() => {
        gsap.utils.toArray('.handler h2')
        .forEach(h2 => h2.addEventListener('click', 
        () => gsap.to('.handler', { height: 0 })))
    }, [])
    return (
    <div className="handler d-f-c">
        <h2>Home</h2>
        <h2 onClick={() => document.querySelector('.s2').scrollIntoView()}>About</h2>
        <h2 onClick={() => document.querySelector('.s3').scrollIntoView()}>Projects</h2>
        <h2>Back</h2>
    </div>
 )
}