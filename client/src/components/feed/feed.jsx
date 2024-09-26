import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';  // Import the Card component
import MentorDialog from '../MentorDialog/MentorDialog';  // Import the MentorDialog component
import './Feed.css';  // Import the CSS for Feed component

function Feed({ searchTerm }) {  // Accept the searchTerm as a prop
  const [items, setItems] = useState([]);  // State to store mentor items
  const [filteredItems, setFilteredItems] = useState([]);  // State to store filtered mentors
  const [selectedMentor, setSelectedMentor] = useState(null);  // State to track selected mentor
  const [showDialog, setShowDialog] = useState(false);  // State to control dialog visibility

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await fetch(`http://localhost:5001/mentors`);
        if (!response.ok) {
          throw new Error('Failed to fetch mentors');
        }
        const data = await response.json();
        console.log('Fetched mentors:', JSON.stringify(data, null, 2));

        // Transform data to match the desired structure
        const mentorData = data.map(mentor => ({
          image: mentor.img_url, // Assuming your API has `img_url`
          name: mentor.full_name, // Assuming your API has `full_name`
          technologies: mentor.technologies, // Assuming this is an array
          about: mentor.about_me, // Assuming your API has `about`
          phone: mentor.phone_number, // Assuming your API has `phone`
          email: mentor.email, // Assuming your API has `email`
          linkedin: mentor.linkedin_url // Assuming your API has `linkedin`
        }));
        console.log('Transformed mentors:', mentorData);
        setItems(mentorData);  // Set the original mentor data
        setFilteredItems(mentorData);  // Initially show all mentors
      } catch (error) {
        console.error('Error fetching mentors:', error);
      }
    };

    fetchMentors();  // Call the fetch function
  }, []);

  useEffect(() => {
    // When searchTerm changes, filter items
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filtered = items.filter(item =>
      item.name.toLowerCase().includes(lowerCaseSearchTerm) ||
      item.technologies.some(tech => tech.toLowerCase().includes(lowerCaseSearchTerm))
    );
    setFilteredItems(filtered);  // Update the filtered items based on searchTerm
  }, [searchTerm, items]);  // Re-run this effect whenever searchTerm or items change

  // Function to handle card click
  const handleCardClick = (mentor) => {
    console.log('this is what passed to mentorDialog:', mentor);
    setSelectedMentor(mentor);  // Set the selected mentor
    setShowDialog(true);  // Show the dialog
  };

  // Function to close the dialog
  const handleCloseDialog = () => {
    setShowDialog(false);  // Hide the dialog
    setSelectedMentor(null);  // Clear the selected mentor
  };

  return (
    <div className="feed-container">
      {filteredItems.length > 0 && filteredItems.map((item, index) => (
        <div key={index} onClick={() => handleCardClick(item)}>  {/* When the card is clicked */}
          <Card
            image={item.image}  // Use the transformed data
            name={item.name}
            technologies={item.technologies}
          />
        </div>
      ))}

      {showDialog && selectedMentor && (
        <MentorDialog mentor={selectedMentor} onBackClick={handleCloseDialog} />
      )}
    </div>
  );
}

export default Feed;
