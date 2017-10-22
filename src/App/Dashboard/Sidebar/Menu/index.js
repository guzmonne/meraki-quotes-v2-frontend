import './styles.css';
import React from 'react';
import T from 'prop-types';
import {Link} from 'react-router-dom'
import classnames from 'classnames';

const Menu = ({item, subItem, pathname, navigateToItem, navigateToSubItem}) => (
  <div className="Menu">
    <ul>
      <li className={classnames({
        'active nav-active': pathname === '/',
      })}>
        <Link to="/" className="circles"><span>Home</span></Link>
      </li>
      <li className={classnames('has_sub', {
        'active nav-active': (
          item === 'quotes' || pathname.indexOf('quotes') > -1
        ),
      })}>
        <a className="circles" 
          onClick={() => navigateToItem('quotes')}>
          <span>Quotes</span>
        </a>
        <ul className="list-unstyled">
          <li className={classnames({
            'active': pathname === '/quotes'
          })}>
            <Link to="/quotes" className="circles">Lista</Link>
          </li>
          <li className={classnames({
            'active': pathname === '/quotes/new'
          })}>
            <Link to="/quotes/new" className="circles">Nuevo</Link>
          </li>
          <li className={classnames({
            'active': '/quotes/shared'
          })}>
            <Link to="/quotes/shared"className="circles">Compartidos</Link>
          </li>
        </ul>
      </li>
      <li className={classnames('has_sub', {
        'active nav-active': (
          item === 'devices' || pathname.indexOf('devices') > -1
        ),
      })}>
        <a className="circles" 
          onClick={() => navigateToItem('devices')}>
          <span>Equipos</span>
        </a>
        <ul className="list-unstyled">
          <li className={classnames({
            'active': pathname === '/devices'
          })}>
            <Link to="/devices" className="circles">Lista</Link>
          </li>
          <li className={classnames({
            'active': pathname === '/devices/new'
          })}>
            <Link to="/devices/new" className="circles">Nuevo</Link>
          </li>
        </ul>
      </li>
      <li className={classnames('has_sub', {
        'active nav-active': (
          item === 'users' || pathname.indexOf('users') > -1 
        ),
      })}>
        <a className="circles" 
          onClick={() => navigateToItem('users')}>
          <span>Usuarios</span>
        </a>
        <ul className="list-unstyled">
          <li className={classnames({
            'active': pathname === '/users'
          })}>
            <Link to="/users" className="circles">Lista</Link>
          </li>
          <li className={classnames({
            'active': pathname === '/users/new'
          })}>
            <Link to="/users/new" className="circles">Nuevo</Link>
          </li>
          <li className={classnames({
            'active': pathname === '/users/permissions'
          })}>
            <Link to="/users/permissions">Permisos</Link>
          </li>
        </ul>
      </li>
    <li className={classnames({
      'active nav-active': pathname === '/account',
    })}>
      <Link to="/account" className="circles"><span>Cuenta</span></Link>
    </li>
    </ul>
  </div>
);

Menu.propTypes = {
  pathname: T.string,
  item: T.string,
  subItem: T.string,
  navigateToItem: T.func,
  navigateToSubItem: T.func,
};

export default Menu;
