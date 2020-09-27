import React, { createContext, useState } from 'react';

export const TrackerContext = createContext();

const TrackerProivider = (props) => {
    const [currency, setCurrency] = useState('NZD')
    const [darkTheme, setDarkTheme] = useState(true)
    const [selectedID, setSelectedID] = useState('')
    const [header, setHeader] = useState(null)
    const [time, setTime] = useState('month')
    const [search, setSearch] = useState("")
    const [currentInfo, setCurrentInfo] = useState(null)
    const changeScene = props.changeScene

    return (
        <TrackerContext.Provider value={{
            currency, setCurrency,
            darkTheme, setDarkTheme,
            selectedID, setSelectedID,
            header, setHeader,
            search, setSearch,
            time, setTime,
            currentInfo, setCurrentInfo,
            changeScene,
        }}>
            {props.children}
        </TrackerContext.Provider>
    )
}

export default TrackerProivider