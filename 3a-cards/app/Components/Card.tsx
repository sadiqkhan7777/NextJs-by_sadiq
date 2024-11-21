import React from "react"

interface Tprops {
  name:string,
  rollno:number
  day:string,
}

const Card = (props:Tprops) => {
  return (
    <div>
    <h1>Name:{props.name}</h1>
    <h1>RollNo:{props.rollno}</h1>
    <h1>Day:{props.day}</h1>
    </div>
  )
}

export default Card



