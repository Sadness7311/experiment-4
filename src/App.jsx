import Cursor from "./components/Cursor"
import S1 from "./components/S1"
import S2 from "./components/S2"
import S3 from "./components/S3"
import { useEffect } from 'react' 
import LocomotiveScroll from 'locomotive-scroll'
import ScrollReveal from 'scrollreveal'
import gsap from 'gsap'

function App() {

  useEffect(() => {  
    const scroll = new LocomotiveScroll({
      smoothMobile: true,
      mobile: { 
        smooth: true
      },
      tablet: { 
        breakpoint: 0
      }
  }) 
    ScrollReveal().reveal('body *:not(h1)') 
  }, [])

  useEffect(() => { 
    const headings = gsap.utils.toArray('.s1 h1')
    let i = 0
    const interval = setInterval(() => {
      gsap.to(headings[i], { width: '100%', opacity: 1, duration: .5,
      onComplete: () => { 
        i += 1; 
        if (i === headings.length) {
          clearInterval(interval) 
          gsap.to('.s1 *', { opacity: 1 })
          }
        } 
      })
    }, 600)
   }, [])

  return (
    <>
      <S1 />
      <S2 />
      <S3 />
      <Cursor />
    </>
  )
}

export default App
