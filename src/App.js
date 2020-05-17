import React from 'react';
import './App.css';
import Home from "./components/Home"
import Category from "./components/Category.js"
import Products from "./components/Products"
import Login from "./components/login"
import Adminarea from './components/adminarea'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Switch } from 'react-router-dom';



function App() {
    return (
      <div>
        <nav class="navbar navbar-light bg-light">
        <form class="form-inline">
          <ul className="navbar-nav mr-auto">
            <li><Link to="/routerApp">Home</Link></li>
            <li><Link to="/routerApp/category">Category</Link></li>
            <li><Link to="/routerApp/products">Products</Link></li>
            <li><Link to="/routerApp/login">Admin area</Link></li>          
          </ul>
          </form>
         </nav>
          <Switch>
           <Route exact path="/routerApp" component={Home}/>
           <Route path="/routerApp/category" component={Category}/>
           <Route path="/routerApp/products" component={Products}/>
           <Route path="/routerApp/login" component={Login}/>
           <Route path="/admin" component={Adminarea}/>
           </Switch>
      </div>
    )
  }


export default App;
