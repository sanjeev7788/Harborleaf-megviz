import React from 'react'
import '../Styles/Gstusermanagement.css'
import Pagination from './Pagination'
const Gstusermanagement = () => {

    const tabledata=[
      {
        id:1,
        username:'Navogithkour',
        gstusername: '22AAAAA0000A1Z5',
        ssdate: '01/01/2016',
        sedate:'01/01/2017',
        state:'Telangana',
    },
    
        {
          id:2,
          username:'Mark',
          gstusername: '22ZZZZ0000A1Z5',
          ssdate: '01/01/2013',
          sedate:'01/01/2017',
          state:'Maharastra',
      },
      {
        id:3,
        username:'John peter',
        gstusername: '33AAAAA0000A1Z6',
        ssdate: '01/01/2018',
        sedate:'01/01/2021',
        state:'Tamilnadu',
    },
    {
      id:4,
      username:'Andrews mathu',
      gstusername: '22CCCC0000A1Z5',
      ssdate: '01/01/2018',
      sedate:'01/01/2022',
      state:'Karnakata',
    },
 
]

  return (
    <div className='container'>
      
    <div className='d-flex justify-content-end mt-4'>
      <button className='btn btn-primary me-3'  style={{backgroundColor:"#3856F3",fontFamily:"Roboto"}}>Filter <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-funnel-fill ms-2" viewBox="0 0 16 16">
    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z"/>
    </svg></button>
      <button className='btn' style={{color:"#FF0000",border:"1px solid #FF0000",fontFamily:"Roboto"}}>Suspended Accounts</button>
    </div>
   
   <table className="table table-borderless mt-4">
   <thead >
  <tr >
    <th>S.No</th>
    <th>User Name</th>
    <th>GST Username</th>
    <th>Subscription Start</th>
    <th>Sub End</th>
    <th>State</th>
  </tr>
</thead><br/>
<tbody >
{
     tabledata.map((tdata,index)=>(
      <tr key={tdata.id}>
      <th>{tdata.id}</th>
      <td>{tdata.username}</td>
      <td>{tdata.gstusername}</td> 
      <td>{tdata.ssdate}</td>
      <td>{tdata.sedate}</td>
      <td>{tdata.state}</td>    
     </tr>

   ))
  }
  
 </tbody>
  </table>

  <Pagination />
     
  </div>

  )
}

export default Gstusermanagement


