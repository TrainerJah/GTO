import './App.css';
import React, {useState} from 'react';
import TrainerList from './components/TrainerList';
import TrainerForm from './components/TrainerForm';
import OneTrainer from './components/OneTrainer';
import UpdateForm from './components/UpdateForm';
import Home from './components/Home';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logoGTO from './logoGTO.png'
function App() {
  const [trainers, setTrainers] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <h2>Go Trainer Office</h2>
        <img src={logoGTO} alt="GTO Logo" /><br/><br/><br/>
        <Link className="Adding" to={`/trainer/add`}>Add FriendCode</Link><br/><br/><br/>
        <Routes>
          <Route element={<Home/>} path="/" />
          <Route element={<TrainerList/>} path="/trainers" trainers={trainers} setTrainers={setTrainers}/>
          <Route element={<TrainerForm/>} path="/trainer/add" trainers={trainers} setTrainers={setTrainers}/>
          <Route element={<OneTrainer/>} path="/trainer/:id" trainers={trainers} setTrainers={setTrainers}/>

          <Route element={<UpdateForm/>} path="/trainer/edit/:id" />
        </Routes><br/><br/><br/>
        <TrainerList path="/trainers" trainers={trainers} setTrainers={setTrainers}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
