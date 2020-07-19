import React, { useState, useEffect } from 'react';
// import MenuData from './menuData';
import * as contentful from 'contentful';

const menuData = contentful.createClient({
    space: '6c4eorqabu5d',
    accessToken: 'fTf6GtQePnopZ7mJn32BPdQZZgvds1jGRM_UUW3hiVs'
});

const MenuPage = () => {

    const [menuDatas, setmenuData] = useState([]);

    async function fetchEntries() {
        const entries = await menuData.getEntries()
        if(entries.items) return entries.items
        console.log(`Error getting entries`)
    }

    useEffect(() => {
        async function getPosts() {
            const allPosts = await fetchEntries()
            setmenuData([...allPosts])
        }
        getPosts()
    }, [])



    return (
            <div className='menuPageStarterContainer'>
                {menuDatas.length > 0 ? menuDatas.map(item => {
                    return (
                        <div className='menuGrid'>
                            <div className='dishContainer'>
                                <h2 className='starterName'>{item.fields.starterName}</h2>
                                <p className='starterIngredients'>{item.fields.starterIngredients}</p>
                                <h2 className='starterPrice'>{item.fields.starterPrice}</h2>
                            </div>
                        </div>
                    )
                }) : null}
            </div>
    )
}

export default MenuPage;
