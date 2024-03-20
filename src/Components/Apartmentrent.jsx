
import React from 'react'
import { Button, Card, Form, Row, Col, Dropdown, DropdownToggle } from 'react-bootstrap';
import { useState } from 'react';

import { FaTimes } from 'react-icons/fa';
const Apartmentrent = ({activeButton}) => {

    const [plot, setPlot] = useState(false);
    const [land, setLand] = useState(false);
    const [residential, setResidential] = useState(false);
    const [Commercial, setCommercial] = useState(false);

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
    const [buttonValue, setButtonvalue] = useState({
        Balcony: false,
        TV: false,
        Fridge: false,
        CoffeeBar: false,
        WIFI: false,
        Lift: false,
        PowerBackup: false,
        Labourrooms: false
    });
    const [count, setCount] = useState([]);
    const [buttonAdd, setButtonAdd] = useState({
        CarParking: false,
        Security: false,
        StreetLight: false,
        AvenueTrees: false,
        Compound: false,
        ClubHouse: false,
        CommunityHall: false,
        Saloon: false,
        Pool: false,
    });
    const [data, setData] = useState([]);

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
        setButtonvalue((prevValue) => ({
            ...prevValue,
            [itemRemove]: false,
        }));
        setCount((prevCount) => prevCount.filter((outdoor) => outdoor !== itemRemove));
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
        setButtonAdd((prevButtonAdd) => ({
            ...prevButtonAdd,
            [Remove]: false,
        }));
        setData((prevData) => prevData.filter((item) => item !== Remove));
    };


    const [buttonStates, setButtonStates] = useState({
        '1BHK': false,
        '2BHK': false,
        '3BHK': false,
        '4BHK': false,
        '5BHK': false,

    });

    const [content, setContent] = useState([]);

    const handleButtonContent = (buttonName) => {

        if (!buttonStates[buttonName]) {
            setButtonStates((prevStates) => ({
                ...prevStates,
                [buttonName]: true,
            }));

            setContent((prevContent) => [...prevContent, buttonName]);


        }
    };

    const handleRemoveContent = (itemToRemove) => {
        setButtonStates((prevStates) => ({
            ...prevStates,
            [itemToRemove]: false,
        }));

        setContent((prevContent) => prevContent.filter((item) => item !== itemToRemove));

        // Other logic, if needed
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
    const files = event.target.files;
    if (selectedImage.length + files.length > 6) {
        alert("You can only upload a maximum of 6 images.");
        return;
    }

    const newImages = Array.from(files);
  

    setSelectedImage(prevImages => [...prevImages, ...newImages]);
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
  const removeSelectedImage = (index) => {
    setSelectedImage(prevImages => prevImages.filter((_, i) => i !== index));
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
                    <h5 className='mt-5 gy-3'>Address</h5>
                    <textarea className="form-control mt-4" style={{ width: '1170px', height: "270px", borderRadius: '30px', border: '1px solid #D7242A' }} placeholder="Enter full address.." id="message" rows="5" required></textarea>
                    <Row className="mt-5">
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
                    <Row className="mt-5">
                    <Col md={6}>
              <Form.Group controlId="formGroup3">
                <Form.Label>Building Built Up Area</Form.Label>
                <div className='rounded-pill' style={{ position: 'relative', display: 'inline-block' }}>
            <Form.Control
              type="text"
              placeholder="Area"
              style={{ ...formControlStyle }}
            />
            <select className='rounded-end down border-start-0 ps-2' style={{ position: 'absolute', top: 0, right: 0, width: '100px', height: '100%',}}>
  <option>Sq.ft</option>
 
</select>
</div>
              </Form.Group>
            </Col>
                        <Col md={6}>
                            <Form.Group controlId="formGroup4">
                                <Form.Label>Number of Flats</Form.Label>
                                <Form.Control type="number" placeholder="No.of.Flats" style={{ ...formControlStyle }} />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="mt-5">
                        <Col md={6}>
                            <Form.Group controlId="formGroup3">
                                <Form.Label>Total Floors</Form.Label>
                                <Form.Control type="number" placeholder="Total Floors" style={{ ...formControlStyle }} />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formGroup4">
                                <Form.Label>Floor Number</Form.Label>
                                <Form.Control type="number" placeholder="Floor Number" style={{ ...formControlStyle }} />
                            </Form.Group>
                        </Col>
                    </Row>

                 
                    <Row className="gx-md-3 mt-5">
                        {/* Third Row */}
                        <Col md={6}>
                            <Form.Group controlId="formGroup5">
                                <Form.Label>Maximum Persons Allowed </Form.Label>
                                <Form.Control type="number" placeholder="Maximum Persons Allowed" style={{ ...formControlStyle }} />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                        <Form.Group controlId="formGroup5">
                                <Form.Label>Number of Car Parking</Form.Label>
                                <Form.Control type="number" placeholder="Number of Car Parking" style={{ ...formControlStyle }} />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
               
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

                
                <div className='mt-5'>
                    <h5 className='mb-5'>Availability of Flats</h5>

                    <Card style={{ borderRadius: '10px', border: '1px solid #B3B3B3', width: '1170px' }}>
                        <Card.Body>





                            <div className="row mb-2">




                                <div className='d-flex gap-3 flex-wrap'>
                                    {content.map((item) => (

                                        <button
                                            key={item}
                                            className="btn btn-values mb-2 me-2"
                                            onClick={() => handleRemoveContent(item)}
                                        >
                                            {item} <FaTimes />
                                        </button>

                                    ))}
                                </div>

                                <hr />

                                <div className="container">
                                    <div className="d-flex gap-3 flex-wrap"> {/* Set the maximum number of buttons per row */}
                                        {Object.keys(buttonStates).map((buttonName) => (
                                            <div key={buttonName} className="col mb-2">
                                                <button
                                                    className={`btn ${buttonStates[buttonName] ? 'btn-Nam' : 'btn-Name'}`}
                                                    onClick={() => handleButtonContent(buttonName)}
                                                    style={{ width: '100%' }} // Ensure buttons take full width
                                                >
                                                    {buttonName}
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>




                            </div>

                        </Card.Body>
                    </Card>

                </div>
                <div className='mt-5'>
                    <h5 className='mb-5'>Indoor Facility</h5>

                    <Card style={{ borderRadius: '10px', border: '1px solid #B3B3B3', width: '1170px' }}>
                        <Card.Body>





                            <div className="row mb-2">




                                <div className='d-flex gap-3 flex-wrap'>
                                    {count.map((items) => (

                                        <button
                                            key={items}
                                            className="btn btn-values  mb-2 me-2"
                                            onClick={() => handleRemoveCount(items)}
                                        >
                                            {items} <FaTimes />
                                        </button>

                                    ))}
                                </div>

                                <hr />

                                <div className="container d-flex gap-3 flex-row">
                                    {Object.keys(buttonValue).map((type) => (
                                        <div key={type} className="col mb-2 me-2">
                                            <button
                                                className={`btn ${buttonValue[type] ? 'btn-Nam' : 'btn-Name'}`}
                                                onClick={() => handleButton(type)}
                                                style={{ width: '100%' }}
                                            >
                                                {type}
                                            </button>

                                        </div>
                                    ))}
                                </div>

                            </div>

                        </Card.Body>
                    </Card>

                </div>
                <div className='mt-5'>
                    <h5 className='mb-5'>Outdoor Facility</h5>
                    <Card style={{ borderRadius: '10px', border: '1px solid #B3B3B3', width: '1170px' }}>
                        <Card.Body>
                            <div className="row mb-2">
                                <div className='d-flex gap-2 flex-wrap'>
                                    {data.map((outdoors) => (
                                        <button
                                            key={outdoors}
                                            className="btn btn-values mb-2 me-2"
                                            onClick={() => handleRemoveData(outdoors)}

                                        >
                                            {outdoors} <FaTimes />
                                        </button>
                                    ))}
                                </div>
                                <hr />
                                <div className="container d-flex gap-2 flex-row">
                                    {Object.keys(buttonAdd).map((datta) => (
                                        <div key={datta} className="col mb-2 me-2">
                                            <button
                                                className={`btn ${buttonAdd[datta] ? 'btn-Nam' : 'btn-Name'}`}
                                                onClick={() => handleButtonClickss(datta)}
                                                style={{ width: '100%' }}
                                            >
                                                {datta}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Card.Body>
                    </Card>


                </div>






                <Form className=" mx-2">


                    <Row className="mt-5">
                        <Col className="">
                            <Form.Group controlId="formGroup3">
                                <Form.Label>Rent <span className='month'>(Per month)</span></Form.Label>
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
          <Form.Label>Agent Commision</Form.Label>
          <Form.Control type="text" placeholder="Agent Commision" style={formControlStyle} />
        </Form.Group>
      </Col>
    }
    <Col>
      <Form.Group controlId="formGroup4">
    
      </Form.Group>
    </Col>
  </Row>
                </Form>
                <h5 className='mt-5 gy-3'>Description</h5>
                <textarea className="form-control mt-4" style={{ width: '1170px', height: "270px", borderRadius: '30px', border: '1px solid #D7242A' }} placeholder="Type something...." id="message" rows="5" required></textarea>
                <h5 className='mt-5 gy-3'>Upload Photos</h5>
                <Card className="mt-5" style={{ width: '1170px', height: "300px", borderRadius: '30px', border: '1px solid #D7242A' }}>
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
        

        {/* {selectedImage && (
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
        )} */}
{selectedImage && (
    <div className="mb-3 text-center" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {selectedImage.map((image, index) => (
            <div key={index} style={{ flex: '0 0 calc(16.666% - 10px)', margin: '5px' }}>
                <img
                    src={typeof image === 'string' ? image : URL.createObjectURL(image)}
                    alt={typeof image === 'string' ? 'Uploaded Image' : image.name}
                    style={{ width: '100%', maxHeight: '100px', borderRadius: '10px', border: '1px solid' }}
                />
                <button onClick={() => removeSelectedImage(index)} className="btn btn-danger btn-sm mb-2">
                    <i className="fas fa-times"></i> Remove
                </button>
            </div>
        ))}
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

export default Apartmentrent
