import React from 'react';

class GameName extends React.PureComponent{
  render(){
    return(
      <li
        onClick={() => this.props.handleGameChange({
            _id: this.props._id,
            name: this.props.name,
            release_date: this.props.release_date
        })}
      >
        {this.props.name}
      </li>
    );
  }
}

export default GameName
