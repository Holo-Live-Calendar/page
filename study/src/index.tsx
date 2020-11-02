import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

interface State {
  date: Date
  isToggleOn: boolean
}

class Clock extends React.Component<{}, State> {
  timerID: NodeJS.Timeout | undefined

  constructor(props: {}){
    super(props)
    this.state = {
      date: new Date(),
      isToggleOn: true
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    if(this.timerID !== undefined){
      clearInterval(this.timerID)
    }
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }))
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    )
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);


