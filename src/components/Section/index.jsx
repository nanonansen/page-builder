import React, { useState, useEffect } from "react";
import { BlockPicker } from "react-color";
import BlockRenderer from "../BlockRenderer";
import SectionFooter from "../SectionFooter";

const Section = props => {
    const {
        moduleSelectorId,
        section,
        handleModuleSelector,
        handleInspectorId,
        inspectorId,
        blocks,
        index,
        handleAddSection,
        styles,
        handleStylesUpdate
    } = props;

    return (
        <section className="section" style={styles}>
            <button
                className="btn"
                onClick={() => handleInspectorId(section.id)}
            >
                Open Inspector
            </button>
            {section.id === inspectorId && (
                <Inspector
                    styles={styles}
                    handleStylesUpdate={handleStylesUpdate}
                    sectionId={section.id}
                />
            )}
            <BlockRenderer blocktype={section.name} content={section.content} />
            <SectionFooter
                moduleSelectorId={moduleSelectorId}
                section={section}
                handleModuleSelector={handleModuleSelector}
                blocks={blocks}
                index={index}
                handleAddSection={handleAddSection}
            />
        </section>
    );
};

export default Section;

const Inspector = ({ styles, handleStylesUpdate, sectionId }) => {
    const [color, setColor] = useState(null);
    useEffect(() => {
        {
            Object.keys(styles).map(key => {
                if (key === "backgroundColor") {
                    setColor(styles[key]);
                }
            });
        }
    }, []);
    const handleChangeComplete = color => {
        console.log("onChangeComplete");
        setColor(color);
        handleStylesUpdate(color, sectionId);
    };
    return (
        <div>
            {color !== null && (
                <BlockPicker
                    color={color}
                    onChangeComplete={handleChangeComplete}
                />
            )}
        </div>
    );
};

const Input = ({ value }) => {
    return <input value={value} type="text" />;
};
