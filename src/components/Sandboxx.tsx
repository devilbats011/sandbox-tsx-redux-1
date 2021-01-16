import React, { ReactElement } from 'react'
import {useSelector } from "react-redux"

function Sandboxx(): ReactElement {
    const state = useSelector(state => state.state)
    return (
        <div>
                {state}
        </div>
    )
}

export default Sandboxx
