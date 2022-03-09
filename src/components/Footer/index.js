import React from "react";
import "./index.css";
import gitLogo from "../../assets/images/git.png";
import linkedInLogo from "../../assets/images/link.png";
import stackLogo from "../../assets/images/stack.png";

function Footer() {
  return (
      <footer className="flex-row px-1" id="footerContainer">
        <a
          href="https://www.linkedin.com/in/mark-loercher-682279180/"
          target="_blank"
          without
          rel="noreferrer"
        >
          <img className="footerImg" src={linkedInLogo} alt="linkedin logo"></img>
        </a>
        <a
          href="https://www.github.com/mloercher"
          target="_blank"
          without
          rel="noreferrer"
        >
          <img className="footerImg" src={gitLogo} alt="github logo"></img>
        </a>
        <a
          href="https://www.stackoverflow.com"
          target="_blank"
          without
          rel="noreferrer"
        >
          <img className="footerImg" src={stackLogo} alt="stack overflow logo"></img>
        </a>
      </footer>
  );
}

export default Footer;
