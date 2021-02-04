import React from 'react'
import { connect } from "react-redux"
import store from "../../Services/store/store"
import { getDayPreviewList } from "../../api.js"
import  Enum from '../../Services/enums'

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
            return (
                this.state.dayPreviewList.map(item => {
                    return (
                        <div>
                            <h2>{item['task']}</h2>
                            <div><b>Time: </b>{item['startTime']} - {item['endTime']}</div>
                            <div><b>Location: </b>{item['location']}</div>
                        </div>
                    )})
            )
        }
        return null
    }

    render( ) { 
        return (
            <div>
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

export default connect(mapStateToProps)(DayPreview);