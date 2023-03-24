import React from 'react'

// function Greet(){
//     return <h1>Hello Everyone!</h1>
// }
// export const Greet = (props) => {
//     console.log(props)
//     return(
//         <div>
//             <h1>
//                 Hello {props.name} a.k.a {props.heroname}!This is Function Component
//             </h1>
//             {props.children}
//         </div>
//     ) 
// }

// export default Greet

export const Greet = props => {
    const {name, heroname} = props
    console.log(props)
    return(
        <div>
            <h1>
                Hello {name} a.k.a {heroname}!This is Function Component
            </h1>
            {props.children}
        </div>
    )
}