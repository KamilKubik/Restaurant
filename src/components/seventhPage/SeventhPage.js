import React from 'react';
import starter from '../../svg/starter/starterPhotoSvgOff.svg';
import mainCourse from '../../svg/mainCourse/mainCourseSvgOff.svg';
import coctail from '../../svg/coctail/coctailSvgOff.svg';
import arrowRightGallery from '../../svg/icons/arrow-right-brown.png';
import ArrowDownSix from './ArrowDownSix';
// import { Link } from 'react-router-dom';
// import GalleryPage from '../galleryPage/GalleryPage';

import { Link } from 'react-router-dom';

const SeventhPage = () => {
    return (
        <div className='seventhPage' id='gallery'>
            <div className='barThree'></div>
            <div className='barFour'></div>
            <div className='galleryTitle'>
                <div className='galleryWrapper'>
                    <h2 className='gallerySubtitle'>Make it simple</h2>
                    <h1 className='galleryTitle'>OUR GALLERY</h1>
                </div>
            </div>
            <div className='galleryContainer'>
                <div className='starterContainer'>
                    <img src={starter} className='starter' alt='Starter'></img>
                    <h2 className='starterTitle'>STARTERS</h2>
                </div>
                <div className='mainCourseContainer'>
                    <img src={mainCourse} className='mainCourse' alt='Main Course'></img>
                    <h2 className='mainCourseTitle'>ENTERPIECE</h2>
                </div>
                <div className='coctailContainer'>
                    <img src={coctail} className='coctail' alt='Coctail'></img>
                    <h2 className='coctailTitle'>COCTAILS</h2>
                </div>
            </div>
            <Link to='/gallery'><img src={arrowRightGallery} className='arrowRightGallery'></img></Link>
            <div className='arrowDownGallery'></div>
            <ArrowDownSix></ArrowDownSix>
        </div>

    )
}

export default SeventhPage;
