import React from "react";
import Button from "../elements/Button";
import SideBarItem from "../SidebarItem";
import Icon from "../elements/Icon";

const Sidebar = ({ handleSidebarState, sidebarActive }) => {
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
          <SideBarItem className="sidebar__item--active " />
          <SideBarItem className="" />
          <SideBarItem className="" />
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
