import React from "react";

export default function headlineSection() {
  return (
    <div className="HeadlineSection headline-grid">
      <img src={require("../images/image-web-3-desktop.jpg")} />
      <div>
        <h1 className="text-dark">The Bright Future of Web 3.0?</h1>
      </div>
      <div>
        <p>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button>Read more</button>
      </div>
    </div>
  );
}
