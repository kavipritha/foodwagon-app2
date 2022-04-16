import React from 'react'
import './header.scss'
import LogoImg from '../../static/icons/logo.svg'
import MapMarkerIcon from '../../static/icons/map_marker.svg'
import SearchIcon from '../../static/icons/search.svg'
import UserIcon from '../../static/icons/user.svg'

 import { Link} from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light fixed-top header"
        data-navbar-on-scroll="data-navbar-on-scroll"
      >
        <div className="container">
          <a className="navbar-brand d-inline-flex" href="index.html">
            <img className="d-inline-block" src={LogoImg} alt="logo" />
            <span className="text-1000 fs-3 fw-bold ms-2 text-gradient">
              foodwaGon
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"> </span>
          </button>
          <div
            className="collapse navbar-collapse border-lg-0 my-2 mt-lg-0"
            id="navbarSupportedContent"
          >
            <div className="mx-auto pt-5 pt-lg-0 d-block d-lg-none d-xl-block">
              <p className="mb-0 fw-bold text-lg-center">
                Deliver to:{' '}
                <Link to="/Private">
                <img
                  className="mapMarkerIcon"
                  src={MapMarkerIcon}
                  alt="map Market Icon"
                />
                </Link>
                
                <span className="fw-normal">Current Location </span>
                <span>Mirpur 1 Bus Stand, Dhaka</span>
              </p>
            </div>
            <form className="d-flex mt-4 mt-lg-0 ms-lg-auto ms-xl-0">
              <div className="input-group-icon pe-2 d-flex">
                <img className="searchIcon" src={SearchIcon} alt="search icon" />
                <input
                  className="form-control border-0 input-box bg-100"
                  type="search"
                  placeholder="Search Food"
                  aria-label="Search"
                />
              </div>
              <Link to="/Login">
              <button
                className="btn btn-white shadow-warning text-warning"
                type="submit">
                {' '}
                <img className="userIcon" src={UserIcon} alt="map marker icon" />
                Login
              </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
