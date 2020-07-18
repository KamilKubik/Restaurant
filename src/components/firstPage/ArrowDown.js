import React, { useEffect, useRef } from 'react';
import arrowDownOne from '../../svg/two-brown.png';
import { Link } from 'react-scroll';
import { TimelineMax } from 'gsap';

const ArrowDown = () => {


    let arrowDown = useRef(null);

    let tl = new TimelineMax({repeat: -1});

    useEffect(() => {
        tl.set(arrowDown, {y: -50, opacity: 0})
        tl.to(arrowDown, 2, {y: 0, opacity: 1})
        tl.to(arrowDown, 2, {y: 50, opacity: 0})
    }, [])


    return (
            <Link to='about'smooth={true}duration={1000}><img className='arrowDown'src={arrowDownOne} alt='Arrow Down' ref={el => arrowDown = el}></img></Link>
    )
}

export default ArrowDown;
