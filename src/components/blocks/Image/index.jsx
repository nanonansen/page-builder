import React, { useMemo, useEffect, useRef } from "react";

const ImageBlock = ({ content }) => {
    const ref = useRef(null);
    useEffect(() => {
        console.log("Headline Use Effect", ref.current);
        ref.current.scrollIntoView({ block: "center", behavior: "smooth" });
    }, [ref]);

    const [{ url }] = content;
    const Image = useMemo(() => {
        console.log("inner render", url);

        return (
            <div ref={ref} className="image">
                <img src={url} alt="" />
            </div>
        );
    }, [url]);
    return Image;
};

export default ImageBlock;
