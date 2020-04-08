import React,{useState} from 'react'
import icon from '../assets/icon.png';
import {InputText, InputDate, InputSelect }from './Input';
import {useHistory } from 'react-router-dom';

export default function Content() {
  const [from,setFrom]= useState('');
  const [to, setTo] = useState('');
  const [type, setType] = useState('');
  const history = useHistory();

  const handleSubmit=()=> {
    history.push("/list");
  }

  return (
    <section className="content">
      <div className="container">
        <div class="row align-items-center">
          <div class="col-md-5 col-md-push-7">
            <div className="box bg-white">
              <h1 className="title text-capitalize text-center">Book your ticket </h1>
              <img src={icon} alt="inr-logo" className=" d-block mx-auto"/>
              <InputText placeholder="From*" value={from} onChange={e=>setFrom(e.target.value)}/>
              <InputText placeholder="To*" value={to} onChange={e => setTo(e.target.value)}/>
              <InputDate />
              <InputSelect value={type} onChange={e => setType(e.target.value )}/>
              <button type="button" class="btn btn-primary w-100 my-2" onClick={()=> handleSubmit()}>Find Trains</button>
              </div>
            </div>
           <div class="col-md-7 col-md-pull-5">
             <div className="banner-content">
              <h3 className="text-uppercase py-2 font-weight-bold text-white text-center">Indian Railways</h3>
              <h6 className="text-uppercase py-2 font-weight-bold text-white text-center">Safety | Security | Punctuality</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
