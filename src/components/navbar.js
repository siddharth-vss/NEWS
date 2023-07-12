import React from 'react';
import '../App.css';


export default function Navbar(props) {
  return (
    <>
     <nav className={`navbar navbar-${props.mode} bg-${props.mode} fixed-top`}>
   <div className="container-fluid">
       <img src="../SP.jpg" alt="sp" id="SP" />
       <a className="navbar-brand " href="/">NEWS</a>


       <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
       </button>
       <div className={`offcanvas offcanvas-end text-bg-${props.mode}`} tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
           <div className="offcanvas-header">
               <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel"> WELCOME FROM SP</h5>
               <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
           </div>
           <div className="offcanvas-body">
               <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                   <li className="nav-item">
                       <a className="nav-link active"  href="https://spgaming2056.w3spaces.com/cheatsheet.html" >CHEATSHEET</a>
                   </li>
                   

                   <li className="nav-item">
                       <a className="nav-link active" href="/">HOME</a>
                   </li>
                   {/* <li className="nav-item dropdown">
                       <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Dropdown
                       </a>
                       <ul className="dropdown-menu dropdown-menu-dark">
                           <li><a className="dropdown-item" href="/">Action</a></li>
                           <li><a className="dropdown-item" href="/">Another action</a></li>
                           <li>
                               <hr className="dropdown-divider" />
                           </li>
                           <li><a className="dropdown-item" href="/">Something else here</a></li>
                       </ul>
                   </li> */}
                   {/* <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">DARK MODE</label>
</div>
                   <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode2} role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">PRIMARY MODE </label>
</div>
                   <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode1} role="switch" id="flexSwitchCheckDefault"  checked />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">light MODE </label>
</div> */}
               
               </ul>
               <ul className="nav-item"> <button className="rounded-circle border border-5  me-2 bg-primary wh"   onClick={props.toggleMode11} ></button>
<button className="rounded-circle border border-5  me-2 bg-secondary wh" onClick={props.toggleMode22} ></button>
<button className="rounded-circle border border-5  me-2 bg-success wh"   onClick={props.toggleMode33} ></button></ul><ul>
<button className="rounded-circle border border-5  me-2 bg-danger wh"    onClick={props.toggleMode44} ></button>
<button className="rounded-circle border border-5  me-2 bg-warning wh"   onClick={props.toggleMode55} ></button>
<button className="rounded-circle border border-5  me-2 bg-dark wh"      onClick={props.toggleMode77} ></button></ul>

           </div>
       </div>
   </div>
</nav>

    
    </>
  )
}
