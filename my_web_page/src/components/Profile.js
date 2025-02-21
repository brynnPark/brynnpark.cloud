import React from 'react';

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
          <p><strong> Cloud Computing, DevOps & SRE Enthusiast ! </strong></p>
          <p>
            <code className="code-block cloud-engineering">Cloud Engineering</code>
            <code className="code-block solutions-architect">Solutions Architect</code>
            <code className="code-block aws">AWS</code>
            <code className="code-block gcp">GCP</code>
            <code className="code-block devops">DevOps</code>
          </p>
        </div>
        <div className="main-content">
          <div className="technical-research">
            <h3>Technical Research</h3>

            <p>
              <figure className="link-to-sns">
                <a href="https://tech.brynnpark.cloud"> Brynn’s Tech Blog </a>
              </figure>
              <figure className="link-to-sns">
                <a href="https://brynn-park.tistory.com/"> Tistory </a>
              </figure>
            </p>
            <li><strong> Tech Blog  ⎯  Cloud & Computer Science</strong></li>
            <li><strong>Tistory  ⎯  Blockchain & Algorithms </strong></li>
            <br></br>
            <br></br>

            <h3>Contact</h3>
            <p><i class="fa fa-envelope" aria-hidden="true"></i> <strong>E-mail : pbh7080@gmail.com</strong></p>
            <p>
              <figure className="link-to-sns">
                <a href="https://www.linkedin.com/in/bohyeon-park-3a79611b6/">
                  <i className="fab fa-linkedin"></i> <strong>LinkedIn</strong>
                </a> 
              </figure>
              <figure className="link-to-sns">
                <a href="https://github.com/brynnPark">
                  <i className="fab fa-github"></i> <strong>Github</strong>
                </a> 
              </figure>
              <figure className="link-to-sns">
                <a href="https://www.instagram.com/brynnee.park/">
                  <i className="fab fa-instagram"></i> <strong>Instagram</strong>
                </a>
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