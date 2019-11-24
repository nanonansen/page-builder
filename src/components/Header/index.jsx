import React from "react";
import Button from "../elements/Button";
import UserAvatar from "../elements/UserAvatar";
import Icon from "../elements/Icon";

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <Button>
          <Icon type={"undo"}></Icon>
        </Button>
        <Button>View</Button>
      </div>
      <div className="header__right">
        <div className="users">
          <UserAvatar url={"https://randomuser.me/api/portraits/men/2.jpg"} />
          <UserAvatar
            url={"https://randomuser.me/api/portraits/women/40.jpg"}
          />
        </div>
        <Button className="">
          <Icon type={"preview"}></Icon>
        </Button>
        <Button className="primary">Publish</Button>
      </div>
    </header>
  );
};

export default Header;
