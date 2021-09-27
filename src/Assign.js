import React, { useEffect, useState } from "react"
import axios from "axios";
import env from "./settings"
import { useHistory } from "react-router";
export default function AssignMentor(props){

    const [studentName,setStudentname]=useState(" ");
    const [mentorName,setMentorName]=useState(" ");
    const [subject,setSubject]=useState(" ");
    const [date,setDate]=useState(" ");
    const[isLoading,setLoading]=useState(false)
    const history = useHistory();

    useEffect(()=>{
      axios.get(`${env.api}/students/${props.match.params.id}`).then((res)=>{
        setStudentname(res.data.studentName)
        
      })
    },[])
    
    
    let handlleSubmit =async(e) => {
      e.preventDefault();
      try {
        setLoading(true)
        let studPut =await axios.put(`${env.api}/assign-mentor/${props.match.params.id}`,{mentorName,subject,date})
        console.log(studPut)
        setLoading(false)
        history.push("/batch")
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
                <input type="text" value={studentName}  className="form-control"></input>
            </div>
            <div  className="col-lg-6">
                <label>MentorName</label>
                <input type="text" value={mentorName} onChange={(e) => {setMentorName(e.target.value)}} className="form-control"></input>
            </div>
            <div  className="col-lg-6">
                <label>Subject</label>
                <input type="text" value={subject} onChange={(e) => {setSubject(e.target.value)}} className="form-control"></input>
            </div>
            <div  className="col-lg-6">
                <label>Date</label>
                <input type="date" value={date} onChange={(e) => {setDate(e.target.value)}} className="form-control"></input>
            </div>
            <div  className="col-lg-12">
                <input type="submit" value="Update" className="btn btn-primary mt-3"></input>
            </div>
          </div>
        </form>
      </div>
    </div>
    )
}