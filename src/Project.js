import React from 'react';
import './project.css';

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  };

  toggleExpand() {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  render() {
    const techStack = this.props.techDesc.map(tech => <li>{tech}</li>);
    const techList = <ul className='tech-list'>{techStack}</ul>;
    const element =
      <article className='expanded-info'>
        <p className='github-link'><a href={this.props.github} target='false'>GitHub Repo</a></p>
        {techList}
        {this.props.additional}
      </article>
    return (
      <li className='project'>
        <a href={this.props.url} target='false'>
          <h3>{this.props.title}</h3>
          <p className='project-desc'>{this.props.description}</p>
          <img src={this.props.screenshot} className='app-screenshot' alt={`${this.props.title} screenshot`}></img>
        </a>
        <br />
        {element}
      </li>
    )
  }
}