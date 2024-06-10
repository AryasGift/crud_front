import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { DeleteAppointments, getAllAppointments } from '../services/allapis';
import { Button } from 'react-bootstrap';

function Home() {
  const[appointments,setAppointment]=useState([])
  const fetchData=async()=>{
   const result= await getAllAppointments()
   console.log(result.data);
   setAppointment(result.data);
  }
  const deletes=async(id)=>{
    const result=await  DeleteAppointments(id);
    fetchData() 
  }
  const datesorter=()=>{
   const AppointmentData=[...appointments].sort((a,b)=>new Date(a.date)-new Date(b.date));
    setAppointment(AppointmentData)
  }

  useEffect(()=>{
     fetchData()
  },[])
    return (
    <div>
      <div className='text-center'>
        <h1>AppointTracker</h1>
      </div>
      <div>
      <Button variant="primary" onClick={datesorter} className='m-3' style={{float:'right'}}>Sort By Date</Button>{' '}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>date</th>
              <th>reason</th>
            </tr>
          </thead>
          <tbody>
            {
              appointments.length>0?(
                appointments.map((i,index)=>(
             <tr>
              <td>{index+1}</td>
              <td>{i.patientname}</td>
              <td>{i.date}</td>
              <td>{i.reason}</td>
              <td className='text-center'><i class="fa-solid fa-trash" onClick={()=>deletes(i.id)}></i></td>
            </tr>
                ))
              ):
              <td colSpan={5}><h1 className='text-center'>no data found</h1></td>
            }
            </tbody>
          </Table>
      </div>
      </div>
    )
}

      export default Home
