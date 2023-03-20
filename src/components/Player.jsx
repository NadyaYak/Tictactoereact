import React from 'react'

function Player(props) {
  return (
    <div className="play">
    <h2>Player {props.whichPlayer} </h2>
    <h3> Wins: {props.score} </h3>
    </div>
  )
}

export default Player;