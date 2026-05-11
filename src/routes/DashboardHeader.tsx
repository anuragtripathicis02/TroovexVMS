import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Help from '../common/Icons/Help';
import Bell from '../common/Icons/Bell';
import LogoDashboard from '../common/LogoDashboard';
import CreateAddButton from '../common/CreateAddButton';

const DashboardHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [menuOpen]);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  const handleOverlayClick = () => {
  setMenuOpen(false);
};


 

  return (
    <div className='header-dashboard position-fixed top-0 w-100 z-3'>
      <div className='header-container'>
        <div className='d-flex'>
          <LogoDashboard />
          <div className='flex-grow-1 d-flex align-items-center'>
            <div className='ms-auto'>
              <div className='d-flex align-items-center gap-2'>
                <Link to="#" className='d-inline-block'>
                  <CreateAddButton />
                </Link>
                <Link to="/help" className='d-inline-block'>
                  <Help />
                </Link>
                <Link to="/notifications" className='d-inline-block'>
                  <Bell />
                </Link>
                <button
                  className={`btn d-xl-none bg-transparent border-0 p-0 ${menuOpen ? "active" : ""}`}
                  onClick={handleMenuToggle}
                >
                  <span className="mobile-nav">
                    <span className="bar1"></span>
                    <span className="bar2"></span>
                    <span className="bar3"></span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`overlay ${menuOpen ? "show" : ""}`}
          onClick={handleOverlayClick}
        ></div>
      </div>

    </div>
  );
};

export default DashboardHeader;