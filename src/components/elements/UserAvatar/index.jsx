import React from "react";

const UserAvatar = props => {
  const { url } = props;
  return (
    <div className="user_avatar">
      <div className="user_avatar__image">
        <img src={url} alt="" />
      </div>
    </div>
  );
};

export default UserAvatar;
