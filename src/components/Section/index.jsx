import React from "react";
import BlockRenderer from "../BlockRenderer";
import SectionFooter from "../SectionFooter";

const Section = props => {
    const {
        moduleSelectorId,
        section,
        handleModuleSelector,
        blocks,
        index,
        handleAddSection
    } = props;
    return (
        <section className="section">
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
