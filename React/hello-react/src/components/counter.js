import React, { Component } from 'react'

class counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    // increment(){
    //     this.setState(
    //     {
    //         count:this.state.count +1
    //     },
    //     () => {
    //         console.log('Callback value', this.state.count)
    //     }
    //     )
    //     // console.log(this.state.count);
    // }
    // decrease(){
    //     this.setState({
    //         count:this.state.count -1
    //     },
    //     () => {
    //         console.log('Callback value', this.state.count)
    //     }
    //     )
    // }
    increment(){
        this.setState((prevState ,props) => ({
            count: prevState.count + 1 
        }))
        console.log(this.state.count)
    }
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    
  render() {
    return (
      <div>
        <div>COUNT = {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.incrementFive()}>Increment5</button>
        <button onClick={() => this.decrease()}>Decrease</button>
      </div>
    )
  }
}

export default counter