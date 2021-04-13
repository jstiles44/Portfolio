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
          src="https://docs.google.com/document/d/e/2PACX-1vS7UiHakYhdwVMGDsN4kNjxJqCOzFT-TR_o5aikkTfpUqMN83zRfYpv9Xo92fou0WqZSR6C3zh-j2wo/pub?embedded=true"></iframe>
      </div>
      </Layout>
  );
}

export default Resume;