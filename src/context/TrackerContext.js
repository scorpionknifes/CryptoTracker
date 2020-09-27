import React, { createContext, useState } from 'react';

export const TrackerContext = createContext();

const TrackerProivider = (props) => {
    const [currency, setCurrency] = useState('NZD')
    const [darkTheme, setDarkTheme] = useState(false)
    const [selectedID, setSelectedID] = useState('')
    const [header, setHeader] = useState(null)
    const [time, setTime] = useState('month')
    const [currentInfo, setCurrentInfo] = useState(null)
    const changeScene = props.changeScene

    return (
        <TrackerContext.Provider value={{
            currency, setCurrency,
            darkTheme, setDarkTheme,
            selectedID, setSelectedID,
            header, setHeader,
            time, setTime,
            currentInfo, setCurrentInfo,
            changeScene,
        }}>
            {props.children}
        </TrackerContext.Provider>
    )
}

export default TrackerProivider