import React from 'react'
import Enum from '../Services/enums'

const SingleMonthInYear = ( props ) => {
    let monthStyle = {};
    let weekStyle = {
        "paddingRight": "15px", 
        "textAlignLast":"center"
    };
    let weekTitleStyle = {
        "textAlignLast":"center"
    };
    let dayStyle = {
        "textAlignLast":"center", 
        "width":"2em"
    }

    return (
        <div style={{width: "25%", height:"20%","margin":"0 auto 0 auto"}}>
            {Enum.MonthIdMap[props.monthId]}
            <table>
                <tbody>
                    <tr>
                        <th style={weekStyle}></th>
                        <th style={weekTitleStyle}>M</th>
                        <th style={weekTitleStyle}>T</th>
                        <th style={weekTitleStyle}>W</th>
                        <th style={weekTitleStyle}>T</th>
                        <th style={weekTitleStyle}>F</th>
                        <th style={weekTitleStyle}>S</th>
                        <th style={weekTitleStyle}>S</th>
                    </tr>
                    {
                        props.month.map(  (week, index ) => {
                            return <tr key={index}>
                                <th key={index} style={weekStyle}>{week.days[0].week}</th>
                                {
                                    week.days.map( (day) => {
                                        if(day.date === 1) {
                                            let item = [];
                                            if ( day.day ) {
                                                for( let i = 1; i < day.day; i++) {
                                                    item.push(<td key={index.toString() + week.week.toString() + i.toString()} style={dayStyle}></td>)
                                                }
                                            } else {
                                                for( let i = 1; i < 7; i++) {
                                                    item.push(<td key={index.toString() + week.week.toString() + i.toString()} style={dayStyle}></td>)
                                                }
                                            }
                                            
                                            item.push(<td key={index.toString() + week.week.toString() + day.day.toString()} style={dayStyle}>{day.date}</td>);
                                            return item;
                                        } else {
                                            return <td key={index.toString() + week.week.toString() + day.day.toString()}  style={dayStyle}>{day.date}</td>
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