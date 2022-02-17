import React from 'react';
import dummy from '../assets/images/dummy.png';
import { faPlus, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Content1({news}) {
  return (
    <div className="app">
      {/* Component contents */}
      <section className="content">
        <div className="content-left">
          <div className="title-content-left">
            <h2>Videos</h2>
            <small className="small1">Browse all videos</small>
          </div>
          <div className="content-left-videos">
            <div className="videos-top">
              <div className="videos-top-left">
                  <div className="child-videos">
                  {
                    news.length && (
                      <img src={news[0]?.largeImageURL} alt="image" />
                    )
                  }
                  </div>
                </div>

              <div className="videos-top-right">
                <div className="child-videos">
                {
                    news.length ? (
                      <img src={news[1]?.largeImageURL} alt="image" />
                    ) : (
                      // DUmmy Image
                      <img src={dummy} alt="image" />
                    )
                }
                </div>
                <div className="child-videos">
                {
                    news.length ? (
                      <img src={news[2]?.largeImageURL} alt="image" />
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
                      <img src={news[3]?.largeImageURL} alt="image" />
                    ) : (
                      // DUmmy Image
                      <img src={dummy} alt="image" />
                    )
                }
                </div>
                <div className="child-videos">
                {
                    news.length ? (
                      <img src={news[4]?.largeImageURL} alt="image" />
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
        <div className="content-right">
          <div className="title-content-right">
            <h2>Active</h2>
            <small>View timeline/Filter activities</small>
          </div>
          <div className="list-content-right">
            {
              news.map((data, index) => {
                if(index > 4 && index < 10) {
                  return (
                    <div className="child-list" key={index}>
                      <div className="child-list-image">
                          <img src={data.largeImageURL} alt="image" />
                      </div>
                      <div className="child-list-deskipsi">
                          <div className="deskripsi-top">
                            <h3>{data.user}</h3> <small>{data.type}</small>
                          </div>
                          <div className="deskripsi-bottom">
                            <p>I will used videos. thanks for all</p>
                          </div>
                          <div className="time">
                            <FontAwesomeIcon className="comment-icon" icon={faComment} /> <h4>{data.comments} comments</h4>
                          </div>
                      </div>
                  </div>
                  )
                }
              })
            }
          </div>
        </div>
      </section>
      {/* End component content */}
    </div>
  );
}
