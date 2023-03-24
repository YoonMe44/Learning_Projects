import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: true
        }
    }
  render() {
    // =>fourth Way
    return this.state.isLoggedIn && <div>Welcome MyRoom</div>

    // =>third Way
    // return(
    //     this.state.isLoggedIn ?(
    //     <div>Welcome MyRoom</div>
    //     ) : (
    //     <div>Welcome Guest</div> 
    //     )
    // )

    // =>second Way

    // let message
    //   if(this.state.isLoggedIn){
    //     message = <div>Welcome MyRoom</div>
    // }else{
    //     message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>

    // =>first Way

    // if(this.state.isLoggedIn){
    //     return(
    //         <div>
    //             Welcome MyRoom
    //         </div>
    //     )
    // }else{
    //     return(
    //         <div>
    //             Welcome Guest
    //         </div>
    //     )
    // }
  }
}

export default UserGreeting