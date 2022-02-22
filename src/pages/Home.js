import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <img src="/main/Nav_Bar_landing_page.png" alt="navbar" className="nav" />
      <p className="title">Facebook Events without Facebook.</p>
      <p className="subtitle">
        Easily host and share events with your friends across any social media.
      </p>
      <Link to="/create">
        <div className="btn-container">
          <img
            src="/main/Create_event_button.png"
            alt="create event"
            className="ce-btn"
          />
        </div>
      </Link>
      <div style={{ position: "relative", height: "30em" }}>
        <img
          src="/main/Social_Media_icons.png"
          alt="smicons"
          className="icongroup"
        />
        <img
          src="/main/Product_Image_Left.png"
          alt="photoleft"
          className="left-phone"
        />
        <img
          src="/main/Product_Image_Middle.png"
          alt="photomiddle"
          className="middle-phone"
        />
        <img
          src="/main/Product_Image_Right.png"
          alt="photoright"
          className="right-phone"
        />
      </div>
    </div>
  );
};

export default Home;
