import React from "react";

import { MdContentCopy } from "react-icons/md";

import "./CodeViewer.css";

const CodeViewer = ({ code }) => {
  const copyToClipBoard = () => {
    console.log("Clicked");
    var copyText = document.getElementById("code");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
  };
  
  return (
    <div className="code-container">
      <div className="code-container-header">
        <div className="code-container-nav">
          <div className="code-container-nav-button red"></div>
          <div className="code-container-nav-button orange"></div>
          <div className="code-container-nav-button green"></div>
        </div>
        <div className="code-container-nav-right">
          <div
            className="code-container-clipboard"
            onClick={() => copyToClipBoard}
          >
            <MdContentCopy />
          </div>
          <div className="code-container-description">Code</div>
        </div>
      </div>
      <div className="code-container-code">
        <code id="code">{code}</code>
      </div>
    </div>
  );
};

export default CodeViewer;
