import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft,faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

const CollapseButton = ( props ) => {
    return (
        <FontAwesomeIcon icon={props.isOpen?faArrowCircleLeft:faArrowCircleRight} onClick={props.collapse}/>
    )
}

export default CollapseButton