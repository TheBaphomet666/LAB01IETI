import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoApp} from './TodoApp';

class App extends Component {
  render() {
    return (
                <div className="App">
                    <header>
                         <img src={logo} className="App-logo" alt="logo" />
                    </header>
                    <body>
                        <TodoApp/>

                    </body>
                </div>

            );
  }
}

export default App;
