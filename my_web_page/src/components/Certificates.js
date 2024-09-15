import React from 'react';

function Certificate() {
  return (
    <div className="certificate">
      <h1>Certificates</h1>
      
      {/* Certificate Item 1 */}
      <div className="certificate-item">
        <div className="certificate-image">
          <img src="/aws-certified-solutions-architect-associate.png" alt="AWS Certificate" />
        </div>
        <div className="certificate-text">
          <h3><strong>AWS Solutions Architect Associate Certification (2024.08)</strong></h3>
        </div>
      </div>

      {/* Certificate Item 2 */}
      <div className="certificate-item">
        <div className="certificate-image">
          <img src="/associate-cloud-engineer-certification.png" alt="GCP Certificate" />
        </div>
        <div className="certificate-text">
          <h3><strong>GCP Associate Cloud Engineer Certification (2024.06)</strong></h3>
        </div>
      </div>
      
    </div>
  );
}

export default Certificate;
