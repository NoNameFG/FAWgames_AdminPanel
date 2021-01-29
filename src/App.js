import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import './App.css';
//Components
import AdminPanel from './Components/AdminPanel/AdminPanel.jsx';
import AddGame from './Components/AddGame/AddGame.jsx';
import Login from './Components/Login/Login.jsx';
import EditGame from './Components/EditGame/EditGame.jsx';
import AddKey from './Components/AddKey/AddKey.jsx';
import AddProduct from './Components/AddProduct/AddProduct.jsx';
import WeeklyCheck from './Components/WeeklyCheck/WeeklyCheck.jsx';
import OverdueProducts from './Components/OverdueProducts/OverdueProducts.jsx';
//Functions
import setAuthHeader from './Functions/setAuthHeader.js';


class App extends React.Component{
  constructor(){
    super();
    if(window.localStorage.auth){
      setAuthHeader(window.localStorage.auth);
    }
  }

  render(){
    return(
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/admin_panel" component={AdminPanel}/>
        <Route path="/admin_panel/add_game" component={AddGame}/>
        <Route path="/admin_panel/edit_game" component={EditGame}/>
        <Route path="/admin_panel/add_product" component={AddProduct}/>
        <Route path="/admin_panel/overdue_products" component={OverdueProducts}/>
        <Route path="/admin_panel/weekly_check" component={WeeklyCheck}/>
        <Route path="/admin_panel/add_key" component={AddKey}/>
      </Switch>
    );
  }
}

export default withRouter(App);
