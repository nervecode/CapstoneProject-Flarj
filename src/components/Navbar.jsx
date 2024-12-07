import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import "./styles/Navbar.css";

const Navbar = () => {
  const handlePrint = () => {
    const link = document.createElement("a");
    link.href =
      "/src/assets/FLAR-J.pdf"; /* Path to the PDF in the public folder */
    link.download = "FLAR-J.pdf"; /* Name of the downloaded file */
    link.click();
  };

  return (
    <div className="navbar">
      <a className="navbar__logo">
        <img src={Logo} alt="logo" className="logo" />
      </a>
      <div className="navbar__links">
        <Link to="/HomePage" className="link">
          Home Page
        </Link>
        <Link to="/star" className="link">
          Star Page
        </Link>
        <Link to="/diamond" className="link">
          Diamond Page
        </Link>
        <Link to="/heart" className="link">
          Heart Page
        </Link>
      </div>
      <div className="navbar__button">
        <button onClick={handlePrint}> PRINT </button>
      </div>
    </div>
  );
};

export default Navbar;
