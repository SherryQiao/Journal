import React from 'react'
import { connect } from "react-redux"
import store from "../../Services/store/store"
import { getDayPreviewList } from "../../api.js"
import  Enum from '../../Services/enums'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

class DayPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dayPreviewList: undefined,
            isOpened: false
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
            return (
                this.state.dayPreviewList.map((item, index) => {
                    return (
                        <div key={index}>
                            <h2>{item['task']}</h2>
                            <div><b>Time: </b>{item['startTime']} - {item['endTime']}</div>
                            <div><b>Location: </b>{item['location']}</div>
                        </div>
                    )})
            )
        }
        return null
    }

    close() {
        this.setState(() => {
            return {isOpened: false}
        });
        this.props.onClose();
    }

    open() {
        this.setState(() => {
            return {isOpened: true}
        })
    }

    render( ) { 
        return (
            <div className={this.state.isOpened? "displayShow" : "displayNone"}>
                <FontAwesomeIcon icon={faTimesCircle} onClick={this.close.bind(this)}/>
                <h1>{Enum.MonthIdMap[this.props.selectedDate.monthId]}  {this.props.selectedDate.date}</h1>
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

export default connect(mapStateToProps, null, null, { forwardRef: true })(DayPreview);