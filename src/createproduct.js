import React, { useState } from "react"
import axios from "axios";
import env from "./settings"
import { useHistory } from "react-router-dom";

export default function CreateStudent(){

    const [studentName,setStudentname]=useState(" ");
    const [batch,setBatch]=useState(" ");
    const [dept,setDept]=useState(" ");
    const [date,setDate]=useState(" ");

    const [task,setTask]=useState(" ");

    const[isLoading,setLoading]=useState(false)
    const history = useHistory();
    
    let handlleSubmit =async(e) => {
      e.preventDefault();
      
      try {
        setLoading(true)
        let postStud= await axios.post(`${env.api}/create-student`,{studentName,batch,dept,date});
        alert(postStud.data)
        setLoading(false)
        history.push("/student")
      }
      catch{
        console.error();
        setLoading(false)
      }
    }

    return(
        <div>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Create student</h1>
      </div>
      <div className="container">
        <form onSubmit={handlleSubmit}>
          <div className='row'>
            <div  className="col-lg-6">
                <label>student name</label>
                <input type="text" value={studentName} onChange={(e) => {setStudentname(e.target.value)}} className="form-control"></input>
            </div>
            <div  className="col-lg-6">
                <label>batch</label>
                <input type="text" value={batch} onChange={(e) => {setBatch(e.target.value)}} className="form-control"></input>
            </div>
            <div  className="col-lg-6">
                <label>dept</label>
                <input type="text" value={dept} onChange={(e) => {setDept(e.target.value)}} className="form-control"></input>
            </div>
            <div  className="col-lg-6">
                <label>Mfg Date</label>
                <input type="date" value={date} onChange={(e) => {setDate(e.target.value)}} className="form-control"></input>
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