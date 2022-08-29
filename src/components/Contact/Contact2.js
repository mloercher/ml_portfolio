
import "./index.css";
import resume from '../../assets/images/Mark_Loercher_Resume.pdf'


function Contact() {

  return (
    <div className="info-main">
      <div className="header">
      <h1>LET'S CONNECT:</h1>
      </div>
      <ul className="cont-container">
        <div className="email-git">
        <li>
          <h2 className="connect-title">EMAIL</h2>
          <p className="links"><a href="mailto:markloercher@gmail.com">markloercher@gmail.com</a></p>
        </li>
        <li>
          <h2 className="connect-title">GITHUB</h2>
          <p className="links"><a
            href="https://www.github.com/mloercher"
            target="_blank"
            without
            rel="noreferrer"
          >mloercher</a></p>
        </li>
        </div>
        <li className="res">
          <h2 className="connect-title">RESUME</h2>
          <p className="links"><a href={resume} download>Download here ☺</a></p>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
