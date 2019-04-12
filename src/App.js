import React, { Component } from 'react';
import 'react-router';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import './App.css';
import PetDisplay from './components/PetDisplay/PetDisplay';
import AddNewPet from './components/AddNewPet/AddNewPet';
import PetDetails from './components/PetDetails/PetDetails';
import UpdatePetDetails from './components/UpdatePetDetails/UpdatePetDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Pet Shelter</h1>
      <BrowserRouter>
      <div className='navigation'>
      <Switch>
      <Route exact path='/' render={() => <Redirect to="/pets"/>}/>
      <Route path='/pets/edit/:id' component={UpdatePetDetails}/>
      <Route path='/pets/new' component={AddNewPet}/>
      <Route path='/pets/:id' component={PetDetails}/>
      <Route path='/pets' component={PetDisplay}/>
      </Switch>
      </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
