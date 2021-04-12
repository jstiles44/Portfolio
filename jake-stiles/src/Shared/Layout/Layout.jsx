import Footer from '../Footer/Footer.jsx';
import Nav from '../Nav/Nav.jsx';
import "./Layout.css";
import React from 'react';

const Layout = (props) => {
  return (
    <div>
      <div className='layout'>
        <Nav/>
      </div>
      <div className='layout-children'>
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;