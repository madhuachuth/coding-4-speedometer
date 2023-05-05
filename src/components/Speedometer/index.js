// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAccelerate = () => {
    const {count} = this.state
    if (count < 200) this.setState(preState => ({count: preState.count + 10}))
  }

  onBrake = () => {
    const {count} = this.state
    if (count > 0) this.setState(preState => ({count: preState.count - 10}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="Speedometer"
          className="speed-image"
        />
        <h1 className="description">Speedometer is {count} mph</h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-container">
          <button type="button" className="button" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button type="button" className="button-tran" onClick={this.onBrake}>
            Apply Breaks
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
