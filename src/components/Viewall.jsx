import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewall = () => {
    const [visitorData,changeVisitorData]=useState(
        []
    )
    const fetchData=()=>{
        axios.get("https://log-app-demo-api.onrender.com/getvistors").then(
            (response)=>{
                changeVisitorData(response.data)
            }
        ).catch()
    }
    useEffect(
        ()=>{fetchData()},[]
    )
  return (
    <div>
        <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Sl:no</th>
      <th scope="col">First name</th>
      <th scope="col">Last name</th>
      <th scope="col">Purpose</th>
      <th scope="col">Whom to meet</th>
      <th scope="col">V</th>
    </tr>
  </thead>
  <tbody>
   {visitorData.map(
    (value,index)=>{
        return  <tr>
        <th scope="row">{value._id}</th>
        <td>{value.firstname}</td>
        <td>{value.lastname}</td>
        <td>{value.purpose}</td>
        <td>{value.whomToMeet}</td>
        <td>{value.__v}</td>
      </tr>
     
    }
   )}
  </tbody>
</table>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Viewall
