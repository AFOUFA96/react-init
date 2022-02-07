
import './App.css';
import { useEffect, useState } from "react";
import { GenderService } from "./services/gender.service";
import { Card } from './components/Card';
import { Navbar } from './components/Navbar';
import { CategoryMenu } from './components/CategoryMenu';
import React, {Suspense} from "react";
import LoadingSpinner from './components/LoadingSpinner';
import  CategoryPage  from "./pages/CategoryPage";
import  HomePage  from "./pages/HomePage";
import BaseScreen from './pages/BaseScreen';
import NotFoundScreen from './pages/NotFound';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";


function App() {


  const [genders, setGenders] = useState([]);

  useEffect( () => {
      const fetchData = async () => {
          let service = new GenderService();
          let data = await service.getAll();
          setGenders(data);
      }
      fetchData().catch(console.error);
  }, [])
  function cleanString(input) {
    var output = "";
    for (var i=0; i<input.length; i++) {
        if (input.charCodeAt(i) <= 127) {
            output += input.charAt(i);
        }
    }
    return output;
}

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<BaseScreen />} >
            <Route index  element={
              <Suspense fallback={<LoadingSpinner />}>
                <HomePage />
              </Suspense>}
            />

            {genders.map(gender => {
              return(
                <Route path={cleanString(gender.title)} element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <CategoryPage />
                  </Suspense>}
                /> 
              );
            })};
            
          </Route>
          <Route path ="*"  element={<NotFoundScreen />} />

        </Routes>
      </Router>
      

    </div>
  );
}

export default App;
