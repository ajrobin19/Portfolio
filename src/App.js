import React, { Component } from 'react';
import './App.css';

class App extends Component {

  componentDidMount(){
    window.addEventListener('scroll', (e => this.changeMenuBackground(e)))
  }

  changeMenuBackground = (e) => {
    var menu = document.getElementById('menu')

    if(e.path[1].pageYOffset > 5 && menu.style.backgroundColor === 'transparent'){
      menu.animate([{'background': 'transparent'},{'background': '#141414'}],1000)
      menu.style.backgroundColor = '#141414'
    }else if(e.path[1].pageYOffset <= 5 && menu.style.backgroundColor === 'rgb(20, 20, 20)'){
      menu.animate([{'background': '#141414'},{'background': 'transparent'}],1000)
      menu.style.backgroundColor = 'transparent'
    }
  }

  render() {
    return (
      <div className="App">
        <div id="menu" style={{backgroundColor: "transparent"}}>
          {/* logo created at https://fontmeme.com/netflix-font/ */}
          <img className="logo" src="https://fontmeme.com/permalink/181125/c9709e8b1ab7623513cd9eaa0e49380a.png" alt="Adam Robinson" border="0" />
        </div>
        
        <div id="top">
          <video autoPlay loop id="video-background" muted>
            <source src="./media/typing2.mp4" type="video/mp4" />
          </video>
          <div id="topInfo">
            {/* logo created at https://fontmeme.com/netflix-font/ */}
            <img className="logo" src="https://fontmeme.com/permalink/181126/cbf24e9b3b5197af144d027024b12993.png" alt="Adam Robinson" border="0"/>
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
