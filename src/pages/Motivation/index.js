import "./style.css";
import React from "react";

function Motivation() {
  return (
    <div className="motivation">
      <div className="motivation-container">
        <h1>My developer job search quest</h1>
        <br />
        <hr />
        <br />
        <div className="motivation-grid">
          <div className="motivation-left">
            <h2>Coding bootcamp</h2>
            <p>
              I finished a full stack development bootcamp in May 2020, called
              Codaisseur.
            </p>
            <p>
              The program I participated in lasted 11 weeks, it was quite
              intense, much more so than I anticipated. But because I'm so
              motivated to work as a developer I pushed through.
            </p>
            <p>
              For both the front end and the back end we mostly learned
              javascript libraries and frameworks. For front end: React with
              hooks, Redux, Axios and of course HTML & CSS fundamentals. For
              back end: Express, Sequelize and for databases: postgreSQL and
              setting up a docker environment.
            </p>
            <br />
            <hr />
            <br />
            <h2>Computer science propedeuse</h2>
            <p>
              Before Codaisseur I attained a cum laude propedeuse in computer
              science. It was a great year, I mostly enjoyed the programming
              lessons in Java and also enjoyed mySQL, web design and the group
              projects with my nerdy classmates.
            </p>
            <p>
              After I got the propedeuse I wanted to speed up the process, and
              specialize in web development. That's why I joined Codaisseur.
            </p>
          </div>
          <div className="motivation-right">
            <h2>What am I looking for in a job?</h2>
            <p>
              I was trained in both front end and back end technologies, but my
              preference goes to either a front end or a full stack job.
            </p>
            <p>
              I'm looking for a working environment with 2 main ingredients:
            </p>
            <p>
              1) An environment that encourages and pro-actively supports my
              learning process
            </p>
            <p>
              2) An environment where communication isn't formal and strict, but
              open and lighthearted
            </p>
            <br />
            <hr />
            <br />
            <h2>My top 3 qualities as a developer</h2>
            <p>• Lightning fast in learning new technologies and languages</p>
            <p>• A high level of independence</p>
            <p>• Efficiency is my middle name</p>
            <br />
            <hr className="mid-hr" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Motivation;
