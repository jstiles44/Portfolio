import React from 'react';
import Layout from '../Shared/Layout/Layout.jsx';
import './Projects.css';

function Projects(props) {
  return (
    <Layout>
      <div className='projects-container'>
      <div className='barbacide-div'>
        <h3>Barbacide App</h3>
        <a className='live-site' href='https://barbacide.netlify.app'>Live Site</a>
        <a className='code-repository' href='https://github.com/jstiles44/barbacide-app'>Code Repository</a>
        <div>Description: The Barbacide App is a useful tool for a cover band.  This app allows the user to choose a song and have the lyrics displayed.  This is ideal for musicians who sing and play an instrument simultaneously</div>
      </div>
      <div className='playlist-div'>
        <h3>SongsYOÜ</h3>
        <a className='live-site' href='https://songsu.netlify.app'>Live Site</a>
        <a className='code-repository' href='https://github.com/jstiles44/P3-Playlist-App'>Code Repository</a>
        <div>Description: SongsYOÜ is an app that allows users to search a given song bank and add songs to their personal playlists.  Songs are clickable, playable, and details render upon click</div>
      </div>
      <div className='record-review-div'>
        <h3>Record Review</h3>
        <a className='live-site' href='https://record-review.netlify.app'>Live Site</a>
        <a className='code-repository' href='https://github.com/jstiles44/Record-Review'>Code Repository</a>
        <div>Description: Record Review is a RESTful web application designed to connect music listeners.  Users can add albums to the site and write reviews on albums added by other users</div>
        </div>
        </div>
      </Layout>
  );
}

export default Projects;