import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../components/css/Sidebar.css';

function Sidebar() {
  const location = useLocation();

  // Adjust sidebar height based on navbar
  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    const sidebar = document.querySelector('.sidebar');
    if (navbar && sidebar) {
      const navbarHeight = navbar.offsetHeight;
      sidebar.style.top = `${navbarHeight}px`;
      sidebar.style.height = `calc(100vh - ${navbarHeight}px)`;
    }
  }, []);

  return (
    <div className="sidebar">
       
      <ul className="menu">
        <li>
          <Link 
            to="/" 
            className={`menu-item ${location.pathname === '/' ? 'active' : ''}`}
          >
            <i className="icon-home"></i>
            <span>Home</span>
            <span className="unread-badge">1</span>
          </Link>
        </li>
        <li>
          <Link 
            to="/policy-hub" 
            className={`menu-item ${location.pathname === '/policy-hub' ? 'active' : ''}`}
          >
            <i className="icon-policy"></i>
            <span>Policy Hub</span>
          </Link>
        </li>
        <li>
          <Link 
            to="/my-tickets" 
            className={`menu-item ${location.pathname === '/my-tickets' ? 'active' : ''}`}
          >
            <i className="icon-tickets"></i>
            <span>My Tickets</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;