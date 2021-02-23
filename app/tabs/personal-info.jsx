import React from "react";
import Container from "react-bootstrap/Container";
import "./personal-info.css";

const initials = "И. Б.";

const interview = [
  {
    question: `Ping`,
    answer: `Pong`
  },
];

const header = `Интервью`;

const subHeader = `Вот оно`;

export const PersonalInfo = () => (
  <Container>
    <h4>{header} </h4>
    <p> {subHeader}</p>
    <div>
      {interview.map(({ question, answer }) => (
        <div>
          <blockquote>
            <p>{question}</p>
          </blockquote>
          <p>{answer}</p>
        </div>
      ))}
    </div>
  </Container>
);
