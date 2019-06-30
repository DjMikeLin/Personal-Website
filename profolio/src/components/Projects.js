import React from 'react';
import {allProjects} from './axiosRouter';
import Project from './Project';

class Projects extends React.Component{
    state = {
        projects: []
    }

    componentDidMount = async() => {
        this.setState({projects: (await allProjects()).data});
    }

    render(){
        return(
            <div>{
                this.state.projects.map((element, index) => {
                    return <Project key={index} project={element} />; 
                })}
            </div>
        )
    }
}
export default Projects
