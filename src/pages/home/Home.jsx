import React from "react";

// Bootstrap Grid
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Bootstrap Components
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

// Import style
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

import Logo from "../../assets/Logo3.svg";
import imgTab from "../../assets/pexels.png";

export default function Home() {
  const tab = [
    {
      id: 0,
      title: "Actu 0",
      text: "Ceci est un apperçu de l'actu 1",
      img: imgTab,
      category: "Automobile",
    },
    {
      id: 1,
      title: "Actu 1",
      text: "Ceci est un apperçu de l'actu 1",
      img: imgTab,
      category: "Automobile",
    },
    {
      id: 2,
      title: "Actu 2",
      text: "Ceci est un apperçu de l'actu 2",
      img: imgTab,
      category: "Automobile",
    },
    {
      id: 3,
      title: "Actu 3",
      text: "Ceci est un apperçu de l'actu 3",
      img: imgTab,
      category: "Automobile",
    },
    {
      id: 4,
      title: "Actu 4",
      text: "Ceci est un apperçu de l'actu 4",
      img: imgTab,
      category: "Automobile",
    },
  ];

  const concatTab = [tab.slice(0, 3), tab.slice(3, 6)];

  return (
    <>
      <section id="web-services">
        <Container className="d-flex justify-content-center align-items-center">
          <Row>
            <Col className="d-flex justify-content-center align-items-center flex-column">
              <h2 className="">Difficile de choisir la bonne assurance ?</h2>
              <p>
                <span>Lehubdelassurance.fr</span> est le site d'information de
                l'assurance pour trouver la bonne solution
              </p>
            </Col>
            <Col className="d-flex justify-content-center align-items-center flex-row flex-wrap">
              <a href="google.com" className="web-services-card">
                <div className="heart"></div>
                <p>Santé</p>
              </a>
              <a href="google.com" className="web-services-card">
                <div className="umbrella"></div>
                <p>Prévoyance</p>
              </a>
              <a href="google.com" className="web-services-card">
                <div className="car"></div>
                <p>Véhicules</p>
              </a>
              <a href="google.com" className="web-services-card">
                <div className="money"></div>
                <p>Emprunteur</p>
              </a>
              <a href="google.com" className="web-services-card">
                <div className="man"></div>
                <p>RC/MRP</p>
              </a>
              <a href="google.com" className="web-services-card">
                <div className="arrow"></div>
                <p>Voir plus</p>
              </a>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="lehub">
        <Container>
          <Row>
            <Col className="d-flex justify-content-center align-items-center">
              <img alt="lehublogo" src={Logo} className="lehublogo" />
            </Col>
            <Col>
              <h2>Le Hub de l'Assurance</h2>
              <p>
                Le Hub de l'assurance est un site d'information sur l'assurance.
                Vous y trouverez des informations sur les différents types
                d'assurances, des conseils pour bien choisir votre assurance,
                des simulateurs pour souscrire en ligne et des experts pour vous
                accompagner dans vos démarches. Notre expertise, fruit de plus
                de 20 ans d'expérience dans le secteur financier, la variété de
                nos partenaires et notre indépendance est pour vous la garantie
                de bénéficier des meilleurs conseils.
              </p>
              <Button className="btn">Nos experts →</Button>{" "}
              <Button
                className="btn"
                style={{ backgroundColor: "#41CFCF", border: "none" }}
              >
                Nos tarificateurs →
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Partners Start */}
      <section id="partners">
        <Container>
          <h2>Nos partenaires</h2>
          <p>Nous travaillons avec de nombreux partenaires de confiance</p>
          <Carousel variant="dark" id="actu-carousel" className="pt-5">
            <Carousel.Item>
              <Row className="d-flex justify-content-center align-items-center">
                <Col
                  md="3"
                  className="d-flex justify-content-center align-items-center"
                >
                  <a href="#">
                    <img alt="partenaire" src="test.png" width="100px" />
                  </a>
                </Col>
                <Col
                  md="3"
                  className="d-flex justify-content-center align-items-center"
                >
                  <a href="#">
                    <img alt="partenaire" src="test.png" width="100px" />
                  </a>
                </Col>
                <Col
                  md="3"
                  className="d-flex justify-content-center align-items-center"
                >
                  <a href="#">
                    <img alt="partenaire" src="test.png" width="100px" />
                  </a>
                </Col>
                <Col
                  md="3"
                  className="d-flex justify-content-center align-items-center"
                >
                  <a href="#">
                    <img alt="partenaire" src="test.png" width="100px" />
                  </a>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row className="d-flex justify-content-center align-items-center">
                <Col
                  md="3"
                  className="d-flex justify-content-center align-items-center"
                >
                  <a href="#">
                    <img alt="partenaire" src="test.png" width="100px" />
                  </a>
                </Col>
                <Col
                  md="3"
                  className="d-flex justify-content-center align-items-center"
                >
                  <a href="#">
                    <img alt="partenaire" src="test.png" width="100px" />
                  </a>
                </Col>
                <Col
                  md="3"
                  className="d-flex justify-content-center align-items-center"
                >
                  <a href="#">
                    <img alt="partenaire" src="test.png" width="100px" />
                  </a>
                </Col>
                <Col
                  md="3"
                  className="d-flex justify-content-center align-items-center"
                >
                  <a href="#">
                    <img alt="partenaire" src="test.png" width="100px" />
                  </a>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>
      {/* Partners End */}

      <section id="actu">
        <Container>
          <Row>
            <Col className="text-end">
              <h2>Actualités</h2>
              <p>Découvrez les dernières actualités</p>
            </Col>
          </Row>
          <Row>
            <Carousel variant="dark" id="actu-carousel">
              {concatTab.map((item, index) => (
                <Carousel.Item key={index}>
                  <div className="actu-cards d-flex flex-row w-100 justify-content-between">
                    {item.map((card) => (
                      <Card
                        key={card.id}
                        style={{ width: "18rem" }}
                        className="d-block w-100 m-lg-2 card"
                      >
                        <Card.Img variant="top" src={card.img} />
                        <Card.Body>
                          <Badge className="mb-4 badge">{card.category}</Badge>
                          <Card.Title>{card.title}</Card.Title>
                          <Card.Text>{card.text}</Card.Text>
                          <Button variant="primary">Lire l'article →</Button>
                        </Card.Body>
                      </Card>
                    ))}
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Row>
        </Container>
      </section>

      <section id="testimonials">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col className="text-center">
              <h2 className="text-start text-white">Avis</h2>
              <p className="text-start mb-3 pb-2 mb-md-4 pb-md-0 text-white">
                Les avis de nos clients
              </p>
            </Col>
          </Row>

          <Row className="row text-center d-flex align-items-stretch">
            <Col md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
              <div className="card testimonial-card">
                <div
                  className="card-up"
                  style={{ backgroundColor: "#FFF1D7" }}
                ></div>
                <div className="avatar mx-auto bg-white">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                    className="rounded-circle img-fluid"
                    alt="someone"
                  />
                </div>
                <div className="card-body">
                  <h4 className="mb-4">Maria Smantha</h4>
                  <hr />
                  <p className="dark-grey-text mt-4">
                    Lorem ipsum dolor sit amet eos adipisci, consectetur
                    adipisicing elit.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
              <div className="card testimonial-card">
                <div
                  className="card-up"
                  style={{ backgroundColor: "#FFDB99" }}
                ></div>
                <div className="avatar mx-auto bg-white">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                    className="rounded-circle img-fluid"
                    alt="someone"
                  />
                </div>
                <div className="card-body">
                  <h4 className="mb-4">Lisa Cudrow</h4>
                  <hr />
                  <p className="dark-grey-text mt-4">
                    <i className="fas fa-quote-left pe-2"></i>Neque cupiditate
                    assumenda in maiores repudi mollitia architecto.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="4" className="mb-0 d-flex align-items-stretch">
              <div className="card testimonial-card">
                <div
                  className="card-up"
                  style={{ background: "#FDB833" }}
                ></div>
                <div className="avatar mx-auto bg-white">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                    className="rounded-circle img-fluid"
                    alt="someone"
                  />
                </div>
                <div className="card-body">
                  <h4 className="mb-4">John Smith</h4>
                  <hr />
                  <p className="dark-grey-text mt-4">
                    <i className="AiOutlineHeart"></i>Delectus impedit saepe
                    officiis ab aliquam repellat rem unde ducimus.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Values Start */}
      <section id="values" className="text-end">
        <Container>
          <h2>Nos valeurs</h2>
          <p>Nos valeurs</p>
          <Row className="text-center text-black">
            <Col md="4">
            <div className="d-flex align-items-center justify-content-center">
             <div className="values-card-container">
             <div className="rounded py-4">
                  <img
                    className="rounded values-card-img mb-4"
                    src="test.png"
                    width="200px"
                  />
                  <h4 className="my-4 values-header">
                    <b>Les meilleurs offres négociés pour vous</b>
                  </h4>
                  <p className="text-white values-card-p">
                    Nos experts santé vous aident à comparer les contrats et
                    <b>à trouver une complémentaire adaptée</b> au meilleur
                    rapport garantie prix du marché.
                  </p>
                </div>
             </div>    
            </div>
            </Col>
            <Col md="4">
            <div className="d-flex align-items-center justify-content-center">
             <div className="values-card-container">
             <div className="rounded py-4">
                  <img
                    className="rounded values-card-img mb-4"
                    src="test.png"
                    width="200px"
                  />
                  <h4 className="my-4 values-header">
                    <b>Les meilleurs offres négociés pour vous</b>
                  </h4>
                  <p className="text-white values-card-p">
                    Nos experts santé vous aident à comparer les contrats et
                    <b>à trouver une complémentaire adaptée</b> au meilleur
                    rapport garantie prix du marché.
                  </p>
                </div>
             </div>    
            </div>
            </Col>
            <Col md="4">
            <div className="text-white d-flex align-items-center justify-content-center">
             <div className="values-card-container">
             <div className="rounded py-4">
                  <img
                    className="rounded values-card-img mb-4"
                    src="test.png"
                    width="200px"
                  />
                  <h4 className="my-4 values-header">
                    <b>Les meilleurs offres négociés pour vous</b>
                  </h4>
                  <p className="text-white values-card-p">
                    Nos experts santé vous aident à comparer les contrats et
                    <b>à trouver une complémentaire adaptée</b> au meilleur
                    rapport garantie prix du marché.
                  </p>
                </div>
             </div>    
            </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Values End */}
    </>
  );
}
