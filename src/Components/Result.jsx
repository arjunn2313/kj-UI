import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Card } from 'react-bootstrap';
import R1 from '../Images/B1.png';
import p1 from '../Images/p1.png';
import m3 from '../Images/m3.png';
import R2 from '../Images/m2.png';
import R3 from '../Images/R3.png';
import mp1 from '../Images/mp1.png';
import mp2 from '../Images/mp2.png';
import mp3 from '../Images/mp3.png';
import mp4 from '../Images/mp4.png';
import home from'../Images/home.png';
import { DropdownButton } from 'react-bootstrap';
import { useState } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';



const Result = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const navigate = useNavigate(); 
  const handleItemClick = (item) => {
    setSelectedItem(item);
    console.log("Selected item:", item);
  };

  const handleViewDetails = () => {
    
    navigate('/builder'); 
  };
  return (
    
     <div>
 <Navbar/>
    <div className="container mt-5" style={{fontSize:'30px'}}>
    <Card style={{ width: '1170px',borderRadius:'10px', border:'none'}}>
    <div className="d-flex justify-content-between">
  <div className="">
    <p className="text-start" style={{ fontSize: '30px', marginTop: '100px' }}>9466 results | Flats in Chennai for Sale</p>
  </div>

  <div className="">
    <div className='pt-5 mt-5'>
  <DropdownButton
        id="dropdown-basic-button"
        type="button" 
         aria-expanded="false"
         className=" "
        title={selectedItem ? selectedItem : "Relevance"}
      
      >
        <div className='custom-dropdown '>
          <Dropdown.Item onClick={() => handleItemClick("Relevance")} href="#/action-1">Relevance</Dropdown.Item>
          <Dropdown.Item onClick={() => handleItemClick("Popularity")} href="#/action-2">Popularity</Dropdown.Item>
          <Dropdown.Item onClick={() => handleItemClick("Price-LowtoHigh")} href="#/action-3">Price-Low to High</Dropdown.Item>
          <Dropdown.Item onClick={() => handleItemClick("Price-hightoLow")} href="#/action-1">Price-high toLow</Dropdown.Item>
          <Dropdown.Item onClick={() => handleItemClick("NewestFirst")} href="#/action-2">Newest First</Dropdown.Item>
        </div>
      </DropdownButton>
  
</div>
</div>
</div>
</Card>

        <Card style={{ width: '1170px',height:'480px',borderRadius:'10px', border:'1px solid #D7242A'}}>
      
       <div className='row mx-4 my-3'style={{color: "#2D2D2D",fontSize:"20px",
}}>
          <div className='col ms-2'>
          <img src={R1} alt="" style={{height:"400px",weight:'450px',borderRadius:'10px'}} />
          </div>
         <div className='col ms-2'>

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
<div class="col mt-3">
  <div class="card" style={{width:'100px',height:'92px'}}>
   
      <img src={home} className='ms-3' style={{width:'30px',height:'32px'}} alt="Description of the image"/>

<p className='mt-3'style={{fontWeight:'500',fontSize:'12px',alignItems:'center'}}>Garden view</p>
  </div>
</div>

  <div class="col mt-3">
  <div class="card" style={{width:'100px',height:'92px'}}>
    <img src={home} className='ms-3' style={{width:'30px',height:'32px'}} alt="Description of the image"/>
    <p className='mt-3 ms-2'style={{fontWeight:'500',fontSize:'12px',alignItems:'center'}}>Kids Play Area</p>
    </div>
  </div>
  <div class="col mt-3">
  <div class="card" style={{width:'100px',height:'92px'}}>
    <img src={home} className="ms-3" style={{width:'30px',height:'32px'}}alt="Description of the image"/>
    <p className='mt-3 ms-2'style={{fontWeight:'500',fontSize:'12px',alignItems:'center'}}>Lift Facility</p>
    </div>
  </div>
  <div class="col mt-3">
  <div class="card" style={{width:'100px',height:'92px'}}>
    <img src={home} className="ms-3"style={{width:'30px',height:'32px'}} alt="Description of the image"/>
    <p className='mt-3 ms-2'style={{fontWeight:'500',fontSize:'12px',alignItems:'center'}}>Car Parking</p>
    </div>
  </div>
</div>

<p className='mt-3' style={{fontWeight:'400px',fontSize:'8px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
Lorem Ipsum is simply dummy text of the printing......</p> 
<div className= "row">
  <div className= "col">

  </div>
  <div className= "col text-end">
  <button style={{ backgroundColor: '#D7242A', color: 'white', border: 'none', padding: '10px 20px', fontSize: '16px', borderRadius: '30px' }} onClick={handleViewDetails}>View Details</button>
  </div>
</div>
          </div>
  
       </div>
        
        </Card>
        <Card className="mt-5"style={{ width: '1170px', border: ' 1px solid #D7242A' }}>
        <div className='row mx-2 my-3'style={{color: "#2D2D2D",fontSize:"20px"
}}>
          <div className='col mx-3 my-2'>
          <img src={R2} alt="" style={{height:"380px",weight:'450px',borderRadius:'30px'}} />
          
          </div>
          <div className='col ms-2'>

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
<div class="col mt-3">
  <div class="card" style={{width:'100px',height:'92px'}}>
   
      <img src={home} className="ms-3" style={{width:'30px',height:'32px'}} alt="Description of the image"/>

<p className='mt-3 ms-2'style={{fontWeight:'500',fontSize:'12px',alignItems:'center'}}>Garden view</p>
  </div>
</div>

  <div class="col mt-3">
  <div class="card" style={{width:'100px',height:'92px'}}>
    <img src={home} className ="ms-3"style={{width:'30px',height:'32px'}} alt="Description of the image"/>
    <p className='mt-3 ms-2'style={{fontWeight:'500',fontSize:'12px',alignItems:'center'}}>Kids Play Area</p>
    </div>
  </div>
  <div class="col mt-3">
  <div class="card" style={{width:'100px',height:'92px'}}>
    <img src={home} className="ms-3" style={{width:'30px',height:'32px'}}alt="Description of the image"/>
    <p className='mt-3 ms-2'style={{fontWeight:'500',fontSize:'12px',alignItems:'center'}}>Lift Facility</p>
    </div>
  </div>
  <div class="col mt-3">
  <div class="card" style={{width:'100px',height:'92px'}}>
    <img src={home} className='ms-3' style={{width:'30px',height:'32px'}} alt="Description of the image"/>
    <p className='mt-3 ms-2'style={{fontWeight:'500',fontSize:'12px',alignItems:'center'}}>Car Parking</p>
    </div>
  </div>
</div>
<p className='mt-3' style={{fontWeight:'400px',fontSize:'8px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
Lorem Ipsum is simply dummy text of the printing......</p>
<div className= "row">
  <div className= "col">

  </div>
  <div className= "col text-end">
  <button style={{ backgroundColor: '#D7242A', color: 'white', border: 'none', padding: '10px 20px', fontSize: '16px', borderRadius: '30px' }} onClick={handleViewDetails}>View Details</button>
  </div>
</div>
    
          </div>
        
       </div>
        
        </Card>
        <Card className="mt-5"style={{ width: '1170px', border: '1px solid #D7242A' }}>
        <div className='row mx-2 my-3'style={{color: "#2D2D2D",fontSize:"20px"
}}>
        <div className='col  mx-3 my-2'>
    <img src={R3} alt="" style={{ height: "380px", width: '700px', borderRadius: '30px' }} />
</div>

          <div className='col ms-2'>

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
<div class="col mt-3">
  <div class="card" style={{width:'100px',height:'92px'}}>
   
      <img src={home} className="ms-3" style={{width:'30px',height:'32px'}} alt="Description of the image"/>

<p className='mt-3'style={{fontWeight:'500',fontSize:'12px',alignItems:'center'}}>Garden view</p>
  </div>
</div>

  <div class="col mt-3">
  <div class="card" style={{width:'100px',height:'92px'}}>
    <img src={home} className="ms-3" style={{width:'30px',height:'32px'}} alt="Description of the image"/>
    <p className='mt-3 ms-2'style={{fontWeight:'500',fontSize:'12px',alignItems:'center'}}>Kids Play Area</p>
    </div>
  </div>
  <div class="col mt-3">
  <div class="card" style={{width:'100px',height:'92px'}}>
    <img src={home} className="ms-3" style={{width:'30px',height:'32px'}}alt="Description of the image"/>
    <p className='mt-3 ms-2'style={{fontWeight:'500',fontSize:'12px',alignItems:'center'}}>Lift Facility</p>
    </div>
  </div>
  <div class="col mt-3">
  <div class="card" style={{width:'100px',height:'92px'}}>
    <img src={home} className="ms-3" style={{width:'30px',height:'32px'}} alt="Description of the image"/>
    <p className='mt-3 ms-2'style={{fontWeight:'500',fontSize:'12px',alignItems:'center'}}>Car Parking</p>
    </div>
  </div>
</div>
<p className='mt-3' style={{fontWeight:'400px',fontSize:'8px'}}>Lorem Ipsum is simply <br/>
dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
Lorem Ipsum is simply dummy text of the printing......</p>
<div className= "row">
  <div className= "col">

  </div>
  <div className= "col text-end">
  <button style={{ backgroundColor: '#D7242A', color: 'white', border: 'none', padding: '10px 20px', fontSize: '16px', borderRadius: '30px' }} onClick={handleViewDetails}>View Details</button>
  </div>
</div>
          </div>
        
       </div>
        
         </Card>
      </div>
      <Footer/>
      </div>
    
  )
}

export default Result
