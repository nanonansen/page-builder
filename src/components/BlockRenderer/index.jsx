import React from "react";
import Headline from "../blocks/Headline";
import ImageMemo from "../blocks/Image";

const BlockRenderer = ({ blocktype, content }) => {
    switch (blocktype) {
        case "headline":
            return <Headline content={content} />;
        case "image":
            return <ImageMemo content={content} />;
        default:
            return (
                <div>
                    <h2>No matching Component</h2>
                </div>
            );
    }
};

export default BlockRenderer;
