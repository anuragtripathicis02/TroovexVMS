import { Link } from "react-router-dom";
import Logo from "../assets/images/logo-dashboard.svg"; 
import SmallLogo from "../assets/images/small-logo.svg";

const LogoDashboard = () => {

  const handleToggle = () => {
    document.body.classList.toggle("sidebarOpen"); 
  };

  return (
    <div className="logo me-auto d-flex justify-between align-items-center">

      <div className="logo-box">
        <Link to="/dashboard" className="big-logo">
          <img src={Logo} alt="logo" />
        </Link>
        <Link to="/dashboard" className="small-logo">
          <img src={SmallLogo} alt="logo" />
        </Link>
      </div>

      <button className="toggle-btn ms-3 d-xl-block d-none" onClick={handleToggle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path></svg>
      </button>

    </div>
  );
};

export default LogoDashboard;