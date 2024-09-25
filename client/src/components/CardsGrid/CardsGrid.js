// import React from 'react';
// import Card from '../Card/Card';
// import './CardsGrid.css'
// // import { mentorsList } from '../../assets/Data/MentorsList';


// const CardsGrid = ({mentorsList}) => {
//     console.log(mentorsList);
//     return (
//         <div className='cardsGrid'>
//         {mentorsList && mentorsList.map((mentor, index) => (
//         // <Card key={index} mentor={mentor} />
//            <Card mentorName={mentor.name} mentorBrief={mentor.about} mentorPhotoPath={mentor.profile_photo} />
//         ))}
//         </div>
//     );
// };

// export default CardsGrid;


import React from 'react';
import Card from '../Card/Card';
import './CardsGrid.css'
// import { mentorsList } from '../../assets/Data/MentorsList';


const CardsGrid = ({mentorsList}) => {
    console.log(mentorsList);
    return (
        <div className='cardsGrid'>
        {mentorsList && mentorsList.map((mentor, index) => (
        // <Card key={index} mentor={mentor} />
           <Card mentorName={mentor.name} mentorBrief={mentor.about} mentorPhotoPath={mentor.profile_photo} />
        ))}
        </div>
    );
}

export default CardsGrid;