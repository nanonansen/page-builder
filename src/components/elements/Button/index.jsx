import React, { useContext } from "react";
import classNames from "classnames";
import ThemeContext from "../../ThemeContext";

const Button = props => {
    const { className } = props;
    const color = useContext(ThemeContext);
    return (
        <button
            style={{ color }}
            onClick={props.onClick}
            className={classNames("btn", className)}
        >
            {props.children}
        </button>
    );
};

export default Button;
