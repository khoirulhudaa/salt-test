import React from 'react';

export default function Footer({news}) {
  return (
      <>
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
    </>
  );
}
