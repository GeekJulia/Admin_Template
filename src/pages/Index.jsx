import React, { useState } from 'react'

export default function Index() {
      const[color, setColor] = useState("red");
  return (
    <>
        <h1>My favorite color is {color}!</h1>
        <button
        type = "button"
        onClick = {() => setColor("blue")}>Blue</button>
        <button
        type = "button"
        onClick = {() => setColor("red")}>Red</button>
        <button
        type = "button"
        onClick = {() => setColor("green")}>Green</button>
        <button
        type = "button"
        onClick = {() => setColor("yellow")}>Yellow</button>
    </>
  )
}
