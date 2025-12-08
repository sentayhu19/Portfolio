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
      <div className="box btn_shadow width" data-aos="slide-up">
        <div className="img">
          <img src={props.image} alt="project screenshoot" onClick={toggleModal} />
        </div>
        <div className="category d_flex flex-dir">
          <span onClick={toggleModal}>{props.category}</span>
          <label>
            <i className="fa-solid fa-check" />
            {' '}
            {props.tech}
          </label>
        </div>
        <div className="title">
          <h2 onClick={toggleModal}>{props.title}</h2>
          <a href="#popup" className="arrow" onClick={toggleModal}>
            <i className="fas fa-arrow-right" />
          </a>
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
