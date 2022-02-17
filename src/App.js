import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style/index.css';
import './assets/style/responsive.css';
import Axios from 'axios';
import Navbar from './component/navbar';
import Menu from './component/menu';
import Content1 from './component/component1';
import Content2 from './component/component2';
import Content3 from './component/component3';
import Footer from './component/footer';

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
      <Navbar setData={setData}/>
      {/* End component navbar */}

      {/* Component menu */}
      <Menu />
      {/* End component menu */}

      {/* Component contents */}
      <Content1 news={news} />
      {/* End component contents */}

      {/* Component contents */}
      <Content2 news={news} />
      {/* End component contents */}

      {/* Component contents */}
      <Content3 news={news} />
      {/* End component contents */}

      {/* Component footer */}
      <Footer />
      {/* End component footer */}
    </div>
  );
}
