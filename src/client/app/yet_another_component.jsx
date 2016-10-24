import React from 'react';

class YetAnotherComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {likesCount: 0};
    this.onLike = this.onLike.bind(this);
    this.logToConsole = this.logToConsole.bind(this);
    this.currentName = props.name;
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  logToConsole () {
    console.log(this.formatMessage(this.state.likesCount));
  }

  formatMessage (e) {
    return `you've been liked ${e}`;
  }

  render () {
    return (
      <div>
        <p>Hello {this.currentName}!</p>
        <div>You have {this.state.likesCount} likes</div>
        <div style={{display: 'inline-block'}}><button onClick={this.onLike}>Like Me</button></div>
        <div style={{display: 'inline-block'}}><button onClick={this.logToConsole}>Log to console</button></div> 
      </div>
    );
  }
}
export default YetAnotherComponent;