import React from 'react'
const Controller = ( props ) => {
    return (
        <div style={{"display":"flex","justifyContent": "space-around"}}>
            <span onClick={props.getYear.bind(null,"previous")}>Previous</span>
            <span onClick={props.getYear.bind(null,"next")}>Next</span>
        </div>
    )
}

export default Controller