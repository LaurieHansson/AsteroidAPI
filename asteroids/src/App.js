

import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap'
import Footer from './components/Footer'
import Astronaut from './components/Astronaut'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      asteroids:[],
    }
  }
  //NASA KEY_key=nQmTVq7ATi6vFEBoeAaUFg78JFLjVJsKOAqA6Bk9
    componentDidMount(){
      // this.getAsteroid();
    }
  getAsteroid(){
    fetch("https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=nQmTVq7ATi6vFEBoeAaUFg78JFLjVJsKOAqA6Bk9")
    .then( res=>res.json())
    .then(json => {
      this.setState({
          asteroids:json.near_earth_objects["2015-09-08"]
          
        })
        console.log(this.state.asteroids)
      });
    }
    
    handleAsteroids(){
      this.getAsteroid();
      console.log('finding asteroids')
    }
    renderAsteroids() {
      const {asteroids} = this.state;
      if (asteroids.length) {
        return asteroids.map((obj, key) => {
          return  <ul key={key}> 
          <li>Name: {obj.name}</li>
          <li> Magnitude:{obj.absolute_magnitude_h}</li>
          <li> Orbiting Body:{obj.close_approach_data[0].orbiting_body} </li>
     </ul>   
      })

    }
  }

render() {
  return (
    <div className="App"> 
    <div className="headline">
    <Astronaut/>
    <Jumbotron>
    <h1> NASA Asteroid Generator! </h1>
    <button onClick={() => this.handleAsteroids()}>
    FIND ME AN ASTEROID! 
    </button>
    <h3> {this.renderAsteroids()} </h3>
   <button onClick={() => this.setState.asteroids}> 
   </button>
    </Jumbotron>
  </div>
    <Footer />
    </div>
  );
}
}

export default App;
