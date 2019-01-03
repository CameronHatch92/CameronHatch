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
      <button className='more-info' onClick={() => this.toggleExpand()}>Click here to see more info!</button>
    } else {
      expand = 
      <button className='more-info' onClick={() => this.toggleExpand()}>Hide additional info.</button>
    }
    if(this.state.expanded){
      element = 
        <article className='expanded-info'>
          <p className='tech-desc'>{this.props.techDesc}</p>
          {this.props.additional}
          <p className='github-link'>For more info, visit this project's <a href={this.props.github} target='false'>GitHub Repo</a>.</p>
        </article>

    }
    return (
      <li className='project'>
        <h3><a href={this.props.url} target='false'>{this.props.title}</a></h3>
        <p className='project-desc'>{this.props.description}</p>
        <img src={this.props.screenshot} className='app-screenshot'alt={`${this.props.title} screenshot`}></img>
        <br />
        {element}
        {expand}
      </li>
    )
  }
}