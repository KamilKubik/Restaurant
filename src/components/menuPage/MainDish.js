import React, { useState, useEffect } from 'react';
import * as contentful from 'contentful';

const mainDishData = contentful.createClient({
    space: '6qw7n3q8yzov',
    accessToken: 'ijxruCNgcdlP5ozTSyi8MoCnfaXGnqNFndiOt13v_SM'
});

const MainDish = () => {

        const [mainDishDatas, setmainDishData] = useState([]);

        async function fetchEntries() {
            const entries = await mainDishData.getEntries()
            if(entries.items) return entries.items
            console.log(`Error getting entries`)
        }

        useEffect(() => {
            async function getPosts() {
                const allPosts = await fetchEntries()
                setmainDishData([...allPosts])
            }
            getPosts()
        }, [])

            return (
                <div className='menuPageMainDishContainer'>
                    {mainDishDatas.length > 0 ? mainDishDatas.map(item => {
                        return (
                            <div className='menuGrid'>
                                <div className='dishContainer'>
                                    <h2 className='mainDishName'>{item.fields.dishName}</h2>
                                    <p className='mainDishIngredients'>{item.fields.dishIngredients}</p>
                                    <h2 className='mainDishPrice'>{item.fields.dishPrice}</h2>
                                </div>
                            </div>
                        )
                    }) : null}
                </div>
            )
 }

export default MainDish;