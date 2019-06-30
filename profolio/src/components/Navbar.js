import React from 'react';
import { Menu, Icon, Layout } from 'antd';

const { Header } = Layout;

class Navbar extends React.Component{
    render(){
        return(
            <Header>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
                    <Menu.Item key="1" style={{ 'marginRight': '20%' }}>
                            <Icon type="home" theme="outlined" style={{ 'fontSize': '3em', 'margin': '20% auto' }}/>
                    </Menu.Item>
                    <Menu.Item key="2">
                            <a href="https://github.com/DjMikeLin">
                                <Icon type="github" theme="filled" style={{ 'fontSize': '3em', 'margin': '20% auto' }}/>
                            </a>
                    </Menu.Item>
                    <Menu.Item key="3">
                            <a href="https://www.linkedin.com/in/michael-yu-lin/">
                                <Icon type="linkedin" theme="filled" style={{ 'fontSize': '3em', 'margin': '20% auto' }}/>
                            </a>
                    </Menu.Item>
                </Menu>
            </Header>
        )
    }
}
export default Navbar;
