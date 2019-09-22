import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// add the green inside this function
const Alert = ({ color, text }) => {

  const color_class = {
    red: "alert-danger",
    orange: "alert-warning",
    green: "alert-success"
  };

  return (
    <div className={color_class[color]} role="alert">
      {text}
    </div>
  );
};
Alert.propTypes = {
  color: PropTypes.oneOf("red", "orange", "green"),
  text: PropTypes.string
};

// here is where the alert component is being used, you don't have to edit this part,
// but it helps you understan what properties is the component using
ReactDOM.render(
  <div>
    <Alert text="OMG! Something really bad has happended!" color="red" />
    <Alert text="Well, it is not that bad after all!" color="orange" />
    <Alert text="I am supposed to be green" color="green" />
  </div>,
  document.querySelector("#myDiv")
);
