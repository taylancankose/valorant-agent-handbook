import React from 'react'

function Agent({agent}) {
   
  const {displayName,description, displayIcon,isPlayableCharacter} = agent
 
  return (
      <>
      {
        isPlayableCharacter && <div>{displayName} <img src={displayIcon} width={"60px"} /></div>  
      }
    </>
  )
}

export default Agent