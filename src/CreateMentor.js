import React, { useState } from "react"
import axios from "axios";
import env from "./settings"
import { useHistory } from "react-router-dom";

export default function CreateMentor(){

    const [mentorName,setMentorName]=useState(" ");
    const [salary,setSalary]=useState(" ");
    const [subject,setSubject]=useState(" ");
    const [dob,setDob]=useState(" ");

    const [task,setTask]=useState(" ");

    const[isLoading,setLoading]=useState(false)
    const history = useHistory();
    
    let handlleSubmit =async(e) => {
      e.preventDefault();
      
      try {
        setLoading(true)
        let postMentor= await axios.post(`${env.api}/create-mentor`,{mentorName,salary,subject,dob});
        alert(postMentor.data)
        setLoading(false)
        history.push("/Mentor")
      }
      catch{
        console.error();
        setLoading(false)
      }
    }

    return(
        <div>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Create Product</h1>
      </div>
      <div className="container">
        <form onSubmit={handlleSubmit}>
          <div className='row'>
            <div  className="col-lg-6">
                <label>Product name</label>
                <input type="text" value={mentorName} onChange={(e) => {setMentorName(e.target.value)}} className="form-control"></input>
            </div>
            <div  className="col-lg-6">
                <label>salary</label>
                <input type="text" value={salary} onChange={(e) => {setSalary(e.target.value)}} className="form-control"></input>
            </div>
            <div  className="col-lg-6">
                <label>subject</label>
                <input type="text" value={subject} onChange={(e) => {setSubject(e.target.value)}} className="form-control"></input>
            </div>
            <div  className="col-lg-6">
                <label>Mfg Date</label>
                <input type="date" value={dob} onChange={(e) => {setDob(e.target.value)}} className="form-control"></input>
            </div>
            <div  className="col-lg-12">
                <input type="submit" value="submit" className="btn btn-primary mt-3" disabled={isLoading}></input>
            </div>
          </div>
        </form>
      </div>
    </div>
    )
}