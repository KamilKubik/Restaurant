import React from 'react';
import MenuPage from './MenuPage';
import MainDish from './MainDish';
import MenuCoctails from './MenuCoctails';
import ContactPage from '../contactPage/ContactPage';
import arrowBack from '../../svg/arrowLeftSvg.svg';
import { Link } from 'react-router-dom';


const MenuData = () => {

    return (
        <>
        <div className='menuPage'>

            {/* <div className='menuBarOne'></div>
            <div className='menuBarTwo'></div> */}

            <div className='menuTitle'>
                <div className='arrowBackContainer'>
                    <Link to='/'><img className='arrowBack' src={arrowBack}></img></Link>
                </div>
                <div className='menuPageTitleContainer'>
                    <h2>Try it all</h2>
                    <h1>OUR MENU</h1>
                </div>
            </div>
            <div className='startersContainer'>
                <h2>STARTERS</h2>
                <div className='startersBar'></div>
            </div>
            <MenuPage></MenuPage>
            <div className='mainDishContainer'>
                <h2>MAIN DISHES</h2>
                <div className='mainDishBar'></div>
            </div>
            <MainDish></MainDish>
            <div className='coctailsContainer'>
                <h2>COCTAILS</h2>
                <div className='coctailsBar'></div>
            </div>
            <MenuCoctails></MenuCoctails>
            <ContactPage></ContactPage>
        </div>
        </>
    )
}

export default MenuData;
