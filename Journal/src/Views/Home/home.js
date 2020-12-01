import React from 'react' 
import SideNav from '../../CommonComponents/sideNav'
import { BrowserRouter,Route,HashRouter } from 'react-router-dom'
import Year from '../Schedule/year'
import Month from '../Schedule/month'
import Week from '../Schedule/week'
import Category from '../Category/category'
import Manage from '../ManagePage/manage'
import './home.css'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            isSideNavOpen: true
        })
    }

    collapse() {
        this.setState({
            isSideNavOpen: !this.state.isSideNavOpen
        })
    }

    render() {
        return (
        <HashRouter>
            <div style={{"display":"flex", "height":"100%", "width":"112%"}}  className={this.state.isSideNavOpen?'show':'hide'}>
                <div style={{"display": "flex","width":"15%","padding": "20px"}} >
                    <SideNav collapse={this.collapse.bind(this)} isOpen={this.state.isSideNavOpen} style={{"width":"100%"}}></SideNav>
                </div>
                <div className={this.state.isSideNavOpen?'withSideNav':'fullScreen'}>
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