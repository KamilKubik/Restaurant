import React from 'react';
import Menu from './Menu';
import Title from './Title';
import ArrowDown from './ArrowDown';
import { ReactComponent as Logo } from '../../svg/firstPagePhotoSvg.svg';

const FirstPage = () => {
    return (
        <div>
            <div className='image'>
                <Menu />
                <Title />
                <ArrowDown></ArrowDown>
            </div>
        </div>
    )
}

export default FirstPage;
