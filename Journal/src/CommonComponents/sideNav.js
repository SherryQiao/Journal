import React from 'react'
import {Menu,SubMenu} from 'antd'
import 'antd/dist/antd.css'

class SideNav extends React.Component {
    render() {
        return (
            <div>
                <Menu mode="inline">
                <Menu.Item>Calender</Menu.Item>
                    <Menu.SubMenu title="SubMenu">
                        <Menu.Item>Year</Menu.Item>
                        <Menu.Item>Month</Menu.Item>
                        <Menu.Item>Week</Menu.Item>
                        <Menu.Item>Day</Menu.Item>
                    </Menu.SubMenu>
                    <Menu.Item>Writing</Menu.Item>
                    <Menu.Item>Manage</Menu.Item>
                </Menu>
            </div>
        
        

        )
    }
}

export default SideNav