import React, { createContext, useState } from 'react';

export const TrackerContext = createContext();

const TrackerProivider = (props) => {
    const [show, setShow] = useState(false)

    return (
        <TrackerContext.Provider value={{
        }}>
            {props.children}
        </TrackerContext.Provider>
    )
}

export default TrackerProivider