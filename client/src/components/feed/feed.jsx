import React, { useState, useEffect } from 'react';
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
