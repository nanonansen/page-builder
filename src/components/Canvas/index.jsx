import React from "react";
import Section from "../Section";

const Canvas = props => {
    const {
        sidebarActive,
        data,
        blocks,
        handleAddSection,
        handleModuleSelector,
        moduleSelectorId,
        handleInspectorId,
        inspectorId,
        handleStylesUpdate
    } = props;
    return (
        <div
            className={
                sidebarActive ? "canvas-wrapper with-sidebar" : "canvas-wrapper"
            }
        >
            <div className="canvas">
                {data &&
                    data.map((section, index) => {
                        return (
                            <Section
                                key={section.id}
                                moduleSelectorId={moduleSelectorId}
                                handleInspectorId={handleInspectorId}
                                inspectorId={inspectorId}
                                section={section}
                                handleModuleSelector={handleModuleSelector}
                                blocks={blocks}
                                index={index}
                                handleAddSection={handleAddSection}
                                styles={section.styles}
                                handleStylesUpdate={handleStylesUpdate}
                            ></Section>
                        );
                    })}
            </div>
        </div>
    );
};

export default Canvas;
