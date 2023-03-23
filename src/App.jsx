import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import NavBar from './Components/NavBar';


function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" component={ItemListContainer} />
          <Route exact path="/category/:id" component={ItemListContainer} />
          <Route exact path="/item/:id" component={ItemDetailContainer} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
