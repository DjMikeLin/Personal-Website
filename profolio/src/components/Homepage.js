import React from 'react';
import Navbar from './Navbar';
import { Layout } from 'antd';
import MainContent from './MainContent';

const { Footer, Sider } = Layout;

class Homepage extends React.Component{
    render(){
        return(
            <Layout>
                <Navbar />
                <Layout>
                    <MainContent />
                    <Sider>Sider</Sider>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        )
    }
}
export default Homepage;
