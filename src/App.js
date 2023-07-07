// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from'./components/navbar';
import { useState } from 'react';
// import Spiner from './components/spiner';
import News from './components/news';
// import {swithch as Switch,Route} from 'react-router';

// import Card from './components/card';
//Routes,   ///////////======= add in up function 
function App() {

  const [ mode , setMode ]=useState('primary')
  // const [ bg , setBg ]=useState('white')
  if(mode==='primary'){
    document.body.style.backgroundColor = 'deepskyblue'; 
  }
  const abd = () =>{
    if(mode === 'light'){
     
      setMode( 'dark')
    }else if(mode === 'warning'){
     
      setMode( 'dark')
    }else{
      
      setMode ('light')
    }
  }
  
    
  //  function bg(){
  //   document.body.style.backgroundColor = "white";
  //  }    

const a11 =() =>{ 
     setMode('primary'); 
     document.body.style.backgroundColor = 'deepskyblue';    
}
const a22 =() =>{ 
    setMode('secondary'); 
    document.body.style.backgroundColor = 'darkcyan';
}
const a33 =() =>{ 
     setMode('success'); 
     document.body.style.backgroundColor = 'darkseagreen';
}
const a44 =() =>{ 
   setMode('danger'); 
   document.body.style.backgroundColor = 'darksalmon';
}
const a55 =() =>{ 
 setMode('warning'); 
 document.body.style.backgroundColor = 'papayawhip';
}
const a66 =() =>{ 
   setMode('light');  
   document.body.style.backgroundColor = 'darkgray';
    
}
const a77 =() =>{ 
 setMode('dark');   
 document.body.style.backgroundColor = 'darkgray';

}
  
  const spd = () =>{
    if(mode === 'light'){
      setMode( 'warning');
      document.body.style.backgroundColor = 'papayawhip';
      
    }else if(mode === 'dark'){
      setMode( 'warning');
      document.body.style.backgroundColor = 'papayawhip';
      
    }else{
      setMode ('light');
      document.body.style.backgroundColor = 'darkgray';
      
    }
  }
  const jbd = () =>{
    if(mode === 'dark'){
      setMode( 'light');
      document.body.style.backgroundColor = 'darkgray';
      
    }else if(mode === 'warning'){
      setMode( 'light');
      document.body.style.backgroundColor = 'darkgray';
     
    }else{
      setMode ('dark');
      document.body.style.backgroundColor = '#00bfff';
      
    }
  }

  return (
    
    <>
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
   <br/>
      <br/>
      <br/>
      {/* <BrowserRouter>
      <Routes>
        <Route path="/news" element={<News mode={mode}/>}>
          <Route index element={<News mode={mode}/>} />
          {/* <Route path="blogs" element={<Blogs />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        {/*</Route>
      </Routes>
    </BrowserRouter> */}
    <News mode={mode}/>
 
 </>
  );
}

export default App;
