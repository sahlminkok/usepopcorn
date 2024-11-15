import React, { useState } from "react";
import PropTypes from "prop-types";

const TextExpander = ({
  children,
  collapsedNumWords = 15,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  className = "",
  buttonColor = "blue",
  expanded = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  function handleExpand() {
    setIsExpanded((prev) => !prev);
  }

  const collapsedText = children
    .split(" ")
    .slice(0, collapsedNumWords)
    .join(" ");

  const buttonStyle = {
    color: buttonColor,
    textDecoration: "underline",
    cursor: "pointer",
  };

  return (
    <div className={className}>
      <span>{isExpanded ? children : `${collapsedText}...`}</span>{" "}
      <span role="button" onClick={handleExpand} style={buttonStyle}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </span>
    </div>
  );
};

TextExpander.propTypes = {
  children: PropTypes.string.isRequired,
  collapsedNumWords: PropTypes.number,
  expandButtonText: PropTypes.string,
  collapseButtonText: PropTypes.string,
  className: PropTypes.string,
  buttonColor: PropTypes.string,
  expanded: PropTypes.bool,
};

export default TextExpander;
