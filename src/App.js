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
    <img src={require('./Images/9c1b41c3-7897-48bc-902d-7e76af6bc94d.png')} width="100%" />


    <div class="styleofSection bgimgofHomePage">
      <div class="row">
        <div class="col-sm-12" align="center">
          <h1 class="heading1">Thank you for registering Spartan Poker</h1>
        </div>
      </div>
    </div>
    
      
    <div class="styleofSection1">
      <div class="row">
        <div class="col-sm-12" align="center">
          <h3><b>START PLAYING. START WINNING</b></h3><br/>
        </div>
	    </div>
      <div class="row">
        <div class="col-sm-9" align="center">
          <p style={{fontSize: "30px"}}>Use code : WC210 add Rs. 200 more and get 210% bonus! </p>
          </div>
          <div class="col-sm-3">
    	<input type="button" class="buttonOfReadmore" value="Login"/>
          </div>
      </div>
    </div>

{/*
    <div className="styleofSection" >
    <div className="row">
      <div className="col-md-6 styleofBox" style={{textAlign:"center"}}>
      <form >
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
      <button type="submit" className="btn btn-lg" style={{borderRadius:25,backgroundColor:"#e5a930",width:"300px"}} >Submit</button>
    </form>
    </div>
    <div className="col-md-6 bgimg" >
      <h1 style={{color:"white",paddingTop:"80px"}}><span style={{fontSize:"25px"}}>REGISTER NOW & GET</span><br/>
      <span style={{color:"#e5a930",fontSize:"50px"}}>Rs.1000</span><br/>BONUS</h1>
    </div>
    </div>
    <br/></div>*/}



  <div class="styleofSection bgimgofTeam">
  <div class="row">
    <div class="col-sm-6" align="center">
    	<img src={require('./Images/user@3x.png')} height="40" width="70"/>
    	<p style={{marginTop: "20px"}}><span style={{color:"#e5a930"}}>10 Million+</span> Players</p>
    </div>
    <div class="col-sm-6" align="center">
    	<img src={require('./Images/desktop and mobile@3x.png')} height="40" width="70"/>
    	<p style={{marginTop: "20px"}}><span style={{color:"#e5a930"}}>Play</span> Anytime Anywhere</p>
    </div>
  </div><br/>
  <div class="row">
    <div class="col-sm-6" align="center">
    	<img src={require('./Images/security-shield@3x.png')} height="50" width="60"/>
    	<p style={{marginTop: "20px"}}><span style={{color:"#e5a930"}}>100%</span> Safe & Secure</p>
    </div>
    <div class="col-sm-6" align="center">
    	<img src={require('./Images/games@3x.png')} height="40" width="70"/>
    	<p style={{marginTop: "20px"}}><span style={{color:"#e5a930"}}>Best in Class</span> Gaming Experience</p>
    </div>
  </div>
  </div>

  <div class="styleofSection1 bgimgofTeam1">
	<div class="row">
	    <div class="col-sm-12" align="center">
	    	<h3><b>Enter your Mobile Number and Download App</b></h3><br/><br/>
	    </div>
	</div>
  <div class="row" align="center">
  	<div class="col-sm-1">
    </div>
    <div class="col-sm-4" style={{marginTop: "6px"}}>
    	<input type="text" class="form-control" id="usr" placeholder="Mobile Number"/>
    </div>
    <div class="col-sm-2" style={{marginTop:"5px"}}>
    	<input type="button" className="btn btn-warning" value="Download" style={{height:"40px",width:"200px"}}/>
    </div>
    <div class="col-sm-1">
    	<img src={require('./Images/play store button@3x.png')} height="50" width="130"/>
    </div>
    <div class="col-sm-3">
    	<img src={require('./Images/app store button@3x.png')} height="50" width="130"/>
    </div>
  </div></div>


  <div className="footer" style={{backgroundColor:"#170a44",height:"80px"}}>
  <pre style={{color:"#e5a930",paddingTop:"20px"}} align="center">Privacy Policy    Terms and Conditions</pre>
  <p style={{color:"white"}} align="center"><FaCopyright/> Quadrific Media Pvt ltd. All Rights Reserved</p>
  </div>
  </div>

  );
}

export default App;
