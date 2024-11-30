import React from "react";
import "./About.css"; // Import the custom CSS file for styling and animations

function About() {
  return (
    <div className="container my-5 about-container">
      <div className="card about-card p-4">
        <div className="row">
          {/* App Overview Section */}
          <div className="col-md-12 about-text">
            <h3 className="app-overview-heading">App Overview</h3>
            <p className="app-overview-description">
              This News App provides the latest news across a variety of
              categories, including Tech, Sports, Entertainment, Business,
              Science, and Global News. Whether you're looking for the latest
              gadget updates, sports scores, or global breaking news, this app
              delivers up-to-date articles tailored to your interests.
            </p>
            <ul className="app-features">
              <li>
                Get news from multiple categories: Tech, Sports, Business,
                Entertainment, Science, Global News.
              </li>
              <li>
                Stay informed with the latest headlines and breaking news.
              </li>
              <li>
                Easy navigation and a user-friendly interface for quick access
                to topics.
              </li>
              <li>Worldwide news coverage from trusted sources.</li>
            </ul>
          </div>

          {/* About Me Section */}
          <div className="col-md-12 about-text">
            <h2 className="about-heading">About Me</h2>
            <p className="about-description">
              Hello! I'm Najam Shiraz, a passionate developer who loves to build
              web applications. I specialize in front-end development using
              React, but I'm also familiar with back-end technologies like
              Node.js and databases.
            </p>

            <h3>Skills</h3>
            <ul className="skills-list">
              <li>React</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML & CSS</li>
              <li>Node.js</li>
              <li>MongoDB</li>
            </ul>

            <h3>Hobbies</h3>
            <p>
              When I'm not coding, you can find me playing video games, reading
              tech blogs, or hiking in nature.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
