import React from 'react'
import Pagination from './Pagination'
import '../Styles/Emergencymanagement.css';
const Emergencymanagement = () => {

    const tabledata=[
        {
          id:1,
          utiliseduser:'Navogithkour',
          rescuseduser: 'Navigosh pateel',
          state: "Maharastra",
          area: "Thane",
          date:"20/12/2024",
       },
       {
        id:2,
        utiliseduser:'Andrew',
        rescuseduser: 'Smith waarn',
        state: "Gujarath",
        area: "Dhooran",
        date:"21/12/2023",        },
       {
        id:3,
          utiliseduser:'Preranrao',
          rescuseduser: 'Preran viswam',
          state: "Maharastra",
          area: "Thane",
          date:"20/09/2023",
      },
     {
        id:4,
        utiliseduser:'Ranveer',
        rescuseduser: 'Dhruvan sen',
        state: "Uttarpradesh",
        area: "Dharavi",
        date:"20/12/2022",
    }
]
  return (
    <div className='container'>
      
    <div className='d-flex justify-content-end mt-4' style={{paddingLeft:"50px"}}>
    <button className='emgergency-button1' >Filter <i className="bi bi-funnel-fill ms-2"></i></button> 
    <div className='emergency-parent'>
       <div className='emergency-child-parent'>
         <button className='emergency-child1' id="emergency-child11">Critical Emergency</button>
         <button className='emergency-child1'>Note Emergency</button>
      </div>
     </div>


      <button className='btn' style={{color:"#FF0000",border:"1px solid #FF0000",fontFamily:"Roboto"}}> Emergency Reports</button>
    </div>
   
   <table className="table table-borderless mt-4 ">
   <thead >
  <tr>
    <th>S.No</th>
    <th>Utilised By</th>
    <th>Rescued By</th>
    <th>State</th>
    <th>Area</th>
    <th>Date</th>
  </tr>
</thead><br/>
<tbody >
  {
     tabledata.map((tdata,index)=>(
      <tr key={tdata.id}>
      <th>{tdata.id}</th>
      <td> <img
            src={`https://robohash.org/${tdata.utiliseduser}?size=40x40`}
            alt="avatar"
            className="rounded-circle me-2"
            width="30"
            height="30"
            style={{objectFit:"cover",border:'1px solid white',marginBottom:'2px'}}
          />{tdata.utiliseduser}</td>
      <td>
      <img
            src={`https://robohash.org/${tdata.rescuseduser}?size=40x40`}
            alt="avatar"
            className="rounded-circle me-2"
            width="30"
            height="30"
            style={{objectFit:"cover",border:'1px solid white',marginBottom:'2px'}}
          />
        {tdata.rescuseduser}</td> 
      <td>{tdata.state}</td>
      <td>{tdata.area}</td> 
      <td>{tdata.date}</td>    
     </tr>


   ))
  }
</tbody>
  </table>
  <div>
  <Pagination />
  </div>    
  </div>
  )
}

export default Emergencymanagement
