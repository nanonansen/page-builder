import React, { useState } from "react";
import Header from "./Header";
import Content from "./Content";

function App() {
  return (
    <div className="App">
      <Header />
      <Content className="content" />
    </div>
  );
}

export default App;
