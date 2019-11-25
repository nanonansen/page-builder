import React, { useState } from "react";
import uuidv4 from "uuid";
import Sidebar from "../Sidebar";
import Canvas from "../Canvas";

import initalData from "../../Inititaldata";

const Content = props => {
  const [data, setData] = useState(initalData);
  const [sidebarActive, setSidebarActive] = useState(true);
  const [moduleSelectorId, setModuleSelectorId] = useState(null);
  const handleSidebarState = () => {
    setSidebarActive(!sidebarActive);
  };

  // Add Section
  const handleAddSection = (sectionIndex, blockId) => {
    // Reset ModuleSelector
    setModuleSelectorId(null);

    // create new Unique ID
    const id = uuidv4();

    //clone current State
    const oldState = { ...data };

    // find Block to add
    let selectedBlock = data.blocks.filter(block => block.id === blockId);

    // Deep Clone Block Object
    const newBlock = JSON.parse(JSON.stringify(selectedBlock));
    const newBlockObj = Object.assign(...newBlock);
    newBlockObj.id = id;

    // Add Block to Blocks Array at selected Index
    oldState.canvas.blocks.splice(sectionIndex + 1, 0, { ...newBlockObj });
    setData(oldState);
  };

  // Remove Section
  const handleRemoveSection = id => {
    const currentId = id;
    const oldState = data;

    const newBlocks = oldState.canvas.blocks.filter(item => {
      return item.id !== currentId;
    });
    let newState = {
      ...oldState,
      canvas: { ...oldState.canvas, blocks: newBlocks }
    };
    setData(newState);
  };

  const handleModuleSelector = sectionId => {
    if (moduleSelectorId === sectionId) {
      setModuleSelectorId(null);
    } else {
      setModuleSelectorId(sectionId);
    }
  };

  return (
    <div className={props.className}>
      <Sidebar
        handleSidebarState={handleSidebarState}
        sidebarActive={sidebarActive}
        data={data.canvas.blocks}
        handleAddSection={handleAddSection}
        handleRemoveSection={handleRemoveSection}
      />
      <Canvas
        sidebarActive={sidebarActive}
        data={data.canvas.blocks}
        blocks={data.blocks}
        handleAddSection={handleAddSection}
        handleRemoveSection={handleRemoveSection}
        handleModuleSelector={handleModuleSelector}
        moduleSelectorId={moduleSelectorId}
      />
    </div>
  );
};

export default Content;
