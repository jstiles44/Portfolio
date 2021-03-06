import React from "react";
import Layout from "../Shared/Layout/Layout.jsx";
import "./Projects.css";
import img1 from "../Images/barbacideapp.png";
import img2 from "../Images/barbacideapp2.png";
import img3 from "../Images/barbacideapp3.png";
import img4 from "../Images/songsyou.png";
import img5 from "../Images/songsyou2.png";
import img6 from "../Images/songsyou3.png";
import img7 from "../Images/recordreview.png";
import img8 from "../Images/recordreview2.png";
import img9 from "../Images/recordreview3.png";

function Projects(props) {
  return (
    <Layout>
      <div className="projects-container">
        <div className="barbacide-div">
          <h3>Barbacide App</h3>
          <div>
            <img
              id="project-image"
              src={img1}
              alt="Barbacide"
          />
              <img
              id="project-image"
              src={img2}
              alt="Barbacide"
          />
           <img
              id="project-image"
              src={img3}
              alt="Barbacide"
            />
            </div>
            <a className="live-site" href="https://barbacide-app.netlify.app">
              Live Site
            </a>
            <a
              className="code-repository"
              href="https://github.com/jstiles44/barbacide-app"
            >
              Code Repository
            </a>
            <div>
            Description: The Barbacide App is a useful tool for a cover band.
            This app allows the user to choose a song and have the lyrics
            displayed. This is ideal for musicians who sing and play an
            instrument simultaneously
            </div>
          <div className="stack">
          Stack:  React.js | External API | CSS Flexbox | Postman API Testing
          </div>
          </div>
        <div className="playlist-div">
          <h3>SongsYOÜ</h3>
          <div>
          <img
            id="project-image"
            src={img6}
            alt="Barbacide"
          />
          <img
            id="project-image"
            src={img4}
            alt="Barbacide"
          />
            <img
            id="project-image"
            src={img5}
            alt="Barbacide"
            />
            </div>
          <a className="live-site" href="https://songsu.netlify.app">
            Live Site
          </a>
          <a
            className="code-repository"
            href="https://github.com/jstiles44/P3-Playlist-App"
          >
            Code Repository
          </a>
          <div>
            Description: SongsYOÜ is an app that allows users to search a given
            song bank and add songs to their personal playlists. Songs are
            clickable, playable, and details render upon click

           <div className="stack" >
           Stack:  React.js | Express.js | MongoDB | Node | CSS Flexbox
           </div>
          </div>
        </div>
        <div className="record-review-div">
          <h3>Record Review</h3>
          <div>
          <img
            id="project-image"
            src={img7}
            alt="Barbacide"
          />
           <img
            id="project-image"
            src={img8}
            alt="Barbacide"
          />
            <img
            id="project-image"
            src={img9}
            alt="Barbacide"
            />
            </div>
          <a className="live-site" href="https://record-review.netlify.app">
            Live Site
          </a>
          <a
            className="code-repository"
            href="https://github.com/jstiles44/Record-Review"
          >
            Code Repository
          </a>
          <div>
            Description: Record Review is a RESTful web application designed to
            connect music listeners. Users can add albums to the site and write
            reviews on albums added by other users

            <div className="stack">
            Stack: React.js | Ruby on Rails | postgreSQL | CSS Flexbox
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Projects;
