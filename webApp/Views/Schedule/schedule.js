import React from 'react' 
import { BrowserRouter,Route,HashRouter } from 'react-router-dom'
import Year from '../Schedule/year'
import Month from '../Schedule/month'
import Week from '../Schedule/week'
import DayPreview from '../Schedule/dayPreview'

class Schedule extends React.Component {
    constructor( props ) {
        super(props);
        this.state = ({
            selectedDate: props.selectedDate
        })
    }
    render(){
        return (
            <div style={{ "display": "flex", "height": "100%" }}>
                <div>
                    <HashRouter>
                        <Route exact path='/schedule/year' component={Year}></Route>
                        <Route exact path='/schedule/month' component={Month}></Route>
                        <Route exact path='/schedule/week' component={Week}></Route>
                    </HashRouter>
                </div>
                <div style={{"width": "20%"}}>
                    <DayPreview></DayPreview>
                </div>
            </div>

            
        )
    }
}

export default Schedule