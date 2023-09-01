import { useEffect } from 'react'
import gsap from 'gsap'

export default function Cursor() {
  useEffect(() => {
    const cursor = document.querySelector('.cursor')

    window.addEventListener('mousemove', (e) => {
      gsap.to(cursor, { left: e.clientX, top: e.clientY, duration: 1 })
    })
  }, [])

  return <div className="cursor"></div>
}
