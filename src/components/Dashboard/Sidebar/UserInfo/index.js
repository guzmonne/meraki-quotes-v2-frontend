import './styles.css';
import React from 'react';
import T from 'prop-types';
import UserSvg from './UserSvg.js';
import TimesSvg from './TimesSvg.js';

class UserInfo extends React.Component {
  state = {
    content: ''
  }

  handleMouseEnter = (e) => (
    this.props.isAuthenticated && this.setState({content: 'Cerrar Sesión'})
  )

  handleMouseLeave = (e) => (
    this.props.isAuthenticated && this.setState({content: ''})
  )
    
  render() {
    const {isAuthenticated, username, onClick} = this.props;
    const Icon = (this.state.content === '') 
      ? <UserSvg fill="green" size="1" /> 
      : <TimesSvg fill="red" size="1" />;
    return (
      <div className="UserInfo" 
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}>
      {isAuthenticated === true
        ?
        <span className="content" onClick={onClick}>
          {Icon}
          <span>{this.state.content || username}</span>
        </span>
        :
        <span className="content">
          <UserSvg fill="red" size="1" />
          <span>Desconectado</span>
        </span>
      }
      </div>
    )
  }

}

UserInfo.propTypes = {
  isAuthenticated: T.bool,
  username: T.string,
  onClick: T.func,
};

export default UserInfo;
