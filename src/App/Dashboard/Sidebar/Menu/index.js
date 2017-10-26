import './styles.css';
import React from 'react';
import T from 'prop-types';
import {Link} from 'react-router-dom'
import classnames from 'classnames';

const menu = [{
  label: 'Home',
  path: '/'
}, {
  label: 'Quotes',
  path: '/merakiQuotes',
  items: [{
    label: 'Nuevo',
    path: '/merakiQuotes/new',
  }, {
    label: 'Compartidos',
    path: '/merakiQuotes/shared',
  }]
}, {
  label: 'Equipos',
  path: '/merakiDevices',
  items: [{
    label: 'Nuevo',
    path: '/merakiDevices/new',
  }]
}, {
  label: 'Usuarios',
  path: '/users',
  items: [{
    label: 'Nuevo',
    path: '/users/new',
  }, {
    label: 'Permisos',
    path: '/users/permissions'
  }]
}, {
  label: 'Cuenta',
  path: '/account',
}]

const SubItem = ({path, label, pathname}) => (
  <li className={classnames({
    'active': pathname === path
  })}>
    <Link to={path} className="circles">{label}</Link>
  </li>
);

const Item = ({path, label, items, pathname}) => (
  <li className={classnames({
      'active nav-active': path === '/' 
        ? path === pathname
        : pathname.indexOf(path) > -1
    })}>
    <Link to={path} className="circles">
      <span>{label}</span>
    </Link>
    {items && items.length > 0 && 
      <ul className="list-unstyled">
      {items.map((item) => (
        <SubItem key={item.path} {...item} pathname={pathname} />
      ))}
      </ul>
    }
  </li>
);

const Menu = ({pathname}) => (
  <div className="Menu">
    <ul>
    {menu.map((item) => (
      <Item key={item.path} {...item} pathname={pathname}/>
    ))}
    </ul>
  </div>
);

Menu.propTypes = {
  pathname: T.string,
};

export default Menu;
