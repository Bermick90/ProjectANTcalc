import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Layoutw from './components/Layoutw';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layoutw />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
