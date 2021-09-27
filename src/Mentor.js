import React, { useEffect, useState } from "react"
import axios from "axios"
import env from "./settings"
import { Link, useHistory } from "react-router-dom"

export default function Mentor(props){

    const[mentorList,setMentorList]=useState([])
    const[isLoading,setLoading]=useState(true)
    const history = useHistory();
    useEffect(async ()=> {
        try{
           let mentor= await axios.get(`${env.api}/mentors`)
        //    let mentorList = mentor.json();
            setMentorList([...mentor.data])
        //    console.log(mentor.data);
            setLoading(false)
        }
        catch(error){
            console.log(error);
            setLoading(false)
        }
        

    },[])

    let handleDelete =async (id) => {
        let confirm= window.confirm("Are you sure want to delete ?")
        if(confirm){
        try{
            
            let deleteaTask =await axios.delete(`${env.api}/delete-mentor/${id}`)
            console.log(deleteaTask)
            let rowIndex = mentorList.findIndex(obj => obj.id==id);
            mentorList.splice(rowIndex,1);
            setMentorList([...mentorList])

        }
        catch{
            console.log("error");
        }
    }
    }
    return(
        <>
        <h1 class="h3 mb-2 text-gray-800">Mentors</h1>
                    
                              <Link to="/create-mentor" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" style={{marginLeft:"2%"}} >
        <i class="fas fa-download fa-sm text-white-50"></i> Create Mentor</Link>
        
        <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">DataTables of Mentors</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                {
                                    isLoading ? <h1>Loading...</h1> : 
                                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>No.</th>
                                            <th>Mentor Name</th>
                                            <th>Salary</th>
                                            <th>Subject</th> 
                                            <th>Dob</th>
                                            <th>Action</th> 
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>No.</th>
                                            <th>Mentor Name</th>
                                            <th>Salary</th>
                                            <th>Subject</th>
                                            <th>Dob</th>
                                            <th>Action</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        {
                                            mentorList.map((mentor,index)=> {
                                                return <tr key= {mentor._id} >
                                                    <td>{index + 1}</td>
                                                    <td>{mentor.mentorName}</td>
                                                    <td>{mentor.salary}</td>
                                                    <td>{mentor.subject}</td>
                                                    <td>{mentor.dob}</td>
                                                    
                                                    <td>
                                                    <Link to={`/mentor/edit/${mentor._id}`} className="btn btn-sm btn-primary">Edit</Link>
                                                    <button  onClick={()=>handleDelete(mentor._id)} className="btn btn-sm btn-danger">Delete</button>
                                            </td>
                                                    
                                                </tr>
                                            })
                                        }
                                    </tbody>
                                </table>
                                }
                            </div>
                        </div>
                    </div>
                    </>
    )
}