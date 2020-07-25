import React, { useState, useEffect, useRef } from 'react';
import ArrowDownFour from './ArrowDownFour';
import ArrowRight from './ArrowRight';
import ArrowLeft from './ArrowLeft';
import gsap, { TweenMax, TweenLite, Power0 } from 'gsap';
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
            if(($('#subtitle') && $('#opinion') && $('#name')).hasClass('active')) {
                setIsActive1(false);
                setIsActive2(true);
                setCount(2);
                TweenLite.to(subtitle, 2, {autoAlpha: 0, ease: Power0});
                TweenLite.to(opinion, 2, {autoAlpha: 0, ease: Power0});
                TweenLite.to(name, 2, {autoAlpha: 0, ease: Power0});
                TweenLite.to(subtitleTwo, 2, {autoAlpha: 1, ease: Power0}, 1);
                TweenLite.to(opinionTwo, 2, {autoAlpha: 1, ease: Power0}, 1);
                TweenLite.to(nameTwo, 2, {autoAlpha: 1, ease: Power0}, 1);
            }

            // CZTERY
            else if(($('#subtitleThree') && $('#opinionThree') && $('#nameThree')).hasClass('active')) {
                setIsActive1(false);
                setIsActive2(false);
                setIsActive3(false);
                setIsActive4(true);
                setCount(4);
                TweenLite.to(subtitleThree, 2, {autoAlpha: 0, ease: Power0})
                TweenLite.to(opinionThree, 2, {autoAlpha: 0, ease: Power0})
                TweenLite.to(nameThree, 2, {autoAlpha: 0, ease: Power0})
                TweenLite.to(subtitleFour, 2, {autoAlpha: 1, ease: Power0}, 1)
                TweenLite.to(opinionFour, 2, {autoAlpha: 1, ease: Power0}, 1)
                TweenLite.to(nameFour, 2, {autoAlpha: 1, ease: Power0}, 1)
            }

            // PIĘć
            else if(($('#subtitleFour') && $('#opinionFour') && $('#nameFour')).hasClass('active')) {
                setIsActive1(false);
                setIsActive2(false);
                setIsActive3(false);
                setIsActive4(false);
                setIsActive5(true);
                setCount(5);
                TweenLite.to(subtitleFour, 2, {autoAlpha: 0, ease: Power0})
                TweenLite.to(opinionFour, 2, {autoAlpha: 0, ease: Power0})
                TweenLite.to(nameFour, 2, {autoAlpha: 0, ease: Power0})
                TweenLite.to(subtitleFive, 2, {autoAlpha: 1, ease: Power0}, 1)
                TweenLite.to(opinionFive, 2, {autoAlpha: 1, ease: Power0}, 1)
                TweenLite.to(nameFive, 2, {autoAlpha: 1, ease: Power0}, 1)
            }

            // SZEŚĆ
            else if(($('#subtitleFive') && $('#opinionFive') && $('#nameFive')).hasClass('active')) {
                setIsActive1(true);
                setIsActive2(false);
                setIsActive3(false);
                setIsActive4(false);
                setIsActive5(false);
                setCount(1);
                TweenLite.to(subtitleFive, 2, {autoAlpha: 0, ease: Power0})
                TweenLite.to(opinionFive, 2, {autoAlpha: 0, ease: Power0})
                TweenLite.to(nameFive, 2, {autoAlpha: 0, ease: Power0})
                TweenLite.to(subtitle, 2, {autoAlpha: 1, ease: Power0}, 1)
                TweenLite.to(opinion, 2, {autoAlpha: 1, ease: Power0}, 1)
                TweenLite.to(name, 2, {autoAlpha: 1, ease: Power0}, 1)
            }

            // JEDEN
            else if(($('#subtitleTwo') && $('#opinionTwo') && $('#nameTwo')).hasClass('nonActive')) {
                setIsActive1(true);
                setIsActive2(false);
                setCount(1);
                TweenLite.to(subtitleTwo, 2, {autoAlpha: 0, ease: Power0})
                TweenLite.to(opinionTwo, 2, {autoAlpha: 0, ease: Power0})
                TweenLite.to(nameTwo, 2, {autoAlpha: 0, ease: Power0})
                TweenLite.to(subtitle, 2, {autoAlpha: 1, ease: Power0}, 1)
                TweenLite.to(opinion, 2, {autoAlpha: 1, ease: Power0}, 1)
                TweenLite.to(name, 2, {autoAlpha: 1, ease: Power0}, 1)
            }

            // TRZY
            else if(($('#subtitleTwo') && $('#opinionTwo') && $('#nameTwo')).hasClass('active')) {
                setIsActive1(false);
                setIsActive2(false);
                setIsActive3(true);
                setCount(3);
                TweenLite.to(subtitleTwo, 2, {autoAlpha: 0, ease: Power0})
                TweenLite.to(opinionTwo, 2, {autoAlpha: 0, ease: Power0})
                TweenLite.to(nameTwo, 2, {autoAlpha: 0, ease: Power0})
                TweenLite.to(subtitleThree, 2, {autoAlpha: 1, ease: Power0}, 1)
                TweenLite.to(opinionThree, 2, {autoAlpha: 1, ease: Power0}, 1)
                TweenLite.to(nameThree, 2, {autoAlpha: 1, ease: Power0}, 1)

            }
    }


        const prevSlide = () => {


            // DWA
        if(($('#subtitleTwo') && $('#opinionTwo') && $('#nameTwo')).hasClass('active')){
            setIsActive2(false);
            setIsActive1(true);
            setCount(1);
            TweenLite.to(subtitleTwo, 2, {autoAlpha: 0, ease: Power0})
            TweenLite.to(opinionTwo, 2, {autoAlpha: 0, ease: Power0})
            TweenLite.to(nameTwo, 2, {autoAlpha: 0, ease: Power0})
            TweenLite.to(subtitle, 2, {autoAlpha: 1, ease: Power0}, 1)
            TweenLite.to(opinion, 2, {autoAlpha: 1, ease: Power0}, 1)
            TweenLite.to(name, 2, {autoAlpha: 1, ease: Power0}, 1)
        }


            // TRZY
        else if(($('#subtitle') && $('#opinion') && $('#name')).hasClass('active')){
            setIsActive1(false);
            setIsActive5(true);
            setCount(5);
            TweenLite.to(subtitle, 2, {autoAlpha: 0, ease: Power0})
            TweenLite.to(opinion, 2, {autoAlpha: 0, ease: Power0})
            TweenLite.to(name, 2, {autoAlpha: 0, ease: Power0})
            TweenLite.to(subtitleFive, 2, {autoAlpha: 1, ease: Power0}, 1)
            TweenLite.to(opinionFive, 2, {autoAlpha: 1, ease: Power0}, 1)
            TweenLite.to(nameFive, 2, {autoAlpha: 1, ease: Power0}, 1)
        }


            // CZTERY
        else if(($('#subtitleThree') && $('#opinionThree') && $('#nameThree')).hasClass('active')){
            setIsActive3(false);
            setIsActive2(true);
            setCount(2);
            TweenLite.to(subtitleThree, 2, {autoAlpha: 0, ease: Power0})
            TweenLite.to(opinionThree, 2, {autoAlpha: 0, ease: Power0})
            TweenLite.to(nameThree, 2, {autoAlpha: 0, ease: Power0})
            TweenLite.to(subtitleTwo, 2, {autoAlpha: 1, ease: Power0}, 1)
            TweenLite.to(opinionTwo, 2, {autoAlpha: 1, ease: Power0}, 1)
            TweenLite.to(nameTwo, 2, {autoAlpha: 1, ease: Power0}, 1)
        }


            // PIĘĆ
        else if(($('#subtitleFour') && $('#opinionFour') && $('#nameFour')).hasClass('active')){
            setIsActive4(false);
            setIsActive3(true);
            setCount(3);
            TweenLite.to(subtitleFour, 2, {autoAlpha: 0, ease: Power0})
            TweenLite.to(opinionFour, 2, {autoAlpha: 0, ease: Power0})
            TweenLite.to(nameFour, 2, {autoAlpha: 0, ease: Power0})
            TweenLite.to(subtitleThree, 2, {autoAlpha: 1, ease: Power0}, 1)
            TweenLite.to(opinionThree, 2, {autoAlpha: 1, ease: Power0}, 1)
            TweenLite.to(nameThree, 2, {autoAlpha: 1, ease: Power0}, 1)
        }


            // SZEŚĆ
        else if(($('#subtitleFive') && $('#opinionFive') && $('#nameFive')).hasClass('active')){
            setIsActive5(false);
            setIsActive4(true);
            setCount(4);
            TweenLite.to(subtitleFive, 2, {autoAlpha: 0, ease: Power0})
            TweenLite.to(opinionFive, 2, {autoAlpha: 0, ease: Power0})
            TweenLite.to(nameFive, 2, {autoAlpha: 0, ease: Power0})
            TweenLite.to(subtitleFour, 2, {autoAlpha: 1, ease: Power0}, 1)
            TweenLite.to(opinionFour, 2, {autoAlpha: 1, ease: Power0}, 1)
            TweenLite.to(nameFour, 2, {autoAlpha: 1, ease: Power0}, 1)
        }

    }

    const dotOneClick = () => {
        setIsActive1(true);
        setIsActive2(false);
        setIsActive3(false);
        setIsActive4(false);
        setIsActive5(false);

        TweenLite.to(subtitle, 2, {autoAlpha: 1, ease: Power0}, 1)
        TweenLite.to(opinion, 2, {autoAlpha: 1, ease: Power0}, 1)
        TweenLite.to(name, 2, {autoAlpha: 1, ease: Power0}, 1)

        TweenLite.to(subtitleTwo, 1, {autoAlpha: 0, ease: Power0})
        TweenLite.to(opinionTwo, 1, {autoAlpha: 0, ease: Power0})
        TweenLite.to(nameTwo, 1, {autoAlpha: 0, ease: Power0})

        TweenLite.to(subtitleThree, 1, {autoAlpha: 0, ease: Power0})
        TweenLite.to(opinionThree, 1, {autoAlpha: 0, ease: Power0})
        TweenLite.to(nameThree, 1, {autoAlpha: 0, ease: Power0})

        TweenLite.to(subtitleFour, 1, {autoAlpha: 0, ease: Power0})
        TweenLite.to(opinionFour, 1, {autoAlpha: 0, ease: Power0})
        TweenLite.to(nameFour, 1, {autoAlpha: 0, ease: Power0})

        TweenLite.to(subtitleFive, 1, {autoAlpha: 0, ease: Power0})
        TweenLite.to(opinionFive, 1, {autoAlpha: 0, ease: Power0})
        TweenLite.to(nameFive, 1, {autoAlpha: 0, ease: Power0})
    }

    const dotTwoClick = () => {
        setIsActive2(true);
        setIsActive1(false);
        setIsActive3(false);
        setIsActive4(false);
        setIsActive5(false);

        TweenLite.to(subtitle, 1, {autoAlpha: 0, ease: Power0})
        TweenLite.to(opinion, 1, {autoAlpha: 0, ease: Power0})
        TweenLite.to(name, 1, {autoAlpha: 0, ease: Power0})

        TweenLite.to(subtitleTwo, 2, {autoAlpha: 1, ease: Power0}, 1)
        TweenLite.to(opinionTwo, 2, {autoAlpha: 1, ease: Power0}, 1)
        TweenLite.to(nameTwo, 2, {autoAlpha: 1, ease: Power0}, 1)

        TweenLite.to(subtitleThree, 1, {autoAlpha: 0, ease: Power0})
        TweenLite.to(opinionThree, 1, {autoAlpha: 0, ease: Power0})
        TweenLite.to(nameThree, 1, {autoAlpha: 0, ease: Power0})

        TweenLite.to(subtitleFour, 1, {autoAlpha: 0, ease: Power0})
        TweenLite.to(opinionFour, 1, {autoAlpha: 0, ease: Power0})
        TweenLite.to(nameFour, 1, {autoAlpha: 0, ease: Power0})

        TweenLite.to(subtitleFive, 1, {autoAlpha: 0, ease: Power0})
        TweenLite.to(opinionFive, 1, {autoAlpha: 0, ease: Power0})
        TweenLite.to(nameFive, 1, {autoAlpha: 0, ease: Power0})
    }

    const dotThreeClick = () => {
        setIsActive3(true);
        setIsActive1(false);
        setIsActive2(false);
        setIsActive4(false);
        setIsActive5(false);

        TweenLite.to(subtitle, 1, {autoAlpha: 0, ease: Power0})
        TweenLite.to(opinion, 1, {autoAlpha: 0, ease: Power0})
        TweenLite.to(name, 1, {autoAlpha: 0, ease: Power0})

        TweenLite.to(subtitleTwo, 1, {autoAlpha: 0, ease: Power0})
        TweenLite.to(opinionTwo, 1, {autoAlpha: 0, ease: Power0})
        TweenLite.to(nameTwo, 1, {autoAlpha: 0, ease: Power0})

        TweenLite.to(subtitleThree, 2, {autoAlpha: 1, ease: Power0}, 1)
        TweenLite.to(opinionThree, 2, {autoAlpha: 1, ease: Power0}, 1)
        TweenLite.to(nameThree, 2, {autoAlpha: 1, ease: Power0}, 1)

        TweenLite.to(subtitleFour, 1, {autoAlpha: 0, ease: Power0})
        TweenLite.to(opinionFour, 1, {autoAlpha: 0, ease: Power0})
        TweenLite.to(nameFour, 1, {autoAlpha: 0, ease: Power0})

        TweenLite.to(subtitleFive, 1, {autoAlpha: 0, ease: Power0})
        TweenLite.to(opinionFive, 1, {autoAlpha: 0, ease: Power0})
        TweenLite.to(nameFive, 1, {autoAlpha: 0, ease: Power0})
    }

    const dotFourClick = () => {
        setIsActive4(true);
        setIsActive1(false);
        setIsActive2(false);
        setIsActive3(false);
        setIsActive5(false);

        TweenLite.to(subtitle, 1, {autoAlpha: 0, ease: Power0})
        TweenLite.to(opinion, 1, {autoAlpha: 0, ease: Power0})
        TweenLite.to(name, 1, {autoAlpha: 0, ease: Power0})

        TweenLite.to(subtitleTwo, 1, {autoAlpha: 0, ease: Power0})
        TweenLite.to(opinionTwo, 1, {autoAlpha: 0, ease: Power0})
        TweenLite.to(nameTwo, 1, {autoAlpha: 0, ease: Power0})

        TweenLite.to(subtitleThree, 1, {autoAlpha: 0, ease: Power0})
        TweenLite.to(opinionThree, 1, {autoAlpha: 0, ease: Power0})
        TweenLite.to(nameThree, 1, {autoAlpha: 0, ease: Power0})

        TweenLite.to(subtitleFour, 2, {autoAlpha: 1, ease: Power0}, 1)
        TweenLite.to(opinionFour, 2, {autoAlpha: 1, ease: Power0}, 1)
        TweenLite.to(nameFour, 2, {autoAlpha: 1, ease: Power0}, 1)

        TweenLite.to(subtitleFive, 1, {autoAlpha: 0, ease: Power0})
        TweenLite.to(opinionFive, 1, {autoAlpha: 0, ease: Power0})
        TweenLite.to(nameFive, 1, {autoAlpha: 0, ease: Power0})
    }

    const dotFiveClick = () => {
        setIsActive5(true);
        setIsActive1(false);
        setIsActive2(false);
        setIsActive3(false);
        setIsActive4(false);

        TweenLite.to(subtitle, 1, {autoAlpha: 0, ease: Power0})
        TweenLite.to(opinion, 1, {autoAlpha: 0, ease: Power0})
        TweenLite.to(name, 1, {autoAlpha: 0, ease: Power0})

        TweenLite.to(subtitleTwo, 1, {autoAlpha: 0, ease: Power0})
        TweenLite.to(opinionTwo, 1, {autoAlpha: 0, ease: Power0})
        TweenLite.to(nameTwo, 1, {autoAlpha: 0, ease: Power0})

        TweenLite.to(subtitleThree, 1, {autoAlpha: 0, ease: Power0})
        TweenLite.to(opinionThree, 1, {autoAlpha: 0, ease: Power0})
        TweenLite.to(nameThree, 1, {autoAlpha: 0, ease: Power0})

        TweenLite.to(subtitleFour, 1, {autoAlpha: 0, ease: Power0})
        TweenLite.to(opinionFour, 1, {autoAlpha: 0, ease: Power0})
        TweenLite.to(nameFour, 1, {autoAlpha: 0, ease: Power0})

        TweenLite.to(subtitleFive, 2, {autoAlpha: 1, ease: Power0}, 1)
        TweenLite.to(opinionFive, 2, {autoAlpha: 1, ease: Power0}, 1)
        TweenLite.to(nameFive, 2, {autoAlpha: 1, ease: Power0}, 1)
    }






    return (
        <div className='fivePage'>
            <div className='reviewPhoto'></div>
            <div className='review'>
                <div className='boxBefore'></div>
                <div className='titleBox'>
                    <h1 className='title'>RECENZJE</h1>
                </div>
                {/* subtitle */}
                <div className='subtitleBox'>
                    <h2 id='subtitle' ref={el => subtitle = el} className={isActive1 ? 'subtitle active' : 'subtitle nonActive'}>'Niezapomniane doświadczenie'</h2>
                    <h2 id='subtitleTwo' ref={el => subtitleTwo = el} className={isActive2 ? 'subtitle active' : 'subtitle nonActive'}>'Podróż mojego życia'</h2>
                    <h2 id ='subtitleThree' ref={el => subtitleThree = el} className={isActive3 ? 'subtitle active' : 'subtitle nonActive'}>'Smaki mogą zaskoczyć'</h2>
                    <h2 id='subtitleFour' ref={el => subtitleFour = el} className={isActive4 ? 'subtitle active' : 'subtitle nonActive'}>'Wyjątkowość to podstawa'</h2>
                    <h2 id='subtitleFive' ref={el => subtitleFive = el} className={isActive5 ? 'subtitle active' : 'subtitle nonActive'}>'Światowa obsługa'</h2>
                </div>
                <div className='commasBox'>
                    <h1 className='commas'>, ,</h1>
                </div>
                {/* opinion */}
                <div className='opinionBox'>
                    <p id='opinion' ref={el => opinion = el} className={isActive1 ? 'opinion active' : 'opinion nonActive'}>Obsługa kelnerska stoi na bardzo wysokim poziomie. Potrafi dobrze doradzić w kwestii doboru dań oraz odpowiedzieć nawet na najbardziej szczegółowe pytania odnośnie sposobu przygotowania konkretnej potrawy. Jeżeli ktoś lubi tylko "standardowe smaki" to może się troche rozczarować.</p>
                    <p id='opinionTwo' ref={el => opinionTwo = el} className={isActive2 ? 'opinion active' : 'opinion nonActive'}>Dla mnie jest to najsmaczniejsze miejsce na świecie. Nie mogę znaleźć dla Nerunhaus żadnej konkurencji. Oczywiście obsługa i restauracja na najwyższym poziomie. Polecam wszystkim, którzy chcą wybrać się w niezapomnianą podróż kulinarną.</p>
                    <p id='opinionThree' ref={el => opinionThree = el} className={isActive3 ? 'opinion active' : 'opinion nonActive'}>Była to zmysłowa podróż do kulinarnego świata nowych smaków. Tak w skrócie mogę opisać to miejsce. Każdemu, kto myśli, że poznał już każdy smak, każdy aromat i zjadł w życiu wszystko co do zjedzenia się kwalifikowało, obecność w tym lokalu i poznaniu tych ludzi którzy poświęcają się w 100% temu co robią, to pozycja obowiązkowa.</p>
                    <p id='opinionFour' ref={el => opinionFour = el} className={isActive4 ? 'opinion active' : 'opinion nonActive'}>Bardzo nietuzinkowe, oryginalne miejsce i kuchnia. Jako, że z gwiazdką to trzeba było do niej zajrzeć :) Bardzo ciekawe wejście wąskim ceglanym korytarzem już na wstępie miło mnie zaskoczyło. Wystrój całej restauracji również bardzo elegancki i wytworny. </p>
                    <p id='opinionFive' ref={el => opinionFive = el} className={isActive5 ? 'opinion active' : 'opinion nonActive'}>Obsługa kelnerska stoi na bardzo wysokim poziomie. Potrafi dobrze doradzić w kwestii doboru dań oraz odpowiedzieć nawet na najbardziej szczegółowe pytania odnośnie sposobu przygotowania konkretnej potrawy. Jeżeli ktoś lubi tylko "standardowe smaki" to może się troche rozczarować.</p>
                </div>
                {/* name */}
                <div className='nameBox'>
                    <h2 id='name' ref={el => name = el} className={isActive1 ? 'name active' : 'name nonActive'}>- Bartłomiej Wilk</h2>
                    <h2 id='nameTwo' ref={el => nameTwo = el} className={isActive2 ? 'name active' : 'name nonActive'}>- Tomasz Kolmaga</h2>
                    <h2 id='nameThree' ref={el => nameThree = el} className={isActive3 ? 'name active' : 'name nonActive'}>- Anna Kowalska</h2>
                    <h2 id='nameFour' ref={el => nameFour = el} className={isActive4 ? 'name active' : 'name nonActive'}>- Marcin Wieczorek</h2>
                    <h2 id='nameFive' ref={el => nameFive = el} className={isActive5 ? 'name active' : 'name nonActive'}>- Agata Młynarska</h2>
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
                        <div className={isActive1 ? 'dot dotOne dotActive' : 'dot dotOne dotNonActive'} ref={el => dotOne = el} onClick={dotOneClick}></div>
                    </div>
                    <div className='dotContainer'>
                        <div className={isActive2 ? 'dot dotTwo dotActive' : 'dot dotTwo dotNonActive'} ref={el => dotTwo = el} onClick={dotTwoClick}></div>
                    </div>
                    <div className='dotContainer'>
                        <div className={isActive3 ? 'dot dotThree dotActive' : 'dot dotThree dotNonActive'} ref={el => dotThree = el} onClick={dotThreeClick}></div>
                    </div>
                    <div className='dotContainer'>
                        <div className={isActive4 ? 'dot dotFour dotActive' : 'dot dotFour dotNonActive'} ref={el => dotFour = el} onClick={dotFourClick}></div>
                    </div>
                    <div className='dotContainer'>
                        <div className={isActive5 ? 'dot dotFive dotActive' : 'dot dotFive dotNonActive'} ref={el => dotFive = el} onClick={dotFiveClick}></div>
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
