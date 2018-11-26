import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="menu">
          {/* logo created at https://fontmeme.com/netflix-font/ */}
          <img className="logo" src="https://fontmeme.com/permalink/181125/c9709e8b1ab7623513cd9eaa0e49380a.png" alt="Adam Robinson" border="0" />
        </div>
        <div id="top">
          <video autoPlay loop id="video-background" muted>
            <source src="./media/typing2.mp4" type="video/mp4" />
          </video>
          <div id="topInfo">
            {/* logo created at https://fontmeme.com/netflix-font/ */}
            <img className="logo" src="https://fontmeme.com/permalink/181125/c9709e8b1ab7623513cd9eaa0e49380a.png" alt="Adam Robinson" border="0"/>
            <h3>913.787.6177</h3>
            <h3>ajrobin@me.com</h3>
          </div>
        </div>

        <div id="body">
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
        </div>
      </div>
    );
  }
}

export default App;
