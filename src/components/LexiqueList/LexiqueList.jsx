import React from "react";


// Boostrap
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./lexiqueList.css";
import { Link } from "react-router-dom";

export default function LexiqueList({ lexiqueList }) {

  const descriptionParser = (description) => {
    if (typeof description !== "string") {
      return "";
    }
    
    const parser = new DOMParser();
    const doc = parser.parseFromString(description, "text/html");
    return doc.body.textContent || "";
  };

  return (
    <>
      <div className="lexique-list">
        {lexiqueList.map((mot, index) => {


const parsedDescription = descriptionParser(mot.description);
const truncatedDescription = parsedDescription.length > 150 ? `${parsedDescription.slice(0, 150)}...` : parsedDescription;


          return (
            <Card key={index} className="lexique-card">
              <Card.Body>
                <Card.Title>
                  <a href="#todo">{mot.word}</a>
                </Card.Title>
                <Card.Text>{truncatedDescription}</Card.Text>
                <Link to={`/lexique/${mot.idlexicon}`} >
                <Button className="btn">
                  Voir la définition →
                </Button>
                </Link>
              </Card.Body>
             
            </Card>
          );
        })}
      </div>
    </>
  );
}
