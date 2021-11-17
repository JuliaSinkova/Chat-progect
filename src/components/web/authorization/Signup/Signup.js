import React, { useEffect } from "react";
import { Button, Card, Form, FormGroup, Input, Label } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import firebase from "firebase";
import { signupAction } from "../../../../actions/signupAction";
import { useDispatch } from "react-redux";

export default function Signup() {
  const dispatch = useDispatch();
  let history = useHistory();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        history.push("/homepage");
      }
    });
  }, []);

  const validateSignup = Yup.object({
    email: Yup.string().email("Неверный Email").required("Введите Email"),
    password: Yup.string()
      .required("Введите Пароль")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        "Пароль должен содержать цифру, буквы в нижнем и верхнем регистре и иметь длину не менее 8 знаков"
      ),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], "Пароли должны совпадать")
      .required("Подтвердите пароль"),
  });

  const formikSignup = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: validateSignup,
    onSubmit: (values) => {
      const email = values.email;
      const password = values.password;
      dispatch(signupAction(email, password));
    },
  });

  return (
    <Card className="form-container p-5">
      <h1 className="m-3">Регистрация</h1>
      <Form onSubmit={formikSignup.handleSubmit}>
        <FormGroup className="m-3">
          <Label>Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            onChange={formikSignup.handleChange}
            value={formikSignup.values.type}
          />
          <div className="error">
            {" "}
            {formikSignup.touched.email && formikSignup.errors.email
              ? formikSignup.errors.email
              : ""}{" "}
          </div>
        </FormGroup>
        <FormGroup className="m-3">
          <Label>Пароль</Label>
          <Input
            id="password"
            name="password"
            type="password"
            onChange={formikSignup.handleChange}
            value={formikSignup.values.type}
          />
          <div className="error">
            {formikSignup.touched.password && formikSignup.errors.password
              ? formikSignup.errors.password
              : ""}
          </div>
        </FormGroup>
        <FormGroup className="m-3">
          <Label>Подтверждение пароля</Label>
          <Input
            id="passwordConfirmation"
            name="passwordConfirmation"
            type="password"
            onChange={formikSignup.handleChange}
            value={formikSignup.values.type}
          />
          <div className="error">
            {formikSignup.touched.passwordConfirmation &&
            formikSignup.errors.passwordConfirmation
              ? formikSignup.errors.passwordConfirmation
              : ""}
          </div>
        </FormGroup>
        <FormGroup className="m-5">
          <Button color="primary" type="submit">
            Регистрация{" "}
          </Button>
        </FormGroup>
        <FormGroup className="d-flex justify-content-between">
          <Link to="/login">Вход</Link>
          <Link to="/reset-password">Забыли пароль?</Link>
        </FormGroup>
      </Form>
    </Card>
  );
}
