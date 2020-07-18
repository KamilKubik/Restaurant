import React, { useEffect, useRef } from 'react';
import arrowDownSix from '../../svg/two-brown.png';
import { Link } from 'react-scroll';
import { TimelineMax } from 'gsap';

const ArrowDownSix = () => {
    let arrowDown = useRef(null);

    let tl = new TimelineMax({repeat: -1});

    useEffect(() => {
        tl.set(arrowDown, {y: -50, opacity: 0})
        tl.to(arrowDown, 2, {y: 0, opacity: 1})
        tl.to(arrowDown, 2, {y: 50, opacity: 0})
    }, [])
    return (
        <Link to='contact'smooth={true}duration={2000}><img ref={el => arrowDown = el} src={arrowDownSix} className='arrowDownSix' alt='Arrow Down'></img></Link>
    )
}

export default ArrowDownSix;
