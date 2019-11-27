import React, { useState } from "react";
import uuidv4 from "uuid";
import Sidebar from "../Sidebar";
import Canvas from "../Canvas";

import initalData from "../../Inititaldata";

const arrayMoveMutate = (array, from, to) => {
    array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
};

const arrayMove = (array, from, to) => {
    array = array.slice();
    arrayMoveMutate(array, from, to);
    return array;
};

const Content = props => {
    const [data, setData] = useState(initalData);
    const [sidebarActive, setSidebarActive] = useState(true);
    const [moduleSelectorId, setModuleSelectorId] = useState(null);
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

    // Add Section
    const handleAddSection = (sectionIndex, blockId, ref) => {
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

    if (data) {
        return (
            <div className={props.className}>
                <Sidebar
                    handleSidebarState={handleSidebarState}
                    sidebarActive={sidebarActive}
                    items={data.canvas.blocks}
                    handleAddSection={handleAddSection}
                    handleRemoveSection={handleRemoveSection}
                    onSortEnd={onSortEnd}
                    lockAxis="y"
                    helperClass={"on-drag"}
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
    }
};

export default Content;
