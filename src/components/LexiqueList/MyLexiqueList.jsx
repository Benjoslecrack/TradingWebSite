import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import axios from "axios";
import "./lexiqueList.css";
import { useStateValue } from '../../context/AuthContext';

export default function MyLexiqueList({ lexiqueList, setDisplaytab, setAllWord }) {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [selectedMot, setSelectedMot] = useState(null);

  const [{ user }, dispatch] = useStateValue();

  const descriptionParser = (description) => {
    if (typeof description !== "string") {
      return "";
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(description, "text/html");
    return doc.body.textContent || "";
  };

  const handleDelete = () => {
    if (selectedMot) {
      axios
        .delete(`/api/lexicon/${selectedMot.idlexicon}`, {
          withCredentials: true,
        })
        .then(() => {
          axios.get(`/api/lexicon/get/alluserid/${user.idusers}`)
          .then((res) => {
            console.log("res in get all lexicon by user", res.data)
            setDisplaytab(res.data)
            setAllWord(res.data)
            setSelectedMot(null);
            setShowDeleteConfirm(false)
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  }
};

  return (
    <>
      <div className="lexique-list">
        {lexiqueList.map((mot, index) => {
          const parsedDescription = descriptionParser(mot.description);
          const truncatedDescription =
            parsedDescription.length > 150
              ? `${parsedDescription.slice(0, 150)}...`
              : parsedDescription;

          return (
            <Card key={index} className="lexique-card">
              <Card.Header
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  gap: "20px",
                }}
              >
                <Button
                  className="DeleteBtn"
                  onClick={() => {
                    setSelectedMot(mot);
                    setShowDeleteConfirm(true);
                  }}
                >
                  Supprimer
                </Button>{" "}
                <Link to={`/mesmots/modifier/${mot.idlexicon}`}>
                  <Button className="ModifyBtn">Modifier</Button>
                </Link>
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  <a href="#todo">{mot.word}</a>
                </Card.Title>
                <Card.Text>{truncatedDescription}</Card.Text>
                <Link to={`/lexique/${mot.idlexicon}`}>
                  <Button className="btn">Voir la définition →</Button>
                </Link>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      {showDeleteConfirm && (
       <Modal show={showDeleteConfirm} onHide={() => setShowDeleteConfirm(false)} centered>
       <Modal.Body>
         <p style={{textAlign:"center"}}>Êtes-vous sûr de vouloir supprimer ce mot ?</p>
         <div className="modal-buttons">
           <Button onClick={() => setShowDeleteConfirm(false)}>Annuler</Button>
           <Button onClick={handleDelete} className="DeleteBtn">Supprimer</Button>
         </div>
       </Modal.Body>
     </Modal>
     
      )}
    </>
  );
}