import React, { useState } from "react";

function Collapsible({ title, content }) {
  const [isActive, setIsActive] = useState(false);

  const toggleCollapsible = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="CollapseContainer">
      <button
        className={`Collapsible ${isActive ? "Active" : ""}`}
        onClick={toggleCollapsible}
      >
        <p>{title}</p>
        <span>
          <i className="fa-solid fa-chevron-down"></i>
        </span>
      </button>
      <div
        className="Content"
        style={{
          maxHeight: isActive ? "1000px" : "0",
          overflow: "hidden",
        }}
      >
        {content &&
          (Array.isArray(content) ? (
            content.map((item, index) => <p key={index}>{item}</p>)
          ) : (
            <p>{content}</p>
          ))}
      </div>
    </div>
  );
}

export default Collapsible;
