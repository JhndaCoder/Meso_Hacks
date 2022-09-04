import React from 'react';
import {Fragment} from 'react';
import './Home.css';
import HomeImg from './../../Assets/home-img.png';
import Logo from './../../Assets/nav-logo.png';
import HomeText from './../../Assets/HomeText.png';
import HomeBg from './../../Assets/HomeBG.png';

function Home () {
  return (
    <Fragment>
      <div className="Home m-0 p-0">
        <img src={HomeBg} className="homeBg" alt="" />

        {/* Navbar */}
        <nav className="navbar navbar-expand-md">
          <div className="container-xxl pb-2">
            <a href="#intro" className="navbar-brand">
              <img src={Logo} alt="logo here" className="img-fluid" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#main-nav"
              aria-controls="main-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-center position-absolute top-0 end-0 my-lg-4 px-lg-5 mx-lg-5"
              id="main-nav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="/" className="nav-link">Packages</a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">Hospitals</a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">Doctors</a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link signIn rounded-pill">
                    Sign in
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/"
                    className="nav-link consultBtn btn-light rounded-pill text-dark px-3"
                  >
                    Free Consulting
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Content */}
        <div className="home-content row justify-content-between align-items-center m-0 p-0">
          <div className="home-text col-6 row">
            <div className="home-head justify-content-center row">
              <img src={HomeText} alt="" className="col-12" />

              <div className="col-12 my-5 text-center">
                <span className="text-center m-5 text-dark m-3 tagline">
                  Find the right cure, at the right cost
                </span>
                <br />
                <button className="btn rounded-pill search-btn py-2 m-4 px-3 text-center">
                  Search Now
                </button>
              </div>
            </div>
          </div>
          <img src={HomeImg} alt="" className="col-6 img-fluid" />;
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
