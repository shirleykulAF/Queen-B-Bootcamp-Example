/*import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import './Feed.css';

function Feed({ searchTerm }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Populate with hardcoded items or fetched data
    setItems([
        {
            image: "https://via.placeholder.com/150",
            name: "Alice Johnson",
            technologies: ["JavaScript", "React", "Node.js"],
            about: "Full-stack developer with 8 years of experience building scalable web applications.",
            phone: "123-456-7890",
            email: "alice.johnson@example.com",
            linkedin: "https://www.linkedin.com/in/alicejohnson"
          },
          {
            image: "https://via.placeholder.com/150",
            name: "Bob Smith",
            technologies: ["Python", "Django", "PostgreSQL"],
            about: "Back-end developer specializing in Python and databases for over 5 years.",
            phone: "234-567-8901",
            email: "bob.smith@example.com",
            linkedin: "https://www.linkedin.com/in/bobsmith"
          },
          {
            image: "https://via.placeholder.com/150",
            name: "Carla Lewis",
            technologies: ["Java", "Spring Boot", "MySQL"],
            about: "Senior Java developer with expertise in microservices architecture and cloud-based solutions.",
            phone: "345-678-9012",
            email: "carla.lewis@example.com",
            linkedin: "https://www.linkedin.com/in/carlalewis"
          },
          {
            image: "https://via.placeholder.com/150",
            name: "David Kim",
            technologies: ["Ruby on Rails", "PostgreSQL", "Heroku"],
            about: "Experienced Ruby on Rails developer with a focus on web performance and optimization.",
            phone: "456-789-0123",
            email: "david.kim@example.com",
            linkedin: "https://www.linkedin.com/in/davidkim"
          },
          {
            image: "https://via.placeholder.com/150",
            name: "Evelyn Martinez",
            technologies: ["C#", ".NET", "Azure"],
            about: "Software architect and .NET specialist with over 10 years in the software industry.",
            phone: "567-890-1234",
            email: "evelyn.martinez@example.com",
            linkedin: "https://www.linkedin.com/in/evelynmartinez"
          },
          {
            image: "https://via.placeholder.com/150",
            name: "Franklin Moore",
            technologies: ["PHP", "Laravel", "Vue.js"],
            about: "Web developer with a passion for building dynamic, responsive, and user-friendly applications.",
            phone: "678-901-2345",
            email: "franklin.moore@example.com",
            linkedin: "https://www.linkedin.com/in/franklinmoore"
          },
          {
            image: "https://via.placeholder.com/150",
            name: "Grace Lee",
            technologies: ["Kotlin", "Android", "Firebase"],
            about: "Mobile app developer specializing in Android development with extensive experience in Kotlin.",
            phone: "789-012-3456",
            email: "grace.lee@example.com",
            linkedin: "https://www.linkedin.com/in/gracelee"
          },
          {
            image: "https://via.placeholder.com/150",
            name: "Henry Walker",
            technologies: ["Go", "Kubernetes", "Docker"],
            about: "DevOps engineer with expertise in cloud infrastructure, automation, and container orchestration.",
            phone: "890-123-4567",
            email: "henry.walker@example.com",
            linkedin: "https://www.linkedin.com/in/henrywalker"
          },
          {
            image: "https://via.placeholder.com/150",
            name: "Isabella Adams",
            technologies: ["Python", "Machine Learning", "TensorFlow"],
            about: "Data scientist with a passion for machine learning and building AI-powered solutions.",
            phone: "901-234-5678",
            email: "isabella.adams@example.com",
            linkedin: "https://www.linkedin.com/in/isabellaadams"
          },
          {
            image: "https://via.placeholder.com/150",
            name: "James Brown",
            technologies: ["C++", "Embedded Systems", "IoT"],
            about: "Embedded systems engineer with a focus on developing IoT solutions and real-time applications.",
            phone: "012-345-6789",
            email: "james.brown@example.com",
            linkedin: "https://www.linkedin.com/in/jamesbrown"
          }
    ]);
  }, []);

  // Filter items based on search term (if provided)
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="feed-container">
      {filteredItems.length > 0 ? (
        filteredItems.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            name={item.name}
            technologies={item.technologies}
          />
        ))
      ) : (
        <p>No results found for "{searchTerm}"</p>
      )}
    </div>
  );
}

export default Feed;
*/
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
    const mentorData = [
      {
        image: "https://static.wixstatic.com/media/449abe_7b15686b2118476da4a733a7861dd772~mv2.jpg/v1/fill/w_1080,h_1080,al_c,q_85/sn-color.jpg",
        name: "Dana Mashevich",
        technologies: ["JavaScript", "React", "Node.js"],
        about: "Full-stack developer with 8 years of experience building scalable web applications.",
        phone: "123-456-7890",
        email: "alice.johnson@example.com",
        linkedin: "https://www.linkedin.com/in/alicejohnson"
      },
      {
        image: "https://m.media-amazon.com/images/I/717VleQPsjL.jpg",
        name: "Michelle Fishman",
        technologies: ["Python", "Django", "PostgreSQL"],
        about: "Back-end developer specializing in Python and databases for over 5 years.",
        phone: "234-567-8901",
        email: "bob.smith@example.com",
        linkedin: "https://www.linkedin.com/in/bobsmith"
      },
      {
        image: "https://static.wixstatic.com/media/999c17_dfdb32fca7214f9ea8fee52555d7cc7c~mv2.jpg/v1/fit/w_320,h_320,q_90/999c17_dfdb32fca7214f9ea8fee52555d7cc7c~mv2.jpg",
        name: "Michal Wolpert",
        technologies: ["Java", "Spring Boot", "MySQL"],
        about: "Senior Java developer with expertise in microservices architecture and cloud-based solutions.",
        phone: "345-678-9012",
        email: "carla.lewis@example.com",
        linkedin: "https://www.linkedin.com/in/carlalewis"
      },
      {
        image: "https://images.desenio.com/zoom/18197-8snoopylove50x70-79406.jpg",
        name: "Lior Mandelboim",
        technologies: ["Ruby on Rails", "PostgreSQL", "Heroku"],
        about: "Experienced Ruby on Rails developer with a focus on web performance and optimization.",
        phone: "456-789-0123",
        email: "david.kim@example.com",
        linkedin: "https://www.linkedin.com/in/davidkim"
      },
      {
        image: "https://snoopy.uno/cdn/shop/files/MYCROMPEANUTS097.png?v=1711363250&width=1445",
        name: "Yuval Goldshtein",
        technologies: ["C#", ".NET", "Azure"],
        about: "Software architect and .NET specialist with over 10 years in the software industry.",
        phone: "567-890-1234",
        email: "evelyn.martinez@example.com",
        linkedin: "https://www.linkedin.com/in/evelynmartinez"
      },
      {
        image: "https://img.posterstore.com/zoom/18200-8snoopysurfboard50x70-73500-75297.jpg?auto=compress%2Cformat&fit=max&w=3840",
        name: "Alina Dronov",
        technologies: ["PHP", "Laravel", "Vue.js"],
        about: "Web developer with a passion for building dynamic, responsive, and user-friendly applications.",
        phone: "678-901-2345",
        email: "franklin.moore@example.com",
        linkedin: "https://www.linkedin.com/in/franklinmoore"
      },
      {
        image: "https://images2.alphacoders.com/519/thumb-1920-519574.jpg",
        name: "Grace Lee",
        technologies: ["Kotlin", "Android", "Firebase"],
        about: "Mobile app developer specializing in Android development with extensive experience in Kotlin.",
        phone: "789-012-3456",
        email: "grace.lee@example.com",
        linkedin: "https://www.linkedin.com/in/gracelee"
      },
      {
        image: "https://images.desenio.com/zoom/18201-8snoopyonthebeach50x70-13522-50090.jpg",
        name: "Henry Walker",
        technologies: ["Go", "Kubernetes", "Docker"],
        about: "DevOps engineer with expertise in cloud infrastructure, automation, and container orchestration.",
        phone: "890-123-4567",
        email: "henry.walker@example.com",
        linkedin: "https://www.linkedin.com/in/henrywalker"
      },
      {
        image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/snoopy-love-john-m-hasting.jpg",
        name: "Isabella Adams",
        technologies: ["Python", "Machine Learning", "TensorFlow"],
        about: "Data scientist with a passion for machine learning and building AI-powered solutions.",
        phone: "901-234-5678",
        email: "isabella.adams@example.com",
        linkedin: "https://www.linkedin.com/in/isabellaadams"
      },
      {
        image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/1-snoopy-love-dustin-l-carrico.jpg",
        name: "Jina Brown",
        technologies: ["C++", "Embedded Systems", "IoT"],
        about: "Embedded systems engineer with a focus on developing IoT solutions and real-time applications.",
        phone: "012-345-6789",
        email: "james.brown@example.com",
        linkedin: "https://www.linkedin.com/in/jamesbrown"
      },
      {
        image: "https://render.fineartamerica.com/images/rendered/default/canvas-print/7/8/mirror/break/images/artworkimages/medium/3/1-snoopy-happy-susan-d-love-canvas-print.jpg",
        name: "Jennie Brown",
        technologies: ["C++", "Embedded Systems", "IoT"],
        about: "Embedded systems engineer with a focus on developing IoT solutions and real-time applications.",
        phone: "012-345-6789",
        email: "james.brown@example.com",
        linkedin: "https://www.linkedin.com/in/jamesbrown"
      },
      {
        image: "https://img.posterstore.com/zoom/18197-8snoopylove50x70-23204-14418.jpg",
        name: "Yona Barber",
        technologies: ["C++", "Embedded Systems", "IoT"],
        about: "Embedded systems engineer with a focus on developing IoT solutions and real-time applications.",
        phone: "012-345-6789",
        email: "james.brown@example.com",
        linkedin: "https://www.linkedin.com/in/jamesbrown"
      }
    ];
    
    setItems(mentorData);  // Set the original mentor data
    setFilteredItems(mentorData);  // Initially show all mentors
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
    setSelectedMentor(mentor);  // Set the selected mentor
    console.log("Selected mentor:", mentor);  // Log the selected mentor
    setShowDialog(true);  // Show the dialog
  };

  // Function to close the dialog
  const handleCloseDialog = () => {
    setShowDialog(false);  // Hide the dialog
    setSelectedMentor(null);  // Clear the selected mentor
  };

  return (
    <div className="feed-container">
      {/* Display all filtered cards */}
      {filteredItems.map((item, index) => (
        <div key={index} onClick={() => handleCardClick(item)}>  {/* When the card is clicked */}
          <Card
            image={item.image}
            name={item.name}
            technologies={item.technologies}
          />
        </div>
      ))}

      {/* Render the MentorDialog if a mentor is selected */}
      {showDialog && selectedMentor && (
        <MentorDialog mentor={selectedMentor} onBackClick={handleCloseDialog} />
      )}
    </div>
  );
}

export default Feed;
