import React from 'react';
import '../App.css';
import logo from '../SP.jpg'


export default function Navbar(props) {
  return (
    <>
     <nav className={`navbar navbar-${props.mode} bg-${props.mode} fixed-top`}>
   <div className="container-fluid">
       <img src={logo} alt="sp" id="SP" />
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
           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                           
                           
                            <li className="nav-item"><a  className="nav-link"  href="#1">HOME</a></li>
                            <li className="nav-item"><a  className="nav-link"  href="#Business">Business</a></li>
                            <li className="nav-item"><a  className="nav-link"  href="#Entertainment">Entertainment</a></li>
                            <li className="nav-item"><a  className="nav-link"  href="#General">General</a></li>
                            <li className="nav-item"><a  className="nav-link"  href="#Health">Health</a></li>
                            <li className="nav-item"><a  className="nav-link"  href="#Science">Science</a></li>
                            <li className="nav-item"><a  className="nav-link"  href="#Sports">Sports</a></li>
                            <li className="nav-item"><a  className="nav-link"  href="#Technology">Technology</a></li>
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
