import React from 'react' 
import SideNav from '../../CommonComponents/sideNav'
import { Route,HashRouter } from 'react-router-dom'
import Schedule from "../Schedule/schedule";
import Category from '../Category/category'
import Backlog from '../Backlog/backlog'
import Manage from '../ManagePage/manage'
import {connect} from "react-redux"

import './home.css'

const mapStateTpProps = (state) => {
    return {selectedDate: state.selectedDate}
}

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            selectedDate: props.selectedDate,
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
                    <Route path='/schedule' component={Schedule}></Route>
                    <Route exact path='/backlog' component={Backlog}></Route>
                    <Route exact path='/category' component={Category}></Route>
                    <Route exact path='/manage' component={Manage}></Route>
                </div>
            </div>
        </HashRouter>
           
            
        )
    }
}

export default connect(mapStateTpProps)(Home)