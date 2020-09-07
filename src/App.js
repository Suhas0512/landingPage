import React from 'react';
import './App.css';
import {Navbar} from 'react-bootstrap' 
import {FaCopyright} from 'react-icons/fa'
function App() {
  return (
    <div>
    <div>
      <Navbar style={{backgroundColor:"#170a44"}}>{//dark blue color
      }
      <Navbar.Collapse className="justify-content-center">
        <img src={require('./Images/surface1@3x.png')} backgroundColor="#170a44" height="38.5px" width="128.2px"></img>
        </Navbar.Collapse>
      </Navbar>
    </div>
    <img src={require('./Images/9c1b41c3-7897-48bc-902d-7e76af6bc94d.png')} width="100%">
    </img>
    {/*
    <div style={{padding:"15px",textAlign:"center",backgroundColor:"#f5f5f5"}}>
    <h3 style={{textAlign:"center",fontWeight:"normal"}}>
      Register now and get <br/>Rs. 1000 Bonus
    </h3>
    <form>
      <div className="form-group">
        <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Email" style={{borderRadius:0,borderColor:"#e5a930"}}/>
      </div>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Mobile" style={{borderRadius:0,borderColor:"#e5a930"}}/>
     </div>
     <div className="form-group">
        <input type="text" className="form-control" placeholder="OTP" style={{borderRadius:0,borderColor:"#e5a930"}}/>
      </div>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Username" style={{borderRadius:0,borderColor:"#e5a930"}}/>
      </div>
      <div className="form-group">
        <input type="password" className="form-control" placeholder="Password" style={{borderRadius:0,borderColor:"#e5a930"}}/>
      </div>
  <button type="submit" className="btn btn-lg btn-block" style={{borderRadius:25,backgroundColor:"#e5a930"}} >Submit</button>
    </form><br/>*/}
  <div className="div1">
      <img src={require('./Images/user@3x.png')} style={{float:"left",margin:"75px"}} height="77px" width="50px"></img>
      <h3 style={{color:"white"}}>10 Million+ Players</h3>
   
    
    <img src={require('./Images/desktop and mobile@3x.png')}style={{float:"right"}} height="77px" width="50px"></img>
      <h3 style={{color:"white"}}>Play Anytime ANywhere</h3>
    

      <img src={require('./Images/security-shield@3x.png')} height="77px" width="50px"></img>
      <h3 style={{color:"white"}}>100% Safe & Secure</h3>
    
    
    <img src={require('./Images/games@3x.png')} height="77px" width="50px"></img>
      <h3 style={{color:"white"}}>Best in class gaming experience</h3>

  </div>
  <div className="div2">
    <h2 align="center">Enter your Mobile Number and Download App</h2>
      <form>
        <div className="form-inline">
          <input type="text" className="form-control" placeholder="Mobile Number"/>
          <button type="submit" className="btn" style={{backgroundColor:"#e5a930"}}>Download</button>
        </div>
      </form>
  </div>
  <div className="footer" style={{backgroundColor:"#170a44",height:"80px"}}>
  <pre style={{color:"#e5a930",paddingTop:"20px"}} align="center">Privacy Policy    Terms and Conditions</pre>
  <p style={{color:"white"}} align="center"><FaCopyright/> Quadrific Media Pvt ltd. All Rights Reserved</p>
  </div>
  </div>

  );
}

export default App;
