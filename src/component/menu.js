import React from 'react';
import { faUpload, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Menu() {
  return (
    <>
      {/* Component menu */}
      <section className="menu" data-aos="fade-up">
        <ul>
          <li
            className="li-modal"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <div className="li-modal-div"></div>
            <div className="li-modal-div"></div>
            <div className="li-modal-div"></div>
          </li>
          <li>
            <a href="#videos">Videos</a>
          </li>
          <span>/</span>
          <li>
            <a href="#people">People</a>
          </li>
          <span>/</span>
          <li>
            <a href="#documents">Document</a>
          </li>
          <span>/</span>
          <li>
            <a href="#events">Events</a>
          </li>
          <span>/</span>
          <li>
            <a href="#components">Components</a>
          </li>
          <span>/</span>
          <li>
            <a href="#cfavorites">Favorites</a>
          </li>
          <span>/</span>
          <li>
            <a href="#channels">Channels</a>
          </li>
        </ul>
      </section>
      {/* End component menu */}

      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <button className="btn-nav">
                <FontAwesomeIcon icon={faUpload} />
                Upload
              </button>
              <div className="profile">
                <FontAwesomeIcon className="user-icon" icon={faUser} />
                <p>Jhon doe</p>
                <span className="notif">10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End modal */}
    </>
  );
}
