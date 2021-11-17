import { Form, Input } from "reactstrap";
import "./searchform.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const SearchForm = () => {
  return (
    <div className="search-form">
      <Form className="d-flex  form">
        <FontAwesomeIcon className="icon" icon={faSearch} />
        <Input placeholder="Поиск..." />
      </Form>
    </div>
  );
};
