import './styles.css';
import React from 'react';
import T from 'prop-types';
import classnames from 'classnames';

const Menu = ({item, subItem, navigateToItem, navigateToSubItem}) => (
  <div className="Menu">
    <ul>
      <li className={classnames('has_sub', {
        'active nav-active': item === 'quotes',
      })}>
        <a href="#" className="circles" 
          onClick={() => navigateToItem('quotes')}>
          <span>Quotes</span>
        </a>
        <ul className="list-unstyled">
          <li className={classnames({
            'active': subItem === 'new' && item === 'quotes'
          })}>
            <a href="#" className="circles" 
              onClick={() => navigateToSubItem('new')}>
              Nuevo
            </a>
          </li>
          <li className={classnames({
            'active': subItem === 'list' && item === 'quotes'
          })}>
            <a href="#" className="circles" 
              onClick={() => navigateToSubItem('list')}>
              Lista
            </a>
          </li>
          <li className={classnames({
            'active': subItem === 'shared' && item === 'quotes'
          })}>
            <a href="#" 
              className="circles" 
              onClick={() => navigateToSubItem('shared')}>
              Compartidos
            </a>
          </li>
        </ul>
      </li>
      <li className={classnames('has_sub', {
        'active nav-active': item === 'devices',
      })}>
        <a href="#" className="circles" 
          onClick={() => navigateToItem('devices')}>
          <span>Equipos</span>
        </a>
        <ul className="list-unstyled">
          <li className={classnames({
            'active': subItem === 'new' && item === 'devices'
          })}>
            <a href="#" className="circles" 
              onClick={() => navigateToSubItem('new')}>
              Nuevo
            </a>
          </li>
          <li className={classnames({
            'active': subItem === 'list' && item === 'devices'
          })}>
            <a href="#" className="circles" 
              onClick={() => navigateToSubItem('list')}>
              Lista
            </a>
          </li>
        </ul>
      </li>
      <li className={classnames('has_sub', {
        'active nav-active': item === 'users',
      })}>
        <a href="#" className="circles" 
          onClick={() => navigateToItem('users')}>
          <span>Usuarios</span>
        </a>
        <ul className="list-unstyled">
          <li className={classnames({
            'active': subItem === 'new' && item === 'users'
          })}>
            <a href="#" className="circles" 
              onClick={() => navigateToSubItem('new')}>
              Nuevo
            </a>
          </li>
          <li className={classnames({
            'active': subItem === 'list' && item === 'users'
          })}>
            <a href="#" className="circles" 
              onClick={() => navigateToSubItem('list')}>
              Lista
            </a>
          </li>
          <li className={classnames({
            'active': subItem === 'permissions' && item === 'users'
          })}>
            <a href="#" 
              className="circles"
              onClick={() => navigateToSubItem('permissions')}>
              Permisos
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
);

Menu.propTypes = {
  item: T.string,
  subItem: T.string,
  navigateToItem: T.func,
  navigateToSubItem: T.func,
};

Menu.defaultProps = {
  item: 'quotes',
  subItem: 'list',
  navigateToItem: () => {},
  navigateToSubItem: () => {},
};

export default Menu;
