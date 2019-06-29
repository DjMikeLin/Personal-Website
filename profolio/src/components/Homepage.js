import React from 'react';
import {Link} from 'react-router-dom';
import { Menu, Icon, Layout } from 'antd';
import styled from 'styled-components';

class Homepage extends React.Component{
    render(){
        return(
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]} style={{ lineHeight: '64px' }}>
                    <Menu.Item key="1" style={{ 'marginRight': '20%' }}>
                            <Icon type="crown" spin="true"/>
                            Dashboard
                    </Menu.Item>
                    <Menu.Item key="2">
                            <a href="https://github.com/DjMikeLin">
                                <Icon type="github" theme="filled"/>
                                Github
                            </a>
                    </Menu.Item>
                    <Menu.Item key="3">
                            <Icon type="linkedin" theme="filled"/>
                            LinkedIn
                    </Menu.Item>
                </Menu>
        )
    }
}
export default Homepage;
