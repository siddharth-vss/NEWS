// import ReactDOM from "react-dom/client";
import './App.css';
import { useState } from 'react';
import Navbar from './components/navbar';
import News from './components/news';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Business from "./categories/Business";
import Sports from "./categories/Sports";
import Technology from "./categories/Technology";
import Health from "./categories/Health";
import General from "./categories/General";
import Entertainment from "./categories/Entertainment";
import Science from "./categories/Science";

//Routes,   ///////////======= add in up function 
function App() {

 
  const [mode, setMode] = useState('primary')

  if (mode === 'primary') {
    document.body.style.backgroundColor = 'deepskyblue';
  }
  const abd = () => {
    if (mode === 'light') {
      setMode('dark')
    } else if (mode === 'warning') {
     setMode('dark')
    } else {
      setMode('light')
    }
  }

  const a11 = () => {setMode('primary'); document.body.style.backgroundColor = 'deepskyblue'; }
  const a22 = () => {setMode('secondary');document.body.style.backgroundColor = 'darkcyan';}
  const a33 = () => {setMode('success');document.body.style.backgroundColor = 'darkseagreen';}
  const a44 = () => {setMode('danger');document.body.style.backgroundColor = 'darksalmon';}
  const a55 = () => {setMode('warning');document.body.style.backgroundColor = 'papayawhip';}
  const a66 = () => {setMode('light');document.body.style.backgroundColor = 'darkgray'; }
  const a77 = () => {setMode('dark');document.body.style.backgroundColor = 'darkgray'; }

  const spd = () => {
    if (mode === 'light') {
      setMode('warning');
      document.body.style.backgroundColor = 'papayawhip';

    } else if (mode === 'dark') {
      setMode('warning');
      document.body.style.backgroundColor = 'papayawhip';

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'darkgray';

    }
  }
  const jbd = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'darkgray';

    } else if (mode === 'warning') {
      setMode('light');
      document.body.style.backgroundColor = 'darkgray';

    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#00bfff';

    }
  }

  return (

    <>
      
     
      {/*
      <Navbar
        mode={mode}
        toggleMode={abd}
        toggleMode1={jbd}
        toggleMode2={spd}
        toggleMode11={a11}
        toggleMode22={a22}
        toggleMode33={a33}
        toggleMode44={a44}
        toggleMode55={a55}
        toggleMode66={a66}
        toggleMode77={a77}
        
      />
       <News mode={mode}/> */}
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={}>
          <Route index element={<News mode={mode}/>} />
          <Route path="Business" element={<Business mode={mode}/>} />
          <Route path="Sports" element={<Sports mode={mode}/>} />
          <Route path="Technology" element={<Technology mode={mode}/>} />
          <Route path="Entertainment" element={<Entertainment mode={mode}/>} />
          <Route path="Science" element={<Science mode={mode}/>} />
          <Route path="Health" element={<Health mode={mode}/>} />
          <Route path="General" element={<General mode={mode}/>} />
          
          <Route path="*" element={<General mode={mode} />} />
        </Route>
      </Routes>
    </BrowserRouter> */}

<Navbar
        mode={mode}
        toggleMode={abd}
        toggleMode1={jbd}
        toggleMode2={spd}
        toggleMode11={a11}
        toggleMode22={a22}
        toggleMode33={a33}
        toggleMode44={a44}
        toggleMode55={a55}
        toggleMode66={a66}
        toggleMode77={a77}
        
      />

    <News mode={mode}/>
    <Business mode={mode}/>
    <Sports mode={mode}/>
    <Technology mode={mode}/>
<Entertainment mode={mode}/>
<Science mode={mode}/>
<Health mode={mode}/>
<General mode={mode}/>
    
    
    

      

    </>
  );
}

export default App;
