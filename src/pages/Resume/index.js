import "./style.css";
import React from "react";
import {
  FaLinkedin,
  FaLanguage,
  FaProjectDiagram,
  FaCodepen,
  FaGithub,
} from "react-icons/fa";
import { FiPhone, FiBook } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { TiCalendar } from "react-icons/ti";
import { MdWork, MdLocationCity } from "react-icons/md";

function resume() {
  return (
    <div className="page">
      <div className="resume">
        <div className="header">
          <div className="header-text">
            <h1>Colin Stringer</h1>
            <h2>Junior full stack web developer</h2>
            <br />
            <p>
              <MdLocationCity /> • Ede, Gelderland
            </p>
            <p>
              <TiCalendar /> • Date of birth: 1st of April 1991
            </p>
            <p>
              <FiPhone /> • 06-3438-1491
            </p>
            <p>
              <GoMail /> • colinstringer2@gmail.com
            </p>
            <p>
              <FaLinkedin /> •{" "}
              <a
                href="https://www.linkedin.com/in/colin-stringer-64b47a12a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
            <p>
              <FaGithub /> •{" "}
              <a
                href="https://github.com/colinstringer"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </p>
          </div>
          <div className="header-image">
            <br />
            <img
              src="https://i.ibb.co/DV0MxMw/profile-pic.jpg"
              alt="profile pic"
              width="180px"
            />
          </div>
        </div>
        <div className="body">
          <div className="left-content">
            <h2>
              <FiBook /> Education{" "}
            </h2>
            <hr />
            <h3>Full stack web development bootcamp</h3>
            <p>Codaisseur • 11 week intensive training</p>
            <p style={{ fontStyle: "italic" }}>Amsterdam, 2020</p>
            <h3>HBO Computer Science • Propedeuse</h3>
            <p>Avans hogeschool • cum laude (average grade 8.8)</p>
            <p style={{ fontStyle: "italic" }}>Den Bosch, 2016-2017</p>
            <h3>Havo • Science and engineering + computer science</h3>
            <p style={{ fontStyle: "italic" }}>Arnhem, 2002-2007</p>
            <br />
            <h2>
              <MdWork /> Experience
            </h2>
            <hr />

            <h3>Working abroad in a Bed and Breakfast</h3>
            <p>
              In 2017-2018 I spent some time looking for my Scottish roots. You
              see, my grandfather that I never met was Scottish. He passed away
              before I was born. Scotland to me is the most beautiful country
              that I've seen.
            </p>
            <p style={{ fontStyle: "italic" }}>Insch Scotland, 2017-2018</p>

            <h3>Customer service agent • KPN</h3>
            <p>
              Main job: helping customers with technical mobile phone problems
              or network problems
            </p>
            <p>Secondary: selling new phone subscruptions</p>
            <p style={{ fontStyle: "italic" }}>Ede, 2018</p>
            <h3>Sebatical / spiritual journey</h3>
            <p>
              2019 I spent mostly without work, to focus on my spiritual
              journey. Most days I meditated for hours. Striving for inner peace
              has become an essential part of my life.
            </p>
            <h3>Math tutoring</h3>
            <p>
              I tutored high school students ranging from classes 1 through 5 on
              all levels (vmbo, havo and vwo)
            </p>
            <p>
              In 2017 I helped havo students prepare for their final math exams
            </p>
            <p style={{ fontStyle: "italic" }}>
              Arnhem, Ede, Veenendaal, 2013-2017
            </p>
            <br />
            <h2>
              <FaProjectDiagram /> Latest Project
            </h2>
            <hr />
            <h3>Puzzle AI</h3>
            <p style={{ fontWeight: "bold" }}>Purpose of this project:</p>
            <p>
              A way to show that I master both worlds of front-end development:
              the logical side and the visual side.
            </p>
            <p style={{ fontWeight: "bold" }}>Technologies used:</p>
            <p>HTML • CSS • Javacript • React • Redux</p>
            <p>Netlify</p>
            <p style={{ fontWeight: "bold" }}>Links:</p>
            <p>
              <FaGithub /> •{" "}
              <a
                href="https://github.com/colinstringer/puzzle"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github link to project
              </a>
            </p>
          </div>
          <div className="right-content">
            <h2>
              <FaCodepen /> Technical Skills
            </h2>
            <hr />
            <h3>Front-end</h3>
            <p>HTML • CSS • Javacript • React • Redux</p>
            <h3>Back-end</h3>
            <p>MySQL</p>
            <p>Java</p>
            <p>Postgres</p>
            <p>Sequelize (Node js based ORM)</p>
            <p>Express (Node js based REST api)</p>
            <h3>Dev Ops</h3>
            <p>Hosting and domain management for several wordpress websites</p>
            <p>
              Setting up a back-end with database on heroku, and a front-end on
              Netlify
            </p>
            <h3>Miscellaneous</h3>
            <p>Ubuntu (Linux) + terminal • Git + GitHub •</p>
            <p>
              Visual Studio Code • Docker • Slack • Zoom • Postman • Chrome dev
              tools
            </p>
            <br />
            <h2>
              <FaCodepen /> Soft Skills
            </h2>
            <hr />
            <h3>An unquenchable thirst for learning</h3>
            <h3>Analysis</h3>
            <p>
              A keen eye for the the bigger picture as well as extreme detail.
            </p>
            <h3>Communication/Teaching skill</h3>
            <p>
              I'm exceptional at adapting that which I need to explain to the
              level of the one who is listening.
            </p>
            <h3>Out-of-the-box thinking</h3>
            <p>
              “Whenever you find yourself on the side of the majority, it is
              time to reform" - Mark Twain
            </p>
            <br />
            <h2>
              <FaLanguage /> Languages
            </h2>
            <hr />
            <h3>Dutch • fluent</h3>
            <h3>English • fluent</h3>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default resume;
