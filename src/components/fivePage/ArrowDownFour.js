import React, { useEffect, useRef } from 'react';
import arrowDownFour from '../../svg/two-brown.png';
import { Link } from 'react-scroll';
import { TimelineMax, CSSPlugin } from 'gsap/all';

const plugins = [CSSPlugin];
 
const ArrowDownFour = () => {

    let arrowDown = useRef(null);

    let tl = new TimelineMax({repeat: -1});

    useEffect(() => {
        tl.set(arrowDown, {y: -50, opacity: 0})
        tl.to(arrowDown, 2, {y: 0, opacity: 1})
        tl.to(arrowDown, 2, {y: 50, opacity: 0})
    }, [])
    return (
        <Link to='menu'smooth={true}duration={1000}><img ref={el => arrowDown = el} src={arrowDownFour} className='arrowDownFour' alt='Arrow Down'></img></Link>
    )
}

export default ArrowDownFour;
