import React from 'react';
import Layout from '../Shared/Layout/Layout.jsx';
import './Home.css'

function Home(props) {
  return (
    <Layout>
      <div className='home-container'>
      <div className='p1'>
        Hello, my name is Jake. 
    </div>
        <div>
          I am a hardworking, passionate Software Engineer looking to kickstart a new, exciting career in the tech industry.
          </div>
         <div>
          I have previous experience in the field of metallurgy which began when I graduated with a B.S. in Materials Science and Engineering in 2019.  My experience has allowed me to develop a creative, problem-solving approach to my coding.
        </div>
        <div>
          At General Assembly's 13 week Software Engineering Immersive program, I learned computer science fundamentals and recieved hands on training with a variety of tech stacks.  These Include:
        </div>
        <div>
          Javascript
          HTML/CSS
          Ruby
          Ruby on Rails
          React.js
          Express.js
        </div>
        </div>
    </Layout>
  );
}

export default Home;