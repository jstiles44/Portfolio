import React from 'react';
import Layout from '../Shared/Layout/Layout.jsx';
import './Resume.css'

function Resume(props) {
  return (
    <Layout>
      <div>
        <iframe
          className='resume'
          height="700"
          width="800"
          src="https://drive.google.com/file/d/1_P8GU2O2rKzM5yaPSrddHd-p0rJ3dEcu/preview" width="640" height="480" allow="autoplay"></iframe>
      </div>
      </Layout>
  );
}

export default Resume;