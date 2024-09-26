import React from 'react';
import Card from '../Card/Card';
import './CardsGrid.css'



const CardsGrid = ({mentorsList}) => {
    console.log(mentorsList);
    return (
        <div className='cardsGrid'>
        {mentorsList && mentorsList.map((mentor, index) => (
            <Card singleMentor={mentor} />
        ))}
        </div>
    );
}

export default CardsGrid;