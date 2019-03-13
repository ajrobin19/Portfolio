import React, { Component } from 'react';
import './App.css';
import jsonData from '../src/data/information.json';

class App extends Component {

  constructor (props) {
    super(props)
    this.interval = ''
    this.infoObject= {}
  }

  componentDidMount(){
    window.addEventListener('scroll', (e => this.changeMenuBackground(e)))
    document.addEventListener('mousedown', (e => this.clickDetected(e)))
  }

  clickDetected = (e) => {
    const entries = Object.entries(this.infoObject)

    for (var [id, bool] of entries) {
      if (bool){
        this.infoObject[id] = false;
        
        for (var path of e.path){
          var oldId = path.id.substring(0, path.id.length -4);
          if (id = oldId){
            this.infoObject[id] = true;
            break;
          }
        }
      }
    }
    this.forceUpdate()
  }

  scroll = (direction, id) => {
    var scrollValue

    if (direction === 'left'){
      scrollValue = -1;
    }else{
      scrollValue = 1;
    }

    this.interval = setInterval(function(){
      document.getElementById(id).scrollLeft += scrollValue
    }, 1)
  }

  cancelScroll = () => {
    clearInterval(this.interval)
  }

  showArrows = (id) => {
    document.getElementById(id + 'Left').style.display = 'block';
    document.getElementById(id + 'Right').style.display = 'block';
  }

  hideArrows = (id) => {
    document.getElementById(id + 'Left').style.display = 'none';
    document.getElementById(id + 'Right').style.display = 'none';
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

  makeTrue = (category) => {
    this.infoObject[category] = true;
  }

  makeFalse = (category) => {
    this.infoObject[category] = false;
  }

  showInfo = (category) => {
    if(category === 'portfolio'){
      return this.portfolio;
    } else if (category === 'experience'){
      return this.experience;
    } else if (category === 'education'){
      return this.education;
    }
  }

  render() {
    return (
      <div className="App">
        <div id="menu" style={{backgroundColor: "transparent"}}>
          {/* logo created at https://fontmeme.com/netflix-font/ */}
          <img className="logo" src="./media/redLogo.png" alt="Adam Robinson" border="0" />
        </div>
        
        <div id="top">
          <video autoPlay loop id="video-background" muted>
            <source src="./media/typing2.mp4" type="video/mp4" />
          </video>
          <div id="topInfo">
            {/* logo created at https://fontmeme.com/netflix-font/ */}
            <img className="logo" src="./media/whiteLogo.png" alt="Adam Robinson" border="0"/>
            <h3>913.787.6177</h3>
            <h3>ajrobin@me.com</h3>
          </div>
        </div>

        <div id="bottom">
          {jsonData !== undefined && jsonData.map((category) =>
            <div id={category.name}>
              <h1>{category.name}</h1>
              <div id={category.reference+"section"} className="section" onMouseEnter={e => this.showArrows(category.reference)} onMouseLeave={e => this.hideArrows(category.reference)}>
                <div id={category.reference} className="row">
                  <div id={category.reference+"Left"} className="scrollButton left" onMouseEnter={e => this.scroll('left', category.reference)} onMouseLeave={e => this.cancelScroll()}>
                    <img src="./media/Arrow-Left-icon.png" alt="Left Scroll Button"/>
                  </div>
                  <div id={category.reference+"Right"} className="scrollButton right" onMouseEnter={e => this.scroll('right', category.reference)} onMouseLeave={e => this.cancelScroll()}>
                    <img src="./media/Arrow-Right-icon.png" alt="Left Scroll Button"/>
                  </div>
                  {category.results !== undefined && category.results.map((results) =>
                    <div id={results.reference} className="column" onClick={e => {this.makeTrue(results.reference); document.getElementById(results.reference).scrollIntoView(); this.forceUpdate()}} style={{backgroundColor: results.backgroundColor, backgroundImage: 'url('+results.backgroundImage+')', backgroundSize: results.backgroundSize, backgroundPosition: results.backgroundPosition, backgroundRepeat: 'no-repeat'}}>
                      <p>{results.name}</p>
                    </div>
                  )}
                </div>
              </div>
              {category.results.map((results) =>
                <div>
                {this.infoObject[results.reference] &&
                <div id={results.reference +"info"} className="info" >
                  <div className="exit" onClick={e => {this.makeFalse(results.reference); this.forceUpdate()}}>X</div>
                  {results.url && results.image && <a href={results.url} target="_blank"><img className="degree" src={results.image} alt={results.name +" Degree"} /></a>}
                  {!results.url && results.image && <img className="degree" src={results.image} alt={results.name +" Degree"} />}
                  {results.image2 && <img className="degree2" src={results.image2} alt={results.name +" Degree"} />}
                  {results.name && <h1 style={{marginTop: 0}}>{results.name}</h1>}
                  {results.url && <h3><a href={results.url} target="_blank">{results.url}</a></h3>}
                  {results.duration && <h3>{results.duration}</h3>}
                  <br />
                  <br />
                  {results.degrees && results.degrees.map((deg)=><h4>{deg}</h4>)}
                  {results.position && <h3>{results.position}</h3>}
                  {results.position && results.position.endsWith("Teacher") && <h4>As a teacher at this school...</h4>}
                  {results.position && !results.position.endsWith("Teacher") && <h4>As an employee at this company...</h4>}
                  {results.points && results.points.map((point)=><h4><li>{point}</li></h4>)}
                  <br />
                  <br />
                  {results.comments && <p>{results.comments}</p>}
                </div>
              }
              </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
