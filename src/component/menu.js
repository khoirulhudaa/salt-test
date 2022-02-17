import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Menu() {
  
  return (
    <div className="app">
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
    </div>
  );
}
