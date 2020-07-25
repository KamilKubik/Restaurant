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
                    <h1>WIECZORY MUZYCZNE</h1>
                    <p>W każdy piątek w naszym lokalu dostępne jest specjalne menu z wyjątkowymi przekąskami. Idealnie wprowadzają one w atmosferę tak zwanego 'żywego jedzenia', którego uzupełnieniem jest zespół muzyczny, który wybierany jest przez naszych klientów z początkiem każdego, nowego miesiąca.</p>
                </div>
            </div>
            <div className='containerTwo'>
                <div className='containerInsideTwo'>
                    <img src={fastService} alt='Fast Service'></img>
                    <h1>SZYBKA OBSŁUGA</h1>
                    <p>Rekrutacja na stanowisko kelnera w naszej restauracji odbywa się poprzez kilkuetapowy proces. W ten sposób jesteśmy w stanie zapewnić Państwu najwyższy poziom świadczenia naszych usług. Zadowolenie naszych klientów jest dla nas priorytetem, który wymaga od nas pełnego profesjonalizmu.</p>
                </div>
                {/* <img src={arrowDownThree} className='arrowDownThree' alt='Arrow Down'></img> */}
            </div>
        </div>
    )
}

export default FourthPage;
