import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Profile() {
  return (
    <div className="profile">
      <figure className="image">
      <img
          src={`${process.env.PUBLIC_URL}/profilephoto.jpg`}
          alt="Profile"
        />
      </figure>
      <div className="content">
        <div className="details">
          <h1>Bohyeon Park | 박보현</h1>
          <p><strong>I’m interested in Solutions Architecting and Cloud Engineering : ) </strong></p>
          <p>
            <code className="code-block cloud-engineering">Cloud Engineering</code>
            <code className="code-block solutions-architect">Solutions Architect</code>
            <code className="code-block aws">AWS</code>
            <code className="code-block gcp">GCP</code>
          </p>
        </div>
        <div className="main-content">
          <div className="technical-research">
            <h3>Technical Research</h3>
            <p>I write posts and articles regarding technology.</p>
            <p>🔽 You can check them out below </p>
              <figure className="link-to-blog">
              <Link to="/blog">👩🏻‍💻 Brynn’s Tech Blog 👩🏻‍💻</Link> {/* Use Link component */}
              </figure>
          </div>
          <div className="contact">
            <h3>Contact</h3>
            <p><strong>E-mail : pbh7080@gmail.com</strong></p>
            <p>
              <figure className="link-to-sns">
                <a href="https://www.linkedin.com/in/bohyeon-park-3a79611b6/">
                  <i className="fab fa-linkedin"></i> <strong>LinkedIn</strong>
                </a> | 
              </figure>
              <figure className="link-to-sns">
                <a href="https://github.com/brynnPark">
                  <i className="fab fa-github"></i> <strong>Github</strong>
                </a> | 
              </figure>
              <figure className="link-to-sns">
                <a href="https://www.instagram.com/brynnee.park/">
                  <i className="fab fa-instagram"></i> <strong>Instagram</strong>
                </a> |
              </figure>
              <figure className="link-to-sns">
                <a href="https://x.com/BrynnPark_eth">
                  <i className="fab fa-twitter"></i> <strong>X</strong>
                </a>
              </figure>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;