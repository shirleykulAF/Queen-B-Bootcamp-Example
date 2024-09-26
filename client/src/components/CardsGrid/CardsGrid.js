import React from 'react';
import Card from '../Card/Card';
import './CardsGrid.css'


const CardsGrid = ({mentorsList}) => {
    console.log(mentorsList);
    return (
        <div className='cardsGrid'>
        {mentorsList && mentorsList.map((mentor, index) => (
           <Card mentorName={mentor.name} mentorBrief={mentor.about} mentorPhotoPath={mentor.profile_photo} />
        ))}
        </div>
    );
}

export default CardsGrid;