import React, { useState, useEffect } from 'react';
import client from './client';
import ArrowDownFive from './ArrowDownFive';
import { Link } from 'react-router-dom';

const SixPage = () => {

    const [data, setData] = useState([]);

    async function fetchEntries() {
        const entries = await client.getEntries()
        if(entries.items) return entries.items
        console.log(`Error getting entries`)
    }

    useEffect(() => {
        async function getPosts() {
            const allPosts = await fetchEntries()
            setData([...allPosts])
        }
        getPosts()
    }, [])

    console.log(data);

    return (
        <div className='sixPage' id='menu'>
            <div className='menuTitleContainer'>
                <div className='menuWrapper'>
                    <h2 className='menuSubtitle'>Special selection</h2>
                    <h1 className='menuTitle'>FROM OUR MENU</h1>
                </div>
            </div>
            <div className='menuContainer'>
                {data.length > 0 ? data.map(item => {
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

export default SixPage;
