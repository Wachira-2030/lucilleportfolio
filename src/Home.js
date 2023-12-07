import React from 'react';
import './Home.css';
import './BackgroundVideo.css';

const Home = () => (
  <div id="section1">
    <BackgroundVideo />
    <div className="overlay"></div>
    <div className="content">
      <h1>LUCILLE WANJIKU</h1>
      <p>DATA SCIENTIST, DATA VISUALIST & BLOGGER</p>
    </div>
  </div>
);

export default Home;

function BackgroundVideo() {
  return (
    <div>
      <video loop autoPlay muted id="bg-video">
        <source src="public/background-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}