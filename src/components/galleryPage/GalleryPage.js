import React from 'react';
import ContactPage from '../contactPage/ContactPage';
import arrowBack from '../../svg/arrowLeftSvg.svg';
import { Link } from 'react-router-dom';
import GalleryArrowDown from './GalleryArrowDown';

const GalleryPage = () => {

    return (
        <div className='galleryPage'>

            <div className='galleryBarOne'></div>
            <div className='galleryBarTwo'></div>
            <div className='galleryBarThree'></div>

            <div className='titleContainer'>
                <div className='arrowBackContainer'>
                    <Link to='/'><img className='arrowBack' src={arrowBack}></img></Link>
                </div>
                <div className='centerContainer'>
                    <h2>To bardzo proste</h2>
                    <h1>NASZA GALERIA</h1>
                </div>
            </div>

            <div className='galleryPageContainer'>

                <div className='containerOne'>
                    <div className='photoOneContainer'>
                        <div className='photoOne'></div>
                    </div>
                    <div className='photoTwoContainer'>
                        <div className='photoTwo'></div>
                    </div>
                    <div className='photoThreeContainer'>
                        <div className='photoThree'></div>
                    </div>
                    <div className='photoFourContainer'>
                        <div className='photoFour'></div>
                    </div>
                </div>

                <div className='containerTwo'>
                    <div className='photoFiveContainer'>
                        <div className='photoFive'></div>
                    </div>
                    <div className='photoSixContainer'>
                        <div className='photoSix'></div>
                    </div>
                    <div className='photoSevenContainer'>
                        <div className='photoSeven'></div>
                    </div>
                    <div className='photoEightContainer'>
                        <div className='photoEight'></div>
                    </div>
                </div>

                <div className='containerThree'>
                    <div className='photoNineContainer'>
                        <div className='photoNine'></div>
                    </div>
                    <div className='photoTenContainer'>
                        <div className='photoTen'></div>
                    </div>
                    <div className='photoElevenContainer'>
                        <div className='photoEleven'></div>
                    </div>
                    <div className='photoTwelveContainer'>
                        <div className='photoTwelve'></div>
                    </div>
                </div>

                <div className='containerFour'>
                    <div className='photoThirteenContainer'>
                        <div className='photoThirteen'></div>
                    </div>
                    <div className='photoFourteenContainer'>
                        <div className='photoFourteen'></div>
                    </div>
                    <div className='photoFifteenContainer'>
                        <div className='photoFifteen'></div>
                    </div>
                    <div className='photoSixteenContainer'>
                        <div className='photoSixteen'></div>
                    </div>
                </div>

                <div className='containerFive'>
                    <div className='photoSeventeenContainer'>
                        <div className='photoSeventeen'></div>
                    </div>
                    <div className='photoEighteenContainer'>
                        <div className='photoEighteen'></div>
                    </div>
                    <div className='photoNineteenContainer'>
                        <div className='photoNineteen'></div>
                    </div>
                    <div className='photoTwentyContainer'>
                        <div className='photoTwenty'></div>
                    </div>
                </div>

            </div>

            <GalleryArrowDown></GalleryArrowDown>

            <ContactPage></ContactPage>
        </div>
    )
}

export default GalleryPage;
