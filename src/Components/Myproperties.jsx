import React from 'react'

import { Row, Col } from 'react-bootstrap';
import m1 from '../Images/m1.png';
import m2 from '../Images/m2.png';
import m3 from '../Images/m3.png';
import mp1 from '../Images/mp1.png';
import mp2 from '../Images/mp2.png';
import mp3 from '../Images/mp3.png';
import mp4 from '../Images/mp4.png';
import circle from '../Images/home.png'
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Dropdown, DropdownButton } from 'react-bootstrap';
import Navbar from './Navbar';
import Footer from './Footer';
const Myproperties = () => {
  const navigate = useNavigate(); 
  const handleDetail = () => {

    navigate('/detail'); 
  };
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
 <Navbar/>
    <div className="container mt-5" style={{fontSize:'30px'}}>
     

        <p className="text-start" style={{fontSize:'30px',marginTop:'100px'}}> My Properties</p>
        <Card style={{ width: '1170px',height:'450px',borderRadius:'10px', border:'1px solid #D7242A'}} onClick={handleDetail}>
      
       <div className='row mx-4 my-3'style={{color: "#2D2D2D",fontSize:"20px",
}}>
          <div className='col ms-2'>
          <img src={m1} alt="" style={{height:"400px",weight:'450px',borderRadius:'10px'}} />
          </div>
         <div className='col ms-2'>
         <button
  type="button"
  className="btn btn-primary"
  style={{
    color: '#FFF',
    fontFamily: 'Poppins',
    fontSize: '10px',

    fontWeight: '300',
   
    backgroundColor: '#D76724',
   borderRadius:'4px',
   border:'none',

 
  }}
>
On Progress
</button>
<div className='d-flex justify-content-between align-items-center'>

    <p className="text-left mt-3 mb-0">3 BHK Flat for Sale in Perungudi, Chennai</p>
    <div className='d-flex flex-column'>
 
  <p className="text-right mb-0" style={{ width: '163px', height: '60px', fontWeight: '600', fontSize: "38px", color: '#D7242A' }}>₹ 1.24 Cr</p>
  <p className="text-right mb-0 me-3" style={{ fontSize: '14px', alignSelf: 'flex-end',color:'#2D2D2D' }}>₹9,868 per sqft</p>
</div>
</div>



<p className='text-left'style={{color: '#717171',fontSize:"20px"}}>VGN Fairmont</p>
<div className='card' style={{width:'640px',height:"120px"}}>
<div className='row mx-2'>
  <div className='col mt-2'>
    <p style={{ fontSize: '9px', width: '66px', height: '15px', marginBottom: '0' }}>SQUARE AREA</p>
    <h6>1800 sqft.</h6>
  </div>
  <div className='col mt-2 border-start'>
    <p style={{ fontSize: '9px', width: '66px', height: '15px', marginBottom: '0' }}>STATUS</p>
    <h6>Ready to Move</h6>
  </div>
  <div className='col mt-2 border-start'>
    <p style={{ fontSize: '9px', width: '66px', height: '15px', marginBottom: '0' }}>TRANSACTION</p>
    <h6>New Property</h6>
  </div>
  <div className='col mt-2 border-start'>
    <p style={{ fontSize: '9px', width: '66px', height: '15px', marginBottom: '0' }}>FURNISHING</p>
    <h6>Unfurnished</h6>
  </div>
</div>
<div className='row mx-2'>
  <div className='col mt-2'>
    <p style={{ fontSize: '9px', width: '66px', height: '15px', marginBottom: '0' }}>CAR PARKING</p>
    <h6>1 Covered.</h6>
  </div>
  <div className='col mt-2 border-start'>
    <p style={{ fontSize: '9px', width: '66px', height: '15px', marginBottom: '0' }}>BATHROOM</p>
    <h6>3</h6>
  </div>
  <div className='col mt-2'>
    
  </div>
  <div className='col mt-2'>

  </div>
</div>

</div>
<div class="row" style={{color: '#717171',fontSize:"20px"}}>
<div class="col-sm-3 mt-3">
  <div class="card" style={{width:'100px',height:'92px'}}>
   
      <img src={circle}  className ="ms-3" style={{width:'30px',height:'32px'}} alt="Description of the image"/>

<p className='mt-3 ms-2'style={{fontWeight:'500',fontSize:'12px',alignItems:'center'}}>Garden view</p>
  </div>
</div>

  <div class="col-sm-3 mt-3">
  <div class="card" style={{width:'100px',height:'92px'}}>
    <img src={circle} className ="ms-3" style={{width:'30px',height:'32px'}} alt="Description of the image"/>
    <p className='mt-3 ms-2'style={{fontWeight:'500',fontSize:'12px',alignItems:'center'}}>Kids Play Area</p>
    </div>
  </div>
  <div class="col-sm-3 mt-3">
  <div class="card" style={{width:'100px',height:'92px'}}>
    <img src={circle} className ="ms-3" style={{width:'30px',height:'32px'}}alt="Description of the image"/>
    <p className='mt-3 ms-2'style={{fontWeight:'500',fontSize:'12px',alignItems:'center'}}>Lift Facility</p>
    </div>
  </div>
  <div class="col-sm-3 mt-3">
  <div class="card" style={{width:'100px',height:'92px'}}>
    <img src={circle} className ="ms-3" style={{width:'30px',height:'32px'}} alt="Description of the image"/>
    <p className='mt-3 ms-2'style={{fontWeight:'500',fontSize:'12px',alignItems:'center'}}>Car Parking</p>
    </div>
  </div>
</div>

<p className='mt-3' style={{fontWeight:'400px',fontSize:'10px'}}>Lorem Ipsum is simply  .  dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
Lorem Ipsum is simply dummy text of the printing......</p>   
          </div>
        
       </div>
        
        </Card>
        <Card className="mt-5"style={{ width: '1170px', border: ' 1px solid #D7242A' }}>
        <div className='row mx-2 my-3'style={{color: "#2D2D2D",fontSize:"20px"
}}>
          <div className='col mx-3 my-2'>
          <img src={m3} alt="" style={{height:"380px",weight:'450px',borderRadius:'30px'}} />
          
          </div>
          <div className='col ms-2'>
         <button
  type="button"
  className="btn btn-primary"
  style={{
    color: '#FFF',
    fontFamily: 'Poppins',
    fontSize: '10px',

    fontWeight: '300',
   
    backgroundColor: '#D7242A',
   borderRadius:'4px',
   border:'none',

 
  }}
>
Delete
</button>
<div className='d-flex justify-content-between align-items-center'>

    <p className="text-left mt-3 mb-0">3 BHK Flat for Sale in Perungudi, Chennai</p>
    <div className='d-flex flex-column'>
 
  <p className="text-right mb-0" style={{ width: '163px', height: '60px', fontWeight: '600', fontSize: "38px", color: '#D7242A' }}>₹ 1.24 Cr</p>
  <p className="text-right mb-0 me-3" style={{ fontSize: '14px', alignSelf: 'flex-end',color:'#2D2D2D' }}>₹9,868 per sqft</p>
</div>
</div>
<p className='text-left'style={{color: '#717171',fontSize:"20px"}}>VGN Fairmont</p>
<div className='card' style={{width:'640px',height:"120px"}}>
<div className='row mx-2'>
  <div className='col mt-2'>
    <p style={{ fontSize: '9px', width: '66px', height: '15px', marginBottom: '0' }}>SQUARE AREA</p>
    <h6>1800 sqft.</h6>
  </div>
  <div className='col mt-2 border-start'>
    <p style={{ fontSize: '9px', width: '66px', height: '15px', marginBottom: '0' }}>STATUS</p>
    <h6>Ready to Move</h6>
  </div>
  <div className='col mt-2 border-start'>
    <p style={{ fontSize: '9px', width: '66px', height: '15px', marginBottom: '0' }}>TRANSACTION</p>
    <h6>New Property</h6>
  </div>
  <div className='col mt-2 border-start'>
    <p style={{ fontSize: '9px', width: '66px', height: '15px', marginBottom: '0' }}>FURNISHING</p>
    <h6>Unfurnished</h6>
  </div>
</div>
<div className='row mx-2'>
  <div className='col mt-2'>
    <p style={{ fontSize: '9px', width: '66px', height: '15px', marginBottom: '0' }}>CAR PARKING</p>
    <h6>1 Covered.</h6>
  </div>
  <div className='col mt-2 border-start'>
    <p style={{ fontSize: '9px', width: '66px', height: '15px', marginBottom: '0' }}>BATHROOM</p>
    <h6>3</h6>
  </div>
  <div className='col mt-2'>
    
  </div>
  <div className='col mt-2'>

  </div>
</div>

</div>
<div class="row" style={{color: '#717171',fontSize:"20px"}}>
<div class="col-sm-3 mt-3">
  <div class="card" style={{width:'100px',height:'92px'}}>
   
      <img src={circle} className ="ms-3" style={{width:'30px',height:'32px'}} alt="Description of the image"/>

<p className='mt-3 ms-2'style={{fontWeight:'500',fontSize:'12px',alignItems:'center'}}>Garden view</p>
  </div>
</div>

  <div class="col-sm-3 mt-3">
  <div class="card" style={{width:'100px',height:'92px'}}>
    <img src={circle} className ="ms-3"  style={{width:'30px',height:'32px'}} alt="Description of the image"/>
    <p className='mt-3 ms-2'style={{fontWeight:'500',fontSize:'12px',alignItems:'center'}}>Kids Play Area</p>
    </div>
  </div>
  <div class="col-sm-3 mt-3">
  <div class="card" style={{width:'100px',height:'92px'}}>
    <img src={circle} className ="ms-3"  style={{width:'30px',height:'32px'}}alt="Description of the image"/>
    <p className='mt-3 ms-2'style={{fontWeight:'500',fontSize:'12px',alignItems:'center'}}>Lift Facility</p>
    </div>
  </div>
  <div class="col-sm-3 mt-3">
  <div class="card" style={{width:'100px',height:'92px'}}>
    <img src={circle} className ="ms-3"  style={{width:'30px',height:'32px'}} alt="Description of the image"/>
    <p className='mt-3 ms-2 'style={{fontWeight:'500',fontSize:'12px',alignItems:'center'}}>Car Parking</p>
    </div>
  </div>
</div>
<p className='mt-3 ms-2' style={{fontWeight:'400px',fontSize:'10px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
Lorem Ipsum is simply dummy text of the printing......</p>

    
          </div>
        
       </div>
        
        </Card>
        <Card className="mt-5"style={{ width: '1170px', border: '1px solid #D7242A' }}>
        <div className='row mx-2 my-3'style={{color: "#2D2D2D",fontSize:"20px"
}}>
          <div className='col  mx-3 my-2'>
          <img src={m2} alt="" style={{height:"380px",weight:'450px'}} />
          </div>
          <div className='col ms-2'>
         <button
  type="button"
  className="btn btn-primary"
  style={{
    color: '#FFF',
    fontFamily: 'Poppins',
    fontSize: '10px',

    fontWeight: '300',
   
    backgroundColor: ' #1D9719',
  
   borderRadius:'4px',
   border:'none',

 
  }}
>
Sold
</button>
<div className='d-flex justify-content-between align-items-center'>

    <p className="text-left mt-3 mb-0">3 BHK Flat for Sale in Perungudi, Chennai</p>
    <div className='d-flex flex-column'>
 
  <p className="text-right mb-0" style={{ width: '163px', height: '60px', fontWeight: '600', fontSize: "38px", color: '#D7242A' }}>₹ 1.24 Cr</p>
  <p className="text-right mb-0 me-3" style={{ fontSize: '14px', alignSelf: 'flex-end',color:'#2D2D2D' }}>₹9,868 per sqft</p>
</div>
</div>



<p className='text-left'style={{color: '#717171',fontSize:"20px"}}>VGN Fairmont</p>
<div className='card' style={{width:'640px',height:"120px"}}>
<div className='row mx-2'>
  <div className='col mt-2'>
    <p style={{ fontSize: '9px', width: '66px', height: '15px', marginBottom: '0' }}>SQUARE AREA</p>
    <h6>1800 sqft.</h6>
  </div>
  <div className='col mt-2 border-start'>
    <p style={{ fontSize: '9px', width: '66px', height: '15px', marginBottom: '0' }}>STATUS</p>
    <h6>Ready to Move</h6>
  </div>
  <div className='col mt-2 border-start'>
    <p style={{ fontSize: '9px', width: '66px', height: '15px', marginBottom: '0' }}>TRANSACTION</p>
    <h6>New Property</h6>
  </div>
  <div className='col mt-2 border-start'>
    <p style={{ fontSize: '9px', width: '66px', height: '15px', marginBottom: '0' }}>FURNISHING</p>
    <h6>Unfurnished</h6>
  </div>
</div>
<div className='row mx-2'>
  <div className='col mt-2'>
    <p style={{ fontSize: '9px', width: '66px', height: '15px', marginBottom: '0' }}>CAR PARKING</p>
    <h6>1 Covered</h6>
  </div>
  <div className='col mt-2 border-start'>
    <p style={{ fontSize: '9px', width: '66px', height: '15px', marginBottom: '0' }}>BATHROOM</p>
    <h6>3</h6>
  </div>
  <div className='col mt-2'>
   
  </div>
  <div className='col mt-2 '>

  </div>

</div>
</div>
<div class="row" style={{color: '#717171',fontSize:"20px"}}>
<div class="col-sm-3 mt-3">
  <div class="card" style={{width:'100px',height:'92px'}}>
   
      <img src={circle} className='ms-3' style={{width:'30px',height:'32px'}} alt="Description of the image"/>

<p className='mt-3 ms-2'style={{fontWeight:'500',fontSize:'12px',alignItems:'center'}}>Garden view</p>
  </div>
</div>

  <div class="col-sm-3 mt-3">
  <div class="card" style={{width:'100px',height:'92px'}}>
    <img src={circle} className="ms-3"style={{width:'30px',height:'32px'}} alt="Description of the image"/>
    <p className='mt-3 ms-2'style={{fontWeight:'500',fontSize:'12px',alignItems:'center'}}>Kids Play Area</p>
    </div>
  </div>
  <div class="col-sm-3 mt-3">
  <div class="card" style={{width:'100px',height:'92px'}}>
    <img src={circle} className="ms-3" style={{width:'30px',height:'32px'}}alt="Description of the image"/>
    <p className='mt-3 ms-2'style={{fontWeight:'500',fontSize:'12px',alignItems:'center'}}>Lift Facility</p>
    </div>
  </div>
  <div class="col-sm-3 mt-3">
  <div class="card" style={{width:'100px',height:'92px'}}>
    <img src={circle} className="ms-3" style={{width:'30px',height:'32px'}} alt="Description of the image"/>
    <p className='mt-3 ms-2'style={{fontWeight:'500',fontSize:'12px',alignItems:'center'}}>Car Parking</p>
    </div>
  </div>
</div>
<p className='mt-3' style={{fontWeight:'400px',fontSize:'10px'}}>Lorem Ipsum is simply printing and typesetting industry. Lorem  to make a type specimen book. 
......</p>
    
          </div>
        
       </div>
        
         </Card>
      </div>
      <Footer/>
      </div>
  )
}

export default Myproperties
