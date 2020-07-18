import React, { useState, useEffect, useRef } from 'react';
import ArrowDownFour from './ArrowDownFour';
import ArrowRight from './ArrowRight';
import ArrowLeft from './ArrowLeft';
import gsap, { TweenMax, TweenLite } from 'gsap';
import $ from 'jquery';

const FivePage = () => {

    const [isActive1, setIsActive1] = useState(true);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);
    const [isActive5, setIsActive5] = useState(false);
    const [count, setCount] = useState(0);


    let subtitle = useRef(null);
    let subtitleTwo = useRef(null);
    let subtitleThree = useRef(null);
    let subtitleFour = useRef(null);
    let subtitleFive = useRef(null);

    let opinion = useRef(null);
    let opinionTwo = useRef(null);
    let opinionThree = useRef(null);
    let opinionFour = useRef(null);
    let opinionFive = useRef(null);

    let name = useRef(null);
    let nameTwo = useRef(null);
    let nameThree = useRef(null);
    let nameFour = useRef(null);
    let nameFive = useRef(null);

    // DOTS

    let dotOne = useRef(null);
    let dotTwo = useRef(null);
    let dotThree = useRef(null);
    let dotFour = useRef(null);
    let dotFive = useRef(null);




        const nextSlide = () => {


            // DWA
            // if(($('#subtitle') && $('#opinion') && $('#name')).hasClass('active'))
            if(($('#subtitle') && $('#opinion') && $('#name')).hasClass('active')) {
            // this.setState({isActive1: false, isActive2: true, count: 2})
            console.log('It works');
            setIsActive1(false);
            setIsActive2(true);
            setCount(2);
            TweenLite.to(subtitle, 1, {autoAlpha: 0});
            TweenLite.to(opinion, 1, {autoAlpha: 0});
            TweenLite.to(name, 1, {autoAlpha: 0});
            TweenLite.to(subtitleTwo, 1, {autoAlpha: 1}, 1);
            TweenLite.to(opinionTwo, 1, {autoAlpha: 1}, 1);
            TweenLite.to(nameTwo, 1, {autoAlpha: 1}, 1);
        }

            // CZTERY
        else if(($('#subtitleThree') && $('#opinionThree') && $('#nameThree')).hasClass('active')) {
            // this.setState({isActive1: false, isActive2: false, isActive3: false, isActive4: true, count: 4})
            setIsActive1(false);
            setIsActive2(false);
            setIsActive3(false);
            setIsActive4(true);
            setCount(4);
            TweenLite.to(subtitleThree, 1, {autoAlpha: 0})
            TweenLite.to(opinionThree, 1, {autoAlpha: 0})
            TweenLite.to(nameThree, 1, {autoAlpha: 0})
            TweenLite.to(subtitleFour, 1, {autoAlpha: 1}, 1)
            TweenLite.to(opinionFour, 1, {autoAlpha: 1}, 1)
            TweenLite.to(nameFour, 1, {autoAlpha: 1}, 1)
        }

            // PIĘć
        else if(($('#subtitleFour') && $('#opinionFour') && $('#nameFour')).hasClass('active')) {
            // this.setState({isActive1: false, isActive2: false, isActive3: false, isActive4: false, isActive5: true, count: 5})
            setIsActive1(false);
            setIsActive2(false);
            setIsActive3(false);
            setIsActive4(false);
            setIsActive5(true);
            setCount(5);
            TweenLite.to(subtitleFour, 1, {autoAlpha: 0})
            TweenLite.to(opinionFour, 1, {autoAlpha: 0})
            TweenLite.to(nameFour, 1, {autoAlpha: 0})
            TweenLite.to(subtitleFive, 1, {autoAlpha: 1}, 1)
            TweenLite.to(opinionFive, 1, {autoAlpha: 1}, 1)
            TweenLite.to(nameFive, 1, {autoAlpha: 1}, 1)
        }

            // SZEŚĆ
        else if(($('#subtitleFive') && $('#opinionFive') && $('#nameFive')).hasClass('active')) {
            // this.setState({isActive1: true, isActive2: false, isActive3: false, isActive4: false, isActive5: false, count: 1})
            setIsActive1(true);
            setIsActive2(false);
            setIsActive3(false);
            setIsActive4(false);
            setIsActive5(false);
            setCount(1);
            TweenLite.to(subtitleFive, 1, {autoAlpha: 0})
            TweenLite.to(opinionFive, 1, {autoAlpha: 0})
            TweenLite.to(nameFive, 1, {autoAlpha: 0})
            TweenLite.to(subtitle, 1, {autoAlpha: 1}, 1)
            TweenLite.to(opinion, 1, {autoAlpha: 1}, 1)
            TweenLite.to(name, 1, {autoAlpha: 1}, 1)
        }

            // JEDEN
        else if(($('#subtitleTwo') && $('#opinionTwo') && $('#nameTwo')).hasClass('nonActive')) {
            // this.setState({isActive1: true, isActive2: false, count: 1})
            setIsActive1(true);
            setIsActive2(false);
            setCount(1);
            TweenLite.to(subtitleTwo, 1, {autoAlpha: 0})
            TweenLite.to(opinionTwo, 1, {autoAlpha: 0})
            TweenLite.to(nameTwo, 1, {autoAlpha: 0})
            TweenLite.to(subtitle, 1, {autoAlpha: 1}, 1)
            TweenLite.to(opinion, 1, {autoAlpha: 1}, 1)
            TweenLite.to(name, 1, {autoAlpha: 1}, 1)
        }

            // TRZY
        else if(($('#subtitleTwo') && $('#opinionTwo') && $('#nameTwo')).hasClass('active')) {
            // this.setState({isActive1: false, isActive2: false, isActive3: true, count: 3})
            setIsActive1(false);
            setIsActive2(false);
            setIsActive3(true);
            setCount(3);
            TweenLite.to(subtitleTwo, 1, {autoAlpha: 0})
            TweenLite.to(opinionTwo, 1, {autoAlpha: 0})
            TweenLite.to(nameTwo, 1, {autoAlpha: 0})
            TweenLite.to(subtitleThree, 1, {autoAlpha: 1}, 1)
            TweenLite.to(opinionThree, 1, {autoAlpha: 1}, 1)
            TweenLite.to(nameThree, 1, {autoAlpha: 1}, 1)

        }
    }

    // useEffect(() => {
    //     nextSlide();
    // })


        const prevSlide = () => {


            // DWA
        if(($('#subtitleTwo') && $('#opinionTwo') && $('#nameTwo')).hasClass('active')){
            // this.setState({isActive2: false, isActive1: true, count: 1})
            setIsActive2(false);
            setIsActive1(true);
            setCount(1);
            TweenLite.to(subtitleTwo, 1, {autoAlpha: 0})
            TweenLite.to(opinionTwo, 1, {autoAlpha: 0})
            TweenLite.to(nameTwo, 1, {autoAlpha: 0})
            TweenLite.to(subtitle, 1, {autoAlpha: 1}, 1)
            TweenLite.to(opinion, 1, {autoAlpha: 1}, 1)
            TweenLite.to(name, 1, {autoAlpha: 1}, 1)
        }


            // TRZY
        else if(($('#subtitle') && $('#opinion') && $('#name')).hasClass('active')){
            // this.setState({isActive1: false, isActive5: true, count: 5})
            setIsActive1(false);
            setIsActive5(true);
            setCount(5);
            TweenLite.to(subtitle, 1, {autoAlpha: 0})
            TweenLite.to(opinion, 1, {autoAlpha: 0})
            TweenLite.to(name, 1, {autoAlpha: 0})
            TweenLite.to(subtitleFive, 1, {autoAlpha: 1}, 1)
            TweenLite.to(opinionFive, 1, {autoAlpha: 1}, 1)
            TweenLite.to(nameFive, 1, {autoAlpha: 1}, 1)
        }


            // CZTERY
        else if(($('#subtitleThree') && $('#opinionThree') && $('#nameThree')).hasClass('active')){
            // this.setState({isActive3: false, isActive2: true, count: 2})
            setIsActive3(false);
            setIsActive2(true);
            setCount(2);
            TweenLite.to(subtitleThree, 1, {autoAlpha: 0})
            TweenLite.to(opinionThree, 1, {autoAlpha: 0})
            TweenLite.to(nameThree, 1, {autoAlpha: 0})
            TweenLite.to(subtitleTwo, 1, {autoAlpha: 1}, 1)
            TweenLite.to(opinionTwo, 1, {autoAlpha: 1}, 1)
            TweenLite.to(nameTwo, 1, {autoAlpha: 1}, 1)
        }


            // PIĘĆ
        else if(($('#subtitleFour') && $('#opinionFour') && $('#nameFour')).hasClass('active')){
            // this.setState({isActive4: false, isActive3: true, count: 3})
            setIsActive4(false);
            setIsActive3(true);
            setCount(3);
            TweenLite.to(subtitleFour, 1, {autoAlpha: 0})
            TweenLite.to(opinionFour, 1, {autoAlpha: 0})
            TweenLite.to(nameFour, 1, {autoAlpha: 0})
            TweenLite.to(subtitleThree, 1, {autoAlpha: 1}, 1)
            TweenLite.to(opinionThree, 1, {autoAlpha: 1}, 1)
            TweenLite.to(nameThree, 1, {autoAlpha: 1}, 1)
        }


            // SZEŚĆ
        else if(($('#subtitleFive') && $('#opinionFive') && $('#nameFive')).hasClass('active')){
            // this.setState({isActive5: false, isActive4: true, count: 4})
            setIsActive5(false);
            setIsActive4(true);
            setCount(4);
            TweenLite.to(subtitleFive, 1, {autoAlpha: 0})
            TweenLite.to(opinionFive, 1, {autoAlpha: 0})
            TweenLite.to(nameFive, 1, {autoAlpha: 0})
            TweenLite.to(subtitleFour, 1, {autoAlpha: 1}, 1)
            TweenLite.to(opinionFour, 1, {autoAlpha: 1}, 1)
            TweenLite.to(nameFour, 1, {autoAlpha: 1}, 1)
        }

    }

    const dotOneClick = () => {
        setIsActive1(true);
        setIsActive2(false);
        setIsActive3(false);
        setIsActive4(false);
        setIsActive5(false);
    }

    const dotTwoClick = () => {
        setIsActive2(true);
        setIsActive1(false);
        setIsActive3(false);
        setIsActive4(false);
        setIsActive5(false);
    }

    const dotThreeClick = () => {
        setIsActive3(true);
        setIsActive1(false);
        setIsActive2(false);
        setIsActive4(false);
        setIsActive5(false);
    }

    const dotFourClick = () => {
        setIsActive4(true);
        setIsActive1(false);
        setIsActive2(false);
        setIsActive3(false);
        setIsActive5(false);
    }

    const dotFiveClick = () => {
        setIsActive5(true);
        setIsActive1(false);
        setIsActive2(false);
        setIsActive3(false);
        setIsActive4(false);
    }






    return (
        <div className='fivePage'>
            <div className='reviewPhoto'></div>
            <div className='review'>
                <div className='boxBefore'></div>
                <div className='titleBox'>
                    <h1 className='title'>REVIEWS</h1>
                </div>
                {/* subtitle */}
                <div className='subtitleBox'>
                    <h2 id='subtitle' ref={el => subtitle = el} className={isActive1 ? 'subtitle active' : 'subtitle nonActive'}>'Unforgettable Experience'</h2>
                    <h2 id='subtitleTwo' ref={el => subtitleTwo = el} className={isActive2 ? 'subtitle active' : 'subtitle nonActive'}>'Unforgettable Experience 2'</h2>
                    <h2 id ='subtitleThree' ref={el => subtitleThree = el} className={isActive3 ? 'subtitle active' : 'subtitle nonActive'}>'Unforgettable Experience 3'</h2>
                    <h2 id='subtitleFour' ref={el => subtitleFour = el} className={isActive4 ? 'subtitle active' : 'subtitle nonActive'}>'Unforgettable Experience 4'</h2>
                    <h2 id='subtitleFive' ref={el => subtitleFive = el} className={isActive5 ? 'subtitle active' : 'subtitle nonActive'}>'Unforgettable Experience 5'</h2>
                </div>
                <div className='commasBox'>
                    <h1 className='commas'>, ,</h1>
                </div>
                {/* opinion */}
                <div className='opinionBox'>
                    <p id='opinion' ref={el => opinion = el} className={isActive1 ? 'opinion active' : 'opinion nonActive'}>Ullamco exercitation cillum enim labore in. Mollit nostrud et eiusmod occaecat eu nisi fugiat. Aliqua nostrud deserunt laborum magna aute ex deserunt fugiat tempor exercitation. Excepteur reprehenderit et sunt proident et incididunt sit. Nisi ullamco ut mollit irure minim.</p>
                    <p id='opinionTwo' ref={el => opinionTwo = el} className={isActive2 ? 'opinion active' : 'opinion nonActive'}>Ullamco exercitation cillum enim labore in. Mollit nostrud et eiusmod occaecat eu nisi fugiat. Aliqua nostrud deserunt laborum magna aute ex deserunt fugiat tempor exercitation. Excepteur reprehenderit et sunt proident et incididunt sit. Nisi ullamco ut mollit irure minim. 2</p>
                    <p id='opinionThree' ref={el => opinionThree = el} className={isActive3 ? 'opinion active' : 'opinion nonActive'}>Ullamco exercitation cillum enim labore in. Mollit nostrud et eiusmod occaecat eu nisi fugiat. Aliqua nostrud deserunt laborum magna aute ex deserunt fugiat tempor exercitation. Excepteur reprehenderit et sunt proident et incididunt sit. Nisi ullamco ut mollit irure minim. 3</p>
                    <p id='opinionFour' ref={el => opinionFour = el} className={isActive4 ? 'opinion active' : 'opinion nonActive'}>Ullamco exercitation cillum enim labore in. Mollit nostrud et eiusmod occaecat eu nisi fugiat. Aliqua nostrud deserunt laborum magna aute ex deserunt fugiat tempor exercitation. Excepteur reprehenderit et sunt proident et incididunt sit. Nisi ullamco ut mollit irure minim. 4</p>
                    <p id='opinionFive' ref={el => opinionFive = el} className={isActive5 ? 'opinion active' : 'opinion nonActive'}>Ullamco exercitation cillum enim labore in. Mollit nostrud et eiusmod occaecat eu nisi fugiat. Aliqua nostrud deserunt laborum magna aute ex deserunt fugiat tempor exercitation. Excepteur reprehenderit et sunt proident et incididunt sit. Nisi ullamco ut mollit irure minim. 5</p>
                </div>
                {/* name */}
                <div className='nameBox'>
                    <h2 id='name' ref={el => name = el} className={isActive1 ? 'name active' : 'name nonActive'}>- Kamil Kubik</h2>
                    <h2 id='nameTwo' ref={el => nameTwo = el} className={isActive2 ? 'name active' : 'name nonActive'}>- Kamil Kubik 2</h2>
                    <h2 id='nameThree' ref={el => nameThree = el} className={isActive3 ? 'name active' : 'name nonActive'}>- Kamil Kubik 3</h2>
                    <h2 id='nameFour' ref={el => nameFour = el} className={isActive4 ? 'name active' : 'name nonActive'}>- Kamil Kubik 4</h2>
                    <h2 id='nameFive' ref={el => nameFive = el} className={isActive5 ? 'name active' : 'name nonActive'}>- Kamil Kubik 5</h2>
                </div>
                <div className='boxAfter'></div>
                {/* ARROWS */}
                <div className='arrowRightBox'>
                    <ArrowRight nextSlide={nextSlide}></ArrowRight>
                </div>
                <div className='arrowLeftBox'>
                    <ArrowLeft prevSlide={prevSlide}></ArrowLeft>
                </div>
                {/* Dots */}
                <div className='dotsContainer'>
                    <div className='dotContainer'>
                        <div className='dot dotOne' ref={el => dotOne = el} onClick={dotOneClick}></div>
                    </div>
                    <div className='dotContainer'>
                        <div className='dot dotTwo' ref={el => dotTwo = el} onClick={dotTwoClick}></div>
                    </div>
                    <div className='dotContainer'>
                        <div className='dot dotThree' ref={el => dotThree = el} onClick={dotThreeClick}></div>
                    </div>
                    <div className='dotContainer'>
                        <div className='dot dotFour' ref={el => dotFour = el} onClick={dotFourClick}></div>
                    </div>
                    <div className='dotContainer'>
                        <div className='dot dotFive' ref={el => dotFive = el} onClick={dotFiveClick}></div>
                    </div>
                </div>
                <div className='arrowBox'>
                    <ArrowDownFour></ArrowDownFour>
                </div>
            </div>
        </div>
    )
}

export default FivePage;
