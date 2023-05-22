import React from 'react';
import Formulario from '../Formulario';
import './style.scss';
import menino from './menino.jpeg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './ListUser';


 function App() {

  return (
    <Router> 

     {/* <Link to="/ListUser">About</Link>
     <Route path="/about" component={About} /> */}

       <div className="App">
        <div className='coluna-50'>
          <img src={menino}/>
        </div>
        <div className='coluna-50'>
          
          <Formulario />
         
        </div> 
    </div>
    </Router>
   
  );
}

export default App;
