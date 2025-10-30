import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi there! I'm <span className="purple">Dealan Wanganga</span>, a passionate Full Stack Developer 
            based in <span className="purple">Nairobi, Kenya</span>.
            <br />
            <br />
            Currently, I'm building innovative solutions at <span className="purple">AUM Tech</span>, 
            where I work with modern web technologies to create scalable applications that solve real-world problems.
            <br />
            <br />
            I hold a <span className="purple">BSc in Information Technology</span> and specialize in both 
            frontend and backend development, with a strong focus on creating seamless user experiences.
            <br />
            <br />
            My tech stack includes <span className="purple">Python, JavaScript, React, Next.js, FastAPI, and Django</span>. 
            I'm also experienced with <span className="purple">Docker and Kubernetes</span> for containerization and deployment.
            <br />
            <br />
            When I'm not coding, you'll find me:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new gaming worlds and mechanics
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing technical articles and sharing knowledge
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and experiencing different cultures
            </li>
            <li className="about-activity">
              <ImPointRight /> Experimenting with blockchain and Web3 technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Dealan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
