import React, { useEffect, useState } from "react"
import axios from "axios"
import env from "./settings"
import { Link, useHistory } from "react-router-dom"

export default function Batch(props){

    const[studentList,setStudentList]=useState([])
    const[isLoading,setLoading]=useState(true)
    const history = useHistory();
    
        let student =(async ()=> {
            try{
                
                   let student= await axios.get(`${env.api}/students-mentor`)
               
                    setStudentList([...student.data])
                    
                 
                    setLoading(false)
                }
                catch(error){
                    console.log(error);
                    setLoading(false)
                }

    })
    useEffect(async ()=> {
        student();
        
    },[])

    return(
        <>
        <h1 class="h3 mb-2 text-gray-800">Batch</h1>

        <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">DataTables of Mentors Assigned</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                {
                                    isLoading ? <h1>Loading...</h1> : 
                                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>No.</th>
                                            <th>StudentName</th>
                                            <th>MentorID</th>
                                            <th>Batch</th>
                                            <th>Start date</th>
                                            
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>No.</th>
                                            <th>StudentName</th>
                                            <th>MentorID</th>
                                            <th>Batch</th>
                                            <th>Start date</th>
                                            
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        {
                                            studentList.map((batch,index)=> {
                                                return <tr key= {batch._id} >
                                                    <td>{index + 1}</td>
                                                    <td>{batch.studentName}</td>
                                                    <td>{batch.mentorsName}</td>
                                                    <td>{batch.batch}</td>
                                                    <td>{batch.date}</td>
                                                   
                                                    
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