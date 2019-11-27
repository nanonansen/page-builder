import React from "react";
import Button from "../elements/Button";
import Icon from "../elements/Icon";
import ModuleSelector from "../ModuleSelector";

const SectionFooter = props => {
    const {
        moduleSelectorId,
        section,
        handleModuleSelector,
        blocks,
        index,
        handleAddSection
    } = props;
    return (
        <div
            className={
                moduleSelectorId === section.id
                    ? "section__footer active"
                    : "section__footer"
            }
        >
            <Button
                className={
                    moduleSelectorId === section.id
                        ? "primary rounded large active"
                        : "primary rounded large"
                }
                onClick={() => handleModuleSelector(section.id)}
            >
                <Icon type={"add"}></Icon>
            </Button>

            <ModuleSelector
                isActive={moduleSelectorId === section.id}
                blocks={blocks}
                sectionId={section.id}
                index={index}
                handleAddSection={handleAddSection}
            />
        </div>
    );
};

export default SectionFooter;
