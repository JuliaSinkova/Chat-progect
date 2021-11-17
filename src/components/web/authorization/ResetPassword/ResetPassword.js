import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button, Card, Form, FormGroup, Input, Label } from "reactstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { resetPasswordAction } from "../../../../actions/resetPasswordAction";

export default function ResetPassword() {
  const dispatch = useDispatch();
  const validateResetPassword = Yup.object({
    email: Yup.string().email("Неверный Email").required("Введите Email"),
  });

  const formikResetPassword = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validateResetPassword,
    onSubmit: (values) => {
      const email = values.email;
      dispatch(resetPasswordAction(email));
    },
  });

  return (
    <Card className="form-container p-5">
      <h1 className="my-3">Забыли пароль </h1>
      <Form onSubmit={formikResetPassword.handleSubmit}>
        <FormGroup className="m-3">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            onChange={formikResetPassword.handleChange}
            value={formikResetPassword.values.type}
          />
          <div className="error">
            {" "}
            {formikResetPassword.touched.email &&
            formikResetPassword.errors.email
              ? formikResetPassword.errors.email
              : ""}{" "}
          </div>
        </FormGroup>
        <FormGroup className="m-3">
          <Button color="primary" className=" my-4" type="submit">
            Отправить ссылку для востановления
          </Button>
        </FormGroup>
        <FormGroup className="d-flex justify-content-between">
          <Link to="/signup">Регистрация</Link>
          <Link to="/login">Вход</Link>
        </FormGroup>
      </Form>
      <ToastContainer />
    </Card>
  );
}
