import React, { useEffect, useRef } from 'react';
import arrowDownGallery from '../../svg/two-brown.png';
import { Link } from 'react-scroll';
import { TimelineMax } from 'gsap';

const GalleryArrowDown = () => {

    let arrowDown = useRef(null);

    let tl = new TimelineMax({repeat: -1});

    useEffect(() => {
        tl.set(arrowDown, {y: -50, opacity: 0})
        tl.to(arrowDown, 2, {y: 0, opacity: 1})
        tl.to(arrowDown, 2, {y: 50, opacity: 0})
    }, [])

    return (
        <div className='arrowDownBox'>
            <Link to='contact'smooth={true}duration={1000}><img ref={el => arrowDown = el} src={arrowDownGallery} className='arrowDownGallery' alt='Arrow Down'></img></Link>
        </div>
    )
}

export default GalleryArrowDown;