import "./App.css";
import Hero from "./components/Hero.js";
import About from "./components/About.js";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
