import React from 'react'

const Hello = () =>{
    // return(
    //     <div class="dummy">
    //         <h1>Hello Guys!!</h1>
    //     </div>
    // )
    return React.createElement('div',{id: 'hello', className:'dummy'}, 
    React.createElement('h1', null, 'Hello Guys!!'))
}

export default Hello