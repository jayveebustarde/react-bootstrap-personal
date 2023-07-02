import './styles/custom.scss';
import './App.css';
import React from "react";
import Layout from'./routes/Layout/Layout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './routes/Home/Home';
import Resume from './routes/Resume/Resume';
import Contact from './routes/Contact/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="resume" element={<Resume />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
