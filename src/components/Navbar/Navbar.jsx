import * as React from "react";
import AvatarIcon from "../AvatarIcon/AvatarIcon";
import "./Navbar.css";
import { useEffect, useState } from "react";

export default function Navbar({ navLinks }) {
  // useEffect(() => {
  //   console.log(navLinks + " here is my navLinks in the NAVBAR component");
  // }, []);

  return (
    <nav>
      <div className="navbar-container">
        <NavLinks navLinks={navLinks} />
        <TwitterIcon />
        <SearchBar />
        <TweetButton />
      </div>
    </nav>
  );
}

export function NavLinks({ navLinks }) {
  return (
    <ul className="nav-links">
      {navLinks.map((link, idx) => {
        return <NavLink key={idx} navLink={link} />;
      })}
    </ul>
  );
}

export function NavLink({ navLink }) {
  return (
    <li className={navLink.className}>
      <i className={navLink.icon}></i>
      <span>{navLink.label}</span>
    </li>
  );
}

export function TwitterIcon() {
  return (
    <div className="twitter-icon">
      <i className="fab fa-twitter"></i>
    </div>
  );
}

export function SearchBar() {
  return (
    <div className="search-bar">
      <input placeholder="Search Twitter" />
      <i className="fas fa-search"></i>
    </div>
  );
}

export function TweetButton() {
  return (
    <div className="tweet-button">
      <AvatarIcon />

      <button>Tweet</button>
    </div>
  );
}