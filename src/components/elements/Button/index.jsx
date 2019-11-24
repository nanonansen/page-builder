import React from "react";
import classNames from "classnames";

const Button = props => {
  const { className } = props;

  return (
    <button onClick={props.onClick} className={classNames("btn", className)}>
      {props.children}
    </button>
  );
};

export default Button;
