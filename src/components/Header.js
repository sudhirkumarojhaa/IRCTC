import React,{useState} from 'react';
import inr from '../assets/inr.png';
import irctc from '../assets/irctc.png';
import '../App.css'
import { Menu, MenuModal } from './Menu';
import moment from 'moment';

export default function Header() {
  const [toggle,setToggle]= useState(false);

  const handleToggle=()=> {
    setToggle(!toggle)
  }

  return (
    <header className="d-flex justify-content-between align-items-center p-2 fixed-top bg">
      <div className="d-flex align-items-center">
        <div className="logo">
          <img src={inr} alt="inr-logo" className="img-fluid" />
        </div>
        <h5 className="text-center show px-3">Indian Railways</h5>
      </div>
      <div className="d-flex px-2 align-items-center">
        <div className="d-flex align-items-end flex-column">
          <div className="d-flex justify-content-between align-items-center">
            <p className="font-weight-bold  small text-capitalize text-dark top-menu">{moment().format("MM ddd, YYYY hh:mm:ss a")}</p>
            <p className="font-weight-bold  small text-uppercase text-danger top-menu">Alerts</p>
            <p className="font-weight-bold  small text-uppercase text-dark top-menu">A-</p>
            <p className="font-weight-bold  small text-uppercase text-dark top-menu">A</p>
            <p className="font-weight-bold  small text-uppercase text-dark top-menu">A+</p>
            <p className="font-weight-bold  small text-uppercase text-danger top-menu">Alerts</p>
          </div>
          {toggle ?
            <MenuModal /> : <Menu />
          }
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="logo logo-right  px-2">
            <img src={irctc} alt="irctc-logo" className="img-fluid" />
          </div>
          <div className="bars  px-2" onClick={() => handleToggle()}>{
            toggle ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>
          }
          </div>
        </div>
      </div>
    </header>
  )
}
