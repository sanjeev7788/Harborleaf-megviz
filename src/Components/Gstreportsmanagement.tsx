import React from 'react'
import '../Styles/Gsttotalreports.css';
import Pagination from './Pagination'
const Gstreportsmanagement = () => {
  
    const tabledata=[
        {
          id:1,
          username:'Navogithkour',
          gstusername: '22AAAAA0000A1Z5',
          reason:"Fake",
          state:'Telangana',
          date:"01/12/2012",
          userreported:'10',
          reasonview:'Vibe'
      },
      {
        id:2,
        username:'Nandan Raviokur',
        gstusername: '33AAAAA0000A1Z5',
        reason:"Fake",
        state:'Maharastra',
        date:"04/12/2014",
        userreported:'20',
        reasonview:'Vibe'
    },
    {
        id:3,
        username:'Vyas devan',
        gstusername: '44AAAAA0000A1Z6',
        reason:"Fake",
        state:'Karnakataka',
        date:"06/11/2023",
        userreported:'10',
        reasonview:'post'
    }, 
    {
        id:4,
        username:'Ms subramanyan',
        gstusername: '44AAAAA0000A1Z5',
        reason:"Spam",
        state:'Andhrapradesh',
        date:"04/12/2013",
        userreported:'15',
        reasonview:'Vibe'
    },   
   
  ]
  
  return (
    <div className='container'>
      
    <div className='d-flex justify-content-end mt-4'>
      
    <button className='gst-button1' >Filter <i className="bi bi-funnel-fill ms-2"></i></button> 
       <div className='gst-parent'>
       <div className='gst-child-parent'>
         <button className='gst-child1' id="gst-child11">Date</button>
         <button className='gst-child1'>Post Content</button>
         <button className='gst-child1'>Vibes Content</button>
         <button className='gst-child1'>Account Content</button>

       </div>
     </div> 
      <button className='btn' style={{color:"#FF0000",border:"1px solid #FF0000",fontFamily:"Roboto"}}>Suspended Accounts</button>
    </div>
   
   <table className="table table-borderless mt-4">
   <thead >
  <tr >
    <th>S.No</th>
    <th>User Name</th>
    <th>GST Username</th>
    <th>Reason</th>
    <th>State</th>
    <th>Actions</th>
    <th>Date</th>
    <th>Users Reported</th>
    <th>Reason</th>
    
  </tr>
</thead><br/>
<tbody >
{
     tabledata.map((tdata,index)=>(
      <tr key={tdata.id}>
      <th>{tdata.id}</th>
      <td> 
      <img
            src={`https://robohash.org/${tdata.username}?size=40x40`}
            alt="avatar"
            className="rounded-circle me-2"
            width="30"
            height="30"
            style={{objectFit:"cover",border:'1px solid white',marginBottom:'2px'}}
          />
        {tdata.username}</td>
      <td>{tdata.gstusername}</td> 
      <td>{tdata.reason}</td>
      <td>{tdata.state}</td>
      <td>
        {
         tdata.id==4?( <div className='action-parent-table'>
          <button className="gst-action-btns dropdown-toggle" >Actions</button>
         <div className='gst-retrive-parent'>
          <button className='gst-retrive-child'>Temporary Suspended</button>
          <button className='gst-retrive-child'>Suspended</button>
          <button className='gst-retrive-child'>Deleted</button>
         </div>
         </div> ):(<button className="gst-action-btns dropdown-toggle" >Actions</button>)
        }
     


      </td>
      <td>{tdata.date}</td>
      <td>{tdata.userreported}</td>
      <td>{tdata.reasonview}</td>
     
          
     </tr>


   ))
  }
  
 </tbody>
  </table>

  <Pagination />
     
  </div>
  )
}

export default Gstreportsmanagement