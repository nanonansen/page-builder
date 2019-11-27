import React, { useEffect, useRef } from "react";

const BlockHeadline = ({ content }) => {
    const ref = useRef(null);
    useEffect(() => {
        console.log("Headline Use Effect", ref.current);
        ref.current.scrollIntoView({ block: "center", behavior: "smooth" });
    }, [ref]);
    return (
        <div ref={ref}>
            <h2 className="heading-2">{content[0].text}</h2>
        </div>
    );
};

export default BlockHeadline;
