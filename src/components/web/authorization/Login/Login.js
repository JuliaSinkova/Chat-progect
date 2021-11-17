import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Form, FormGroup, Input, Label } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import firebase from "firebase";
import {
  providerFacebook,
  providerGoogle,
} from "../../../../firebase/firebaseLoginSocialNetworks";
import { loginAction } from "../../../../actions/loginAction";
import { loginSocialNetworksAction } from "../../../../actions/loginSocialNetworksAction";
import "./login.css";

export default function Login() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state?.auth?.error);
  let history = useHistory();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        history.push("/homepage");
      }
    });
  }, []);

  const validateLogin = Yup.object({
    email: Yup.string().email("Неверный Email").required("Введите Email"),
    password: Yup.string()
      .required("Введите Пароль")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        "Пароль должен содержать цифру, буквы в нижнем и верхнем регистре и иметь длину не менее 8 знаков"
      ),
  });

  const formikLogin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validateLogin,
    onSubmit: (values) => {
      const email = values.email;
      const password = values.password;

      dispatch(loginAction(email, password));
    },
  });
  const loginWithGoogle = function () {
    dispatch(loginSocialNetworksAction(providerGoogle));
  };
  const loginWithFacebook = function () {
    dispatch(loginSocialNetworksAction(providerFacebook));
  };

  return (
    <Card className="form-container p-5">
      <h1 className="my-3">Авторизация </h1>
      <Form onSubmit={formikLogin.handleSubmit}>
        <FormGroup className="m-3">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            onChange={formikLogin.handleChange}
            value={formikLogin.values.type}
          />
          <div className="error">
            {" "}
            {formikLogin.touched.email && formikLogin.errors.email
              ? formikLogin.errors.email
              : ""}{" "}
          </div>
        </FormGroup>
        <FormGroup className="m-3">
          <Label>Пароль </Label>
          <Input
            id="password"
            name="password"
            type="password"
            onChange={formikLogin.handleChange}
            value={formikLogin.values.type}
          />
          <div className="error">
            {formikLogin.touched.password && formikLogin.errors.password
              ? formikLogin.errors.password
              : ""}
          </div>
        </FormGroup>
        <FormGroup className="m-3">
          <Button color="primary" className=" my-4" type="submit">
            Вход <FontAwesomeIcon icon={faSignInAlt} />
          </Button>
          <div className="error">{error ? "Не удалось войти" : ""}</div>
          <div className="error">{formikLogin.status}</div>
        </FormGroup>
      </Form>
      <div className="m-3 d-flex justify-content-between">
        <Button
          outline
          color="danger"
          className=" m-2"
          type="submit"
          onClick={loginWithGoogle}
        >
          <FontAwesomeIcon icon={faGoogle} /> Войти через Google{" "}
        </Button>
        <Button
          outline
          color="primary"
          className=" m-2"
          type="submit"
          onClick={loginWithFacebook}
        >
          <FontAwesomeIcon icon={faFacebook} /> Войти через Facebook{" "}
        </Button>
      </div>
      <div className="d-flex justify-content-between">
        <Link to="/signup">Регистрация</Link>
        <Link to="/reset-password">Забыли пароль?</Link>
      </div>
    </Card>
  );
}
