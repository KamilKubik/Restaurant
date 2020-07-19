import React, { useState, useEffect } from 'react';
import * as contentful from 'contentful';

const mainDishData = contentful.createClient({
    space: 'ina2xmgpcw2o',
    accessToken: 'M78eoavqfCgO3PmlDpunTBlfq8EyNG0xVKVJfv9pURM'
});

const MenuCoctails = () => {

    const [CoctailsDatas, setCoctailsData] = useState([]);

    async function fetchEntries() {
        const entries = await mainDishData.getEntries()
        if(entries.items) return entries.items
        console.log(`Error getting entries`)
    }

    useEffect(() => {
        async function getPosts() {
            const allPosts = await fetchEntries()
            setCoctailsData([...allPosts])
        }
        getPosts()
    }, [])


    return (
        <div className='menuPageCoctailContainer'>
            {CoctailsDatas.length > 0 ? CoctailsDatas.map(item => {
                return (
                    <div className='menuGrid'>
                        <div className='coctailContainer'>
                            <h2 className='coctailName'>{item.fields.coctailName}</h2>
                            <p className='coctailIngredients'>{item.fields.coctailIngredients}</p>
                            <h2 className='coctailPrice'>{item.fields.coctailPrice}</h2>
                        </div>
                    </div>
                )
            }) : null}
        </div>
    )
}

export default MenuCoctails;