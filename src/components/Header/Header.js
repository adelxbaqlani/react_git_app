import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import "./Header.scss";


const Header = (props) => {


  const {reservationCompleted} = props;
  const menu = useRef();
  const nav__list_js = useRef();
  const nav = useRef();

  const activateNav = (e) => {
     //
      //
       //
    document.querySelector("body").classList.toggle("fixed-position");
    menu.current.classList.toggle("active");
    nav.current.classList.toggle("open");
    nav__list_js.current.classList.toggle("show");


  };

  const resetNav = () => {
    document.querySelector("body").classList.toggle("fixed-position");
    menu.current.classList.toggle("active");
    nav.current.classList.toggle("open");
    nav__list_js.current.classList.toggle("show");
  };

  return (
    <React.Fragment>
      <div
        ref={menu}
        onClick={(e) => {
          activateNav(e);
        }}
        className="menu menu-js"
      >
        <div className="menu__line"></div>
        <div className="menu__line"></div>
        <div className="menu__line"></div>
      </div>
      <nav ref={nav} className="nav nav-js">
        <ul ref={nav__list_js} className="nav__list nav__list-js">
          <li className='nav__item'>
            <Link onClick={() => resetNav()} to={"/"}>
              خانه
            </Link>
          </li>
          <li className={`nav__item ${reservationCompleted ? 'has-reserved' : ''}`}>
            <Link onClick={() => resetNav()} to={"/reservation"}>
              نوبت دهی
            </Link>
          </li>
          <li  className='nav__item'>
            <Link onClick={() => resetNav()} to={"/shop"}>
              فروشگاه
            </Link>
          </li>
          <li className='nav__item'>
            <Link onClick={() => resetNav()} to={"/blog"}>
              بلاگ
            </Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

const mapStatetoProps = (state , ownProps) =>{

  return { reservationCompleted : state.reservationStatus.reservationCompleted }

}
export default connect(mapStatetoProps,null) (Header);
