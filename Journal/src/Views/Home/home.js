import React from 'react' 
import SideNav from '../../CommonComponents/sideNav'
import { BrowserRouter,Route,HashRouter } from 'react-router-dom'
import Year from '../Schedule/year'
import Month from '../Schedule/month'
import Week from '../Schedule/week'
import Category from '../Category/category'
import Manage from '../ManagePage/manage'


class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    switchPage(url) {
        console.log(url)
    }
    render() {
        return (
        <HashRouter>
            <div style={{"display":"flex", "height":"100%"}}>
                <div style={{"display": "flex","width":"20%","padding": "20px"}}>
                    <SideNav switchPage={this.switchPage.bind(this)}></SideNav>
                </div>
                <div style={{"padding":"20px", "width":"80%"}}>
                    <Route exact path='/schedule/year' component={Year}></Route>
                    <Route exact path='/schedule/month' component={Month}></Route>
                    <Route exact path='/schedule/week' component={Week}></Route>
                    <Route exact path='/category' component={Category}></Route>
                    <Route exact path='/manage' component={Manage}></Route>
                </div>
            </div>
        </HashRouter>
           
            
        )
    }
}

export default Home