import React from "react";
import classNames from "classnames";

import { SortableElement } from "react-sortable-hoc";

const SideBarItem = SortableElement(props => {
    const { className, handleRemoveSection, id, value } = props;
    return (
        <div className={classNames("sidebar__item", className)}>
            <div>{value.name}</div>
            <button onClick={() => handleRemoveSection(id)}>remove</button>
        </div>
    );
});

export default SideBarItem;
