import React from 'react'
import TrainDetails from './TrainDetails'

export default function ListItem() {
  return (
    <div className="list position-relative">
      <div className="container-fluid">
        <div className="row">
          <div className="sidebar">
            <div className="d-flex justify-content-between align-items-center">
              <p className="font-weight-bold small">Refine Results</p>
              <p className="font-weight-bold small text-primary">Reset</p>
            </div>
            <div className="filters">
              <div className="d-flex flex-column justify-content-around py-2 ">
                <div class="form-check form-check-inline my-2">
                  <label class="form-check-label text-info small px-2" for="inlineCheckbox1">Journey Class</label>
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                  <label class="form-check-label small" for="inlineCheckbox1">AC First Class</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                  <label class="form-check-label small" for="inlineCheckbox1">AC 2 Tier</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                  <label class="form-check-label small" for="inlineCheckbox1">AC 3 Tier</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                  <label class="form-check-label small" for="inlineCheckbox1">Sleeper Class</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                  <label class="form-check-label small" for="inlineCheckbox1">Second Sitting</label>
                </div>
              </div>
              <div className="d-flex flex-column justify-content-around py-2">
                <div class="form-check form-check-inline my-2">
                  <label class="form-check-label text-info small px-2" for="inlineCheckbox1">Train Types </label>
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                  <label class="form-check-label small text-uppercase font-weight-bold" for="inlineCheckbox1">Garib Rath</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                  <label class="form-check-label small text-uppercase font-weight-bold" for="inlineCheckbox1">Other</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                  <label class="form-check-label small text-uppercase font-weight-bold" for="inlineCheckbox1">Rajdhani</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                  <label class="form-check-label small text-uppercase font-weight-bold" for="inlineCheckbox1">Shatabdi</label>
                </div>
            </div>
            </div>
          </div>
          <div className="scroll position-relative">
            <div className="d-flex justify-content-between align-items-center hide position-absolute w-100 bg-white py-3">
              <div className="col-sm-3">
                <p className="font-weight-bold small text-center">Train Number & Name</p>
              </div>
              <div className="col-sm-4">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="font-weight-bold small text-center">Arrival</p>
                  <p className="font-weight-bold small text-center">Departure</p>
                  <p className="font-weight-bold small text-center">Duration</p>
                </div>
              </div>
              <div className="col-sm-2">
                <p className="font-weight-bold small text-center">Class</p>
              </div>
              <div className="col-sm-2">
                <p className="font-weight-bold small">Availability</p>
              </div>
            </div>
            <div className="my-5">
              <TrainDetails />
              <TrainDetails />
              <TrainDetails />
              <TrainDetails />
              <TrainDetails />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
