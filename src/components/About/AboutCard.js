import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey there! I am <span className="purple">Jesse DeLorenzo </span>.
            <br />
            I'm a builder, problem-solver, and lifelong learner.
            <br />
            I love building, solving problems, and
            <br />
            bringing ideas to life in a meaningful way.
            <br />
            <br />
            When I’m not coding, you’ll probably find me:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing video games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring crypto trading
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling & discovering new places
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Turning ideas into reality with code &ndash; front to back, start
            to finish."{" "}
          </p>
          <footer className="blockquote-footer">Jesse</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
