import React from "react";
import { useNavigate } from "react-router-dom";
import homePhoto from "../../assets/homepagePhoto.png";
import "./Home.css";
import Header from "../../components/Header/Header";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <main>
        <section>
          <div className="leftSide-container">
            <h2> Welcome to Queens Match!</h2>
            <p>
              As part of the vibrant QueenB community, Queens Match connects you
              <br />
              with a network of mentors ready to share their expertise. <br />{" "}
              Whether you’re a mentor looking to contribute or someone seeking
              guidance,
              <br />
              our extensive list of experienced professionals is here to support
              your growth. <br /> Explore mentorship opportunities and connect
              with the right mentor today! <br />
            </p>
            <div className="button-container">
              <button onClick={() => navigate("/MentorRegistration")}>
                Add Mentor
              </button>
              <button onClick={() => navigate("/ViewAllMentors")}>
                View All Mentors
              </button>
            </div>
          </div>
          <img className="home-photo" src={homePhoto} alt="homePhoto" />
        </section>
      </main>
    </div>
  );
};

export default Home;
