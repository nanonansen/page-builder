import React, { useState } from "react";
import ThemeContext from "../ThemeContext";
import uuidv4 from "uuid";
import Sidebar from "../Sidebar";
import Canvas from "../Canvas";

import initalData from "../../Inititaldata";

import arrayMove from "../../helper/arrayMove";

const Content = props => {
    const [data, setData] = useState(initalData);
    const [sidebarActive, setSidebarActive] = useState(true);
    const [moduleSelectorId, setModuleSelectorId] = useState(null);
    const [inspectorId, setInspectorId] = useState(null);

    // HandleSidebarState
    const handleSidebarState = () => {
        setSidebarActive(!sidebarActive);
    };

    //Sortable HOC onSortEnd
    const onSortEnd = ({ oldIndex, newIndex }) => {
        setData(({ canvas }) => ({
            ...data,
            canvas: {
                blocks: arrayMove(data.canvas.blocks, oldIndex, newIndex)
            }
        }));
    };

    // Handle Add Section
    const handleAddSection = (sectionIndex, blockId) => {
        // hide ModuleSelector and Inspector
        setModuleSelectorId(null);
        setInspectorId(null);

        // create new Unique ID
        const id = uuidv4();

        //clone current State
        const oldState = { ...data };

        // find Block to add
        let selectedBlock = oldState.blocks.filter(
            block => block.id === blockId
        );

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
    const handleInspectorId = sectionId => {
        if (inspectorId === sectionId) {
            setInspectorId(null);
        } else {
            setInspectorId(sectionId);
        }
    };
    const handleStylesUpdate = (styles, sectionId) => {
        console.log("handleStylesUpdate", styles, sectionId);
        // clone current State
        const oldState = JSON.parse(JSON.stringify(data));

        // find Section to Update
        let selectedSection = data.canvas.blocks.filter(
            block => block.id === sectionId
        );

        // Deep Clone Block Object
        const newSection = JSON.parse(JSON.stringify(selectedSection));
        const newSectionObj = Object.assign(...newSection);
        //Update Color Style
        newSectionObj.styles = styles;

        //update State with new Section Object
        oldState.canvas.blocks.map((block, index) => {
            if (block.id === sectionId) {
                oldState.canvas.blocks[index] = newSectionObj;
                return setData(oldState);
            }
            return null;
        });
    };

    if (data) {
        return (
            <div className={props.className}>
                <ThemeContext.Provider value={data}>
                    <Sidebar
                        handleSidebarState={handleSidebarState}
                        sidebarActive={sidebarActive}
                        items={data.canvas.blocks}
                        handleAddSection={handleAddSection}
                        handleRemoveSection={handleRemoveSection}
                        onSortEnd={onSortEnd}
                        lockAxis="y"
                        helperClass={"on-drag"}
                        hideSortableGhost={true}
                    />

                    <Canvas
                        sidebarActive={sidebarActive}
                        data={data.canvas.blocks}
                        blocks={data.blocks}
                        handleAddSection={handleAddSection}
                        handleRemoveSection={handleRemoveSection}
                        handleModuleSelector={handleModuleSelector}
                        moduleSelectorId={moduleSelectorId}
                        handleInspectorId={handleInspectorId}
                        inspectorId={inspectorId}
                        handleStylesUpdate={handleStylesUpdate}
                    />
                </ThemeContext.Provider>
            </div>
        );
    }
};

export default Content;
