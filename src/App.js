import {
  Route,
  Routes }
  from 'react-router-dom';
import Home from "./components/Common/Home";
import Signup from "./components/Login/Signup";
import Dashboard from "./components/List/Dashboard";
import Auth from "./Utilis/Auth";
import All from "./All";
import Add from "./components/Superior/Add";
import User from "./components/Superior/User";
import Edit from "./components/Superior/Edit";
import Signin from './components/Login/Signin';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route element={<Auth/>}>
    
      </Route>
      <Route path='/' element={<Home/>}/>  
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path='/dashboard' element={< Auth Component={Dashboard}/>}/>
      <Route path="/add-user" element={<Auth Component={Add}/>}/>
      <Route path="/user/:id" element={<Auth Component={User}/>}/>
      <Route path="/edit/:id" element={<Auth Component={Edit}/>}/>
      <Route path='/all' element={<Auth Component={All}/>}/>   

      </Routes>
      
    </div>
  );
}

export default App;
