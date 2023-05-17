import React from "react";
import Alert from "react-bootstrap/Alert";

const Success = (props) => {
    return (
        <Alert className="notification_panel" variant="success" onClose={props.onClose} dismissible>
            <Alert.Heading>{props.heading}</Alert.Heading>
            <h5>
                {props.message}
            </h5>
        </Alert>
    );
};

export default Success;
