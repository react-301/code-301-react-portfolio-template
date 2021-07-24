/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import promo1 from "assets/img/theme/promo-1.png";
import cardImg from "assets/img/theme/img-1-1200x1000.jpg";
import ill2 from "assets/img/ill/ill-2.svg";
import team1 from "assets/img/theme/team-1-800x800.jpg";
import team2 from "assets/img/theme/team-2-800x800.jpg";
import team3 from "assets/img/theme/team-3-800x800.jpg";
import team4 from "assets/img/theme/team-4-800x800.jpg";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        A beautiful Design System{" "}
                        <span>completed with examples</span>
                      </h1>
                      <p className="lead text-white">
                        The design system comes with four pre-built pages to
                        help you get started faster. You can change the text and
                        images and you're good to go.
                      </p>

                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Tema Restaurant
                          </h6>
                          <p className="description mt-3">
                            <ul>
                             <li> List of foods and drinks</li>
                           <li> order meals </li> 
                           <li>    A list displaying customer requests </li> 
                           <li>   Possibility to delete the request </li> 
                            </ul>
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              React.js
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              Node.js
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              MongoDB
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              Express
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              Heroku
                            </Badge>
                          </div>
                          <br></br>
                          <a
                            className="mt-4"
                            color="primary"
                            href="https://tema-restaurant.netlify.app/"
                          >
                            View
                          </a>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            Cat Adoption
                          </h6>
                          <p className="description mt-3">
                            The Jordan Cat Rescue has tons of cats who need good homes. One of the best ways to
                            reach prospective adoptive homes is to have a website which contains a list of all these cats
                            to be available for volunteers to choose their own.
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              HTML
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              CSS
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              JavaScript
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              External API
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              Local storage
                            </Badge>
                          </div>
                          <br></br>
                          <a
                            className="mt-4"
                            color="success"

                            href="https://cats-adoption.netlify.app/"
                          >
                            View
                          </a>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Horned beasts website
                          </h6>
                          <p className="description mt-3">
                          A React app that displays different horned animals, allowing the user to filter based on the number of horns.
                          </p>
                          <br></br>
                          <a
                            className="mt-4"
                            color="warning"
                            href="https://horned-beasts4.netlify.app/"
                          >
                            View
                          </a>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>



        </main>

      </>
    );
  }
}

export default Landing;
