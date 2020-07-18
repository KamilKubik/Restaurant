import React, { useEffect, useRef } from 'react';
import arrowDownFive from '../../svg/two-brown.png';
import { Link } from 'react-scroll';
import { TimelineMax } from 'gsap';

const ArrowSix = () => {
    let arrowDown = useRef(null);

    let tl = new TimelineMax({repeat: -1});

    useEffect(() => {
        tl.set(arrowDown, {y: -50, opacity: 0})
        tl.to(arrowDown, 2, {y: 0, opacity: 1})
        tl.to(arrowDown, 2, {y: 50, opacity: 0})
    }, [])
    return (
        <div>
            <Link to='gallery'smooth={true}duration={1000}><img ref={el => arrowDown = el} className='arrowDownFive' src={arrowDownFive} alt='Arrow Down'></img></Link>
        </div>
    )
}

export default ArrowSix;