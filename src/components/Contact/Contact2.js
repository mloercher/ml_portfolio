
import "./index.css";
import resume from '../../assets/images/MarkLoercherResume.pdf'


function Contact() {

  return (
    <section >
      <h1>LET'S CONNECT:</h1>
      <ul className="cont-container">
        <li>
          <h2>EMAIL</h2>
          <p><a href="mailto:markloercher@gmail.com">markloercher@gmail.com</a></p>
        </li>
        <li>
          <h2>GITHUB</h2>
          <p><a
            href="https://www.github.com/mloercher"
            target="_blank"
            without
            rel="noreferrer"
          >mloercher</a></p>
        </li>
        <li>
          <h2>RESUME</h2>
          <p><a href={resume} download>Download here ☺</a></p>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
