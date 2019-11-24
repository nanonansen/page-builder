import React from "react";
import classNames from "classnames";

const SideBarItem = props => {
  const { className, handleRemoveSection, id } = props;
  return (
    <div className={classNames("sidebar__item", className)}>
      <div>Sidebar Item: {id}</div>
      <button onClick={() => handleRemoveSection(id)}>remove</button>
    </div>
  );
};

export default SideBarItem;
