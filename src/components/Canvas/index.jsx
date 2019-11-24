import React from "react";

const Canvas = ({ sidebarActive }) => {
  return (
    <div
      className={
        sidebarActive ? "canvas-wrapper with-sidebar" : "canvas-wrapper"
      }
    >
      <div className="canvas">
        <h2>Canvas</h2>
        <section
          style={{ height: "600px", borderBottom: "1px solid red" }}
        ></section>
        <section
          style={{ height: "600px", borderBottom: "1px solid red" }}
        ></section>
        <section
          style={{ height: "600px", borderBottom: "1px solid red" }}
        ></section>
        <section
          style={{ height: "600px", borderBottom: "1px solid red" }}
        ></section>
        <section
          style={{ height: "600px", borderBottom: "1px solid red" }}
        ></section>
        <section
          style={{ height: "600px", borderBottom: "1px solid red" }}
        ></section>
      </div>
    </div>
  );
};

export default Canvas;
