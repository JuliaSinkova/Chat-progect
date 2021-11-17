import React, { useEffect } from "react";
import firebase from "firebase";
import { Sidebar } from "./Sidebar/Sidebar";
import { Header } from "./Header/Header";
import { SearchForm } from "./Searchform/Searchform";
import { useHistory } from "react-router-dom";

export default function Active() {
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
      <h2>Активные диалоги</h2>
      <div></div>
    </>
  );
}
