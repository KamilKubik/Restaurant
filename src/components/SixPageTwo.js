import React, { useState, useEffect } from 'react';
import clientTwo from './clientTwo';
import ArrowDownFive from './sixPage/ArrowDownFive';
import { Link } from 'react-router-dom';

const SixPageTwo = () => {

    const [datas, setDatas] = useState([]);

    async function fetchEntries() {
        const entries = await clientTwo.getEntries()
        if(entries.items) return entries.items
        console.log(`Error getting entries`)
    }

    useEffect(() => {
        async function getPosts() {
            const allPosts = await fetchEntries()
            setDatas([...allPosts])
        }
        getPosts()
    }, [])

    console.log(datas);

    return (
        <div className='sixPageTwo' id='menu'>
            <div className='menuTitleContainer'>
                <div className='menuWrapper'>
                    <h2 className='menuSubtitle'>Special selection</h2>
                    <h1 className='menuTitle'>FROM OUR MENU</h1>
                </div>
            </div>
            <div className='menuContainer'>
                {datas.length > 0 ? datas.map(item => {
                    return (
                        <div className='menuGrid'>
                            <div className='dishContainer'>
                                <h2 className='dishName'>{item.fields.dishName}</h2>
                                <p className='menuIngredients'>{item.fields.dishIngredients}</p>
                                <h2 className='dishPrice'>{item.fields.dishPrice}</h2>
                            </div>
                        </div>
                    )
                }) : null}
            </div>
            <div className='viewAllContainer'>
                <Link to='/menu'><button className='viewAllButton'>VIEW ALL</button></Link>
            </div>
            <div className='menuArrowDown'>
                <ArrowDownFive></ArrowDownFive>
            </div>
            <div className='rightBar'></div>
        </div>
    )
}

export default SixPageTwo;
