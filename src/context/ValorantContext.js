import { createContext, useState } from "react";
import axios from 'axios';

const ValorantContext = createContext()


export const ValorantProvider = ({children}) => {
    const [agents, setAgents] = useState([])

    const getAgents = async() =>{
        try {
        const response = await axios.get('https://valorant-api.com/v1/agents');
        setAgents(response.data.data)
        } catch (error) {
        console.error(error);
        }
    }

    return <ValorantContext.Provider 
    value={{
        agents,
        getAgents,
    }}
    >
        {children}
    </ValorantContext.Provider>
}

export default ValorantContext