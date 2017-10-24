import './styles.css';
import React from 'react'
import Header from './HeaderContainer.js';
import Content from './ContentContainer.js';
import Sidebar from './SidebarContainer.js';
import Notifications from './NotificationsContainer.js';
import Footer from './Footer/';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="Dashboard">
        <div className="body">
          <Sidebar />
          <div className="inner-body">
            <div className="main-body">
              <Header />
              <Content />
            </div>
            <Footer />
          </div>
        </div>
        <Notifications />
      </div>
    )
  }
}

export default Dashboard
