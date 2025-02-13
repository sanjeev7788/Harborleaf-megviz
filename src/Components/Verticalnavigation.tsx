import React from 'react';
import '../Styles/Verticalnavigation.css';
import Harborleaf from '../assets/Harboleaf_logo.png';
import { useNavigate } from 'react-router-dom';
import Adiminpic from '../assets/Adminpic.jpg';
const Verticalnavigation = () => {
 
  const navigate=useNavigate()
  const menudata = [
    { id: 1, menu: "User Management", icon: "bi-people-fill", route: "user-management", locationRoute: "/admin/user-management" },
    { id: 2, menu: "User Management Reports", icon: "bi-people-fill", route: "user-reports", locationRoute: "/admin/user-reports" },
    { id: 3, menu: "GST User Management", icon: "bi-briefcase-fill", route: "gst-users", locationRoute: "/admin/gst-users" },
    { id: 4, menu: "GST User Reports", icon: "bi-briefcase-fill", route: "gst-reports", locationRoute: "/admin/gst-reports" },
    { id: 5, menu: "Emergency Management", icon: "bi-shield-fill-check", route: "emergency", locationRoute: "/admin/emergency", color: "#FF0000" },
    { id: 6, menu: "AD Management", icon: "bi-badge-ad-fill", route: "moniter-compaign", locationRoute: "/admin/moniter-compaign" },
    { id: 7, menu: "Edit Profile", icon: "bi-person-circle", route: "edit-profile", locationRoute: "/admin/edit-profile" },
];
const handleClick=(menu)=>{
  navigate(`/admin/${menu.route}`)
}
  return (
    <div className="sidebar-container">
      <div className='logo mt-4'>
        <img src={Harborleaf} width="200px" height="40px" alt="Logo" />
      </div>
      <div>
        <p className="mt-4 ms-4"style={{ color: "#898989" }}>MENU</p>
        <ul >
          {menudata.map((menu) => (
            <li key={menu.id} style={{cursor:'pointer'}} onClick={()=>handleClick(menu)}>
              <i className={`icons bi ${menu.icon}`} style={menu.color ? { color: menu.color } : {}}></i>
              <a className="ms-2">{menu.menu}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="adminbutton d-flex align-items-center p-3 rounded shadow mt-5">
        <button className="btn p-0">
          <img src={Adiminpic} className="rounded-circle" width="40px" height="40px" alt="Admin" />
        </button>
        <div className="ms-3" style={{ background: "#29292C" }}>
          <h6 className="mb-0 fw-bold" style={{ color:"#FFFFFF", background:"#29292C",fontSize:"15px",fontFamily:"Roboto"  }}>Sourav Singh</h6>
          <small className="text-white" style={{ color: "#898989",background:"#29292C",fontFamily:"Roboto" }}>Admin</small>
        </div>

        <div className="ms-auto d-flex align-items-center" style={{ background: "#29292C" }}>
          <button style={{ background: "#29292C", border: "none", color: "white" }}>
            <i className="bi bi-bell-fill me-1"></i>
          </button>
          <button style={{ background: "#29292C", border: "none", color: "white" }}>
            <i className="bi bi-envelope-fill ms-1  "></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Verticalnavigation
