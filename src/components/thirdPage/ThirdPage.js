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
                    <h1>DOBRE JEDZENIE</h1>
                    <p>Nasze potrawy przygotowywane są przez najlepszych kucharzy z Europy. Posiadają oni wieloletnie doświadczenie w przyrządzaniu potraw z dbałością o najmniejsze szczegóły. Oferujemy Państwu sezonowe potrawy ze swieżych składników, które każdego dnia odwiedzają naszą kuchnie.</p>
                </div>
            </div>
            <div className='containerTwo'>
                <div className='containerInsideTwo'>
                    <img src={exquisiteBar} alt='Exquisite Bar'></img>
                    <h1>EKSKLUZYWNY BAR</h1>
                    <p>W ofercie naszej restauracji znajduje się także bar, którego wnętrze urządzone zostało przy pomocy wyspecjalizowanych, europejskich projektantów. Nasi barmani to prawdziwi pasjonaci swojego zawodu, dlatego zachęcamy do zapoznania się z ich autorskimi koktajlami, które znajdują się w naszym menu.</p>
                </div>
            </div>
            <div className='barOne'></div>
            <div className='barTwo'></div>
            {/* <img src={aboutArrowDown} className='aboutArrow' alt='Arrow Down'></img> */}
        </div>
    )
}

export default ThirdPage;