import React, { useState, useEffect } from 'react';
import dummy from './assets/images/dummy.png';
import { faUpload, faUser, faSearch, faPlus, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style/index.css';
import './assets/style/responsive.css';
import Axios from 'axios';

export default function App() {

  const [search, setSearch] = useState('football');
  const [news, setNews] = useState(['']);

  const baseURL = 'https://newsapi.org/v2/everything';
  const apiKey = '7960922a77804ea58345312af185bf0f';

  useEffect(() => {
    Axios.get(`${baseURL}?q=${search}&sortBy=popularity&apiKey=${apiKey}`)
    .then(res => {
      setNews(res.data.articles)
    })
  }, [news])
  
  const setData = (e) => {
    e.preventDefault()
    Axios.get(`${baseURL}?q=${search}&sortBy=popularity&apiKey=${apiKey}`)
    .then(res => {
      setNews(res.data.articles)
    })
  }

  return (
    <div className="app">
      {/* Component navbar */}
      <nav className="navbar">
        <div className="nav-center">
          <h1>Social Network</h1>
          <div className="wrap-search-input">
            <form onSubmit={setData}>
              <input type="text" name="search" placeholder="Find..." value={search} onChange={(e) => setSearch(e.target.value)}/>
              <FontAwesomeIcon icon={faSearch} />
            </form>
          </div>
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
      </nav>
      {/* End component navbar */}

      {/* Component menu */}
      <section className="menu">
        <ul>
          <li>Videos</li><span>/</span>
          <li>People</li><span>/</span>
          <li>Document</li><span>/</span>
          <li>Events</li><span>/</span>
          <li>Components</li><span>/</span>
          <li>Favorites</li><span>/</span>
          <li>Channels</li>
        </ul>
      </section>
      {/* End component menu */}

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
                      <img src={news[0]?.urlToImage} alt="image" />
                    )
                  }
                  </div>
                </div>

              <div className="videos-top-right">
                <div className="child-videos">
                {
                    news.length ? (
                      <img src={news[1]?.urlToImage} alt="image" />
                    ) : (
                      // DUmmy Image
                      <img src={dummy} alt="image" />
                    )
                }
                </div>
                <div className="child-videos">
                {
                    news.length ? (
                      <img src={news[2]?.urlToImage} alt="image" />
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
                      <img src={news[3]?.urlToImage} alt="image" />
                    ) : (
                      // DUmmy Image
                      <img src={dummy} alt="image" />
                    )
                }
                </div>
                <div className="child-videos">
                {
                    news.length ? (
                      <img src={news[4]?.urlToImage} alt="image" />
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
                          <img src={data.urlToImage} alt="image" />
                      </div>
                      <div className="child-list-deskipsi">
                          <div className="deskripsi-top">
                            <h3>Adm stainlor</h3> <small>Commented</small>
                          </div>
                          <div className="deskripsi-bottom">
                            <p>I will used videos. thanks for all</p>
                          </div>
                          <div className="time">
                            <FontAwesomeIcon className="comment-icon" icon={faComment} /> <h4>2 seconds ago</h4>
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
      {/* End component contents */}


      {/* Component contents */}
      <section className="content2">
        <div className="content-left">
          <div className="title-content-left">
            <h2>People</h2>
            <small>View all</small>
          </div>
          <div className="content-left-videos">
          <div className="videos-top">
              <div className="videos-top-left">
                  <div className="child-videos">
                  {
                    news.length && (
                      <img src={news[5]?.urlToImage} alt="image" />
                    )
                  }
                  </div>
                </div>

              <div className="videos-top-right">
                <div className="child-videos">
                {
                    news.length ? (
                      <img src={news[6]?.urlToImage} alt="image" />
                    ) : (
                      // DUmmy Image
                      <img src={dummy} alt="image" />
                    )
                }
                </div>
                <div className="child-videos">
                {
                    news.length ? (
                      <img src={news[7]?.urlToImage} alt="image" />
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
                      <img src={news[8]?.urlToImage} alt="image" />
                    ) : (
                      // DUmmy Image
                      <img src={dummy} alt="image" />
                    )
                }
                </div>
                <div className="child-videos">
                {
                    news.length ? (
                      <img src={news[9]?.urlToImage} alt="image" />
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
            <h2>Channels</h2>
            <small>Browse all channels</small>
          </div>
          <div className="list-content-right">
          {
              news.map((data, index) => {
                if(index > 5 && index < 16) {
                  return (
                    <div className="child-list" key={index}>
                      <img src={data.urlToImage} alt={data.title} />
                      <small>{data.author}</small>
                  </div>
                  )
                }
              })
            }
          </div>
        </div>
      </section>
      {/* End component contents */}


      {/* Component contents */}
      <section className="content3">
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
                      <img src={news[7]?.urlToImage} alt="image" />
                    )
                  }
                  </div>
                </div>

              <div className="videos-top-right">
                <div className="child-videos">
                {
                    news.length ? (
                      <img src={news[8]?.urlToImage} alt="image" />
                    ) : (
                      // DUmmy Image
                      <img src={dummy} alt="image" />
                    )
                }
                </div>
                <div className="child-videos">
                {
                    news.length ? (
                      <img src={news[9]?.urlToImage} alt="image" />
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
                      <img src={news[10]?.urlToImage} alt="image" />
                    ) : (
                      // DUmmy Image
                      <img src={dummy} alt="image" />
                    )
                }
                </div>
                <div className="child-videos">
                {
                    news.length ? (
                      <img src={news[11]?.urlToImage} alt="image" />
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


      {/* Component footer */}
      <footer className="footer">
          <div className="wrap-sosmed">
            <div className="child-sosmed">
              <i className="lab la-twitter"></i>
            </div>
            <div className="child-sosmed">
              <i className="lab la-linkedin-in"></i>
            </div>
            <div className="child-sosmed">
              <i className="lab la-facebook"></i>
            </div>
          </div>
          <div className="menu-footer">
            <ul>
              <li>Videos</li><span>/</span>
              <li>People</li><span>/</span>
              <li>Document</li><span>/</span>
              <li>Events</li><span>/</span>
              <li>Components</li><span>/</span>
              <li>Favorites</li><span>/</span>
              <li>Channels</li>
            </ul>
          </div>
          <small>©Copyright 2013 companyname inc</small>
          <div className="menu-footer2">
            <ul>
              <li>Privacy</li><span>/</span>
              <li>Terms</li>
            </ul>
          </div>
      </footer>
      {/* End component footer */}


      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
