import React, { useEffect, useRef } from 'react';
import arrowDownTwo from '../../svg/two-brown.png';
import { Link } from 'react-scroll';
import { TimelineMax } from 'gsap';

const ArrowDownTwo = () => {
    let arrowDown = useRef(null);

    let tl = new TimelineMax({repeat: -1});

    useEffect(() => {
        tl.set(arrowDown, {y: -50, opacity: 0})
        tl.to(arrowDown, 2, {y: 0, opacity: 1})
        tl.to(arrowDown, 2, {y: 50, opacity: 0})
    }, [])
    return (
            <Link to='description'smooth={true}duration={1000}><img ref={el => arrowDown = el} className='arrowDownTwo' src={arrowDownTwo} alt='Arrow Down'></img></Link>
    )
}

export default ArrowDownTwo;
