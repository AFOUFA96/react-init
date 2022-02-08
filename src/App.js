import './App.css';
import { useEffect, useState } from "react";
import { GenderService } from "./services/gender.service";
import { CategoryService } from "./services/Category.service";
import {BrowserRouter as Router, Switch, Route, Routes, Link} from "react-router-dom";
import React, {Suspense} from "react";
import LoadingSpinner from './components/LoadingSpinner';
import BaseScreen from './pages/BaseScreen' ;
const  CategoryPage = React.lazy(() =>   import("./pages/CategoryPage")) ;
const  ProductPage = React.lazy(() =>   import("./pages/ProductPage")) ;
const  HomePage = React.lazy(() =>   import("./pages/HomePage"));
// const NotFoundScreen = React.lazy(() =>   import('./pages/NotFound'));
// const Test = React.lazy(() =>   import('./pages/Test')) ;

function App() {


  const [genders, setGenders] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect( () => {
      const fetchData = async () => {
          let service = new GenderService();
          let data = await service.getAll();
          setGenders(data);
      }
      fetchData().catch(console.error);
  }, []);

  useEffect( () => {
    const fetchData = async () => {
        let service = new CategoryService();
        let data = await service.getAll();
        setCategories(data);
    }
    fetchData().catch(console.error);
}, [])

  

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
                <Route path={gender.title} element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <CategoryPage gender = {gender.title}/>
                  </Suspense>}

                  
                /> 
              );
            })};

            {/* {genders.map(category => {
              return(
                <Route path={category.title} element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <ProductPage gender = {gender.title}/>
                  </Suspense>}
                /> 
              );
            })}; */}
            
          </Route>
          {/* <Route path ="*"  element={<NotFoundScreen />} /> */}
          {/* <Route path ="/test"  element={<Test />} /> */}
        </Routes>
      </Router>
      

    </div>
  );
}

export default App;
