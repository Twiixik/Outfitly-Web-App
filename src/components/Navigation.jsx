import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "../assets/Icons/home.svg";
import WardrobeIcon from "../assets/Icons/wardrobe.svg";
import HangerIcon from "../assets/Icons/hanger.svg";
import SustainabilityIcon from "../assets/Icons/sustainability.svg";
import ProfileIcon from "../assets/Icons/profile.svg";

const Navigation = () => {
  return (
    <nav className="navigation" aria-label="Main Navigation">
      <NavLink
        to="/home"
        aria-label="Home Page"
        className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
      >
        <img src={HomeIcon} alt="Home" />
      </NavLink>

      <NavLink
        to="/wardrobe"
        aria-label="Wardrobe Page"
        className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
      >
        <img src={WardrobeIcon} alt="Wardrobe" />
      </NavLink>

      <NavLink
        to="/outfit-planner"
        aria-label="Outfit Planner Page"
        className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
      >
        <img
          src={HangerIcon}
          alt="Outfit Planner"
          style={{ width: "45px", height: "45px" }}
        />
      </NavLink>

      <NavLink
        to="/sustainability-tips"
        aria-label="Sustainability Tips Page"
        className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
      >
        <img src={SustainabilityIcon} alt="Sustainability Tips" />
      </NavLink>

      <NavLink
        to="/profile"
        aria-label="Profile Page"
        className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
      >
        <img src={ProfileIcon} alt="Profile" />
      </NavLink>
    </nav>
  );
};

export default Navigation;
