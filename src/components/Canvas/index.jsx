import React from "react";
import Button from "../elements/Button";
import Icon from "../elements/Icon";
import Section from "../Section";
import ModuleSelector from "../ModuleSelector";
import BlockRenderer from "../BlockRenderer";

const Canvas = ({
  sidebarActive,
  data,
  blocks,
  handleAddSection,
  handleRemoveSection,
  handleModuleSelector,
  moduleSelectorId
}) => {
  console.log("blocks", blocks);

  return (
    <div
      className={
        sidebarActive ? "canvas-wrapper with-sidebar" : "canvas-wrapper"
      }
    >
      <div className="canvas">
        {data &&
          data.map((section, index) => (
            <Section key={index}>
              {/* {JSON.stringify(section)} */}
              <BlockRenderer
                blocktype={section.name}
                content={section.content}
              />
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
              </div>
              {/* <button onClick={() => handleRemoveSection(section.id)}>
                Remove Section
              </button> */}
              <ModuleSelector
                isActive={moduleSelectorId === section.id}
                blocks={blocks}
                sectionId={section.id}
                index={index}
                handleAddSection={handleAddSection}
              />
            </Section>
          ))}
      </div>
    </div>
  );
};

export default Canvas;
