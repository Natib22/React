import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/navbarcss.css';

// Define the function for the styles
const getNavLinkStyles = ({ isActive }) => {
  //backgroundColor: isActive ? 'black' : '#3932bb',
  if (isActive) {
    return {
      color: 'white',
      textDecoration: 'underline',
      textDecorationColor: 'white',
      textDecorationThickness: '1px',
      
    
    
    };
  }
};

const Navbar = () => {
  const showSideBar = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
  };

  const hideSidebar = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#">NB Jobs</a></li>
        <li className='hideonmobile'>
          <NavLink to="/" style={getNavLinkStyles}>
            Home
          </NavLink>
        </li>
        <li className='hideonmobile'>
          <NavLink to="/Jobs" style={getNavLinkStyles}>
            Jobs
          </NavLink>
        </li>
        <li className='hideonmobile'>
          <NavLink to="/addjob" style={getNavLinkStyles}>
            Add Jobs
          </NavLink>
        </li>
        <li onClick={showSideBar} className='menubutton'>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#37ff00">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </a>
        </li>
      </ul>

      {/* for the mobile navbar */}
      <ul className="sidebar">
        <li onClick={hideSidebar}>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#37ff00">
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </a>
        </li>
        <li>
          <NavLink to="/" style={getNavLinkStyles}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Jobs" style={getNavLinkStyles}>
            Jobs
          </NavLink>
        </li>
        <li>
          <NavLink to="/addjobs" style={getNavLinkStyles}>
            Add Jobs
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
