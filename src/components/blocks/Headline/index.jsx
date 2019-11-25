import React from "react";

const BlockHeadline = ({ content }) => {
  return (
    <div>
      <h2 className="heading-2">{content[0].text}</h2>
    </div>
  );
};

export default BlockHeadline;
