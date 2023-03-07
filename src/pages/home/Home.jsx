// React
import React from "react";

// Components
import TradingViewWidget from "../../components/TradingViewWidget/TradingViewWidget.jsx";

// Boostrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// React Icons
import { BsGraphUpArrow } from "react-icons/bs";

// Style
import "./Home.css";

export default function Home() {
  return (
    <>
      {/* Hero Start */}
      <section id="hero">
        <Container>
          <Row>
            <Col md="6" className="d-flex flex-column justify-content-center">
              <span>Mayak Trading</span>
              <h1 className="py-4">
                <b>Mayak Trading vous accompagne</b>
              </h1>
              <p>
                Ais vestrum quem cum ipsum vestrum sapientissimum Catoni ob
                habetote Apollo iudicavit huius ut rem cum ob Catoni illius
                quidem sapientissimum ais utroque vestrum facta istum facta ob
                illius laudantur.
              </p>
              <a href="#hero" className="btn-grad">
                Découvrir
              </a>
            </Col>
            <Col
              md="6"
              className="d-flex justify-content-center align-items-center"
            >
              <img
                alt="trading-scene"
                src="hero-img.png"
                className="hero-img"
              />
            </Col>
          </Row>
        </Container>
      </section>
      {/* Hero Start */}

      {/* TradingView Start */}
      <section id="trading" className="text-center">
        <Container>
          <h3 className="py-5">
            <BsGraphUpArrow /> Bourse en temps réel
          </h3>
          <TradingViewWidget></TradingViewWidget>
        </Container>
      </section>
      {/* Tradingview End */}
    </>
  );
}
