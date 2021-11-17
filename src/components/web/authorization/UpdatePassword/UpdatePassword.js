import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, FormGroup, Label, Input, Card } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import * as Yup from "yup";
import firebase from "firebase";
import { loginAction } from "../../../../actions/loginAction";

export default function Login() {
  let history = useHistory();
  const search = useLocation().search;
  const actionCode = new URLSearchParams(search).get("oobCode");
  const notifySuccess = () => toast.success("Пароль успешно обновлен");
  const notifyError = () => toast.error("Не удалось обновить пароль(");

  const validateUpdatePassword = Yup.object({
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

  const formikUpdatePassword = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: validateUpdatePassword,
    onSubmit: (values) => {
      const password = values.password;
      firebase
        .auth()
        .verifyPasswordResetCode(actionCode)
        .then(() => {
          firebase
            .auth()
            .confirmPasswordReset(actionCode, password)
            .then(notifySuccess);
        })
        .then(() =>
          setTimeout(() => {
            history.push("/login");
          }, 2000)
        )
        .catch(notifyError);
    },
  });

  return (
    <Card className="form-container p-5">
      <h1 className="my-3">Обновить пароль </h1>
      <Form onSubmit={formikUpdatePassword.handleSubmit}>
        <FormGroup className="m-3">
          <Label>Пароль </Label>
          <Input
            id="password"
            name="password"
            type="password"
            onChange={formikUpdatePassword.handleChange}
            value={formikUpdatePassword.values.type}
          />
          <div className="error">
            {formikUpdatePassword.touched.password &&
            formikUpdatePassword.errors.password
              ? formikUpdatePassword.errors.password
              : ""}
          </div>
        </FormGroup>
        <FormGroup className="m-3">
          <Label>Подтверждение пароля</Label>
          <Input
            id="passwordConfirmation"
            name="passwordConfirmation"
            type="password"
            onChange={formikUpdatePassword.handleChange}
            value={formikUpdatePassword.values.type}
          />
          <div className="error">
            {formikUpdatePassword.touched?.passwordConfirmation &&
            formikUpdatePassword.errors?.passwordConfirmation
              ? formikUpdatePassword.errors.passwordConfirmation
              : ""}
          </div>
        </FormGroup>
        <FormGroup className="m-3">
          <Button color="primary" className=" my-4" type="submit">
            Отправить ссылку для восстановления{" "}
          </Button>
        </FormGroup>
      </Form>

      <div className="d-flex justify-content-between">
        <Link to="/login">Вход</Link>
        <Link to="/signup">Регистрация</Link>
      </div>
      <ToastContainer />
    </Card>
  );
}
