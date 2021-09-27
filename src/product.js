import React, { useEffect, useState } from "react"
import axios from "axios"
import env from "./settings"
import { Link, useHistory } from "react-router-dom"

export default function Students(props){

    const[studentList,setStudentList]=useState([])
    const[isLoading,setLoading]=useState(true)
    const history = useHistory();
    useEffect(async ()=> {
        try{
        
           let student= await axios.get(`${env.api}/students`)
        //    let studentList = student.json();
            setStudentList([...student.data])
        //    console.log(student.data);
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
            // let deleteaTask =await axios.delete(`http://localhost:3002/delete-task/${id}`)
            let deleteaTask =await axios.delete(`${env.api}/delete-student/${id}`)
            console.log(deleteaTask)
            let rowIndex = studentList.findIndex(obj => obj.id==id);
            studentList.splice(rowIndex,1);
            setStudentList([...studentList])

        }
        catch{
            console.log("error");
        }
    }
    }
    return(
        <>
        <h1 class="h3 mb-2 text-gray-800">Students</h1>
                    
                              <Link to="/create-student" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" style={{marginLeft:"2%"}} >
        <i class="fas fa-download fa-sm text-white-50"></i> Create student</Link>
        
        <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">DataTables of Students</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                {
                                    isLoading ? <h1>Loading...</h1> : 
                                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Roll no.</th>
                                            <th>Student Name</th>
                                            <th>Batch</th>
                                            <th>Dept</th>
                                            <th>Start date</th>
                                            <th>MentorsName</th>
                                            <th>Action</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Roll no.</th>
                                            <th>Student Name</th>
                                            <th>Batch</th>
                                            <th>Dept</th>
                                            <th>Start date</th>
                                            <th>MentorsName</th>
                                            <th>Action</th>
                                            <th>Action</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        {
                                            studentList.map((student,index)=> {
                                                return <tr key= {student._id} >
                                                    <td>{index + 1}</td>
                                                    <td>{student.studentName}</td>
                                                    <td>{student.batch}</td>
                                                    <td>{student.dept}</td>
                                                    <td>{student.date}</td>
                                                    <td>{student.mentorsName}</td>
                                                    <td><Link to={`/student/assign/${student._id}`} className="btn btn-sm btn-primary">Assign</Link></td>
                                                    <td>
                                                    <Link to={`/student/edit/${student._id}`} className="btn btn-sm btn-primary">Edit</Link>
                                                    <button  onClick={()=>handleDelete(student._id)} className="btn btn-sm btn-danger">Delete</button>
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