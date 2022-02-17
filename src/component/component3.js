import React from 'react';
import dummy from '../assets/images/dummy.png';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Content2({news}) {
  return (
    <>
      {/* Component contents */}
      <section className="content3" id="documents">
        <div className="content-left">
          <div className="title-content-left">
            <h2>Documents</h2>
            <small className="small2">Browse all documents</small>
          </div>
          <div className="content-left-videos">
          <div className="videos-top">
              <div className="videos-top-left">
                  <div className="child-videos">
                  {
                    news.length && (
                      <img src={news[7]?.largeImageURL} alt="image" />
                    )
                  }
                  </div>
                </div>

              <div className="videos-top-right">
                <div className="child-videos">
                {
                    news.length ? (
                      <img src={news[8]?.largeImageURL} alt="image" />
                    ) : (
                      // DUmmy Image
                      <img src={dummy} alt="image" />
                    )
                }
                </div>
                <div className="child-videos">
                {
                    news.length ? (
                      <img src={news[9]?.largeImageURL} alt="image" />
                    ) : (
                      // DUmmy Image
                      <img src={dummy} alt="image" />
                    )
                }
                </div>
              </div>

            </div>

            <div className="videos-bottom">
                <div className="child-videos">
                {
                    news.length ? (
                      <img src={news[10]?.largeImageURL} alt="image" />
                    ) : (
                      // DUmmy Image
                      <img src={dummy} alt="image" />
                    )
                }
                </div>
                <div className="child-videos">
                {
                    news.length ? (
                      <img src={news[11]?.largeImageURL} alt="image" />
                    ) : (
                      // DUmmy Image
                      <img src={dummy} alt="image" />
                    )
                }
                </div>
                <div className="child-upload-videos">
                <FontAwesomeIcon className="add-icon" icon={faPlus} />
                <h4>Upload <br /> Your Own Video</h4>
                </div>
            </div>
          </div>
        </div>
      </section>
      {/* End component contents */}
    </>
  );
}
