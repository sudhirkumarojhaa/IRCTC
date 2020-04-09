import React,{useState,useEffect} from 'react'
import TrainDetails from './TrainDetails'
import { train } from '../screens/trains'

export default function ListItem(props) {
  const [type,setType]= useState('');
  const [data,setData]=useState([]);
  const [showType,setShowType]=useState(false);
  const [showJourneyType, setShowJourneyType] = useState(false);
  const from = props.dataFromParent.from;
  const to = props.dataFromParent.to;

  useEffect(() => {
    const filteredList = train.filter(item => item.from.toLowerCase() === from && item.to.toLowerCase() === to)
    setData(filteredList)
  }, [from, to])

  const searchArray = data.filter(item => {
    if (type === '') return item;
    if (item.trainName.toLowerCase().includes(type.toLowerCase())) return item;
  })

  const colorCode = type === 'Rajdhani' ? 'violet' : type === "Garib Rath" ? 'green' : type === 'Shatabdi' ? 'yellow': '#fff';

  const handleToggle= items => {
    const newArr = data.filter(item => {
      if(item.trainNumber === items) {
        item.toggle = true
      }
      return item;
    })
    console.log(newArr)
    setData(newArr)
  }

  const handleToggleHide = (items) => {
    console.log(items)
    const newArr = data.filter(item => {
      if (item.trainNumber === items) {
        item.toggle = false
      }
      return item;
    })
    setData(newArr)
  }

  const handleReset=()=>{
    setShowJourneyType(false)
    setShowType(false)
  }

  return (
    <div className="list position-relative">
      <div className="container-fluid">
        <div className="row">
          <div className="sidebar hide">
            <div className="d-flex justify-content-between align-items-center">
              <p className="font-weight-bold small">Refine Results</p>
              <p className="font-weight-bold small text-primary" onClick={() => handleReset()}>Reset</p>
            </div>
            <div className="filters ">
              <div className="d-flex flex-column justify-content-around py-2 ">
                <div className="form-radio form-radio-inline my-2">
                  <label className="form-radio-label text-info small px-2 font-weight-bold text-uppercase" >Journey Class</label>
                  <input className="form-radio-input" checked={showJourneyType}type="checkbox" value="option1" onChange={() => setShowJourneyType(!showJourneyType)} />
                </div>
                {showJourneyType ?
                  <div className="d-flex flex-column justify-content-around py-2 col-row-res">
                <div className="form-radio form-radio-inline">
                  <input className="form-radio-input" type="radio"  value="option1" />
                  <label className="form-radio-label small" >AC First Class</label>
                </div>
                <div className="form-radio form-radio-inline">
                  <input className="form-radio-input" type="radio"  value="option1" />
                  <label className="form-radio-label small" >AC 2 Tier</label>
                </div>
                <div className="form-radio form-radio-inline">
                  <input className="form-radio-input" type="radio"  value="option1" />
                  <label className="form-radio-label small" >AC 3 Tier</label>
                </div>
                <div className="form-radio form-radio-inline">
                  <input className="form-radio-input" type="radio"  value="option1" />
                  <label className="form-radio-label small" >Sleeper Class</label>
                </div>
                <div className="form-radio form-radio-inline">
                  <input className="form-radio-input" type="radio"  value="option1" />
                  <label className="form-radio-label small" >Second Sitting</label>
                </div>
              </div>
              : null}
              </div>
              <div className="d-flex flex-column justify-content-around py-2 ">
                <div className="form-radio form-radio-inline my-2">
                  <label className="form-radio-label text-info small px-2 font-weight-bold text-uppercase" >Train Types </label>
                  <input className="form-radio-input" checked ={showType} type="checkbox" value="option1" onChange={() => setShowType(!showType)} />
                </div>
                {showType ?
                  <div className="d-flex flex-column justify-content-around py-2 col-row-res">
                    <div className="form-radio form-radio-inline d-flex justify-content-between align-items-center ">
                  <div>
                  <input className="form-radio-input" name="type" type="radio" value="Garib Rath" onChange={(e) => setType(e.target.value)} />
                  <label className="form-radio-label small text-uppercase font-weight-bold" name="type" >Garib Rath</label>
                  </div><div className="colorBox" style={{backgroundColor :'green'}}/>
                </div>
                    <div className="form-radio form-radio-inline d-flex justify-content-between align-items-center ">
                  <div>
                  <input className="form-radio-input" name="type" type="radio" value="Other"  onChange={(e) => setType('')}/>
                  <label className="form-radio-label small text-uppercase font-weight-bold" >Other</label>
                  </div><div className="colorBox" style={{ backgroundColor: '#e3e3e3' }}/>
                </div>
                    <div className="form-radio form-radio-inline d-flex justify-content-between align-items-center ">
                  <div>
                  <input className="form-radio-input" name="type" type="radio" value="Rajdhani" onChange={(e) => setType(e.target.value)}  />
                  <label className="form-radio-label small text-uppercase font-weight-bold" >Rajdhani</label>
                  </div>
                      <div className="colorBox" style={{ backgroundColor: 'violet' }}/>
                </div>
                    <div className="form-radio form-radio-inline d-flex justify-content-between align-items-center ">
                  <div>
                  <input className="form-radio-input"  name="type" type="radio" value="Shatabdi" onChange={(e) => setType(e.target.value)} />
                  <label className="form-radio-label small text-uppercase font-weight-bold" >Shatabdi</label>
                  </div>
                  <div className="colorBox" style={{backgroundColor :'yellow'}}/>
                </div>
                </div>
                : null}
            </div>
            </div>
          </div>
          <div className="scroll position-relative">
            <div className="d-flex justify-content-between align-items-center hide position-fixed bg-white py-3 top-bar">
              <div className="col-sm-3">
                <p className="font-weight-bold small text-center">Train Number & Name</p>
              </div>
              <div className="col-sm-4">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="font-weight-bold small text-center">Arrival</p>
                  <p className="font-weight-bold small text-center">Departs</p>
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
              <p className="font-weight-bold  text-info text-center small py-3"> Search Result: {searchArray.length} Trains found</p>
              {searchArray.length !==0   ? searchArray.map(item=>
                <TrainDetails from={item.from}
                  trainName={item.trainName}
                  trainNumber={item.trainNumber}
                  to={item.to}
                  arrival={item.arrival}
                  departs={item.departure}
                  status={item.available}
                  duration={item.duration}
                  onClick={() =>handleToggle(item.trainNumber)}
                  onClickHide={() => handleToggleHide(item.trainNumber)}
                  show={item.toggle}
                  iconDepart={item.daytime === 'day' ? <i className="fas fa-cloud-sun text-primary"></i>: <i className="far fa-moon text-primary"></i>}
                  iconArrival={item.daytime === 'day' ? <i className="fas fa-cloud-sun text-primary"></i> : <i className="far fa-moon text-primary"></i>}
                  style={{ borderLeft: '10px solid', borderColor: colorCode}}/>
              ) :
                <div className="d-flex justify-content-center align-items-center flex-column bg-white p-5">
                  <h1><i className="fas fa-train text-warning"></i></h1>
                  <h4 className="font-weight-bold  text-danger text-center">No Trains Found</h4>
                 </div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
