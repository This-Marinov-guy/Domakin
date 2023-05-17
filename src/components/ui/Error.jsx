import React from "react";
import Alert from "react-bootstrap/Alert";
import { useDispatch, useSelector } from "react-redux";
import { removeError } from "../../redux/error";
import { selectScript } from "../../redux/language";

const Error = (props) => {
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(removeError());
  };

  const script = useSelector(selectScript)

  return (
    <Alert className="notification_panel" variant="danger" onClose={closeHandler} dismissible>
      <Alert.Heading>{script.error[0]}</Alert.Heading>
      <h5>
        {props.errorMessage}
      </h5>
    </Alert>
  );
};

export default Error;
