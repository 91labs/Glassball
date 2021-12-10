
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Spinner
} from "reactstrap";

import { useState, useEffect } from "react";

import firebase from "../../firebase";
import axios from 'axios'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";

import 'rsuite/dist/styles/rsuite.min.css';

import { Alert } from 'rsuite';


const Login = () => {
  const [Formdata, setFormdata] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [Disabled, setDisabled] = useState(true);
  const auth = getAuth();
  const history = useHistory();
  const [isprocess,setisprocess] = useState(false)



  useEffect(() => {
    if (Formdata.email === "" || Formdata.password === "") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [Formdata]);

  function makeAPI(config,bodyParams) {
    axios
    .post(
      "https://glassball-auth.herokuapp.com/customer/login",
      bodyParams,
      config
    )
    .then(function (response) {
      console.log(response);

      const {data} = response;
      setisprocess(false)
      if(data.status === 0)
      {
          Alert.error("Login Failed")
          history.push("/auth/register");
      }else{
        history.push("/")
      }
    })
    .catch(function (error) {
      console.log(error);
      Alert.error("Login Failed")
      setisprocess(false)
    });
  }

  const onSubmit = () => {
    if (Disabled) return;
    setisprocess(true)
    signInWithEmailAndPassword(auth, Formdata.email, Formdata.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        user.getIdToken().then(function (idToken) {
          const config = {
            headers: {
              Authorization: `Bearer ${idToken}`,
            },
          };

          const bodyParams = {
            uid: user.uid,
            firstName: user.displayName,
            email: user.email,
          };

          console.log(bodyParams);
          console.log(config);

          makeAPI(config,bodyParams);
        });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.error("Login Failed");
        setisprocess(false)
      });
  };

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          {/* <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-3">
              <small>Sign in with</small>
            </div>
            <div className="btn-wrapper text-center">
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={
                      require("../../assets/img/icons/common/github.svg")
                        .default
                    }
                  />
                </span>
                <span className="btn-inner--text">Github</span>
              </Button>
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={
                      require("../../assets/img/icons/common/google.svg")
                        .default
                    }
                  />
                </span>
                <span className="btn-inner--text">Google</span>
              </Button>
            </div>
          </CardHeader> */}
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Enter your email and password</small>
            </div>
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                    value={Formdata.email}
                    onChange={(e) => {
                      setFormdata({
                        ...Formdata,
                        email: e.target.value,
                      });
                    }}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                    value={Formdata.password}
                    onChange={(e) => {
                      setFormdata({
                        ...Formdata,
                        password: e.target.value,
                      });
                    }}
                  />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                  onClick={() => {
                    setFormdata({
                      ...Formdata,
                      remember: !Formdata.remember,
                    });
                  }}
                />

                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label>
              </div>
              <div className="text-center">
                <Button
                  className="my-4 w-50"
                  color="primary"
                  type="button"
                  onClick={onSubmit}
                  style={{
                    opacity: Disabled ? "0.5" : "1",
                  }}
                >
                  {isprocess ? <Spinner size="sm">Loading..</Spinner> : "Sign in"}
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="/auth/register"
              onClick={(e) => {
                history.push("/auth/register");
                e.preventDefault();
              }}
            >
              <small>Create new account</small>
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Login;
