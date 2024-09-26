import React from "react";
import { useNavigate } from "react-router-dom";
import homePhoto from "../../assets/homepagePhoto.png";
import "./Home.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer"; // Import Footer
import "../../components/Footer/Footer.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div class="content-wrapper">
        <Header />
        <div class="content">
          <main>
            <section>
              <div className="leftSide-container">
                <h2> Welcome to Queens Match!</h2>
                <p>
                  As part of the vibrant QueenB community, Queens Match connects
                  you
                  <br />
                  with a network of mentors ready to share their expertise.{" "}
                  <br /> Whether you’re a mentor looking to contribute or
                  someone seeking guidance,
                  <br />
                  our extensive list of experienced professionals is here to
                  support your growth. <br /> Explore mentorship opportunities
                  and connect with the right mentor today! <br />
                </p>
                <div className="button-container">
                  <button
                    className="button-74"
                    onClick={() => navigate("/login")}
                  >
                    Log In
                  </button>
                  <button
                    className="button-74"
                    onClick={() => navigate("/signup")}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
              <img className="home-photo" src={homePhoto} alt="homePhoto" />
            </section>
          </main>
        </div>

        {/*added the svg wave*/}
        <div class="wave-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="wave-svg"
          >
            {/* <path fill="#fff" fill-opacity="1" d="M0,128L30,128C60,128,120,128,180,144C240,160,300,192,360,181.3C420,171,480,117,540,101.3C600,85,660,107,720,144C780,181,840,235,900,234.7C960,235,1020,181,1080,176C1140,171,1200,213,1260,218.7C1320,224,1380,192,1410,176L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path> */}
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,128L30,128C60,128,120,128,180,144C240,160,300,192,360,181.3C420,171,480,117,540,101.3C600,85,660,107,720,144C780,181,840,235,900,234.7C960,235,1020,181,1080,176C1140,171,1200,213,1260,218.7C1320,224,1380,192,1410,176L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      <div class="after-wave-section">
        <div class="new-content">
          {/* Add your new content here */}
          <button
            className="button-74"
            onClick={() => navigate("/ViewAllMentors")}
          >
            View All Mentors
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
