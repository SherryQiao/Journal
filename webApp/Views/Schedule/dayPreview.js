import React from 'react'
import { connect } from "react-redux"

class DayPreview extends React.Component {
    constructor(props) {
        super(props);
    }
    render( ) { 
        return (
            <div>
                <div>date</div>
                <div>{this.props.selectedDate.year}</div>
                <div>{this.props.selectedDate.monthId}</div>
                <div>{this.props.selectedDate.day}</div>
                <div>{this.props.selectedDate.date}</div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        selectedDate: state.selectedDate
    }
}

export default connect(mapStateToProps)(DayPreview);