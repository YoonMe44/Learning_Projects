import React from 'react'
import Person from './Person'

function NameList() {
    // const names = ['Bruce','Clark','Diana']
    // const nameList = names.map(name => <h2>{name}</h2>) // third way

    // fourth way
    const persons =[
    {
        id: 1,
        name: 'Bruce',
        age: 30,
        skill: 'React'
    },
    {
        id: 2,
        name: 'Clark',
        age: 25,
        skill: 'Angular'
    },
    {
        id: 3,
        name: 'Diana',
        age: 28,
        skill: 'Vue'
    }
    ]
    const personList = persons.map(person =>
      <Person person={person}/>
    ) // fourth way
  return (
    // first way

    // <div>
    //     <h2>{names[0]}</h2>
    //     <h2>{names[1]}</h2>
    //     <h2>{names[2]}</h2>
    // </div>

    // second way

    // <div>
    //     {
    //         names.map(name => <h2>{name}</h2>)
    //     }
    // </div>

    // third way

    // <div> {nameList} </div>

    // fourth way

    <div> {personList} </div>
  )
}

export default NameList