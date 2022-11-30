import React from "react";

export default function newSection() {
  return (
    <div className="NewSection padding-medium bg-dark">
      <div className="new-grid">
        <h2 className="text-orange large-text">New</h2>

        <div class="new-item">
          <h3 className="text-white padding-block-m">
            Hydrogen VS Electric Cars
          </h3>
          <p className="text-lighter-gray">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </div>

        <div class="new-item" data-item-type="middle-item">
          <h3 className="text-white padding-block-m">
            The Downsides of AI Artistry
          </h3>
          <p className="text-lighter-gray">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </div>
        <div class="new-item">
          <h3 className="text-white padding-block-m">
            Is VC Funding Drying Up?
          </h3>
          <p className="text-lighter-gray">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    </div>
  );
}
