import React from 'react';

function HomePage() {
  return (
    <div className="homepage">
      <header>
        <input type="text" placeholder="Search for mentors by name or tech stack" />
      </header>
      <div className="mentor-list">
        {/* Example of a mentor card, repeat for each mentor */}
        <div className="mentor-card">
          <img src="link-to-image" alt="Mentor" />
          <div className="mentor-info">
            <h3>Mentor Name</h3>
            <p>HTML, CSS, JavaScript</p>
            <button>Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
