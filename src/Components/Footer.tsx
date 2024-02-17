import "../Styles/Footerstyle.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer>
      <a className="footericon" href="https://github.com/Neat-Fin" target="_blank">
        <FontAwesomeIcon icon={faGithub} /> 
      </a>
      <a className="footericon" href="https://www.youtube.com/" target="_blank">
        <FontAwesomeIcon icon={faYoutube} /> 
      </a>

      © Copyright 2024 Neatfin
     
    </footer>
  );
}

export default Footer;
