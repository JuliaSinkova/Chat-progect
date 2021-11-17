import React, { useEffect } from "react";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import { Sidebar } from "./Sidebar/Sidebar";
import { Header } from "./Header/Header";
import { SearchForm } from "./Searchform/Searchform";

export default function Finished() {
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
      <h2>Завершенные диалоги</h2>
    </>
  );
}
