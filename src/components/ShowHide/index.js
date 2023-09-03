/* eslint-disable react/button-has-type */
// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    btn1: false,
    btn2: false,
  }

  btn1Clicked = () => {
    this.setState(prevState => {
      if (prevState.btn1 === false) {
        return {btn1: true}
      }
      return {btn1: false}
    })
  }

  btn2Clicked = () => {
    this.setState(prevState => {
      if (prevState.btn2 === false) {
        return {btn2: true}
      }
      return {btn2: false}
    })
  }

  render() {
    const {btn1, btn2} = this.state
    return (
      <div className="page">
        <h1 className="heading">Show/Hide</h1>
        <div className="flex-items-container">
          <div className="flex-item">
            <button onClick={this.btn1Clicked}>Show/Hide Firstname</button>
            {btn1 ? <p className="name">Joe</p> : null}
          </div>
          <div className="flex-item">
            <button onClick={this.btn2Clicked}>Show/Hide Lastname</button>
            {btn2 ? <p className="name">Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
