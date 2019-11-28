import React from "react";
import { SortableContainer } from "react-sortable-hoc";

import Button from "../elements/Button";
import SideBarItem from "../SidebarItem";
import Icon from "../elements/Icon";

const Sidebar = SortableContainer(props => {
    const {
        handleSidebarState,
        sidebarActive,
        handleRemoveSection,
        items
    } = props;
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
                    {items.map((item, index) => (
                        <SideBarItem
                            key={item.id}
                            index={index}
                            value={item}
                            className=""
                            handleRemoveSection={handleRemoveSection}
                            disabled={items.length > 1 ? false : true}
                            lockToContainerEdges={true}
                        />
                    ))}
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
});

export default Sidebar;
