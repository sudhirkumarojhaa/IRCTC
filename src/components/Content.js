import React,{useState} from 'react'
import icon from '../assets/icon.png';
import {InputText, InputDate, InputSelect }from './Input';
import {useHistory } from 'react-router-dom';
import ex from '../assets/ex.png'

export default function Content() {
  const [from,setFrom]= useState('');
  const [to, setTo] = useState('');
  const [type, setType] = useState('');
  const history = useHistory();

  const handleSubmit=()=> {
    history.push({
      pathname: '/list',
      state: {
        from: from,
        to: to,
      }
    });
  }

  const enabled = from!=='' && to !== '';

  const change=()=>{
    setFrom(to)
    setTo(from)
  }

  return (
    <section className="content">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5">
            <div className="box bg-white">
              <h1 className="title text-capitalize text-center">Book your ticket </h1>
              <img src={icon} alt="inr-logo" className=" d-block mx-auto pb-3"/>
              <InputText placeholder="From*" value={from} onChange={e=>setFrom(e.target.value)}/>
              <div className="ex" onClick={()=> change()}>
                <img className="img-fluid" src={ex} alt="ex" />
              </div>
              <InputText placeholder="To*" value={to} onChange={e => setTo(e.target.value)}/>
              <InputDate />
              <InputSelect value={type} onChange={e => setType(e.target.value )}/>
              <button type="button" className="btn btn-primary w-100 my-2 mt-4" disabled={!enabled} onClick={()=> handleSubmit()}>Find Trains</button>
              </div>
            </div>
           <div className="col-md-7">
             <div className="banner-content">
              <h2 className="text-uppercase py-1 font-weight-bold text-white text-center">Indian Railways</h2>
              <h6 className="text-uppercase font-weight-bold text-white text-center">Safety | Security | Punctuality</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
