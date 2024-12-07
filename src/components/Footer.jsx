
import "./styles/Footer.css"; // Reuse the same CSS file for styling

const Footer = () => {
  return (
    <div className="navbar footer">
      <div className="navbar__footer">
        <p>&copy; {new Date().getFullYear()} FLARJELEARNING. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
