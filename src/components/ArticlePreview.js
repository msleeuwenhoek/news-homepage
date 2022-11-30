import React from "react";

export default function popularSection({ img, position, header, txt }) {
  return (
    <div>
      <div className="article-preview-grid">
        <img src={require(`../images/${img}`)} />
        <div>
          <div>{position}</div>
          <h4 className="text-dark">{header}</h4>
          <p>{txt}</p>
        </div>
      </div>
    </div>
  );
}
