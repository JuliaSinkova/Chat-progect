import React from "react";
import {
  faSave,
  faCheckSquare,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./sidebar.css";

export const Sidebar = () => {
  return (
    <div className="sidebar ">
      <div className="sidebar-item ">
        <Link to="/active">
          <FontAwesomeIcon className="icon" icon={faComments} />
          <br /> Активные
        </Link>
      </div>

      <div className="sidebar-item">
        {" "}
        <Link to="/finished">
          <FontAwesomeIcon className="icon" icon={faCheckSquare} />
          Завершенные{" "}
        </Link>
      </div>

      <div className="sidebar-item">
        {" "}
        <Link to="/saved">
          <FontAwesomeIcon className="icon" icon={faSave} />
          <br /> Сохраненные{" "}
        </Link>
      </div>
    </div>
  );
};
