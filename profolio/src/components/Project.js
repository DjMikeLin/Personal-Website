import React from 'react';

class Project extends React.Component{
    render(){
        return(
            <div>
                {this.props.project.description}
            </div>
        )
    }
}
export default Project;
