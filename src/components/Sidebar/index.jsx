import React from "react";
import Button from "../elements/Button";
import SideBarItem from "../SidebarItem";
import Icon from "../elements/Icon";

const Sidebar = ({
  handleSidebarState,
  sidebarActive,
  data,
  handleAddSection,
  handleRemoveSection
}) => {
  return (
    <div className="sidebar">
      <div
        className={
          sidebarActive
            ? "sidebar__content sidebar__content--active"
            : "sidebar__content"
        }
      >
        <div className="sidebar__items">
          {data &&
            Object.keys(data).map((item, index) => (
              <SideBarItem
                key={index}
                className=""
                handleRemoveSection={handleRemoveSection}
                id={data[item].id}
              />
            ))}
          <div>
            <button onClick={() => handleAddSection()}>Add Item</button>
          </div>
        </div>
      </div>
      <div className="sidebar__footer">
        <Button onClick={() => handleSidebarState()}>
          <Icon
            className={sidebarActive ? "icn--active" : null}
            type={"sidebar"}
          ></Icon>
        </Button>
        <Button>
          <Icon type={"settings"}></Icon>
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
