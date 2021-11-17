import React, { useEffect } from "react";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import { Sidebar } from "../Sidebar/Sidebar";
import { Header } from "../Header/Header";

export default function Homepage() {
  let history = useHistory();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        history.push("/login");
      }
    });
  }, []);

  return (
    <>
      <Header />
      <Sidebar />
      <div>
        <h1>Добро пожаловать!</h1>
      </div>
    </>
  );
}
