
import "./index.css";
import resume from '../../assets/images/MarkLoercherResume.pdf'


function Contact() {
 
  return (
    <section>
      <h1>THANKS FOR STOPPING BY!</h1>
        <ul>
            <li>
                EMAIL: MarkLoercher@gmail.com
            </li>
            <li>
                GITHUB: mloercher
            </li>
            <li>
                EMAIL: MarkLoercher@gmail.com
            </li>
            <li>
                <a href={resume} download>Download Here</a>RESUME
            </li>
        </ul>
    </section>
  );
}

export default Contact;
