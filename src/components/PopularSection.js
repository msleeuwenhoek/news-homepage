import React from "react";

export default function popularSection() {
  return (
    <div className="PopularSection">
      <div>
        <img src={require("../images/image-retro-pcs.jpg")} />
        <div>01</div>
        <h4 className="text-dark">Hydrogen VS Electric Cars</h4>
        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
      </div>
      <div>
        <img src={require("../images/image-top-laptops.jpg")} />
        <div>02</div>
        <h4 className="text-dark">The Downsides of AI Artistry</h4>
        <p>
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
      </div>
      <div>
        <img src={require("../images/image-gaming-growth.jpg")} />
        <div>03</div>
        <h4 className="text-dark">Is VC Funding Drying Up?</h4>
        <p>
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </div>
  );
}
