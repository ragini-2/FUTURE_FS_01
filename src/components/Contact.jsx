import "../styles/Contact.css";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-container">

        {/* Contact Information */}

        <div className="contact-info">

          <a
            href="mailto:raginibhaskariloni@gmail.com"
            className="contact-card"
          >
            <FaEnvelope className="contact-icon" />

            <div>
              <h3>Email</h3>
              <p>raginibhaskariloni@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+916281187433"
            className="contact-card"
          >
            <FaPhone className="contact-icon" />

            <div>
              <h3>Phone</h3>
              <p>+91 6281187433</p>
            </div>
          </a>

          <a
            href="https://maps.google.com/?q=Warangal,Telangana"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <FaMapMarkerAlt className="contact-icon" />

            <div>
              <h3>Location</h3>
              <p>Warangal, Telangana</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/iloni-ragini-8a163b336"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <FaLinkedin className="contact-icon" />

            <div>
              <h3>LinkedIn</h3>
              <p>View LinkedIn Profile</p>
            </div>
          </a>

          <a
            href="https://github.com/ragini-2"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <FaGithub className="contact-icon" />

            <div>
              <h3>GitHub</h3>
              <p>View GitHub Profile</p>
            </div>
          </a>

        </div>

        {/* Contact Form */}

        <form className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            placeholder="Subject"
            required
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}

export default Contact;