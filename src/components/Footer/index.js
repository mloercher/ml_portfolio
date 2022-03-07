import React from "react";
import "./index.css";
import gitLogo from "../../assets/images/git.png";
import linkedInLogo from "../../assets/images/link.png";
import stackLogo from "../../assets/images/stack.png";

function Footer() {
  return (
    <div>
      <footer className="flex-row px-1" id="container">
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          without
          rel="noreferrer"
        >
          <img src={linkedInLogo} alt="linkedin logo"></img>
        </a>
        <a
          href="https://www.github.com/mloercher"
          target="_blank"
          without
          rel="noreferrer"
        >
          <img src={gitLogo} alt="github logo"></img>
        </a>
        <a
          href="https://www.stackoverflow.com"
          target="_blank"
          without
          rel="noreferrer"
        >
          <img src={stackLogo} alt="stack overflow logo"></img>
        </a>
      </footer>
    </div>
  );
}

export default Footer;
