import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components'; 

const { Content } = Layout;

const StyledContent = styled(Content)`
`;

class MainContent extends React.Component{
    render(){
        return(
            <StyledContent>
                Hello world 
            </StyledContent>
        )
    }
}
export default MainContent;
