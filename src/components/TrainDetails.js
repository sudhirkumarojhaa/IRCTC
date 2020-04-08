import React from 'react';

export default function TrainDetails() {
  return (
    <div className="row shadow p-3 bg-white mb-5 m-3">
      <div className="col-sm-3 col-res">
        <div>
        <p className="text-uppercase small text-primary font-weight-bold"> <i class="fas fa-train"></i> Ajmer Shatabdi (12896)</p>
        </div>
        <div>
        <p className="text-uppercase small text-primary font-weight-regular">Jaipur - Gurgaon</p>
        </div>
        <div>
          <p className="small text-primary font-weight-bold">Depart on: All Days</p>
        </div>
      </div>
      <div className="col-sm-5">
        <div className="row d-flex justify-content-around align-items-center">
          <div className="d-flex flex-column align-items-center">
            <i class="fas fa-cloud-sun text-primary"></i>
            <p className="small font-weight-bold  py-2">06:35</p>
          </div>
          <div className="d-flex flex-column align-items-center">
            <i class="far fa-moon text-primary"></i>
            <p className="small font-weight-bold py-2">16:35</p>
          </div>
          <div className="d-flex flex-column align-items-center">
            <i class="far fa-clock text-primary"></i>
            <p className="small font-weight-bold  py-2">10:00</p>
          </div>
        </div>
      </div>
      <div className="col-sm-2">
        <div class="form-group btn-sm small">
          <select class="form-control custom-option" id="sel1">
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
        <button type="button" className="btn btn-primary btn-sm custom-option font-weight-bold ">Check Availability & Fare</button>
      </div>
    </div>
  )
}
