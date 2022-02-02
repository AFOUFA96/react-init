
import './App.css';

import { Card } from './components/Card';
import { Navbar } from './components/Navbar';
import { CategoryMenu } from './components/CategoryMenu';
import React from "react";
import { CategoryPage } from "./pages/CategoryPage"
import { HomePage } from "./pages/HomePage"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category" element={<CategoryPage />} />
        </Routes>
      </Router>
      

    </div>
  );
}

export default App;
