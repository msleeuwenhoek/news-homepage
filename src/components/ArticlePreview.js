import React from "react";

export default function popularSection({ img, position, header, txt }) {
  return (
    <div>
      <div className="article-preview-grid">
        <div
          style={{
            backgroundImage: `url(${require(`../images/${img}`)})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="article-preview-content">
          <div className="large-text bold-text text-lighter-gray">
            {position}
          </div>
          <h3 className="text-dark ">{header}</h3>
          <p>{txt}</p>
        </div>
      </div>
    </div>
  );
}
