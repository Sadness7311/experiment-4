import { useEffect } from 'react'
import gsap from 'gsap'

export default function S3() {

    useEffect(() => {
        window.addEventListener('progressEvent', (e) => {
            const { target, progress } = e.detail;
            gsap.to(target, { width: `${ progress * 120 }%` })
        })
    }, [])

    return (
        <div className="s3 d-f-c">
            <h1 data-scroll data-scroll-event-progress="progressEvent" className="bar">Projects</h1>
            <div className="projects-container d-f-c">
                <h1>...</h1>
            </div>
        </div>
    )
}