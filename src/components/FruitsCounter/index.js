import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  mangoAte = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  bananaAte = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="bgMain">
        <div className="cardContainer">
          <h1 className="heading">
            Bob ate <spam className="counting"> {mango} </spam> mangoes{' '}
            <spam className="counting"> {banana} </spam> bananas
          </h1>
          <div className="bigScreens">
            <div className="mangoContainer">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button
                className="eatButton"
                type="button"
                onClick={this.mangoAte}
              >
                Eat Mango
              </button>
            </div>
            <div className="bananaContainer">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button
                className="eatButton"
                type="button"
                onClick={this.bananaAte}
              >
                Eat banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
