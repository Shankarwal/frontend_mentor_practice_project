import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";
import ProgressCircle from "./components/ProgressCircle";
import Accordion from "./components/Accordion";
import QrCode from "./components/QrCode";
import PerformanceCard from "./components/PerformanceCard";

function App() {
  return (
    <main>
      <PerformanceCard />
      <div>
        <h1>Challenge by</h1> &nbsp;
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor &nbsp;
        </a>
        Coded by &nbsp;
        <a href="https://github.com/Shankarwal" target="_blank">
          Sandeep Kumar
        </a>
      </div>
    </main>
  );
}

export default App;
