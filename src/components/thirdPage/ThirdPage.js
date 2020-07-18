import React from 'react';
import fineDiningPhoto from '../../svg/icons/food-brown.png';
import exquisiteBar from '../../svg/icons/drink-brown.png';
import aboutArrowDown from '../../svg/two-brown.png';

const ThirdPage = () => {
    return (
        <div className='thirdPage' id='description'>
            <div className='containerOne'>
                <div className='containerInsideOne'>
                    <img src={fineDiningPhoto} alt='Fine Dining'></img>
                    <h1>FINE DINING</h1>
                    <p>Veniam est eiusmod velit pariatur est. Fugiat reprehenderit sint fugiat Lorem. Fugiat non laboris proident deserunt proident consequat et in aliqua nostrud ut ad. Duis minim consequat deserunt officia nisi labore ex sint pariatur. Consequat dolore culpa duis non est aliquip proident Lorem aliqua esse minim.</p>
                </div>
            </div>
            <div className='containerTwo'>
                <div className='containerInsideTwo'>
                    <img src={exquisiteBar} alt='Exquisite Bar'></img>
                    <h1>EXQUISITE BAR</h1>
                    <p>Veniam est eiusmod velit pariatur est. Fugiat reprehenderit sint fugiat Lorem. Fugiat non laboris proident deserunt proident consequat et in aliqua nostrud ut ad. Duis minim consequat deserunt officia nisi labore ex sint pariatur. Consequat dolore culpa duis non est aliquip proident Lorem aliqua esse minim.</p>
                </div>
            </div>
            <div className='barOne'></div>
            <div className='barTwo'></div>
            {/* <img src={aboutArrowDown} className='aboutArrow' alt='Arrow Down'></img> */}
        </div>
    )
}

export default ThirdPage;