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
import { MdWork } from "react-icons/md";

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
              >
                LinkedIn
              </a>
            </p>
            <p>
              <FaGithub /> •{" "}
              <a href="https://github.com/colinstringer" target="_blank">
                Github
              </a>
            </p>
          </div>
          <div className="header-image">
            <br />
            <img src="https://i.ibb.co/DV0MxMw/profile-pic.jpg" width="180px" />
          </div>
        </div>
        <div className="body">
          <div className="left-content">
            <h2>
              <FiBook /> Education{" "}
            </h2>
            <hr />
            <h3>Havo • Science and engineering + computer science</h3>
            <p style={{ fontStyle: "italic" }}>Arnhem, 2002-2007</p>
            <h3>HBO Computer Science • Propedeuse</h3>
            <p>Avans hogeschool • cum laude (average grade 8.8)</p>
            <p style={{ fontStyle: "italic" }}>Den Bosch, 2016-2017</p>
            <h3>Full stack web development bootcamp</h3>
            <p>Codaisseur • 11 week intensive training</p>
            <p style={{ fontStyle: "italic" }}>Amsterdam, 2020</p>
            <br />
            <h2>
              <MdWork /> Experience
            </h2>
            <hr />
            <h3>Customer service agent • KPN</h3>
            <p>
              Main job: helping customers with technical mobile phone problems
              or network problems
            </p>
            <p>Secondary: selling new phone subscruptions</p>
            <p style={{ fontStyle: "italic" }}>Ede, 2019</p>
            <h3>Math tutoring</h3>
            <p>
              I tutored high school students ranging from classes 1 through 5 on all levels (vmbo, havo and vwo)
            </p>
            <p>In 2017 I helped havo students prepare for their final math exams</p>
            <p style={{ fontStyle: "italic" }}>Arnhem, Ede, Veenendaal, 2013-2017</p>
            <h3>Math teaching</h3>
            <p>In 2014 and 2015 I was given the opportunity to teach 20 math classes in 2 different high schools</p>
            <p style={{ fontStyle: "italic" }}>Arnhem, 2014 • Didam, 2015</p>
            <br />
            <h2>
              <FaProjectDiagram /> Portfolio Project
            </h2>
            <hr />
            <h3>The Code Library</h3>
            <p style={{ fontWeight: "bold" }}>Purposes of this project:</p>
            <p>
              1 place to store all your important re-usable code instead of
              several.
            </p>
            <p>
              An open source tutorial platform, where anyone can contribute to
              tutorials about code related matters.
            </p>
            <p>Using other people's code snippets.</p>
            <br />
            <p style={{ fontWeight: "bold" }}>Technologies used:</p>
            <p>HTML • CSS • Javacript • React • Redux</p>
            <p>PostgreSQL • Sequelize (ORM) • Express (js REST api)</p>
            <p>Heroku • Netlify • Docker</p>
            <br />
            <p style={{ fontWeight: "bold" }}>Links:</p>
            <p>
              <FaGithub /> •{" "}
              <a
                href="https://github.com/colinstringer/code-library-client"
                target="_blank"
              >
                Github link to project's front-end
              </a>
            </p>
            <p>
              <FaGithub /> •{" "}
              <a
                href="https://github.com/colinstringer/code-library-server"
                target="_blank"
              >
                Github link to project's back-end
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
