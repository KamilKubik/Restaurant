import React from 'react';

const ContactPage = () => {
    return (
        <div className='contactPage' id='contact'>
            <div className='contactBox'>
                <h2 className='contactTitle'>
                    Restauracja Nerunhaus & Bar Koktajlowy, 71 Wilcza
                    <br></br>
                    <br></br>
                    Warszawa, 00-061,
                    nerunhaus@onet.pl
                    <br></br>
                    <br></br>
                    Otwarte w każdy dzień od 8 do 23
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
