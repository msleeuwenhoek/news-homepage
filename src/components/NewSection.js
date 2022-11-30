import React from "react";

export default function newSection() {
  return (
    <div className="NewSection padding-medium bg-dark">
      <h2 className="text-orange">New</h2>
      <div className="new-grid">
        <div>
          <h3 className="text-white">Hydrogen VS Electric Cars</h3>
          <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        </div>
        <hr />
        <div>
          <h3 className="text-white">The Downsides of AI Artistry</h3>
          <p>
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </div>
        <hr />
        <div>
          <h3 className="text-white">Is VC Funding Drying Up?</h3>
          <p>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    </div>
  );
}
