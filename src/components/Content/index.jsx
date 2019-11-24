import React, { useState } from "react";
import uuidv4 from "uuid";
import Sidebar from "../Sidebar";
import Canvas from "../Canvas";

import initalData from "../../Inititaldata";

const Content = props => {
  const [data, setData] = useState(initalData);
  const [sidebarActive, setSidebarActive] = useState(true);
  const handleSidebarState = () => {
    setSidebarActive(!sidebarActive);
  };

  // Add Section
  const handleAddSection = sectionIndex => {
    const oldState = [...data.canvas.sections];
    const id = uuidv4();
    let newItem = { id, name: "new Name" };

    // Add Section from Sidebar
    if (sectionIndex === undefined) {
      let newSections = {
        sections: [...oldState, newItem]
      };
      const newState = { ...data, canvas: newSections };
      setData(newState);
      // Add Section from Canvas
    } else {
      const newArray = oldState.splice(sectionIndex + 1, 0, newItem);
      let newSections = {
        sections: [...oldState, ...newArray]
      };
      const newState = { ...data, canvas: newSections };

      setData(newState);
    }
  };

  // Remove Section
  const handleRemoveSection = id => {
    const currentId = id;
    const oldState = data;
    console.log(oldState.canvas.sections);
    console.log("currentId", currentId);

    const newSections = oldState.canvas.sections.filter(item => {
      return item.id !== currentId;
    });
    let newState = {
      ...oldState,
      canvas: { ...oldState.canvas, sections: newSections }
    };
    setData(newState);
  };

  return (
    <div className={props.className}>
      <Sidebar
        handleSidebarState={handleSidebarState}
        sidebarActive={sidebarActive}
        data={data.canvas.sections}
        handleAddSection={handleAddSection}
        handleRemoveSection={handleRemoveSection}
      />
      <Canvas
        sidebarActive={sidebarActive}
        data={data.canvas.sections}
        handleAddSection={handleAddSection}
        handleRemoveSection={handleRemoveSection}
      />
    </div>
  );
};

export default Content;
