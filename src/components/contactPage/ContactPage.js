import React from 'react';

const ContactPage = () => {
    return (
        <div className='contactPage' id='contact'>
            <div className='contactBox'>
                <h2 className='contactTitle'>
                    Nerunhaus Restaurant & Coctail Bar, 71 Wilcza
                    <br></br>
                    <br></br>
                    Warsaw, 00-061,
                    nerunhaus@onet.pl
                    <br></br>
                    <br></br>
                    Open: 09:00 am – 01:00 pm
                </h2>
            </div>
            <div className='mediaBox'>
                <div className='facebookBox'>
                    <h2 className='facebook'>Facebook</h2>
                </div>
                <div className='instagramBox'>
                    <h2 className='instagram'>Instagram</h2>
                </div>
                <div className='tripAdvisorBox'>
                    <h2 className='tripAdvisor'>Trip Advisor</h2>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
