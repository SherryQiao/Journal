import React from 'react'
import {Menu} from 'antd'
import 'antd/dist/antd.css'
import { NavLink } from 'react-router-dom';
import CollapseButton from './collapseButton'
import './sideNav.css'
class SideNav extends React.Component {
    constructor( props ){
        super( props );
        this.state = ({
            selectPage: "",
            category:[]
        })
    }

    switchPage(item) {
        console.log(item);
    }

    render() {
        return (
            <div style={{"display":"flex", "width":"100%"}}>
                <div style={{"display":"flex", "width":"100%"}}>
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

                        <Menu.Item key="backlog">
                            <NavLink exact to="/backlog">
                                <span>Backlog</span>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="category">
                            <NavLink exact to="/category">
                                <span>Category</span>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item> 
                            <NavLink exact to="/manage">
                                <span>Manage</span>
                            </NavLink>
                        </Menu.Item>
                    </Menu>     
                
                </div>
                <div style={{ "alignSelf": "center", "position": "relative", "left": "-7px"}}>
                    <CollapseButton collapse={this.props.collapse} isOpen={this.props.isOpen} ></CollapseButton>
                </div>
                
            </div>
            
        )
    }
}

export default SideNav