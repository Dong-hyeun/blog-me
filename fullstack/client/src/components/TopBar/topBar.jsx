import React from 'react';
import { Link } from 'react-router-dom';
import './topBar.css';

function TopBar({ user }) {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/">HOME</Link>
          </li>
          <li className="topListItem">
            <Link to="/">ABOUT</Link>
          </li>
          <li className="topListItem">
            <Link to="/">CONTACT</Link>
          </li>
          <li className="topListItem">
            <Link to="/write">WRITE</Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <>
            <Link className="topListItem" to="/logout">
              LOGOUT
            </Link>
            <img
              className="topImg"
              src="/assets/images/profileImg.jpg"
              alt=""
            />
            <i className="topSearchIcon fas fa-search"></i>
          </>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
            <li className="topListItem">
              <i className="topSearchIcon fas fa-search"></i>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default TopBar;
