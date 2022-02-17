import React, { useState } from 'react';
import { faUpload, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar({setData}) {

const [search, setSearch] = useState('football');


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
    </div>
  );
}
