import './styles.css';
import React from 'react';
import T from 'prop-types';
import Spinner from '../../../common/Spinner/';
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
    const {isAuthenticated, username, onClick, isLoggingOut} = this.props;
    const Icon = (this.state.content === '' && !isLoggingOut === true) 
      ? <UserSvg fill="green" size="1" /> 
      : <TimesSvg fill={isLoggingOut ? 'grey' : 'red'} size="1" />;
    
    let content = this.state.content || username

    if (isLoggingOut === true)
      content = <Spinner color="grey" />

    return (
      <div className="UserInfo" 
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}>
      {isAuthenticated === true
        ?
        <span className="content" onClick={onClick}>
          {Icon}
          <span>{content}</span>
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
  isLoggingOut: T.bool,
};

export default UserInfo;
