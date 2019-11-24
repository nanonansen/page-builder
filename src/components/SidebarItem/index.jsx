import React from "react";
import classNames from "classnames";

const SideBarItem = props => {
  const { className } = props;
  return (
    <div className={classNames("sidebar__item", className)}>
      <div>Sidebar Item</div>
    </div>
  );
};

export default SideBarItem;
