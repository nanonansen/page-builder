import React from "react";
import Button from "../elements/Button";
import Icon from "../elements/Icon";
import Section from "../Section";

const Canvas = ({
  sidebarActive,
  data,
  handleAddSection,
  handleRemoveSection
}) => {
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
              {`Section - ${section.name}`}
              <div className="section__footer">
                <Button
                  className="primary rounded large"
                  onClick={() => handleAddSection(index)}
                >
                  <Icon type={"add"}></Icon>
                </Button>
              </div>

              {/* <button onClick={() => handleRemoveSection(section.id)}>
                Remove Section
              </button> */}
            </Section>
          ))}
      </div>
    </div>
  );
};

export default Canvas;
