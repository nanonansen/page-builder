import React from "react";

const ImageBlock = ({ content }) => {
  return (
    <div>
      <img src={content[0].url} alt="" />
    </div>
  );
};

export default ImageBlock;
