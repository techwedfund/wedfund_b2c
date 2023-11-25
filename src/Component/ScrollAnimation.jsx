import { useEffect } from 'react'
import '../style/Scroll.css'

function ScrollAnimation({children}) {
    
    useEffect(() => {
        const box = document.querySelector('.scroll-box')

        const handleScrollY = () => {
            const scrollY = window.scrollY;
            const translateY = scrollY * 0.5;

            box.style.transform = `translateY(${translateY}px)`
        };

        window.addEventListener('scroll', handleScrollY)

        return() => {
            window.removeEventListener('scroll', handleScrollY)
        }
    },[]);

  return (
    <div className='scroll-box'>{children}</div>
  )
}

export default ScrollAnimation