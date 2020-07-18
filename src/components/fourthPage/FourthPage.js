import React from 'react';
import musicNights from '../../svg/icons/vinyl-brown.png';
import fastService from '../../svg/icons/kitchen-brown.png';
import arrowDownThree from '../../svg/two-brown.png';

const FourthPage = () => {
    return (
        <div className='fourthPage'>
            <div className='containerOne'>
                <div className='containerInsideOne'>
                    <img src={musicNights} alt='Music Nights'></img>
                    <h1>Music Nights</h1>
                    <p>Veniam est eiusmod velit pariatur est. Fugiat reprehenderit sint fugiat Lorem. Fugiat non laboris proident deserunt proident consequat et in aliqua nostrud ut ad. Duis minim consequat deserunt officia nisi labore ex sint pariatur. Consequat dolore culpa duis non est aliquip proident Lorem aliqua esse minim.</p>
                </div>
            </div>
            <div className='containerTwo'>
                <div className='containerInsideTwo'>
                    <img src={fastService} alt='Fast Service'></img>
                    <h1>Fast Service</h1>
                    <p>Veniam est eiusmod velit pariatur est. Fugiat reprehenderit sint fugiat Lorem. Fugiat non laboris proident deserunt proident consequat et in aliqua nostrud ut ad. Duis minim consequat deserunt officia nisi labore ex sint pariatur. Consequat dolore culpa duis non est aliquip proident Lorem aliqua esse minim.</p>
                </div>
                {/* <img src={arrowDownThree} className='arrowDownThree' alt='Arrow Down'></img> */}
            </div>
        </div>
    )
}

export default FourthPage;
