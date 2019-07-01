import React from 'react';
import {allProjects} from './axiosRouter';
import Project from './Project';

class Projects extends React.Component{
    state = {
        projects: []
    }
    //When component loads update state, get all repos from github and sort then by creation date
    componentDidMount = async() => {
        let repos = (await allProjects()).data;
        repos.sort(function(a,b){
            return new Date(b.created_at) - new Date(a.created_at);
        });
        this.setState({projects: repos});
    }

    render(){
        return(
            <div>
                {
                    this.state.projects.map((element, index) => {
                        return <Project key={index} project={element} />; 
                    })
                }
            </div>
        )
    }
}
export default Projects
