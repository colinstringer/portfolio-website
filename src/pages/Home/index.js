import "./style.css";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { GiKaleidoscopePearls } from "react-icons/gi";

function Home() {
  return (
    <div className="grid">
      <div className="card card1">
        <h3>Resume</h3>
        <a href="/resume" target="_blank" rel="noopener noreferrer">
          view
        </a>
      </div>
      <div className="card card2">
        <h1>
          Hi, I'm Colin!
          <br /> Welcome to my portfolio website
        </h1>
        <h2>I'm a junior front end web developer who is looking for work</h2>
      </div>
      <div className="card card3">
        <h3>Job motivation</h3>
        <a href="motivation" target="_blank" rel="noopener noreferrer">
          view
        </a>
      </div>
      <div className="card card4">
        <h3>Portfolio project</h3>
        <div className="project">
          <a
            className="code"
            href="https://github.com/users/colinstringer/projects/3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> code
          </a>
          <a
            href="https://the-code-library.netlify.app/"
            className="demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GiKaleidoscopePearls /> demo
          </a>
        </div>
      </div>
      <div className="card card5">
        <h3>My proudest achievement</h3>
        <a href="achievement" target="_blank" rel="noopener noreferrer">
          view
        </a>
      </div>
    </div>
  );
}

export default Home;
