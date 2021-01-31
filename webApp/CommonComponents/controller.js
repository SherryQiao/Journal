import React from 'react'
const Controller = ( props ) => {
    return (
        <div style={{"display":"flex","justifyContent": "space-around"}}>
            <span onClick={props.previousAction.bind(null,"previous")}>Previous</span>
            <span onClick={props.nextAction.bind(null,"next")}>Next</span>
        </div>
    )
}

export default Controller