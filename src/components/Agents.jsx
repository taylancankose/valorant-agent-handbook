import React, { useContext, useEffect } from 'react'
import ValorantContext from '../context/ValorantContext'
import Agent from './Agent'

function Agents() {
const {getAgents, agents} = useContext(ValorantContext)

useEffect(() => {
    getAgents()
  }, [])

  return (
    <div>
        {console.log(agents)}
        {
            agents.map((agent) => {
              return  <Agent agent={agent} key={agent.uuid} />
            })
        }
    </div>
  )
}

export default Agents