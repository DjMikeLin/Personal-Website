import React from 'react';
import Navbar from './Navbar';
import { Layout } from 'antd';
import MainContent from './MainContent';
import Side from './Side';

const { Footer } = Layout;

class Homepage extends React.Component{
    render(){
        return(
            <Layout>
                <Navbar />
                <Layout>
                    <MainContent />
                    <Side />
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        )
    }
}
export default Homepage;
