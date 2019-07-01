import React from 'react';
import { Layout } from 'antd';
import {getGithubProfileInfo} from './axiosRouter';
import styled from 'styled-components'; 

const { Sider } = Layout;

const Avatar = styled.img`
    border-radius: 50%;
`;

class Side extends React.Component{
    state = {
        avatar: '#'
    }

    componentDidMount = async() => {
        this.setState({avatar: (await getGithubProfileInfo()).data.avatar_url}); 
    }

    render(){
        return(
            <Sider>
                <Avatar src={this.state.avatar} alt="Image not found!" />
            </Sider>
        )
    }
}
export default Side;
