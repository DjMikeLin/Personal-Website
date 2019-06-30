import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components'; 
import Projects from './Projects';

const { Content } = Layout;

const StyledContent = styled(Content)`
    height: 100%;
`;

class MainContent extends React.Component{
    render(){
        return(
            <StyledContent>
                <Projects /> 
            </StyledContent>
        )
    }
}
export default MainContent;
