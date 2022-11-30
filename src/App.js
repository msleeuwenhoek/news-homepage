import "./App.scss";
import Menu from "./components/Menu.js";
import HeadlineSection from "./components/HeadlineSection";
import NewSection from "./components/NewSection";
import ArticlePreview from "./components/ArticlePreview";

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="section content-grid">
        <HeadlineSection />
        <NewSection />
      </div>
      <div className="content-grid section">
        <ArticlePreview
          img="image-retro-pcs.jpg"
          position="01"
          header="Hydrogen VS Electric Cars"
          txt="Will hydrogen-fueled cars ever catch up to EVs?"
        />
        <ArticlePreview
          img="image-top-laptops.jpg"
          position="02"
          header="The Downsides of AI Artistry"
          txt="What are the possible adverse effects of on-demand AI image generation?"
        />
        <ArticlePreview
          img="image-gaming-growth.jpg"
          position="03"
          header="Is VC Funding Drying Up?"
          txt="Private funding by VC firms is down 50% YOY. We take a look at what that
          means."
        />
      </div>
    </div>
  );
}

export default App;
