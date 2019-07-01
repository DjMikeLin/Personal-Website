import React from 'react';

class Project extends React.Component{
    render(){
        return(
            /*homepage, description, html_url(repo link), language, name(repo name)*/
            <div>
                {this.props.project.description}
            </div>
        )
    }
}
export default Project;
