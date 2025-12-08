import React, { useState } from 'react';

const Card = (props) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  const hasLiveLink = props.seelive && props.seelive !== '#';
  const hasSourceLink = props.seesource && props.seesource !== '#';

  return (
    <>
      <div className="modern-card" data-aos="slide-up" onClick={toggleModal}>
        <div className="card-image-container">
          <img src={props.image} alt="project screenshoot" className="card-image" />
          <div className="card-overlay">
            <button className="view-details-btn" onClick={(e) => { e.stopPropagation(); toggleModal(); }}>
              <i className="fas fa-eye" />
              View Details
            </button>
          </div>
        </div>

        <div className="card-content">
          <div className="card-header">
            <span className="card-category">{props.category}</span>
            <div className="tech-badge">
              <i className="fas fa-code" />
              <span>{props.tech}</span>
            </div>
          </div>

          <div className="card-title-section">
            <h3 className="card-title">{props.title}</h3>
            <button className="expand-btn" onClick={(e) => { e.stopPropagation(); toggleModal(); }}>
              <i className="fas fa-expand-alt" />
            </button>
          </div>

          <div className="card-footer">
            <div className="project-links">
              {hasLiveLink && (
                <a href={props.seelive} target="_blank" rel="noreferrer" className="link-btn live-link" onClick={(e) => e.stopPropagation()}>
                  <i className="fas fa-external-link-alt" />
                  Live
                </a>
              )}
              {hasSourceLink && (
                <a href={props.seesource} target="_blank" rel="noreferrer" className="link-btn source-link" onClick={(e) => e.stopPropagation()}>
                  <i className="fab fa-github" />
                  Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modern Modal */}
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay" />
          <div className="modal-content modern-modal">
            <div className="modal-header">
              <div className="modal-title-section">
                <span className="modal-category">{props.category}</span>
                <h1 className="modal-title">{props.title}</h1>
              </div>
              <button type="button" className="close-modal" onClick={toggleModal}>
                <i className="fas fa-times" />
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-image">
                <img src={props.image} alt={props.title} />
              </div>

              <div className="modal-info">
                <div className="tech-stack">
                  <h3>Tech Stack</h3>
                  <p>{props.tech}</p>
                </div>

                <div className="description">
                  <h3>About Project</h3>
                  <p>{props.description}</p>
                </div>

                <div className="modal-actions">
                  {hasLiveLink ? (
                    <a href={props.seelive} target="_blank" rel="noreferrer" className="btn btn-primary">
                      <i className="fas fa-external-link-alt" />
                      See Live
                    </a>
                  ) : (
                    <div className="btn btn-disabled">
                      <i className="fas fa-link-slash" />
                      No Live Link
                    </div>
                  )}

                  {hasSourceLink ? (
                    <a href={props.seesource} target="_blank" rel="noreferrer" className="btn btn-secondary">
                      <i className="fab fa-github" />
                      View Code
                    </a>
                  ) : (
                    <div className="btn btn-disabled">
                      <i className="fas fa-lock" />
                      Private Repository
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
