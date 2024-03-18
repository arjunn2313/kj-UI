import React from 'react'
import { Button, Card, Form, Row, Col, Dropdown, DropdownToggle } from 'react-bootstrap';
import { useState } from 'react';

import { FaTimes } from 'react-icons/fa';
const Commercialsell = ({ activeButton }) => {

  const [plot, setPlot] = useState(false);
  const [land, setLand] = useState(false);
  const [residential, setResidential] = useState(false);
  const [Commercial, setCommercial] = useState(false);
  const [sell, setsell] = useState('Sell');
  const [rent, setrent] = useState('Rent');
  const [lease, setlease] = useState('');
  const handleplotClick = (items) => {
    if (items === 1) {
      setPlot(true);
      setLand(false);
      setResidential(false);
      setCommercial(false)
    } else if (items === 2) {
      setLand(true);
      setPlot(false);
      setCommercial(false)
      setResidential(false);
    } else if (items === 3) {
      setLand(false);
      setPlot(false);
      setCommercial(false)
      setResidential(true);
    } else if (items === 4) {
      setLand(false);
      setPlot(false);
      setCommercial(true);
      setResidential(false);
    }
  };
 

  const formControlStyle = {
    borderColor: '#D7242A',
    width: '500px',
    height: '60px',
    borderRadius: '20px'
  }
  const formControllStyle = {
    borderColor: '#D7242A',
    width: '1150px',
    height: '60px',
    borderRadius: '20px'
  }
  // images upload code


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

  const buttonStyle = {
    backgroundColor: '#FFFFFF',
    color: '#656565',
    border: '1px solid #C5C5C5',
    margin: '0 0.5rem',

  };
  const navbarStyle = {
    backgroundColor: '#FFFFFF4D',

    width: '100%',
  };
  const navLinkStyle = {
    color: '#000000',
    fontSize: '12px'
  };


  // const [buttonindoor, setButtonindoor] = useState({

  //   'Washroom': false,
  //   Toilet: false,
  //   'Air Conditioning': false,
  //   'Power Backup': false,
  //   WIFI: false,
  //   Lift: false,
  //   ' Coffee Bar': false,

  // })
  // const [buttonValue, setButtonvalue] = useState({
  //   CarParking: false,
  //   Toilet: false,
  //   StreetLight: false,
  //   AvenueTrees: false,
  //   AirConditioning: false,
  //   Compound: false,


  // });
  const newArray = [
    "Washroom",
    "Toilet",
   
    "AirConditioning",
    "PowerBackup",
    "WIFI",
    "Lift",
    "Coffee Bar",
    "Lobby"
  ];
  const [buttonValue, setButtonvalue] = useState({
    'Washroom': false,
      Toilet: false,
      'Air Conditioning': false,
      'Power Backup': false,
      WIFI: false,
      Lift: false,
      ' Coffee Bar': false,
  });
  const [count, setCount] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleAddCount = () => {
    if (inputValue.trim() !== "") {
      setCount((prevCount) => [...prevCount, inputValue]);
      setInputValue("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddCount();
    }
  };
  const handleButton = (type) => {
    if (!buttonValue[type]) {
      setButtonvalue((prevValue) => ({
        ...prevValue,
        [type]: true,
      }));
      setCount((prevCount) => [...prevCount, type]);
    }
  };
  const handleRemoveCount = (itemRemove) => {
    if (newArray.includes(itemRemove)) {
      setButtonvalue((prevValue) => ({
        ...prevValue,
        [itemRemove]: false,
      }));
      setCount((prevCount) =>
        prevCount.filter((outdoor) => outdoor !== itemRemove)
      );
    } else {
      setCount((prevCount) =>
        prevCount.filter((outdoor) => outdoor !== itemRemove)
      );
    }
  };
  const [buttonAdd, setButtonAdd] = useState({
    "Car Parking": false,
    Security: false,
    "Street Lights": false,
    "Avenue Trees": false,
    Compound: false,

       
  
  });

  const newvalue = [
    "Car Parking",
    "Security",
    "Street Lights",
    "Avenue Trees",
  
   
    "Compound"
  ];

  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() !== "") {
      setData((prevData) => [...prevData, input]);
      setInput("");
    }
  };

  const handleKeys = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  const handleButtonClickss = (datta) => {
    if (!buttonAdd[datta]) {
      setButtonAdd((prevButtonAdd) => ({
        ...prevButtonAdd,
        [datta]: true,
      }));
      setData((prevData) => [...prevData, datta]);
    }
  };

  const handleRemoveData = (Remove) => {
    if (newvalue.includes(Remove)) {
      setButtonAdd((prevButtonAdd) => ({
        ...prevButtonAdd,
        [Remove]: false,
      }));
      setData((prevData) => prevData.filter((item) => item !== Remove));
    } else {
      setData((prevData) => prevData.filter((item) => item !== Remove));
    }
  };

  const [upload,setupload] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const [selectedvalue, setselectedvalue] = useState('');
const [selectedLogo, setselectedLogo] = useState('');
const [selectedroom,setselectedroom] = useState('');
const [selectedKitchen, setselectedKitchen] = useState('');
const [selectedPlan, setselectedPlan] = useState('');
const [selectedmap, setselectedmap] = useState('');
  const handleUpload = () => {
    if (upload === 'Site View' && selectedImage) {
      console.log('Uploading Site View image:', selectedImage);
     
      setSelectedImage('');
    } else if (upload === 'FMB' && selectedFile) {
      console.log('Uploading FMB image:', selectedFile);
   
      setSelectedFile('');
    } else if (upload === 'Location Map' && selectedvalue) {
      console.log('Uploading Location Map image:', selectedvalue);
      
      setselectedvalue('');
    } else if (upload === 'Logo' && selectedLogo) {
      console.log('Uploading Logo image:', selectedLogo);
    
      setSelectedImage('');
    } else {
      console.log('No image selected');
    }
  };
  
 const handleImage = (values) =>{
  
  setupload(values)
  
 }




const handleImageChange = (event) => {
  const file = event.target.files[0];



  setSelectedImage(file);
  
};
const handleFileChange = (event) => {
const file = event.target.files[0];
setSelectedFile(file);
};
const handleImagevalue = (event) => {
const file = event.target.files[0];



setselectedvalue(file);

};
 const handleImagerooms = (event) =>{
  const file = event.target.files[0];



  setselectedroom(file);

 }

const handleFileKitchen =(event)=>{
  const file = event.target.files[0];


  setselectedKitchen(file);
}

const handleImageplan =(event)=>{
  const file = event.target.files[0];


  setselectedPlan(file);
}
 const handleImagemap = (event) =>{
  const file = event.target.files[0];
  setselectedmap(file)
 }
 
const handleImageLogo = (event) => {
const file = event.target.files[0];



setselectedLogo(file);

};
const removeSelectedImage = () => {
setSelectedImage('');
};

const removeSelectedImage1 = () => {
setSelectedFile('');
};


const removeSelectedImage2 = () => {
setselectedvalue('');
};
const removeSelectedroom = () =>{
  setselectedroom('');
}

const removeSelectedKitchen = () =>{
  setselectedKitchen("");
}
const removeSelectedplan = () =>{
  setselectedPlan('');
}
const removeSelectedmap =()=>{
  setselectedmap('');
}
const removeSelectedLogo = () => {
setselectedLogo('');
};


  return (
    <div>
      <div>
        <Form className="mx-3">
          <Row className="gx-md-3">
            <Col>
              <Form.Group controlId="formGroup1">
                <Form.Label>Property Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" style={{ ...formControllStyle }} />
              </Form.Group>
            </Col>

          </Row>
          <Row className="mt-5">
            <Col md={6}>
              <Form.Group controlId="formGroup3">
                <Form.Label>Property Location</Form.Label>
                <Form.Control type="text" placeholder="Property Location" style={{ ...formControlStyle }} />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formGroup4">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="City" style={{ ...formControlStyle }} />
              </Form.Group>
            </Col>
          </Row>

         
          <Row className="gx-md-3 mt-5">
            {/* Third Row */}
            <Col md={6}>
              <Form.Group controlId="formGroup5">
                <Form.Label>Built Up Area of a Flat</Form.Label>
                <div className='rounded-pill' style={{ position: 'relative', display: 'inline-block' }}>
            <Form.Control
              type="text"
              placeholder="Area"
              style={{ ...formControlStyle }}
              className='form-select'
            />
            <select className='rounded-end down border-start-0 ps-5' style={{ position: 'absolute', top: 0, right: 0, width: '100px', height: '100%',}}>
  <option>ft</option>
  <option>mt</option>
</select>
</div>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formGroup6">
                <Form.Label>Availabe Floors</Form.Label>
                <Form.Control type="number" placeholder="Availabe Floors" style={{ ...formControlStyle }} />
              </Form.Group>
            </Col>
          </Row>
          <Row className="gx-md-3 mt-5">
            {/* Third Row */}
            <Col md={6}>
              <Form.Group controlId="formGroup5">
                <Form.Label>Floor Number</Form.Label>
                <Form.Control type="number" placeholder="Floor Number" style={{ ...formControlStyle }} />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formGroup6">
                <Form.Label>Total Floors</Form.Label>
                <Form.Control type="number" placeholder="Floor Number" style={{ ...formControlStyle }} />
              </Form.Group>
            </Col>
          </Row>
          <Row className="gx-md-3 mt-5">
            {/* Third Row */}
            <Col md={6}>
              <Form.Group controlId="formGroup5">
                <Form.Label>Number of Two Wheeler Parking</Form.Label>
                <Form.Control type="number" placeholder="Two Wheeler" style={{ ...formControlStyle }} />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formGroup6">
                <Form.Label>Number of Car Parking</Form.Label>
                <Form.Control type="number" placeholder="Car Parking" style={{ ...formControlStyle }} />
              </Form.Group>
            </Col>
          </Row>
        </Form>
        <h5 className='mt-4'>Category of Project</h5>
        <div className='custom-radio d-flex mt-4'>
          <div className="flex-grow-1 me-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadio1"
                value="option1"
              />
              <label className="form-check-label mb-1" htmlFor="exampleRadio1">
                New
              </label>
            </div>
          </div>

          <div className="flex-grow-1 me-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadio2"
                value="option2"
              />
              <label className="form-check-label" htmlFor="exampleRadio2">
                Resale
              </label>
            </div>
          </div>

          <div className="flex-grow-1 me-2">
            <input className="inp" placeholder="other if any..." />
          </div>
        </div>

        <h5 className='mt-4'>Status</h5>
        <div className='custom-radio d-flex mt-4'>
          <div className="flex-grow-1">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadio1"
                value="option1"
              />
              <label className="form-check-label mb-1" htmlFor="exampleRadio1">
                Fully Furnished
              </label>
            </div>
          </div>

          <div className="flex-grow-1 ms-1">
            <div className="form-check ms-1">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadio2"
                value="option2"
              />
              <label className="form-check-label" htmlFor="exampleRadio2">
                Semi Furnished
              </label>
            </div>
          </div>

          <div className="flex-grow-1">
            <div className="form-check ms-3">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadio3"
                value="option3"
              />
              <label className="form-check-label" htmlFor="exampleRadio3">
                Unfurnished
              </label>
            </div>
          </div>
        </div>

        <h5 className='mt-4'>Condition</h5>
        <div className='custom-radio d-flex mt-4'>
          <div className="flex-grow-1">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadio1"
                value="option1"
              />
              <label className="form-check-label mb-1" htmlFor="exampleRadio1">
                Ready to move
              </label>
            </div>
          </div>

          <div className="flex-grow-1 ms-2">
            <div className="form-check ms-2">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadio2"
                value="option2"
              />
              <label className="form-check-label" htmlFor="exampleRadio2">
                Under Construction
              </label>
            </div>
          </div>

          <div className="flex-grow-1 me-3">
            <input className="inp text-start" placeholder="If under construction...." />
          </div>
        </div>

        <div className="mt-5">
      <h5 className="mb-5">Indoor Facility</h5>

      <Card
        style={{
          borderRadius: "10px",
          border: "1px solid #B3B3B3",
          width: "1170px",
        }}
      >
        <Card.Body>
          <div className="row mb-2">
            <div className="d-flex gap-3 flex-wrap">
              {/** // <input placeholder="tyoe here " onClick={(e)=>setCount("e")} /> */}

              {count.map((items) => (
                <button
                  key={items}
                  className="btn btn-values  mb-2 me-2"
                  onClick={() => handleRemoveCount(items)}
                >
                  {items} <FaTimes />
                </button>
              ))}
              {/** check this page --> sell --> residential --? duplex */}
              <input
                placeholder="Typesomething"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                style={{ border: "none" }}
              />
            </div>

            <hr />
            <div className="container">
            <div className="row row-cols-6">
              {Object.keys(buttonValue).map((type) => (
                <div key={type} className="col mb-2 me-2">
                  <button
                    className={`btn ${buttonValue[type] ? "btn-Nam" : "btn-Name"
                      }`}
                    onClick={() => handleButton(type)}
                    style={{ width: "100%" }}
                  >
                    {type}
                  </button>
                </div>
              ))}
            </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
    <div className="mt-5">
      <h5 className="mb-5">Outdoor Facility</h5>
      <Card
        style={{
          borderRadius: "10px",
          border: "1px solid #B3B3B3",
          width: "1170px",
        }}
      >
        <Card.Body>
          <div className="row mb-2">
            <div className="d-flex gap-3 flex-wrap">
              {data.map((outdoors) => (
                <button
                  key={outdoors}
                  className="btn btn-values mb-2 me-2"
                  onClick={() => handleRemoveData(outdoors)}
                >
                  {outdoors} <FaTimes />
                </button>
              ))}
              <input
                placeholder="Type something"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeys}
                style={{ border: "none" }}
              />
            </div>
            <hr />
            <div className="container">
              <div className="row row-cols-6">
                {Object.keys(buttonAdd).map((datta) => (
                  <div key={datta} className="col mb-2 me-2">
                    <button
                      className={`btn ${buttonAdd[datta] ? "btn-Nam" : "btn-Name"
                        }`}
                      onClick={() => handleButtonClickss(datta)}
                      style={{ width: "100%" }}
                    >
                      {datta}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
        





     
        <Form className=" mx-2">


          <Row className="mt-5">
            <Col className="">
              <Form.Group controlId="formGroup3">
                <Form.Label>Sale Price</Form.Label>
                <Form.Control type="number" placeholder="Rs" style={formControlStyle} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formGroup4">
                <Form.Label>Advance Amount</Form.Label>
                <Form.Control type="number" placeholder="Rs" style={formControlStyle} />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mt-5">
            {activeButton === "Agent" &&




              <Col className="">
                <Form.Group controlId="formGroup3">
                  <h5><Form.Label>Agent Commision</Form.Label></h5>
                  <Form.Control type="number" placeholder="Agent Commision" style={formControlStyle} />
                </Form.Group>
              </Col>
            }


            <Col>
              <Form.Group controlId="formGroup4">
                <Form.Label></Form.Label>

              </Form.Group>
            </Col>
          </Row>



        </Form>
        <h5 className='mt-5 gy-3'>Description</h5>
        <textarea className="form-control mt-4" style={{ width: '1170px', height: "270px", borderRadius: '30px', border: '1px solid #D7242A' }} placeholder="Type something...." id="message" rows="5" required></textarea>
        <h5 className='mt-5 gy-3'>Upload Photos</h5>
        <Card className="mt-5" style={{ width: '1170px', height: "270px", borderRadius: '30px', border: '1px solid #D7242A' }}>
          <Card.Body>
            <nav className="navbar navbar-expand">
              <div className="d-flex justify-content-between" style={navbarStyle}>
                <ul className="navbar-nav value d-flex justify-content-between w-100">
                  <li className="nav-item ">
                    <a
                  className={`nav-link ${upload === "Exterior View" ? 'design' : ''}`}
                  style={navLinkStyle}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleImage('Exterior View')}
                >
                  Exterior View
                </a>
                  </li>

                  <li className="nav-item ">
                    <a 
                    className={`nav-link ${upload === "Interior" ? 'design' : ''}`}
                     style={navLinkStyle}
                     onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} 
                     onClick={() => handleImage('Interior')}
                     >
                      Interior
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                     className={`nav-link ${upload === "Washroom" ? 'design' : ''}`}
                     style={navLinkStyle} onMouseEnter={handleMouseEnter} 
                     onMouseLeave={handleMouseLeave} 
                     onClick={() => handleImage('Washroom')}
                     >
                      Washroom
                    </a>
                  </li>
                  <li className="nav-item">
                    <a 
                    className={`nav-link ${upload === "Floor Plan" ? 'design' : ''}`}
                     style={navLinkStyle}
                     onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                     onClick={() => handleImage('Floor Plan')}>
                      Floor Plan
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a 
                    className={`nav-link ${upload === "Location Map" ? 'design' : ''}`}
                     style={navLinkStyle} onMouseEnter={handleMouseEnter} 
                     onMouseLeave={handleMouseLeave} 
                     onClick={() => handleImage('Location Map')} >
                      Location Map
                    </a>
                  </li>
                  {activeButton === "Builder" &&
                    <li className="nav-item ">
                      <a
                       className={`nav-link ${upload === "Logo" ? 'design' : ''}`} 
                      style={navLinkStyle} onMouseEnter={handleMouseEnter} 
                      onMouseLeave={handleMouseLeave} 
                      onClick={() => handleImage('Logo')}>
                        Logo
                      </a>
                    </li>
                  }
                </ul>

              </div>
            </nav>
            <hr />
            {/* <div className="text-center text-end">
         <button className="btn btn-primary mt-2" style={{color:'#fff',backgroundColor:'#D7242A'}} onClick={handleUpload}>
         <input type="file" accept="image/*" onChange={handleImageChange}/>
         </button>
         </div> */}
            {/* <div className="file-input d-flex justify-content-center align-items-center" onClick={handleUpload} >
              <input
                type="file"
                name="file-input"
                id="file-input"
                class="file-input__input"
                accept="image/*" onChange={handleImageChange}
              />
              <label className="file-input__label" for="file-input">

                <span>Upload file</span></label
              >
            </div>

            {selectedImage && (
              <div className="mt-3 text-center">
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt={selectedImage ? selectedImage.name : 'upload image'}
                  style={{ maxWidth: '100%', maxHeight: '200px', borderRadius: '10px', border: '1px solid' }}
                />
              </div>

            )} */}

{upload === 'Exterior View' && 
    <div>     
        <div className="file-input d-flex justify-content-center align-items-center">
            <input
                type="file"
                name="file-input"
                id="file-input"
                className="file-input__input"
                accept="image/*"
                onChange={handleImageChange}
            />
            <label className="file-input__label" htmlFor="file-input">
                <span>Upload file</span>
            </label>
        </div>
        

        {selectedImage && (
            <div className="mt-3 text-center">
                <img
                    src={URL.createObjectURL(selectedImage)}
                    alt={selectedImage ? selectedImage.name : 'upload image'}
                    style={{ width: '200px', maxHeight: '100px', borderRadius: '10px', border: '1px solid' }}
                />
                <button onClick={removeSelectedImage} className="btn btn-danger btn-sm mt-2">
                    <i className="fas fa-times"></i> Remove
                </button>
            </div>
        )}
    </div>
}
{upload === 'Interior' && 
    <div>
        <div className="file-input d-flex justify-content-center align-items-center" >
            <input
                type="file"
                name="file-input"
                id="file-input"
                className="file-input__input"
                accept="image/*"
                onChange={handleFileChange}
            />
            <label className="file-input__label" htmlFor="file-input">
                <span>Upload file</span>
            </label>
        </div>

        {selectedFile && (
            <div className="mt-3 text-center">
                <img
                    src={URL.createObjectURL(selectedFile)}
                    alt={selectedFile ? selectedFile.name : 'upload image'}
                    style={{ width: '200px', maxHeight: '100px', borderRadius: '10px', border: '1px solid' }}
                />
                <button onClick={removeSelectedImage1} className="btn btn-danger btn-sm mt-2">
                    <i className="fas fa-times"></i> Remove
                </button>
            </div>
        )}
    </div>
}


{upload === 'Washroom' && 
    <div>     
        <div className="file-input d-flex justify-content-center align-items-center">
            <input
                type="file"
                name="file-input"
                id="file-input"
                className="file-input__input"
                accept="image/*"
                onChange={handleImagerooms}
            />
            <label className="file-input__label" htmlFor="file-input">
                <span>Upload file</span>
            </label>
        </div>
        

        {selectedroom && (
            <div className="mt-3 text-center">
                <img
                    src={URL.createObjectURL(selectedroom)}
                    alt={selectedroom ? selectedroom.name : 'upload image'}
                    style={{ width: '200px', maxHeight: '100px', borderRadius: '10px', border: '1px solid' }}
                />
                <button onClick={removeSelectedroom} className="btn btn-danger btn-sm mt-2">
                    <i className="fas fa-times"></i> Remove
                </button>
            </div>
        )}
    </div>
}
{upload === 'Floor Plan' && 
    <div>
        <div className="file-input d-flex justify-content-center align-items-center" >
            <input
                type="file"
                name="file-input"
                id="file-input"
                className="file-input__input"
                accept="image/*"
                onChange={handleFileKitchen}
            />
            <label className="file-input__label" htmlFor="file-input">
                <span>Upload file</span>
            </label>
        </div>

        {selectedKitchen && (
            <div className="mt-3 text-center">
                <img
                    src={URL.createObjectURL(selectedKitchen)}
                    alt={selectedKitchen ? selectedKitchen.name : 'upload image'}
                    style={{ width: '200px', maxHeight: '100px', borderRadius: '10px', border: '1px solid' }}
                />
                <button onClick={removeSelectedKitchen} className="btn btn-danger btn-sm mt-2">
                    <i className="fas fa-times"></i> Remove
                </button>
            </div>
        )}
    </div>                            
}


{upload === 'Location Map' && (
  <div>
    <div className="file-input d-flex justify-content-center align-items-center" onClick={handleUpload}>
      <input
        type="file"
        name="file-input"
        id="file-input"
        className="file-input__input"
        accept="image/*"
        onChange={handleImagemap}
      />
      <label className="file-input__label" htmlFor="file-input">
        <span>Upload file</span>
      </label>
    </div>
   
    {selectedmap && (
      <div className="mt-3 text-center">
        <img
          src={URL.createObjectURL(selectedmap)}
          alt={selectedmap ? selectedmap.name : 'upload image'}
          style={{ width: '200px', maxHeight: '100px', borderRadius: '10px', border: '1px solid' }}
        />
        <button onClick={removeSelectedmap} className="btn btn-danger btn-sm mt-2">
          <i className="fas fa-times"></i> Remove
        </button>
      </div>
    )}
  </div>
)}
{upload === 'Logo' && 
    <div>
        <div className="file-input d-flex justify-content-center align-items-center">
            <input
                type="file"
                name="file-input"
                id="file-input"
                className="file-input__input"
                accept="image/*"
                onChange={handleImageLogo}
            />
            <label className="file-input__label" htmlFor="file-input">
                <span>Upload file</span>
            </label>
        </div>

        {selectedLogo && (
            <div className="mt-3 text-center">
                <img
                    src={URL.createObjectURL(selectedLogo)}
                    alt={selectedLogo ? selectedLogo.name : 'upload image'}
                    style={{ width: '200px', maxHeight: '100px', borderRadius: '10px', border: '1px solid' }}
                />
                <button onClick={removeSelectedLogo} className="btn btn-danger btn-sm mt-2">
                    <i className="fas fa-times"></i> Remove
                </button>
            </div>
        )}
    </div>
}



          </Card.Body>
        </Card>

      </div>
      <div className="d-flex justify-content-center">
        <button type="button" className="buttonmobile mt-5" style={{ width: "370px" }}>Post Property</button>
      </div>

    </div>
  )
}

export default Commercialsell
