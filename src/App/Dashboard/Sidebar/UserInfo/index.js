import './styles.css';
import React from 'react';
import T from 'prop-types';
import Spinner from '../../../../common/Spinner/';
import UserSvg from '../../../../common/Icons/UserSvg.js';
import TimesSvg from '../../../../common/Icons/TimesSvg.js';
import SpinnerThirdSvg from '../../../../common/Icons/SpinnerThirdSvg.js';

class UserInfo extends React.Component {
  state = {
    content: ''
  }

  handleMouseEnter = (e) => (
    this.props.isAuthenticated && this.setState({
      content: 'Cerrar Sesión',
      hover: true,
    })
  )

  handleMouseLeave = (e) => (
    this.props.isAuthenticated && this.setState({
      content: '',
      hover: false,
    })
  )
    
  render() {
    let {content, hover} = this.state;
    const {
      isSyncing,
      isLoggingOut,
      isAuthenticated,
      username,
      onClick,
    } = this.props;
    const Icon = (this.state.content === '' && !isLoggingOut === true) 
      ? <UserSvg fill="green" size="1" /> 
      : <TimesSvg fill={isLoggingOut ? 'grey' : 'red'} size="1" />;
    
    content = content || username

    if (isLoggingOut === true)
      content = <Spinner color="grey" />

    return (
      <div className="UserInfo" 
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}>
      {isAuthenticated === true
        ? isSyncing 
          ?
          <span className="content" onClick={onClick}>
            <SpinnerThirdSvg fill={hover ? 'red' : '#1976D2'} size="1" spin />
            <span style={{color: hover ? 'inherit' : '#1976D2'}}>
              {hover ? content : 'Sincronizando'}
            </span>
          </span>
          :
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
