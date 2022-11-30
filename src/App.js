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
          header="Reviving Retro PCs"
          txt="What happens when old PCs are given modern upgrades?"
        />
        <ArticlePreview
          img="image-top-laptops.jpg"
          position="02"
          header="Top 10 Laptops of 2022"
          txt="Our best picks for various needs and budgets."
        />
        <ArticlePreview
          img="image-gaming-growth.jpg"
          position="03"
          header="The Growth of Gaming"
          txt="How the pandemic has sparked fresh opportunities."
        />
      </div>
    </div>
  );
}

export default App;
