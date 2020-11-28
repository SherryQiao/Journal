import React from 'react'
import Enum from '../Services/enums'
import "./_singleMonthInYear.css"

const SingleMonthInYear = ( props ) => {

    return (
        <div style={{width: "25%", height:"20%","margin":"0 auto 0 auto","padding":"0 10px 0 10px"}}>
            {Enum.MonthIdMap[props.monthId]}
            <table onClick={props.selectDateHandler.bind(null, props.monthId)}>
                <tbody>
                    <tr>
                        <th className="weekStyle"></th>
                        <th className="weekTitleStyle">M</th>
                        <th className="weekTitleStyle">T</th>
                        <th className="weekTitleStyle">W</th>
                        <th className="weekTitleStyle">T</th>
                        <th className="weekTitleStyle">F</th>
                        <th className="weekTitleStyle">S</th>
                        <th className="weekTitleStyle">S</th>
                    </tr>
                    {
                        props.month.map(  (week, index ) => {
                            return <tr key={index}>
                                <th key={index} className="weekStyle">{week.days[0].week}</th>
                                {
                                    week.days.map( (day) => {
                                        if(day.date === 1) {
                                            let item = [];
                                            if ( day.day ) {
                                                for( let i = 1; i < day.day; i++) {
                                                    item.push(<td key={index.toString() + week.week.toString() + i.toString()}></td>)
                                                }
                                            } else {
                                                for( let i = 1; i < 7; i++) {
                                                    item.push(<td key={index.toString() + week.week.toString() + i.toString()}></td>)
                                                }
                                            }
                                            
                                            item.push(<td key={index.toString() + week.week.toString() + day.day.toString()} className="dayStyle">{day.date}</td>);
                                            return item;
                                        } else {
                                            return <td key={index.toString() + week.week.toString() + day.day.toString()}  className="dayStyle">{day.date}</td>
                                        }
                                    })
                                }
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default SingleMonthInYear