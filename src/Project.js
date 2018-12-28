import React from 'react';
import './project.css';

export default class Project extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      expanded: false
    };
  };

  toggleExpand(){
    this.setState({
      expanded: !this.state.expanded
    })
  }

  render(){
    let element;
    let expand;
    if(!this.state.expanded) {
      expand = 
      <a className='more-info' onClick={() => this.toggleExpand()}>Click here to see more info!</a>
    }
    if(this.state.expanded){
      element = <p>Hello</p>

    }
    return (
      <div className='project'>
        <h3><a href={this.props.url} target='false'>{this.props.title}</a></h3>
        <p className='project-desc'>{this.props.description}</p>
        <img src={this.props.screenshot} className='app-screenshot'alt={`${this.props.title} screenshot`}></img>
        <br />
        {expand}
        {element}
      </div>
    )
  }
}