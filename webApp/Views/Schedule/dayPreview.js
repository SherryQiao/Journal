import React from 'react'
import { connect } from "react-redux"
import store from "../../Services/store/store"
import { getDayPreviewList } from "../../api.js"

class DayPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dayPreviewList: undefined
        };
        store.subscribe(() => {
            getDayPreviewList(store.getState().selectedDate).then((res) => {
                this.setState(() => {
                    return {dayPreviewList: res.data}
                })
            });
        });
    }

    genarateHtml() {
        if(this.state.dayPreviewList) {
            return (<div>{this.state.dayPreviewList[0].time}</div>)
        }
        return null
    }

    render( ) { 
        return (
            <div>
                <div>date</div>
                <div>{this.props.selectedDate.year}</div>
                <div>{this.props.selectedDate.monthId}</div>
                <div>{this.props.selectedDate.day}</div>
                <div>{this.props.selectedDate.date}</div>
                {
                    this.genarateHtml()
                }
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