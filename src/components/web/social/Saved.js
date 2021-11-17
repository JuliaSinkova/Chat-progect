import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase";
import { Sidebar } from "./Sidebar/Sidebar";
import { Header } from "./Header/Header";
import { SearchForm } from "./Searchform/Searchform";

export default function Saved() {
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
      <SearchForm />
      <h2>Сохраненные диалоги</h2>
    </>
  );
}
