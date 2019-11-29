import React, { useState, useEffect } from "react";
import { CirclePicker } from "react-color";
import BlockRenderer from "../BlockRenderer";
import SectionFooter from "../SectionFooter";
// import ThemeContext from "../ThemeContext";
import Button from "../elements/Button";
import Icon from "../elements/Icon";

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

    console.log("style", styles);
    const { background, padding } = styles;
    const styleObj = { ...background, ...padding };
    console.log("styleObj", styleObj);

    return (
        <section className="section" style={styleObj}>
            <Button
                className="inspector_toggle"
                onClick={() => handleInspectorId(section.id)}
            >
                <Icon type={"inspector"} />
            </Button>

            <Inspector
                styles={styles}
                handleStylesUpdate={handleStylesUpdate}
                sectionId={section.id}
                isActive={section.id === inspectorId}
            />

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

const Inspector = ({ styles, handleStylesUpdate, sectionId, isActive }) => {
    const [sectionStyles, setSectionStyles] = useState({});

    useEffect(() => {
        setSectionStyles(styles);
    }, [styles]);

    const handleColorChange = color => {
        console.log("onChangeComplete", color);
        const oldState = { ...sectionStyles };
        oldState.background.backgroundColor = color.hex;
        setSectionStyles(oldState);
        handleStylesUpdate(oldState, sectionId);
    };
    const handleChange = e => {
        const oldState = { ...sectionStyles };
        oldState[e.target.name] = parseInt(e.target.value);
        setSectionStyles(oldState);
        handleStylesUpdate(oldState, sectionId);
    };
    const incrementValue = (parent, key, value) => {
        console.log("incrementValue");
        const oldState = { ...sectionStyles };
        oldState[parent][key] = parseInt(value) + 10;
        setSectionStyles(oldState);
        handleStylesUpdate(oldState, sectionId);
    };
    const decrementValue = (parent, key, value) => {
        console.log("incrementValue");
        const oldState = { ...sectionStyles };
        oldState[parent][key] = parseInt(value) - 10;
        setSectionStyles(oldState);
        handleStylesUpdate(oldState, sectionId);
    };

    return (
        <div className={isActive ? "inspector inspector--active" : "inspector"}>
            {sectionStyles !== null &&
                Object.entries(sectionStyles).map(([key, value]) => {
                    console.log("sectionStyles", key);

                    if (key === "background") {
                        return (
                            <div key={key}>
                                <label htmlFor="">{key}</label>
                                <CirclePicker
                                    color={
                                        sectionStyles.background.backgroundColor
                                    }
                                    onChangeComplete={handleColorChange}
                                    colors={["#f44336", "#e91e63", "#9c27b0"]}
                                />
                            </div>
                        );
                    } else {
                        return Object.entries(value).map(([k, v]) => {
                            return (
                                <div
                                    key={k}
                                    className="paddingInput"
                                    name={key}
                                >
                                    <button
                                        onClick={() =>
                                            decrementValue(key, k, v)
                                        }
                                    >
                                        -
                                    </button>
                                    <input
                                        type="text"
                                        name={k}
                                        value={v}
                                        onChange={handleChange}
                                    />
                                    <button
                                        onClick={() =>
                                            incrementValue(key, k, v)
                                        }
                                    >
                                        +
                                    </button>
                                </div>
                            );
                        });
                    }
                })}
        </div>
    );
};
