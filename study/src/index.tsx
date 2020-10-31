import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

interface State {
  date: Date
}

class Clock extends React.Component<{}, State> {
  timerID: NodeJS.Timeout | undefined

  constructor(props: {}){
    super(props)
    this.state = {date: new Date()}
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
      </div>
    )
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);


