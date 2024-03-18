import React from 'react'
import background from '../Images/bg.jpg';
import image1 from '../Images/image1.png';
import image2 from '../Images/f1.png';
import image3 from '../Images/f2.png';
import { Row, Col, Button } from 'react-bootstrap';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp   } from "react-icons/io";
import { IoSearchOutline } from 'react-icons/io5';
import { Dropdown,Card, DropdownToggle} from 'react-bootstrap'; 

import { useState } from 'react';
import Budget from './Budget';

import { useNavigate } from 'react-router-dom';
const Navigation = () => {
  const navigate = useNavigate(); 

  const handleSearch =()=>{

 
    
    navigate('/result'); 
  }
  const navStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '350px', // Adjust height as needed
    marginTop: '85px',
  };
  const buttonStyle = {
    backgroundColor: '#FFFFFF', // Set background color to white
    color: '#656565', // Set text color
    border: '1px solid #C5C5C5', // Set border color and style
    margin: '0 0.5rem', // Adjust margin as needed
    // Add other styles as needed
  };
  const dropdownToggle = {
    border: 'none',
  };
  const navbarStyle = {
    backgroundColor: '#FFFFFF4D',

    width: '100%',
  };

  const navLinkStyle = {
    color: '#000000', 
  };

  const containerbudget = {
  
  };

  const navLinkHoverStyle = {
    Color: '#D7242A',
    transition: 'background-color 0.3s ease',
  };
  const handleMouseEnter = (e) => {
    e.target.style.Color = navLinkHoverStyle.Color;
    e.target.style.color = navLinkHoverStyle.Color;
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = '';
    e.target.style.color = navLinkStyle.color;

  };
 
  const activeLinkStyle = {
    color: '#D7242A',
  };
 
  const [color, setcolor] = useState('');
  const [activeDropdown, setActiveDropdown] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [plott, setPlott] = useState('');
  const [facing, setFacing] = useState('');
const [residential,setResidential] = useState('');
const [Bedroom, setBedroom] = useState('');
const [Commercial,setCommercial] = useState('');
const [Category, setCategory] = useState('');
const [pgrent,setPgrent]=useState(false);
const [Gender, setGender] = useState('');
const [selectedOption, setSelectedOption] = useState(null);
const [activeLink, setActiveLink] = useState('Plot');
const [price, setprice] = useState(false);
const [link, setlink] = useState('Buy')
  const handleDropdownClick = (dropdown) => {
    setActiveDropdown(dropdown);
    setActiveLink(dropdown);
    setPropertyType('');
    setPlott('');
    setFacing('');
    setCategory('');
    setCommercial('');
    setBedroom('');
    setResidential('');
    setPgrent('');
    setGender('');
    setSelectedOption('');
    setprice(false)
  };
  const handleClick = (option) => {
    setSelectedOption(option);
  };

  const handlePropertyTypeClick = (type) => {
    setPropertyType(type);
    setprice(false)
  };
  const handleButtonClick = (items) => {
    setPlott(items);
    
    }
  
const handleplot =(plot) =>{
  setFacing(plot);
}
const handleplotss =(value) =>{
  setBedroom(value);
}

const handleButtonres = (button) =>{
  setResidential(button);
}
const handlecommercial = (handle) =>{
  setcolor(handle);
  if (handle=== 'PG Home' || handle === 'PG Hostel') {
    setPgrent(true);
    setCommercial(false);
  } else {
    setPgrent(false);
    setCommercial(true);
  }

}
const handleplotcommercial =(data) =>{
  setCategory(data);
}

const handleGender =(Gender) =>{
  setGender(Gender);
}
const handleBudget =(budget)=>{
  setprice(budget);
  setPropertyType(false);
  setActiveDropdown(false);
  }

  const handleLinkClick = (link) => {
    setlink(link);
  };
  return (
    <div className='navbar-custom1' style={navStyle}>
      <nav className="navbar navbar-expand-lg ">
        <div className="" style={navbarStyle}>
          <ul className="navbar-nav d-flex justify-content-between mx-lg-5">
          <li className="nav-item">
              <a className="nav-link active" href="" style={link === 'Buy' ? activeLinkStyle : navLinkStyle} onClick={() => handleLinkClick('Buy')} onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                Buy
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={link === 'Rent' ? activeLinkStyle : navLinkStyle} onClick={() => handleLinkClick('Rent')}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                Rent
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={link === ' Lease' ? activeLinkStyle : navLinkStyle} onClick={() => handleLinkClick('Lease')}
               
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                Lease
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/post" style={navLinkStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                Sell
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={navLinkStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
              Prime
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={navLinkStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
               Help
              </a>
            </li>
  
          
          
           
          </ul>
        </div>
      </nav>
      <h1 className="text-center my-5 text-white-50">Welcome back, Let’s continue Your Search </h1>
     
      <div className="card bg-light text-dark custom-border-radius mx-auto  pb-5 w-50">
      <nav className="navbar navbar-expand-lg">
          <div className="container" style={{backgroundColor: '#FFFFFF4D', width: '100%'}}>
            <ul className="navbar-nav value d-flex justify-content-between w-100">
              <li className="nav-item ">
                <a  className={`nav-link ${activeLink === 'Plot' ? 'design' : ''}`}
                 style={{color: '#000000'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => handleDropdownClick('Plot')}>
                  Plot
                </a> 
                {/* <a
                className={`nav-link ${activeLink === 1 ? 'design' : ''}`}
                aria-current="page"
                style={navLinkStyle}
                onMouseEnter={handleMouseEnter}  
                onMouseLeave={handleMouseLeave}
                onClick={() => handleplotClick(1)}
              >
                Plot
              </a> */}
              </li>
              <li className="nav-item">
                <a  className={`nav-link ${activeLink === 'Land' ? 'design' : ''}`}  style={{color: '#000000'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => handleDropdownClick('Land')}>
                  Land
                </a>
              </li>
              <li className="nav-item">
                <a  className={`nav-link ${activeLink === 'Residential' ? 'design' : ''}`}  style={{color: '#000000'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => handleDropdownClick('Residential')}>
                  Residential
                </a>
              </li>
              <li className="nav-item">
                <a  className={`nav-link ${activeLink === 'Commercial'? 'design' : ''}`}  style={{color: '#000000'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => handleDropdownClick('Commercial')}>
                  Commercial
                </a>
              </li>
            </ul>
          </div>
        </nav>
      
      <hr className="dropdown-divider" />
   
      <hr />
      <div className="container mx-3">
      <div className="row  text-black">
      {/* <div className="col d-flex justify-content-between align-items-center ">
  <a className="navbar-brand me-3 me-md-5" href="/">
    <img className="img-fluid" style={{width:"30px",height:"30px"}} src={image1} alt="Logo" /> 
  </a>
  <span className=''>Chennai</span>
  <div className="vr mx-2 mx-md-4"></div>
</div> */}

<div className="col d-flex justify-content-between align-items-center">
  <a className="navbar-brand me-3 me-md-5" href="/">
    <img className="img-fluid ms-4"  src={image1} alt="Logo" /> 
  </a>
  <span className=''>Chennai</span>
  <div className="vr mx-md-4"></div>
</div>

       <div className="col d-flex  justify-content-between align-items-center">
   
   <a className="navbar-brand me-3 me-md-5" href="/">
  <img className='img-fluid fixed-image' src={image2} alt="Logo" />
</a>

    <span className='' style={{ border: 'none',cursor:'pointer' }}onClick={()=>handlePropertyTypeClick('Property Type')}>Property Type   <IoIosArrowDown /></span>




  <div className="vr mx-2"></div>
</div>

<div className="col d-flex justify-content-center  align-items-center ">
     

     <a className="navbar-brand me-3 me-md-5" href="/">
       <img  className="img-fluid fixed-image" src={image3}  alt="Logo" />
     </a>
     <span className='' style={{ border: 'none',cursor:'pointer'}}onClick={()=>handleBudget('Budget')}>Budget <IoIosArrowDown /></span>
     </div>
        <div className="col d-flex justify-content-between align-items-center me-3">
  <button className="btn btn-danger rounded-pill  w-100" style={{ height: '60px' }} onClick={()=>handleSearch('Budget')}>
    <IoSearchOutline className='me-4' />Search
  </button>
</div>

      </div>
     
    </div>
   
</div>
{price&&!propertyType&&(
  <Card className=" text-dark custom-border-radius mx-auto w-50"style={{ backgroundColor: "white", zIndex: 1}}>
         <Budget />
          </Card>

)


  
}

{propertyType&& (
<>

    { activeDropdown === 'Plot' && (
       <div className='card bg-light text-dark custom-border-radius mx-auto w-50 pt-3'style={{ backgroundColor: "white", zIndex: 1}} >
          <div className=' d-flex flex-wrap gap-2 mx-3 my-3' >
                     
                     <Button
             type="button"
             className={`btn btn-outline-light me-2 customplot rounded-pill  ${plott  === 'Residential plot' ? 'rest1' : ''}`}
             onClick={() => handleButtonClick('Residential plot')}
           >
             Residential plot
           </Button>
       <Button 
         type="button"
         className={`btn btn-outline-light me-2 customplot rounded-pill ${plott  === 'CommercialProperty' ? 'rest1' : ''}`}
         onClick={() => handleButtonClick('CommercialProperty')}
        
       >
         Commercial Plot
       </Button>
       <Button
         type="button"
         className={`btn btn-outline-light me-2 customplot rounded-pill ${plott  === 'Industrial Plot' ? 'rest1' : ''}`}
         onClick={() => handleButtonClick('Industrial Plot')}
       >
         Industrial Plot
       </Button>
       
                 <div>
       
                 </div>
                 
                  
                
                 
               </div>
               </div>
             )}
            { activeDropdown === 'Land' && (

<div className='card bg-light text-dark custom-border-radius mx-auto w-50 pt-3'style={{ backgroundColor: "white", zIndex: 1}} >
   
        <div className='d-flex flex-wrap gap-3 mx-3 my-3 '>
         
          <Button
            type="button"
            className={`btn btn-outline-light me-2 customplot rounded-pill ${plott  === 'Residential Land' ? 'rest1' : ''}`}
            onClick={() => handleButtonClick('Residential Land')}>
            Residential Land
          </Button>
          <Button
            type="button"
            className={`btn btn-outline-light me-2 customplot rounded-pill ${plott  === 'Industrial Land' ? 'rest1' : ''}`}
            onClick={() => handleButtonClick('Industrial Land')}>
            Industrial Land
          </Button>
          <Button
            type="button"
            className={`btn btn-outline-light me-2 customplot rounded-pill ${plott  === 'Agricultural  Land' ? 'rest1' : ''}`}
          
            onClick={() => handleButtonClick('Agricultural  Land')}>
            Agricultural  Land
          </Button>
          <Button
            type="button"
            className={`btn btn-outline-light me-2 customplot rounded-pill ${plott  === 'Plantation' ? 'rest1' : ''}`}
            onClick={() => handleButtonClick('Plantation')}>
            Plantation
          </Button>
          <Button
            type="button"
            className={`btn btn-outline-light me-2 customplot rounded-pill ${plott  === 'Estate' ? 'rest1' : ''}`} 
            onClick={() => handleButtonClick('Estate')}>
            Estate
          </Button>
          <Button
            type="button"
            className={`btn btn-outline-light me-2 customplot rounded-pill ${plott  === 'Farm  Land' ? 'rest1' : ''}`} 
            onClick={() => handleButtonClick('Farm  Land')}>
            Farm  Land
          </Button>
          <Button
            type="button"
            className={`btn btn-outline-light me-2 customplot rounded-pill ${plott  === 'Furnishing' ? 'rest1' : ''}`}
            onClick={() => handleButtonClick('Furnishing')}>
            Furnishing
          </Button>
    
      

  </div>
  </div>
)}
 {activeDropdown === 'Residential' && (
 
 <div className='card bg-light text-dark custom-border-radius mx-auto w-50 pt-3'style={{ backgroundColor: "white", zIndex: 1}} >
   <div className='d-flex  flex-wrap gap-2 my-2 mx-2' >
 
                     <Button
                       type="button"
                       className={`btn btn-outline-light me-2 customplot rounded-pill ${residential === 'House' ? 'rest1' : ''}`}
                       onClick={() => handleButtonres('House')}
 
                     >
                       House
                     </Button>
                     <Button
                     
                       type="button"
                       className={`btn btn-outline-light me-2 customplot rounded-pill ${residential === 'Villa' ? 'rest1' : ''}`}
                      
                       onClick={() => handleButtonres('Villa')}
 
                     >
                       Villa
                     </Button>
                     <Button
                       type="button"
                       className={`btn btn-outline-light me-2 customplot rounded-pill ${residential === 'Bungalow' ? 'rest1' : ''}`}
                      
                       onClick={() => handleButtonres('Bungalow')}
 
                     >
                       Bungalow
                     </Button>
                     <Button
                       type="button"
                       className={`btn btn-outline-light me-2 customplot rounded-pill ${residential === 'Duplex House' ? 'rest1' : ''}`}
                       onClick={() => handleButtonres('Duplex House')}
 
                     >
                       Duplex House
                     </Button>
                     <Button
                       type="button"
                       className={`btn btn-outline-light me-2 customplot rounded-pill ${residential === 'Row House' ? 'rest1' : ''}`}
                       onClick={() => handleButtonres('Row House')}
 
                     >
                       Row House
                     </Button>
                     <Button
                       type="button"
                       className={`btn btn-outline-light me-2 customplot rounded-pill ${residential === 'Pant House' ? 'rest1' : ''}`}
                       onClick={() => handleButtonres('Pant House')}
 
                     >
                       Pant House
                     </Button>
                     <Button
                       type="button"
                       className={`btn btn-outline-light me-2 customplot rounded-pill ${residential === 'Farm house' ? 'rest1' : ''}`}
                       onClick={() => handleButtonres('Farm house')}
 
                     >
                       Farm house
                     </Button>
 
                  
                     <Button
                       type="button"
                       className={`btn btn-outline-light me-2 customplot rounded-pill ${residential === 'Flat' ? 'rest1' : ''}`}
                       onClick={() => handleButtonres('Flat')}
 
                     >
                       Flat
                     </Button>
                     <Button
                       type="button"
                       className={`btn btn-outline-light me-2 customplot rounded-pill ${residential === 'Apartment' ? 'rest1' : ''}`}
                       onClick={() => handleButtonres('Apartment')}
 
                     >
                       Apartment
                     </Button>
                     <Button
                       type="button"
                       className={`btn btn-outline-light me-2 customplot rounded-pill ${residential === 'BuilderFloor Apartment' ? 'rest1' : ''}`}
                       onClick={() => handleButtonres('BuilderFloor Apartment')}
 
                     >
                       BuilderFloor Apartment
                     </Button>
                     <Button
                       type="button"
                       className={`btn btn-outline-light me-2 customplot rounded-pill ${residential === 'Multi storey Apartment' ? 'rest1' : ''}`}
                       onClick={() => handleButtonres('Multi storey Apartment')}
 
 
                     >
                       Multi storey Apartment
                     </Button>
                     <Button
                       type="button"
                       className={`btn btn-outline-light me-2 customplot rounded-pill ${residential === 'Luxury Apartment' ? 'rest1' : ''}`}
                       onClick={() => handleButtonres('Luxury Apartment')}
 
                     >
                       Luxury Apartment
                     </Button>
                     <Button
                       type="button"
                       className={`btn btn-outline-light me-2 customplot rounded-pill ${residential === 'Studio Apartment' ? 'rest1' : ''}`}
                       onClick={() => handleButtonres('Studio Apartment')}
 
                     >
                       Studio Apartment
                     </Button>
                     </div>
 
                
                 </div>
              
         
       )}
 
 {activeDropdown === 'Commercial' && (
   <div className='card bg-light text-dark custom-border-radius mx-auto w-50 pt-3'style={{ backgroundColor: "white", zIndex: 1}} >
   <div className='d-flex flex-wrap gap-2 my-2 mx-2'>
   <Button
        type="button"
        className={`btn btn-outline-light me-2 customplot rounded-pill ${color === 'Office' ? 'rest1' : ''}`}
        onClick={() => handlecommercial('Office')}
      >
        Office
      </Button>
      <Button
        type="button"
        className={`btn btn-outline-light me-2 customplot rounded-pill ${color === 'Shop' ? 'rest1' : ''}`}
        onClick={() => handlecommercial('Shop')}
      >
        Shop
      </Button>
  <Button
    type="button"
    className={`btn btn-outline-light me-2 customplot rounded-pill ${color === 'Showroom' ? 'rest1' : ''}`}
    onClick={() => handlecommercial('Showroom')}
  >
    Showroom
  </Button>
  <Button
    type="button"
    className={`btn btn-outline-light me-2 customplot rounded-pill ${color === 'Godown' ? 'rest1' : ''}`}
    onClick={() => handlecommercial('Godown')}
  >
    Godown
  </Button>
  <Button
    type="button"
    className={`btn btn-outline-light me-2 customplot rounded-pill ${color === 'Shed' ? 'rest1' : ''}`}
    onClick={() => handlecommercial('Shed')}
  >
    Shed
  </Button>
  <Button
    type="button"
    className={`btn btn-outline-light me-2 customplot rounded-pill ${color === 'Co-working Space' ? 'rest1' : ''}`}
    onClick={() => handlecommercial('Co-working Space')}
  >
    Co-working Space
  </Button>
  <Button
    type="button"
    className={`btn btn-outline-light me-2 customplot rounded-pill ${color === 'Commercial complex' ? 'rest1' : ''}`}
    onClick={() => handlecommercial('Commercial complex')}
  >
    Commercial complex
  </Button>
  <Button
    type="button"
    className={`btn btn-outline-light me-2 customplot rounded-pill ${color === 'Industrial Building' ? 'rest1' : ''}`}
    onClick={() => handlecommercial('Industrial Building')}
  >
    Industrial Building
  </Button>
  <Button
    type="button"
    className={`btn btn-outline-light me-2 customplot rounded-pill ${color === 'Industrial shed' ? 'rest1' : ''}`}
    onClick={() => handlecommercial('Industrial shed')}
  >
    Industrial shed
  </Button>
  <Button
    type="button"
    className={`btn btn-outline-light me-2 customplot rounded-pill ${color === 'Factory' ? 'rest1' : ''}`}
    onClick={() => handlecommercial('Factory')}
  >
    Factory
  </Button>
  <Button
    type="button"
    className={`btn btn-outline-light me-2 customplot rounded-pill ${color === 'Service Apartment' ? 'rest1' : ''}`}
    onClick={() => handlecommercial('Service Apartment')}
  >
    Service Apartment
  </Button>
  <Button
    type="button"
    className={`btn btn-outline-light me-2 customplot rounded-pill ${color === 'PG Home' ? 'rest1' : ''}`}
    onClick={() => handlecommercial('PG Home')}
  >
    PG Home
  </Button>
  <Button
    type="button"
    className={`btn btn-outline-light me-2 customplot rounded-pill ${color === 'PG Hostel' ? 'rest1' : ''}`}
    onClick={() => handlecommercial('PG Hostel')}
  >
    PG Hostel
  </Button>
</div>

  </div>
)}
 {(activeDropdown === 'Plot') && plott && (
  <>
    <Card className=" text-dark custom-border-radius mx-auto w-50 pt-3"style={{ backgroundColor: "white", zIndex: 1}}>
      <Card.Body>
      <div className='d-flex gap-3 flex-row'>
  <Button
    type="button"
    className={`btn btn-outline-light me-2 customplot rounded-pill ${facing === 'Facing' ? 'rest1' : ''}`}
    onClick={() => handleplot('Facing')}
  >
    Facing {facing === 'Facing' ? <IoIosArrowUp /> :<IoIosArrowDown /> }
  </Button>
  <Button
    type="button"
    className={`btn btn-outline-light me-2 customplot rounded-pill ${facing === 'PostedBy' ? 'rest1' : ''}`}
    onClick={() => handleplot('PostedBy')}
  >
    PostedBy {facing === 'PostedBy' ? <IoIosArrowUp />  :<IoIosArrowDown /> }
  </Button>
  <Button
    type="button"
    className={`btn btn-outline-light me-2 customplot rounded-pill ${facing === 'Area' ? 'rest1' : ''}`}
    onClick={() => handleplot('Area')}
  >
    Area {facing === 'Area' ? <IoIosArrowUp /> : <IoIosArrowDown />}
  </Button>
</div>

      </Card.Body>
    </Card>
    {facing === 'Facing' && (
      <Card className="mb-3 text-dark custom-border-radius mx-auto w-50 pt-3"style={{ backgroundColor: "white", zIndex: 1}}>
        <Card.Body>
        <div className='d-flex flex-wrap'>
              <Button
                type="button"
                className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'North' ? 'rest1' : ''}`}
                onClick={() => handleClick('North')}>
                North
              </Button>
              <Button
                type="button"
                className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'East' ? 'rest1' : ''}`}
                onClick={() => handleClick('East')}>
                East
              </Button>
              <Button
                type="button"
                className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'South' ? 'rest1' : ''}`}
                onClick={() => handleClick('South')}>
                South
              </Button>
              <Button
                type="button"
                className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'West' ? 'rest1' : ''}`}
                onClick={() => handleClick('West')}>
                West
              </Button>
            </div>
          </Card.Body>
        </Card>
      )}
      {facing === 'PostedBy' && (
        <Card className="mb-3  text-dark custom-border-radius mx-auto w-50 pt-3"style={{ backgroundColor: "white", zIndex: 1}}>
          <Card.Body>
            <div className='d-flex flex-wrap'>
              <Button
                type="button"
                className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'Owner' ? 'rest1' : ''}`}
                onClick={() => handleClick('Owner')}>
                Owner
              </Button>
              <Button
                type="button"
                className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'Agent' ? 'rest1' : ''}`}
                onClick={() => handleClick('Agent')}>
                Agent
              </Button>
              <Button
                type="button"
                className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'Builder' ? 'rest1' : ''}`}
                onClick={() => handleClick('Builder')}>
                Builder
              </Button>
              <Button
                type="button"
                className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'Plot Developer' ? 'rest1' : ''}`}
                onClick={() => handleClick('Plot Developer')}>
                Plot Developer
              </Button>
            </div>
        </Card.Body>
      </Card>
    )}
 
    {facing === 'Area' && (
    
    <Card className="mb-3  text-dark custom-border-radius mx-auto w-50"style={{ backgroundColor: "white", zIndex: 1}}>
         <Budget name/>
          </Card>
      
    )}
  </>
)}
{(activeDropdown === 'Land') && plott && (
  <>
  <Card className=" text-dark custom-border-radius mx-auto w-50 pt-3"style={{ backgroundColor: "white", zIndex: 1}}>
    <Card.Body>
    <div className='d-flex gap-3 flex-row'>
<Button
  type="button"
  className={`btn btn-outline-light me-2 customplot rounded-pill ${facing === 'Facing' ? 'rest1' : ''}`}
  onClick={() => handleplot('Facing')}
>
  Facing {facing === 'Facing' ? <IoIosArrowUp /> :<IoIosArrowDown /> }
</Button>
<Button
  type="button"
  className={`btn btn-outline-light me-2 customplot rounded-pill ${facing === 'PostedBy' ? 'rest1' : ''}`}
  onClick={() => handleplot('PostedBy')}
>
  PostedBy {facing === 'PostedBy' ? <IoIosArrowUp />  :<IoIosArrowDown /> }
</Button>
<Button
  type="button"
  className={`btn btn-outline-light me-2 customplot rounded-pill ${facing === 'Area' ? 'rest1' : ''}`}
  onClick={() => handleplot('Area')}
>
  Area {facing === 'Area' ? <IoIosArrowUp /> : <IoIosArrowDown />}
</Button>
</div>

    </Card.Body>
  </Card>
  {facing === 'Facing' && (
    <Card className="mb-3 text-dark custom-border-radius mx-auto w-50 pt-3"style={{ backgroundColor: "white", zIndex: 1}}>
      <Card.Body>
      <div className='d-flex flex-wrap'>
            <Button
              type="button"
              className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'North' ? 'rest1' : ''}`}
              onClick={() => handleClick('North')}>
              North
            </Button>
            <Button
              type="button"
              className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'East' ? 'rest1' : ''}`}
              onClick={() => handleClick('East')}>
              East
            </Button>
            <Button
              type="button"
              className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'South' ? 'rest1' : ''}`}
              onClick={() => handleClick('South')}>
              South
            </Button>
            <Button
              type="button"
              className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'West' ? 'rest1' : ''}`}
              onClick={() => handleClick('West')}>
              West
            </Button>
          </div>
        </Card.Body>
      </Card>
    )}
    {facing === 'PostedBy' && (
      <Card className="mb-3  text-dark custom-border-radius mx-auto w-50 pt-3"style={{ backgroundColor: "white", zIndex: 1}}>
        <Card.Body>
          <div className='d-flex flex-wrap'>
            <Button
              type="button"
              className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'Owner' ? 'rest1' : ''}`}
              onClick={() => handleClick('Owner')}>
              Owner
            </Button>
            <Button
              type="button"
              className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'Agent' ? 'rest1' : ''}`}
              onClick={() => handleClick('Agent')}>
              Agent
            </Button>
            <Button
              type="button"
              className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'Builder' ? 'rest1' : ''}`}
              onClick={() => handleClick('Builder')}>
              Builder
            </Button>
            <Button
              type="button"
              className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'Plot Developer' ? 'rest1' : ''}`}
              onClick={() => handleClick('Plot Developer')}>
              Plot Developer
            </Button>
          </div>
      </Card.Body>
    </Card>
  )}

  {facing === 'Area' && (
  
  <Card className="mb-3  text-dark custom-border-radius mx-auto w-50"style={{ backgroundColor: "white", zIndex: 1}}>
       <Budget name/>
        </Card>
    
  )}
</>
)}

 
  {activeDropdown === 'Residential' && (
   <>
     {residential && (
       <>
       <Card className=" text-dark custom-border-radius mx-auto w-50 pt-3"style={{ backgroundColor: "white", zIndex: 1}}>
     <Card.Body>
       <div className='d-flex column-gap-3'>
         <Button
           type="button"
           className={`btn btn-outline-light me-2 customplot rounded-pill ${Bedroom=== 'Bedroom' ? 'rest1' : ''}`}
           onClick={() => handleplotss('Bedroom')}>
           Bedroom {Bedroom=== 'Bedroom' ? <IoIosArrowUp /> :<IoIosArrowDown /> }
         </Button>
         <Button
           type="button"
           className={`btn btn-outline-light me-2 customplot rounded-pill ${Bedroom=== 'Furnishing' ? 'rest1' : ''}`}
           onClick={() => handleplotss('Furnishing')}>
         Furnishing{Bedroom=== 'Furnishing' ? <IoIosArrowUp /> :<IoIosArrowDown /> }
         </Button>
         <Button
           type="button"
           className={`btn btn-outline-light me-2 customplot rounded-pill ${Bedroom=== 'Condition' ? 'rest1' : ''}`}
           onClick={() => handleplotss('Condition')}>
         Condition{Bedroom=== 'Condition' ? <IoIosArrowUp /> :<IoIosArrowDown /> }
         </Button>
         <Button
           type="button"
           className={`btn btn-outline-light me-2 customplot rounded-pill ${Bedroom=== 'Posted By' ? 'rest1' : ''}`}
           onClick={() => handleplotss('Posted By')}>
         Posted By{Bedroom=== ' Posted By' ? <IoIosArrowUp /> :<IoIosArrowDown /> }
         </Button>
       </div>
     </Card.Body>
   </Card>
       
         {Bedroom === 'Bedroom' && (
           <Card className=" text-dark custom-border-radius mx-auto w-50 pt-3"style={{ backgroundColor: "white", zIndex: 1}}>
             <Card.Body>
               <div className='d-flex flex-wrap'>
                 <Button
                   type="button"
                   className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === ' 1 BHK' ? 'rest1' : ''}`}
                   onClick={() =>  handleClick (' 1 BHK')}>
                   1 BHK
                 </Button>
                 <Button
             type="button"
             className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === ' 2 BHK' ? 'rest1' : ''}`}
             onClick={() =>  handleClick (' 2 BHK')}>
          2 BHK
           </Button>
           <Button
             type="button"
             className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === '3 BHK' ? 'rest1' : ''}`}
             onClick={() =>  handleClick ('3 BHK')}>
             3 BHK
           </Button>
           <Button
             type="button"
             className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === '4 BHK' ? 'rest1' : ''}`}
             onClick={() =>  handleClick ('4 BHK')}>
            4 BHK
           </Button>
               </div>
             </Card.Body>
           </Card>
         )}
         {Bedroom === 'Furnishing' && (
        <Card className="text-dark custom-border-radius mx-auto w-50 pt-3"style={{ backgroundColor: "white", zIndex: 1}}>
        <Card.Body>
          <div className='d-flex flex-wrap'>
            <Button
              type="button"
              className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'Fully Furnished' ? 'rest1' : ''}`}
              onClick={() =>  handleClick ('Fully Furnished')}>
           Fully Furnished
            </Button>
            <Button
              type="button"
              className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'Semi Furnished' ? 'rest1' : ''}`}
              onClick={() =>  handleClick ('Semi Furnished')}>
            Semi Furnished
            </Button>
       
         
            <Button
              type="button"
              className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'Un Furnished' ? 'rest1' : ''}`}
              onClick={() =>  handleClick ('Un Furnished')}>
             Un Furnished
            </Button>
          </div>
        </Card.Body>
      </Card>
         )}
         {Bedroom === 'Condition' && (
           <Card className="mb-3 text-dark custom-border-radius mx-auto w-50 pt-3"style={{ backgroundColor: "white", zIndex: 1}}>
             <Card.Body>
               <div className='d-flex flex-wrap'>
                 <Button
                   type="button"
                   className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'Ready to Move' ? 'rest1' : ''}`}
                   onClick={() =>  handleClick ('Ready to Move')}>
                   Ready to Move
                 </Button>
                 <Button
             type="button"
             className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'Under Construction' ? 'rest1' : ''}`}
             onClick={() =>  handleClick ('Under Construction')}>
            Under Construction
           </Button>
               </div>
             </Card.Body>
           </Card>
         )}
   {Bedroom === 'Posted By' && (
           <Card className="mb-3 text-dark custom-border-radius mx-auto w-50 pt-3"style={{ backgroundColor: "white", zIndex: 1}}>
             <Card.Body>
               <div className='d-flex flex-wrap'>
                 <Button
                   type="button"
                   className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'Owner' ? 'rest1' : ''}`}
                   onClick={() =>  handleClick ('Owner')}>
                       Owner
                 </Button>
                 <Button
                   type="button"
                   className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'Agent' ? 'rest1' : ''}`}
                   onClick={() =>  handleClick ('Agent')}>
                      Agent
                 </Button>
                 <Button
                   type="button"
                   className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'Builder' ? 'rest1' : ''}`}
                   onClick={() =>  handleClick ('Builder')}>
                  Builder
                 </Button>
                 <Button
             type="button"
             className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'Plot Developer' ? 'rest1' : ''}`}
                   onClick={() =>  handleClick ('Plot Developer')}>
           Plot Developer
           </Button>
               </div>
             </Card.Body>
           </Card>
         )}
 
       </>
     )}
   </>
 )}

{activeDropdown === 'Commercial' && (
  <>
    {Commercial && (
      <>
      <Card className="text-dark custom-border-radius mx-auto w-50 pt-3"style={{ backgroundColor: "white", zIndex: 1}}>
    <Card.Body>
      <div className='d-flex flex-wrap'>
        <Button
          type="button"
          className={`btn btn-outline-light me-2 customplot rounded-pill ${Category === 'Category' ? 'rest1' : ''}`}
            onClick={() =>   handleplotcommercial ('Category')}>
      Category {Category === 'Category' ? <IoIosArrowUp /> :<IoIosArrowDown /> }
        </Button>
        <Button
          type="button"
          className={`btn btn-outline-light me-2 customplot rounded-pill ${Category === 'Furnishing' ? 'rest1' : ''}`}
            onClick={() =>   handleplotcommercial ('Furnishing')}>
     Furnishing {Category === 'Furnishing' ? <IoIosArrowUp /> :<IoIosArrowDown /> }
        </Button>
        <Button
          type="button"
          className={`btn btn-outline-light me-2 customplot rounded-pill ${Category === 'Condition' ? 'rest1' : ''}`}
          onClick={() =>   handleplotcommercial ('Condition')}>
        Condition  {Category === 'Condition' ? <IoIosArrowUp /> :<IoIosArrowDown /> } 
        </Button>
      
      </div>
    </Card.Body>
  </Card>
      
        {Category === 'Category' && (
          <Card className=" text-dark custom-border-radius mx-auto w-50 pt-3"style={{ backgroundColor: "white", zIndex: 1}}>
            <Card.Body>
              <div className='d-flex flex-wrap'>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'New' ? 'rest1' : ''}`}
          onClick={() =>    handleClick('New')}>
                New
                </Button>
                <Button
            type="button"
            className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'Resale' ? 'rest1' : ''}`}
            onClick={() =>    handleClick ('Resale')}>
       Resale
          </Button>
         
       
              </div>
            </Card.Body>
          </Card>
        )}
        {Category === 'Furnishing' && (
       <Card className=" text-dark custom-border-radius mx-auto w-50 pt-3"style={{ backgroundColor: "white", zIndex: 1}}>
       <Card.Body>
         <div className='d-flex flex-wrap'>
           <Button
             type="button"
             className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === ' Fully Furnished' ? 'rest1' : ''}`}
             onClick={() =>   handleClick (' Fully Furnished')}>
          Fully Furnished
           </Button>
           <Button
             type="button"
             className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'Semi Furnished' ? 'rest1' : ''}`}
             onClick={() =>  handleClick  ('Semi Furnished')}>
           Semi Furnished
           </Button>
          
           <Button
             type="button"
             className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'Un Furnished' ? 'rest1' : ''}`}
             onClick={() =>    handleClick ('Un Furnished')}>
            Un Furnished
           </Button>
         </div>
       </Card.Body>
     </Card>
        )}
        {Category === 'Condition' && (
          <Card className="text-dark custom-border-radius mx-auto w-50 pt-3"style={{ backgroundColor: "white", zIndex: 1}}>
            <Card.Body>
              <div className='d-flex flex-wrap'>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'Ready to Move' ? 'rest1' : ''}`}
                  onClick={() =>    handleClick ('Ready to Move')}>
                  Ready to Move
                </Button>
                <Button
            type="button"
            className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'Under Construction' ? 'rest1' : ''}`}
            onClick={() =>   handleClick ('Under Construction')}>
           Under Construction
          </Button>
              </div>
            </Card.Body>
          </Card>
        )}
      </>
    )}
  </>
)}
 {activeDropdown === 'Commercial' &&(
  <>
    {pgrent && (
      <>
      <Card className="text-dark custom-border-radius mx-auto w-50 pt-3"style={{ backgroundColor: "white", zIndex: 1}}>
    <Card.Body>
      <div className='d-flex flex-wrap gap-3'>
        <Button
          type="button"
          className={`btn btn-outline-light me-2 customplot rounded-pill ${Gender === 'Gender' ? 'rest1' : ''}`}
          onClick={() =>   handleGender ('Gender')}>
    Gender {Gender === 'Gender' ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </Button>
        <Button
          type="button"
          className={`btn btn-outline-light me-2 customplot rounded-pill ${Gender === 'Tenants' ? 'rest1' : ''}`}
          onClick={() =>   handleGender ('Tenants')}>
 Tenants {Gender === 'Tenants' ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </Button>
        <Button
          type="button"
          className={`btn btn-outline-light me-2 customplot rounded-pill ${Gender === 'Furnishing' ? 'rest1' : ''}`}
          onClick={() =>   handleGender ('Furnishing')}>
        Furnishing {Gender === 'Furnishing' ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </Button>
        <Button
          type="button"
          className={`btn btn-outline-light me-2 customplot rounded-pill ${Gender === 'Rooms' ? 'rest1' : ''}`}
          onClick={() =>   handleGender ('Rooms')}>
       Rooms {Gender === 'Rooms' ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </Button>
        <Button
          type="button"
          className={`btn btn-outline-light me-2 customplot rounded-pill ${Gender === 'Sharing' ? 'rest1' : ''}`}
          onClick={() =>   handleGender ('Sharing')}>
     Sharing {Gender === 'Sharing' ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </Button>
      </div>
    </Card.Body>
  </Card>
      
        {Gender === 'Gender' && (
          <Card className="text-dark custom-border-radius mx-auto w-50 pt-3"style={{ backgroundColor: "white", zIndex: 1}}>
            <Card.Body>
              <div className='d-flex flex-wrap'>
           
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'Male' ? 'rest1' : ''}`}
                  onClick={() =>  handleClick ('Male')}> Male
                </Button>
                <Button
            type="button"
            className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'Female' ? 'rest1' : ''}`}
            onClick={() =>  handleClick ('Female')}> 
     Female
          </Button>
         
          <Button
            type="button"
            className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'Transgender' ? 'rest1' : ''}`}
            onClick={() =>  handleClick ('Transgender')}>
    Transgender
          </Button>
          <Button
            type="button"
            className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'Both' ? 'rest1' : ''}`}
            onClick={() =>  handleClick ('Both')}>
    Both
          </Button>
              </div>
            </Card.Body>
          </Card>
        )}
        {Gender === 'Tenants' && (
       <Card className="text-dark custom-border-radius mx-auto w-50 pt-3"style={{ backgroundColor: "white", zIndex: 1}}>
       <Card.Body>
         <div className='d-flex flex-wrap'>
           <Button
             type="button"
             className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'Students' ? 'rest1' : ''}`}
             onClick={() =>  handleClick ('Students')}>
        Students
           </Button>
           <Button
             type="button"
             className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'Professionals' ? 'rest1' : ''}`}
             onClick={() =>  handleClick ('Professionals')}>
          Professionals
           </Button>
          
           <Button
             type="button"
             className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'Both' ? 'rest1' : ''}`}
             onClick={() =>  handleClick ('Both')}>
      Both
           </Button>
         </div>
       </Card.Body>
     </Card>
        )}
        {Gender=== 'Furnishing' && (
          <Card className="text-dark custom-border-radius mx-auto w-50 pt-3"style={{ backgroundColor: "white", zIndex: 1}}>
            <Card.Body>
              <div className='d-flex flex-wrap'>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'Fully Furnished' ? 'rest1' : ''}`}
                  onClick={() =>  handleClick ('Fully Furnished')}>
              Fully Furnished
                </Button>
                <Button
            type="button"
            className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'Semi Furnished' ? 'rest1' : ''}`}
            onClick={() =>  handleClick ('Semi Furnished')}>
           Semi Furnished
          </Button>
          <Button
  type="button"
  className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'Un Furnished' ? 'rest1' : ''}`}
  onClick={() =>  handleClick('Un Furnished')}>
  Un Furnished
</Button>

              </div>
            </Card.Body>
          </Card>
        )}
  {Gender=== 'Rooms' && (
          <Card className="text-dark custom-border-radius mx-auto w-50 pt-3"style={{ backgroundColor: "white", zIndex: 1}}>
            <Card.Body>
              <div className='d-flex flex-wrap'>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'A/c' ? 'rest1' : ''}`}
                  onClick={() =>  handleClick('A/c')}>
           A/c
                </Button>
                <Button
            type="button"
            className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'non A/C' ? 'rest1' : ''}`}
            onClick={() =>  handleClick('non A/C')}>
           non A/C
          </Button>
          <Button
            type="button"
            className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'A/c  or non A/C' ? 'rest1' : ''}`}
            onClick={() =>  handleClick('A/c  or non A/C')}>
          A/c  or non A/C
          </Button>
              </div>
            </Card.Body>
          </Card>
        )}
 {Gender=== 'Sharing' && (
          <Card className="mb-3  text-dark custom-border-radius mx-auto w-50 pt-3"style={{ backgroundColor: "white", zIndex: 1}}>
            <Card.Body>
              <div className='d-flex flex-wrap'>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'Single Sharing' ? 'rest1' : ''}`}
                  onClick={() =>  handleClick('Single Sharing')}>
                 Single Sharing
                </Button>
                <Button
            type="button"
            className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'Double Sharing' ? 'rest1' : ''}`}
                  onClick={() =>  handleClick('Double Sharing')}>
          Double Sharing
          </Button>
          <Button
            type="button"
            className={`btn btn-outline-light me-2 customplot rounded-pill ${selectedOption === 'Triple Sharing' ? 'rest1' : ''}`}
            onClick={() =>  handleClick('Triple Sharing')}>
         Triple Sharing
          </Button>
              </div>
            </Card.Body>
          </Card>
        )}
      </>
    )}
  </>
)}    
   

</>
)}

</div>
  
   
  


      )
}

      export default Navigation
