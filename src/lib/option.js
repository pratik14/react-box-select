import React from 'react';
import PropTypes from 'prop-types';

export default class Option extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
      isHovered: false
    };

    this.handleHover = this.handleHover.bind(this)
  }

  handleHover(){
    this.setState({isHovered: !this.state.isHovered})
  }

  render() {
    const { option, text, type } = this.props;
    let className = `ms-elem-${type}`
    if(this.state.isHovered){
      className = `${className} ms-hover`
    }
    return (
      <li
        className={className}
        onMouseLeave={this.handleHover}
        onMouseEnter={this.handleHover}
        onClick={() => this.props.handleClick(option)}
      >
        { text }
      </li>
    );
  }
}

Option.propTypes = {
  type: PropTypes.string.isRequired,
  option: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};
