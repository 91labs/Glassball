import { useState, useEffect } from "react";

import { getAuth } from "firebase/auth";

import axios from "axios";
import { useHistory } from "react-router";

import Mockup from "../../assets/img/brand/—Pngtree—colorful mobile mockup_5849582.png";

import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
} from "reactstrap";

import Contactmode from "../../assets/img/brand/1.jpeg";
import Trades from "../../assets/img/brand/2.jpeg";
import Analysis from "../../assets/img/brand/3.jpeg";
import Accounts from "../../assets/img/brand/4.jpeg";

import AuthNavbar from "../../components/Navbars/AuthNavbar";
import AuthFooter from "../../components/Footers/AuthFooter";

function DummyPage() {
  return (
    <div>
      <div className="main-content">
        <AuthNavbar />
        <div className="header bg-gradient-info py-7 py-lg-8">
          <Container>
            <div className="header-body text-center mb-7">
              <Row className="justify-content-center">
                <Col lg="5" md="6"></Col>
              </Row>
            </div>
          </Container>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-default"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "-100px",
        }}
      >
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-3">
                <small>Coming Soon</small>
              </div>
              <div>
                <h1>Seamless Portfolio Tracking</h1>
              </div>
              <Row className="mb-3">
                <Col lg="6" md="8">
                  <div className="d-flex">
                    <img
                      src={Contactmode}
                      style={{
                        width: "80px",
                        height: "80px",
                      }}
                    />
                    <h2
                      style={{
                        alignSelf: "center",
                        marginLeft: "10px",
                        marginTop: "10px",
                      }}
                    >
                      Automatically Scans Contact mode
                    </h2>
                  </div>
                </Col>
                <Col>
                  <div className="d-flex">
                    <img
                      src={Trades
                      }
                      style={{
                        width: "80px",
                        height: "80px",
                      }}
                    />
                    <h2
                      style={{
                        alignSelf: "center",
                        marginLeft: "10px",
                        marginTop: "10px",
                      }}
                    >
                      Import Trade and Bank Statements
                    </h2>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg="6" md="8">
                  <div className="d-flex">
                    <img
                      src={Analysis}
                      style={{
                        width: "80px",
                        height: "80px",
                      }}
                    />
                    <h2
                      style={{
                        alignSelf: "center",
                        marginLeft: "10px",
                        marginTop: "10px",
                      }}
                    >
                      Realtime Analysis
                    </h2>
                  </div>
                </Col>
                <Col lg="6" md="8">
                  <div className="d-flex">
                    <img
                      src={Accounts}
                      style={{
                        width: "80px",
                        height: "80px",
                      }}
                    />
                    <h2
                      style={{
                        alignSelf: "center",
                        marginLeft: "10px",
                        marginTop: "10px",
                      }}
                    >
                    Accounts and Reporting
                    </h2>
                  </div>
                </Col>
              </Row>
              <div className="text-center">
                <Button className="mt-4 w-1/3" color="primary" type="button">
                  Take Our Survey
                </Button>
              </div>
            </CardHeader>
          </Card>
        </Col>
      </div>
      <AuthFooter />
    </div>
  );
}

export default DummyPage;
