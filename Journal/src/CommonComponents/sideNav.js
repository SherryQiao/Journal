import React from 'react'
import {Menu} from 'antd'
import 'antd/dist/antd.css'
import { NavLink } from 'react-router-dom';
class SideNav extends React.Component {
    constructor(){
        super();
        this.state = ({
            selectPage: "",
            category:[]
        })
    }

    switchPage(item) {
        console.log(item);
        this.setState({selectPage:item.keyPath}, ()=>{
            this.props.switchPage(this.state.selectPage);
        })
    }
    render() {
        return (
            <div style={{"height":"auto", "width":"100%"}}>
                <Menu mode="inline" onClick={this.switchPage.bind(this)}>
                    <Menu.SubMenu title="Schedule" key="schedule">
                        <Menu.Item key="year">
                            <NavLink exact to="/schedule/year">
                                <span>Year</span>
                            </NavLink></Menu.Item>
                        <Menu.Item key="month">
                            <NavLink exact to="/schedule/month">
                                <span>Month</span>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="week">
                            <NavLink exact to="/schedule/week">
                                <span>Week</span>
                            </NavLink>
                        </Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu title="Category" key="category">
                    <Menu.Item key="All">
                        <NavLink exact to="/category">
                            <span>All</span>
                        </NavLink>
                    </Menu.Item>
                    </Menu.SubMenu>
                    <Menu.Item> 
                        <NavLink exact to="/manage">
                            <span>Manage</span>
                        </NavLink>
                    </Menu.Item>
                </Menu>     
            
            <i className="fa fa-angle-double-right"></i>
            </div>
            
        )
    }
}

export default SideNav