import React from "react";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../../../actions/logoutAction";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faSignOutAlt, faComment } from "@fortawesome/free-solid-svg-icons";
import "./header.css";

export const Header = () => {
  const user = useSelector((state) => state?.auth?.user);
  const dispatch = useDispatch();
  const logoutFunction = () => {
    dispatch(logoutAction());
  };
  return (
    <>
      <div className="header d-flex justify-content-between">
        <Link to="/homepage">
          <h2 className="logo">
            WeHelp <FontAwesomeIcon icon={faComment} />
          </h2>
        </Link>
        <h4> {user && user.email} </h4>
        <Button onClick={logoutFunction} color="link">
          Выход <FontAwesomeIcon icon={faSignOutAlt} />
        </Button>
      </div>
    </>
  );
};
