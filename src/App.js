import "./App.css";
import Menu from "./components/Menu.js";
import HeadlineSection from "./components/HeadlineSection";
import NewSection from "./components/NewSection";
import PopularSection from "./components/PopularSection";

function App() {
  return (
    <div className="App">
      <Menu />
      <HeadlineSection />
      <NewSection />
      <PopularSection />
    </div>
  );
}

export default App;
