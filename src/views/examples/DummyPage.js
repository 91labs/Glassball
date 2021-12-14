import { useState, useEffect } from "react";

import { getAuth } from "firebase/auth";

import axios from "axios";
import { useHistory, useLocation } from "react-router";

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
  CardBody,
  Spinner,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

import Contactmode from "../../assets/img/icons/homepage/email.png";
import Trades from "../../assets/img/icons/homepage/trading.png";
import Analysis from "../../assets/img/brand/3.jpeg";
import Accounts from "../../assets/img/icons/homepage/taxation.png";

import AuthNavbar from "../../components/Navbars/AuthNavbar";
import AuthFooter from "../../components/Footers/AuthFooter";

import "rsuite/dist/styles/rsuite.min.css";

import { Alert } from "rsuite";
import { PopupButton } from "@typeform/embed-react";
import ScrollAnimation from "react-animate-on-scroll";

import Logo from "../../assets/img/brand/Logo2.png"

import * as Survey from "survey-react";
import "survey-react/survey.css";
import "../../styles/style.scss"

function DummyPage() {
  const [json, setjson] = useState(
    {
      "logoPosition": "right",
      "showProgressBar": "top",

      "pages": [
       {
        "name": "Q1",
        "elements": [
         {
          "type": "checkbox",
          "hasComment": true,
          "name": "How are you managing your current Portfolio",
          "choices": [
           "Excel",
           "Using Online Applications",
           "Use Brokers like Zerodha, Angel Broking"
          ]
         }
        ],
        "isRequired":  "true"
       },
       {
        "name": "page1",
        "elements": [
         {
          "type": "checkbox",
          "hasComment": true,
          "name": "If you're using application, which application you use",
          "choices": [
           "MProfit",
           "TradersSync",
           "Zerodha",
           "Angel Broking"
          ]
         }
        ]
       },
       {
        "name": "page2",
        "elements": [
         {
          "type": "checkbox",
          "hasComment": true,
          "name": "What are the assets you're managing with your current System?",
          "choices": [
           "Real Estate",
           "Stocks",
           "Options  & Futures",
           "Gold",
           "Commodities"
          ]
         }
        ]
       },
       {
        "name": "page2",
        "elements": [
         {
          "type": "checkbox",
          "hasComment": true,
          "name": "What are the features offered in your current system ?",
          "choices": [
           "Real time Portfolio Tracking",
           "Accounting",
           "Reporting",
           "Taxation"          
          ]
         }
        ]
       },
       {
        "name": "page5",
        "elements": [
         {
          "type": "text",
          "name": "question6",
          "title": "Enter Your Email",
          "isRequired": true
         }
        ]
       }
      ]
     }  
  );

  //Define a callback methods on survey complete
  function onComplete(survey, options) {
    //Write survey results into database
    console.log(JSON.stringify(survey.data));

    const data = {
      "questionSurveyData": JSON.stringify(survey.data)
    }

    axios.post(`https://glassball-auth.herokuapp.com/customer/submitSurvey`,data).then((res) => {
      console.log(res)

      const {data} = res;
      if(data.status === 1)
      {
        Alert.success("Survey Submitted Successfully")
      }else{
        Alert.error("Oops, an error occured")
      }
    })

    
  }

  var model = new Survey.Model(json);

  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const mode = params.get("mode");

  const history = useHistory();

  const [Email, setEmail] = useState("");
  const [IsClicked, setIsClicked] = useState(false);
  const [processing, setisprocessing] = useState(false);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

  const onSubmit = () => {
    setisprocessing(true);
    if (Email === "") {
      Alert.error("Please enter your email address");
      setisprocessing(false);
    } else if (!emailRegex.test(Email)) {
      Alert.error("Please enter a valid email address");
      setisprocessing(false);
    } else {
      setIsClicked(true);

      const bodyParam = {
        email: Email,
      };

      axios
        .post(
          "https://glassball-auth.herokuapp.com/customer/createEmailSubscription",
          bodyParam
        )
        .then((res) => {
          const { data } = res;
          if (data.status === 1) {
            Alert.success(
              "Hurray, We'll reach out to you as soon as we're live"
            );
          } else {
            Alert.error("Something went wrong");
          }
          setisprocessing(false);
        });

      setEmail("");
    }
  };

  useEffect(() => {

    Survey.StylesManager.applyTheme("modern");
    
  },[]);

  const myCss = {
    matrix: {
        root: "table table-striped"
    },
    navigationButton: "button btn-lg btn-primary",
    // radiogroup : {
    //   "labelChecked": "form-check-label",
    //   "itemControl": "form-check-label",

    // }
  };

  return (
    <>
      <div className="main-content">
        {/* <AuthNavbar /> */}
        {/* <Survey.SurveyWindow model={model} onComplete={onComplete} /> */}

        <div className="header bg-gradient-info py-7 py-lg-8">
          <Container>
            <div className="header-body text-center mb-7">
              <Row className="justify-content-center" hidden>
                <Col lg="5" md="6">
                  <h1 className="text-white font-weight-900">GlassBall</h1>
                  <p className="text-white opacity-5 font-weight-300">
                    Portfolio Tracking just got easier
                  </p>
                </Col>
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
        <Row
          className="mx-2 mr-lg-6"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "-260px",
          }}
        >
          <Col lg="6" md="8">
            <ScrollAnimation animateIn="fadeInRight" delay="1200">
              <Card className="card newsletter py-4 pb-3 bg-secondary shadow-lg">
                <CardHeader className="bg-secondary">
                  {/* <div className="coming-soon">
                    <hr />
                    <span>Coming Soon</span>
                  </div> */}
                  <div className="logo">
                    <img className="" src={Logo} alt="logo" />
                  </div>
                  <div className=" header my-4 ">
                    Get Notified <br /> When We Launch
                  </div>

                  <div className="input rounded-pill p-1 d-flex">
                    <Input
                      className="border-0 rounded-pill bg-transparent"
                      placeholder="Enter your Email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={Email}
                    />
                    <Button
                      color="primary"
                      className="btn-icon rounded-pill "
                      onClick={onSubmit}
                    >
                      {processing ? (
                        <Spinner size="sm" color="white" />
                      ) : (
                        "Notify Me"
                      )}
                    </Button>
                  </div>
                  <div
                    className="my-2 font-italic text-gray transition-all"
                    style={{
                      opacity: IsClicked ? "1" : "0",
                      transition: "all 0.5s ease-in-out",
                    }}
                  >
                    Thank You! you will be notified soon!
                  </div>
                </CardHeader>
              </Card>
            </ScrollAnimation>
          </Col>

          <Col lg="6" md="7">
            <ScrollAnimation animateIn="fadeInDown">
              <Card className="card bg-secondary shadow border-0 md:pl-4">
                <CardHeader className="bg-transparent pb-5 border-0">
                  <div className="text-muted text-center mt-2 mb-3">
                    <span className="h1 text-gray">Coming Soon</span>
                  </div>
                  <div className="text-center mb-5">
                    <h1 className="font-weight-bolder text-text-default">
                      Seamless Portfolio Tracking
                    </h1>
                  </div>
                  <Row className="mb-3">
                    <Col lg="6" md="8" className="my-3">
                      <div className="d-flex">
                        <img
                          src={Contactmode}
                          alt=""
                          style={{
                            width: "65px",
                            height: "65px",
                          }}
                        />
                        <h2 className="h4 ml-3 font-weight-700">
                          Automatically Scans
                          <br /> Contact mode
                        </h2>
                      </div>
                    </Col>
                    <Col lg="6" md="8" className="my-3">
                      <div className="d-flex">
                        <img
                          src={Trades}
                          alt=""
                          style={{
                            width: "65px",
                            height: "65px",
                          }}
                        />
                        <h2
                          className="h4 ml-3 font-weight-700"
                          style={{
                            alignSelf: "center",
                            marginLeft: "10px",
                            marginTop: "10px",
                          }}
                        >
                          Trade <br /> Bank Statements <br /> Derivates
                        </h2>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6" md="8" className="mb-1">
                      <div className="d-flex">
                        <img
                          src={Analysis}
                          alt="  "
                          style={{
                            width: "65px",
                            height: "65px",
                          }}
                        />
                        <h2
                          className="h4 ml-3 font-weight-700"
                          style={{
                            alignSelf: "center",
                            marginLeft: "10px",
                            marginTop: "8px",
                          }}
                        >
                          Realtime
                          <br /> Analysis
                        </h2>
                      </div>
                    </Col>
                    <Col lg="6" md="8" className="mb-3">
                      <div className="d-flex">
                        <img
                          src={Accounts}
                          alt="..."
                          style={{
                            width: "65px",
                            height: "65px",
                          }}
                        />
                        <h2
                          className="h4 ml-3 font-weight-700"
                          style={{
                            alignSelf: "center",
                            marginLeft: "10px",
                            marginTop: "10px",
                          }}
                        >
                          Accounts <br /> Reports <br /> Taxation
                        </h2>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center">
                    {/* <PopupButton id="HniP9hvI" className="bg-transparent"> */}
                    <Button
                      className="mt-4 w-1/3"
                      color="primary"
                      type="button"
                      onClick={() => toggle()}
                    >
                      Take Our Survey
                    </Button>
                    <p className="text-xs pt-2 font-italic">
                        Become a Beta member, by taking the survey
                    </p>
                    {/* </PopupButton> */}
                  </div>
                </CardHeader>
              </Card>
            </ScrollAnimation>
          </Col>
        </Row>
      </div>

      <AuthFooter />
      <div className="modals">
        <Modal size="lg"  isOpen={modal} className="opacity-100 transition-all" centered>
          <ModalBody>
            <Survey.Survey model={model} onComplete={onComplete} css={myCss}/>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle} size='sm' className="font-light">
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}

export default DummyPage;
