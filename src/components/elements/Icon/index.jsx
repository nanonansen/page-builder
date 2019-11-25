import React from "react";
import classNames from "classnames";

const Icon = props => {
  const { className, type } = props;
  switch (type) {
    case "sidebar":
      return (
        <svg
          className={classNames("icn", className)}
          width="16"
          height="14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 0H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V1a1 1 0 00-1-1zM5 12H2V2h3v10z"
            fill="#9B9B9B"
            fillRule="nonzero"
          />
        </svg>
      );

    case "settings":
      return (
        <svg
          className={classNames("icn", className)}
          width="16"
          height="14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.716 6.504l-3.429-6A.996.996 0 0011.42 0H4.58a.999.999 0 00-.868.504l-3.429 6a.998.998 0 000 .992l3.429 6A.999.999 0 004.58 14h6.839c.359 0 .69-.192.868-.504l3.429-6a.998.998 0 000-.992zM8 10a3 3 0 110-6 3 3 0 010 6z"
            fill="#9B9B9B"
            fillRule="nonzero"
          />
        </svg>
      );
    case "preview":
      return (
        <svg
          className={classNames("icn", className)}
          width="16"
          height="12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 12c3.6 0 6.4-3.1 7.6-4.9.5-.7.5-1.6 0-2.3C14.4 3.1 11.6 0 8 0 4.4 0 1.6 3.1.4 4.9c-.5.7-.5 1.6 0 2.2C1.6 8.9 4.4 12 8 12zm0-9c1.7 0 3 1.3 3 3S9.7 9 8 9 5 7.7 5 6s1.3-3 3-3z"
            fill="#9B9B9B"
            fillRule="nonzero"
          />
        </svg>
      );
    case "undo":
      return (
        <svg
          className={classNames("icn", className)}
          width="16"
          height="6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 .5a.5.5 0 111 0v3.348A10.318 10.318 0 019 0c2.334 0 4.545.802 6.316 2.246a.5.5 0 11-.632.776A8.959 8.959 0 009 1C5.94 1 3.054 2.561 1.39 5H5.5a.5.5 0 010 1h-5a.508.508 0 01-.239-.06l.072.032a.497.497 0 01-.04-.016l-.032-.017a.51.51 0 01-.228-.26.428.428 0 01-.024-.084A.495.495 0 010 5.5l.004.065A.5.5 0 010 5.515z"
            fill="#000"
            fillRule="nonzero"
            opacity=".4"
          />
        </svg>
      );
    case "add":
      return (
        <svg
          className={classNames("icn", className)}
          width="15"
          height="15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            stroke="#FFF"
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7.5.5v14M.5 7.5h14" />
          </g>
        </svg>
      );

    default:
      return null;
  }
};

export default Icon;
