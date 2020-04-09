import React from 'react'

export const InputText =({placeholder,value,onChange}) =>{
  return (
    <div>
      <input type="text" onChange={onChange} className="form-control my-3 text-capitalize" placeholder={placeholder} value={value}/>
    </div>
  )
}


export const InputDate = ({value,onChange}) => {
  return (
    <div>
      <input type="date" name="date" min="2020-05-01"
        className="form-control my-3" value={value} onChange={onChange} />
    </div>
  )
}

export const InputSelect = ({ value, onChange }) => {
  return (
    <div className="form-group">
      <select className="form-control" id="sel1" value={value} onChange={onChange}>
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
  )
}