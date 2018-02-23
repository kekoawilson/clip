import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import './App.css'
import logo from './assets/images/clip-logo.jpg'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class App extends Component {
  constructor() {
    super()

    this.state = {
      sports: [
        { id: 'ab123aa', name: 'Baseball' },
        { id: 'ab124aa', name: 'Golf' },
        { id: 'ab125aa', name: 'Hockey' },
        { id: 'ab126bb', name: 'Soccer' },
        { id: 'ab127bb', name: 'Football' },
        { id: 'ab128cc', name: 'Skiing' },
        { id: 'ab129dd', name: 'Ping Pong' },
        { id: 'ab130cc', name: 'Foosball' },
      ],
      emptyStr: "Oh no, you deleted all the sports :("
    }
    this.baseState = this.state
    this.deleteItem = this.deleteItem.bind(this)
  }


  deleteItem(sport) {
    let newArr = []
    this.setState({
      sports: this.state.sports.filter(e => e !== sport)
    })
  }

  resetList = () => {
    this.setState(this.baseState)
  }

  render() {
    const { sports, emptyStr } = this.state
    const displaySports = sports.map((e, i) => {
      return <h4 key={e.id} onClick={() => this.deleteItem(e)} >{i+1} {e.name}</h4>
    })

    return (
      <div className="App">
        <navbar className='logo-box'>
          <a href='https://clip.mx/' target="_blank"><img src={logo} /></a>
          <h2>Assessment</h2>
        </navbar>
        {/* Section One */}
        <h2>Click on your LEAST FAVORITE sports below to delete them until you have three left.</h2>
        {/* Section Two */}
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={200}>
          {displaySports && displaySports[0] ? displaySports : <h3>{emptyStr}</h3>}
        </ReactCSSTransitionGroup>
        {/* Section Three */}
        <Button color='black' onClick={this.resetList} >Reset List</Button>
      </div>
    );
  }
}

export default App;
