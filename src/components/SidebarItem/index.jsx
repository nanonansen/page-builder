import React from "react";
import classNames from "classnames";

const SideBarItem = props => {
  const { className, handleRemoveSection, data } = props;
  console.log("SideBarItem", data);

  return (
    <div className={classNames("sidebar__item", className)}>
      <div>{data.name}</div>
      <button onClick={() => handleRemoveSection(data.id)}>remove</button>
    </div>
  );
};

export default SideBarItem;
