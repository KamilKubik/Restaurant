import React from 'react';
import arrowLeft from '../../svg/arrowLeftSvg.svg';

const ArrowLeft = ({prevSlide}) => {
    return (
        <img onClick={prevSlide} src={arrowLeft} className='arrowLeft' alt='Arrow Left'></img>
    )
}

export default ArrowLeft;
