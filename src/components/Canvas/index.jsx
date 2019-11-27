import React from "react";
import Section from "../Section";

const Canvas = props => {
    const {
        sidebarActive,
        data,
        blocks,
        handleAddSection,
        handleModuleSelector,
        moduleSelectorId
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
                                section={section}
                                handleModuleSelector={handleModuleSelector}
                                blocks={blocks}
                                index={index}
                                handleAddSection={handleAddSection}
                            ></Section>
                        );
                    })}
            </div>
        </div>
    );
};

export default Canvas;
