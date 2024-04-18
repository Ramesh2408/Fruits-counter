import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count: 0}
  onMango = () => {
    this.setState(prevState => {
      console.log(`previous state ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }
  state = {count: 0}
  onBanana = () => {
    this.setState(prevState => {
      console.log(`previous state ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }
   
  render() {
    const {count} = this.state
  
    return (
      <div className="bg-container">
        <h1 className="heading">
          Bob ate {count} mangoes {count} bananas
        </h1>
        <div className="card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/mango-img.png" alt="mango"
            className="image"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/banana-img.png" alt="banana"
            className="image"
          />
        </div>
        <div className="container">
          <button className="button" onClick={this.onMango}>
            {' '}
            Eat Mango{' '}
          </button>
          <button className="button" onClick={this.onBanana}>
            {' '}
            Eat Banana{' '}
          </button>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
