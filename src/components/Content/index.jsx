import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Canvas from "../Canvas";

const Content = props => {
  const [sidebarActive, setSidebarActive] = useState(true);
  const handleSidebarState = () => {
    setSidebarActive(!sidebarActive);
  };
  return (
    <div className={props.className}>
      <Sidebar
        handleSidebarState={handleSidebarState}
        sidebarActive={sidebarActive}
      />
      <Canvas sidebarActive={sidebarActive} />
    </div>
  );
};

export default Content;
