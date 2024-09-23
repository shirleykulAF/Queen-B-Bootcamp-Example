import React from 'react';
import Card from '../Card/Card';
import './CardsGrid.css'




const CardsGrid = () => {
    const mentorsList = [

        {mentorName: 'Merissa Mayer', mentorBrief: 'an American business executive and investor who served as president and chief executive officer of Yahoo! from 2012 to 2017.', mentorPhotoPath:require('../../images/Merissa.jpeg')},
        {mentorName: 'Ruth Bider Ginzburg', mentorBrief: 'an American business executive and investor who served as president and chief executive officer of Yahoo! from 2012 to 2017.', mentorPhotoPath:require('../../images/Ruth_Bader_Ginsburg.jpg')},
        {mentorName: 'Marie Curie', mentorBrief: ' a Polish and naturalised-French physicist and chemist who conducted pioneering research on radioactivity', mentorPhotoPath:require('../../images/MarieCurie.webp')},
        {mentorName: 'Helen Keler', mentorBrief: 'an American author, disability rights advocate, political activist and lecturer. Born in West Tuscumbia, Alabama, she lost her sight and her hearing after a bout of illness when she was 19 months old.', mentorPhotoPath:require('../../images/HelenKeler.webp')},
        {mentorName: 'Name4', mentorBrief: 'A nice person', mentorPhotoPath:require('../../images/Ruth_Bader_Ginsburg.jpg')},
        {mentorName: 'Name5', mentorBrief: 'A nice person', mentorPhotoPath:require('../../images/Ruth_Bader_Ginsburg.jpg')},
        {mentorName: 'Name6', mentorBrief: 'A nice person', mentorPhotoPath:require('../../images/Ruth_Bader_Ginsburg.jpg')},
        {mentorName: 'Name7', mentorBrief: 'A nice person', mentorPhotoPath:require('../../images/Ruth_Bader_Ginsburg.jpg')},

    ];

    return (
        <div className='cardsGrid'>
        {mentorsList.map(mentor => (
           <Card mentorName={mentor.mentorName} mentorBrief={mentor.mentorBrief} mentorPhotoPath={mentor.mentorPhotoPath} />
        ))}
        </div>
    );
}

export default CardsGrid;