import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, Gallery, Explore, Artists } from './pages';
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/explore" element={<Explore />} />
          </Routes>
      </Router>
    </main>
  );
};

export default App;
