import React from 'react'
import { withRouter } from 'react-router-dom';
import SingleMonthInYear from "../../CommonComponents/singleMonthInYear"
import Header from "../../CommonComponents/header"
import Controller from "../../CommonComponents/controller"
import {setSelectedDate} from "../../Services/store/action"
import { genarateData } from "../../Services/dateService"
import { connect } from "react-redux"
import { getYearCalendar } from "../../api"
import SelectedDate from "../../Services/model/selectedDate"
// TODO: Need to get data from server


class Year extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            CalendarInfo: undefined
        })
        this.getYear();
    }

    getCalendarInfo(year) {
        let currYear = year || new Date().getFullYear();
        return  getYearCalendar(currYear);
    }

    selectDateHandler(monthId, ev) {
        let target = ev.target;
        let date = new SelectedDate ({
            year: this.props.selectedDate.year,
            monthId: monthId,
            day: parseInt(target.getAttribute("day")),
            date: parseInt(target.getAttribute("date"))
        })

        if( date.date ) {
            this.props.setSelectedDate(date);
        }
    }

    getYear( args ) {
        // let currDate = this.props.selectedDate;
        let currDate = this.props.selectedDate || new SelectedDate();
        if(args === "previous") {
            currDate.year--;
        } else if(args === "next") {
            currDate.year++;
        }

        this.getCalendarInfo( currDate.year).then(res => {
            let calendar = genarateData(res.data);
            this.setState(() => {
                return {CalendarInfo:calendar}
            }, ()=> {
                currDate.day = document.getElementsByClassName("daySelected")[0].getAttribute("day");
                this.props.setSelectedDate(new SelectedDate(currDate))
            } )
        });
    }

    genarateHTML( data ) { 
        if( data ) {
            return (<div style={{"height": "100%"}}>
            <Header year={this.state.CalendarInfo.year}></Header>
             <div style={{"display":"flex", "flexWrap":"wrap", "height":"90%", "padding":"10px 0 10px 0"}}>
             {
                 Object.keys( this.state.CalendarInfo.month ).map( ( item, index ) => {
                     return  <SingleMonthInYear key={index} month={this.state.CalendarInfo.month[index]} monthId={index} selectedDate={this.props.selectedDate} selectDateHandler={this.selectDateHandler.bind(this)}></SingleMonthInYear>
                 })
             }
             </div>
             <Controller previousAction={this.getYear.bind(this)} nextAction={this.getYear.bind(this)}></Controller>
         </div>)
            
        } 
        return null
    }
    render() {
        return (this.genarateHTML(this.state.CalendarInfo))
        
    }
}

const mapStateToProps = (state) => {
    return {
        selectedDate: state.selectedDate
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        setSelectedDate: date => {
            dispatch(setSelectedDate(date))
        }
    }
}

export default withRouter( connect(mapStateToProps,mapDispatchToProps)(Year))