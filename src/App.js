import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hero, Property } from "./components";
import Properties from "./pages/Properties";
import About from "./pages/About";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={"/"} element={<Hero />} />
          <Route path={"/Properties"} element={<Properties />} />
          <Route path={"/About"} element={<About />} />
          <Route path={"/Property"} element={<Property />} />
          <Route path={"/Profile"} element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
