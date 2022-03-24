import React from "react";
import "./aboutStyles.css";

const About = () => {
  return (
    <div className="containerAbout">
      <h1>About this project</h1>
      <p>
        Free My Mind is an app using MERN stack, cloud database and
        live deployment. <br />
        This is a compilation of projects taught by{" "}
        <a
          href="https://www.udemy.com/user/4b4368a3-b5c8-4529-aa65-2056ec31f37e/"
          target="_blank"
          rel="noopener noreferrer"
          className="highlight"
        >
          Dr. Angela Yu
        </a>{" "}
        in her course called{" "}
        <a
          href="https://www.udemy.com/course/the-complete-web-development-bootcamp/"
          target="_blank"
          rel="noopener noreferrer"
          className="highlight"
        >
          The Complete Web Development Bootcamp
        </a>
        . <br /> Below we have more details about the pages of this project and
        the corresponding sessions of Dr. Angela Yu's course.
      </p>
      <h4>Notes</h4>
      <ul>
        <li>Section 33: React.js</li>
        <li>React</li>
      </ul>
      <h4>To Do List</h4>
      <ul>
        <li>Section 28: Putting Everything Together</li>
        <li>Mongoose and EJS</li>
        <li>Update: transform EJS solution into REACT solution.</li>
      </ul>
      <h4>Blog</h4>
      <ul>
        <li>Section 23: Boss Level Challenge 3 - Blog Website</li>
        <li>EJS</li>
        <li>Update: transform EJS solution into REACT solution.</li>
      </ul>
      {/* <h4>Login</h4>
      <ul>
        <li>Section 32: Authentication & Security</li>
        <li>OAuth 2.0 and signing in with Google</li>
      </ul> */}
      <h4>Deployment</h4>
      <ul>
        <li>Section 29: Deploying your Web Application</li>
        <li>Heroku and MongoDB Atlas</li>
      </ul>
      <h4>Aditional sources</h4>
      <ul>
        <li>
          <a
            href="https://coursework.vschool.io/deploying-mern-app-to-heroku/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploying MERN App to Heroku (using your Git Master Branch & MongoDB
            Atlas)
          </a>
        </li>
        <li>
          <a
            href="https://www.mongodb.com/languages/mern-stack-tutorial"
            target="_blank"
            rel="noopener noreferrer"
          >
            How to Use MERN Stack: A Complete Guide
          </a>
        </li>
      </ul>
    </div>
  );
};

export default About;
