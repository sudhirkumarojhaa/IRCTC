import React from 'react';

export default function TrainDetails({trainName, trainNumber,from,to,arrival,departs,duration,style,iconArrival,iconDepart,status,show,onClick,onClickHide}) {
  return (
    <div className="row train-row p-3 bg-white m-3 align-items-center" style={style}>
      <div className="col-sm-3 col-res">
        <div>
        <p className="text-uppercase small text-primary font-weight-bold"> <i className="fas fa-train"></i> {trainName} ({trainNumber})</p>
        </div>
        <div>
        <p className="text-uppercase small text-primary font-weight-regular">{from} - {to}</p>
        </div>
        <div>
          <p className="small text-primary font-weight-bold">Depart on: All Days</p>
        </div>
      </div>
      <div className="col-sm-5">
        <div className="row d-flex justify-content-around align-items-center">
          <div className="d-flex flex-column align-items-center">
            {iconArrival}
            <p className="small font-weight-bold  py-2">{arrival}</p>
          </div>
          <div className="d-flex flex-column align-items-center">
            {iconDepart}
            <p className="small font-weight-bold py-2">{departs}</p>
          </div>
          <div className="d-flex flex-column align-items-center">
            <i className="far fa-clock text-primary"></i>
            <p className="small font-weight-bold  py-2">{duration}</p>
          </div>
        </div>
      </div>
      <div className="col-sm-2">
        <div className="form-group btn-sm small">
          <select className="form-control custom-option" id="sel1">
            <option>All Classes</option>
            <option>Anubhuti Class (EA)</option>
            <option>AC First Class (1A)</option>
            <option>Sleeper</option>
            <option>AC 2 Tier</option>
            <option>AC 3 Chair Car Tier</option>
            <option>AC 3 Tier Economy</option>
            <option>Second Sitting</option>
          </select>
        </div>
      </div>
      <div className="col-sm-2 col-res">
        {show ?
        <div className="d-flex flex-column align-items-center">
          <p className="small font-weight-bold text-success text-uppercase text-center  py-2">Available {status}</p>
          <button type="button" className="btn btn-primary btn-sm custom-option font-weight-bold mx-auto w-auto" onClick={onClickHide}>Book Now</button>
          </div> : <button type="button" className="btn btn-primary btn-sm custom-option font-weight-bold " onClick={onClick}>Check Availability & Fare</button>
          }
      </div>
    </div>
  )
}
