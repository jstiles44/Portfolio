import React from "react";
import Layout from "../Shared/Layout/Layout.jsx";
import "./Projects.css";

function Projects(props) {
  return (
    <Layout>
      <div className="projects-container">
        <div className="barbacide-div">
          <h3>Barbacide App</h3>
          <div>
            <img
              id="project-image"
              src={`https://photos.smugmug.com/Barbacideapp/i-5fsrj32/0/7f10b7fd/X3/barbacideapp-X3.png`}
              alt="Barbacide"
          />
              <img
              id="project-image"
              src={`https://photos.smugmug.com/Barbacideapp/i-GgfHh6w/0/2a2cb88c/M/Screen%20Shot%202021-04-22%20at%201.19.15%20PM-M.png`}
              alt="Barbacide"
          />
           <img
              id="project-image"
              src={`https://photos.smugmug.com/Barbacideapp/i-ftf7RVx/0/8984f3ce/M/Screen%20Shot%202021-04-22%20at%201.19.41%20PM-M.png`}
              alt="Barbacide"
            />
            </div>
            <a className="live-site" href="https://barbacide.netlify.app">
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
          </div>
        <div className="playlist-div">
          <h3>SongsYOÜ</h3>
          <div>
          <img
            id="project-image"
            src={`https://photos.smugmug.com/Songsyou/i-9FCDRCM/0/47497c44/S/Screen%20Shot%202021-04-22%20at%201.23.19%20PM-S.png`}
            alt="Barbacide"
          />
          <img
            id="project-image"
            src={`https://photos.smugmug.com/Songsyou/i-mk8mn3S/0/9399b6b6/X3/songsyou-X3.png`}
            alt="Barbacide"
          />
            <img
            id="project-image"
            src={`https://photos.smugmug.com/Songsyou/i-PsRhqkW/0/959b4370/S/Screen%20Shot%202021-04-22%20at%201.23.46%20PM-S.png`}
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
          </div>
        </div>
        <div className="record-review-div">
          <h3>Record Review</h3>
          <div>
          <img
            id="project-image"
            src={`https://photos.smugmug.com/Recordreview/i-7SLV6zf/0/0713213c/X3/recordreview-X3.png`}
            alt="Barbacide"
          />
           <img
            id="project-image"
            src={`https://photos.smugmug.com/Recordreview/i-9CdZwcW/0/78c78a93/S/Screen%20Shot%202021-04-22%20at%201.21.44%20PM-S.png`}
            alt="Barbacide"
          />
            <img
            id="project-image"
            src={`https://photos.smugmug.com/Recordreview/i-F3qPqFN/0/3282ba14/S/Screen%20Shot%202021-04-22%20at%201.22.12%20PM-S.png`}
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
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Projects;
