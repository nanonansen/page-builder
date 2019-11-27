import React from "react";

const ModuleSelector = ({ isActive, blocks, handleAddSection, index }) => {
    return (
        <div
            className={
                isActive
                    ? "module_selector module_selector--active"
                    : "module_selector"
            }
        >
            {blocks.map((block, i) => (
                <div key={i} className="module_selector__item">
                    <button onClick={() => handleAddSection(index, block.id)}>
                        {block.name}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ModuleSelector;
