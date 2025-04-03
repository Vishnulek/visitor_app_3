import React, { useState } from 'react'
import Navbar from './Navbar'

const Home = () => {
    const [input,setInput]=useState(
        {"firstName":"","lastName":"","purpose":"","whomToMeet":""}
    )
    const inputHandler=(event)=>{
setInput({...input,[event.target.name]:event.target.value})
    }
    const readValues=()=>{
        console.log(input)
    }
  return (
    <div>
        <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">First name</label>
                        <input type="text" className="form-control" name='firstName'value={input.firstName}onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Last name</label>
                        <input type="text" className="form-control" name='lastName'value={input.lastName}onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Purpose</label>
                        <input type="text" className="form-control" name='purpose'value={input.purpose}onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Whom to meet</label>
                        <input type="text" className="form-control" name='whomToMeet'value={input.whomToMeet}onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success" onClick={readValues}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
