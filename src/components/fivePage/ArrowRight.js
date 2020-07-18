import React from 'react';
import arrowRight from '../../svg/arrowRightSvg.svg';

const ArrowRight = ({nextSlide}) => {
    return (
        <img onClick={nextSlide} src={arrowRight} className='arrowRight' alt='Arrow Right'></img>
    )
}

export default ArrowRight;
