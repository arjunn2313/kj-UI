// import React from 'react'
// import { Button, Card, Form, Row, Col, Dropdown, DropdownToggle } from 'react-bootstrap';
// import { useState } from 'react';
// import request, { Baseurl, UserConfig, token } from "./request";
// import { FaTimes } from 'react-icons/fa';
// import { toast } from "react-toastify";
// import axios from "axios";
// const Commercialsell = ({ activeButton,user,third,second, selectedPropType }) => {

//   const [plot, setPlot] = useState(false);
//   const [land, setLand] = useState(false);
//   const [residential, setResidential] = useState(false);
//   const [Commercial, setCommercial] = useState(false);
//   const [sell, setsell] = useState('Sell');
//   const [rent, setrent] = useState('Rent');
//   const [lease, setlease] = useState('');
//   const [formValue, setFormValue] = useState({});
//   const handleplotClick = (items) => {
//     if (items === 1) {
//       setPlot(true);
//       setLand(false);
//       setResidential(false);
//       setCommercial(false)
//     } else if (items === 2) {
//       setLand(true);
//       setPlot(false);
//       setCommercial(false)
//       setResidential(false);
//     } else if (items === 3) {
//       setLand(false);
//       setPlot(false);
//       setCommercial(false)
//       setResidential(true);
//     } else if (items === 4) {
//       setLand(false);
//       setPlot(false);
//       setCommercial(true);
//       setResidential(false);
//     }
//   };
 

//   const formControlStyle = {
//     borderColor: '#D7242A',
//     width: '500px',
//     height: '60px',
//     borderRadius: '20px'
//   }
//   const formControllStyle = {
//     borderColor: '#D7242A',
//     width: '1150px',
//     height: '60px',
//     borderRadius: '20px'
//   }
//   // images upload code


//   const navLinkHoverStyle = {
//     Color: '#D7242A',
//     transition: 'background-color 0.3s ease',
//   };
//   const handleMouseEnter = (e) => {
//     e.target.style.Color = navLinkHoverStyle.Color;
//     e.target.style.color = navLinkHoverStyle.Color;
//   };

//   const handleMouseLeave = (e) => {
//     e.target.style.backgroundColor = '';
//     e.target.style.color = navLinkStyle.color;

//   };

//   const buttonStyle = {
//     backgroundColor: '#FFFFFF',
//     color: '#656565',
//     border: '1px solid #C5C5C5',
//     margin: '0 0.5rem',

//   };
//   const navbarStyle = {
//     backgroundColor: '#FFFFFF4D',

//     width: '100%',
//   };
//   const navLinkStyle = {
//     color: '#000000',
//     fontSize: '12px'
//   };


//   // const [buttonindoor, setButtonindoor] = useState({

//   //   'Washroom': false,
//   //   Toilet: false,
//   //   'Air Conditioning': false,
//   //   'Power Backup': false,
//   //   WIFI: false,
//   //   Lift: false,
//   //   ' Coffee Bar': false,

//   // })
//   // const [buttonValue, setButtonvalue] = useState({
//   //   CarParking: false,
//   //   Toilet: false,
//   //   StreetLight: false,
//   //   AvenueTrees: false,
//   //   AirConditioning: false,
//   //   Compound: false,


//   // });
//   const newArray = [
//     "Washroom",
//     "Toilet",
   
//     "AirConditioning",
//     "PowerBackup",
//     "WIFI",
//     "Lift",
//     "Coffee Bar",
//     "Lobby"
//   ];
//   const [buttonValue, setButtonvalue] = useState({
//     'Washroom': false,
//       Toilet: false,
//       'Air Conditioning': false,
//       'Power Backup': false,
//       WIFI: false,
//       Lift: false,
//       ' Coffee Bar': false,
//   });
//   const [count, setCount] = useState([]);
//   const [inputValue, setInputValue] = useState("");
//   const handleAddCount = () => {
//     if (inputValue.trim() !== "") {
//       setCount((prevCount) => [...prevCount, inputValue]);
//       setInputValue("");
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       handleAddCount();
//     }
//   };
//   const handleButton = (type) => {
//     if (!buttonValue[type]) {
//       setButtonvalue((prevValue) => ({
//         ...prevValue,
//         [type]: true,
//       }));
//       setCount((prevCount) => [...prevCount, type]);
//     }
//   };
//   const handleRemoveCount = (itemRemove) => {
//     if (newArray.includes(itemRemove)) {
//       setButtonvalue((prevValue) => ({
//         ...prevValue,
//         [itemRemove]: false,
//       }));
//       setCount((prevCount) =>
//         prevCount.filter((outdoor) => outdoor !== itemRemove)
//       );
//     } else {
//       setCount((prevCount) =>
//         prevCount.filter((outdoor) => outdoor !== itemRemove)
//       );
//     }
//   };
//   const [buttonAdd, setButtonAdd] = useState({
//     "Car Parking": false,
//     Security: false,
//     "Street Lights": false,
//     "Avenue Trees": false,
//     Compound: false,

       
  
//   });

//   const newvalue = [
//     "Car Parking",
//     "Security",
//     "Street Lights",
//     "Avenue Trees",
  
   
//     "Compound"
//   ];

//   const [data, setData] = useState([]);
//   const [input, setInput] = useState("");

//   const handleAdd = () => {
//     if (input.trim() !== "") {
//       setData((prevData) => [...prevData, input]);
//       setInput("");
//     }
//   };

//   const handleKeys = (e) => {
//     if (e.key === "Enter") {
//       handleAdd();
//     }
//   };

//   const handleButtonClickss = (datta) => {
//     if (!buttonAdd[datta]) {
//       setButtonAdd((prevButtonAdd) => ({
//         ...prevButtonAdd,
//         [datta]: true,
//       }));
//       setData((prevData) => [...prevData, datta]);
//     }
//   };

//   const handleRemoveData = (Remove) => {
//     if (newvalue.includes(Remove)) {
//       setButtonAdd((prevButtonAdd) => ({
//         ...prevButtonAdd,
//         [Remove]: false,
//       }));
//       setData((prevData) => prevData.filter((item) => item !== Remove));
//     } else {
//       setData((prevData) => prevData.filter((item) => item !== Remove));
//     }
//   };

//   const [upload,setupload] = useState('');
//   const [selectedImage, setSelectedImage] = useState('');
//   const [selectedFile, setSelectedFile] = useState('');
//   const [selectedvalue, setselectedvalue] = useState('');
// const [selectedLogo, setselectedLogo] = useState('');
// const [selectedroom,setselectedroom] = useState('');
// const [selectedKitchen, setselectedKitchen] = useState('');
// const [selectedPlan, setselectedPlan] = useState('');
// const [selectedmap, setselectedmap] = useState('');
// const [errors, setErrors] = useState({});
//   const handleUpload = () => {
//     if (upload === 'Site View' && selectedImage) {
//       console.log('Uploading Site View image:', selectedImage);
     
//       setSelectedImage('');
//     } else if (upload === 'FMB' && selectedFile) {
//       console.log('Uploading FMB image:', selectedFile);
   
//       setSelectedFile('');
//     } else if (upload === 'Location Map' && selectedvalue) {
//       console.log('Uploading Location Map image:', selectedvalue);
      
//       setselectedvalue('');
//     } else if (upload === 'Logo' && selectedLogo) {
//       console.log('Uploading Logo image:', selectedLogo);
    
//       setSelectedImage('');
//     } else {
//       console.log('No image selected');
//     }
//   };
  
//  const handleImage = (values) =>{
  
//   setupload(values)
  
//  }



//  const handleImageChange = (event) => {
//   const files = event.target.files;
//   if (selectedImage.length + files.length > 6) {
    
//       return;
//   }
 
//   setSelectedImage(prevImages => [...prevImages, ...files]);
// };

// const handleFileChange = (event) => {
// const file = event.target.files[0];
// setSelectedFile(file);
// };
// const handleImagevalue = (event) => {
// const file = event.target.files[0];



// setselectedvalue(file);

// };
//  const handleImagerooms = (event) =>{
//   const file = event.target.files[0];



//   setselectedroom(file);

//  }

// const handleFileKitchen =(event)=>{
//   const file = event.target.files[0];


//   setselectedKitchen(file);
// }

// const handleImageplan =(event)=>{
//   const file = event.target.files[0];


//   setselectedPlan(file);
// }
//  const handleImagemap = (event) =>{
//   const file = event.target.files[0];
//   setselectedmap(file)
//  }
 
// const handleImageLogo = (event) => {
// const file = event.target.files[0];



// setselectedLogo(file);

// };
// const removeSelectedImage = (index) => {
//   setSelectedImage(prevImages => prevImages.filter((image, i) => i !== index));
// };

// const removeSelectedImage1 = () => {
// setSelectedFile('');
// };


// const removeSelectedImage2 = () => {
// setselectedvalue('');
// };
// const removeSelectedroom = () =>{
//   setselectedroom('');
// }

// const removeSelectedKitchen = () =>{
//   setselectedKitchen("");
// }
// const removeSelectedplan = () =>{
//   setselectedPlan('');
// }
// const removeSelectedmap =()=>{
//   setselectedmap('');
// }
// const removeSelectedLogo = () => {
// setselectedLogo('');
// };
// const handleChange = (e) => {
//   setFormValue({
//     ...formValue,
//     [e.target.name]: e.target.value,
//   });
// };
// const validateForm = () => {
//   let errors = {};
//   if (!formValue.propertyName) {
//     errors.propertyName = "*Please enter a valid property name";
//   }
//   if (!formValue.propertyLocation) {
//     errors.propertyLocation = "*Please enter property location";
//   }
//   if (!formValue.floornumbers) {
//     errors.floornumbers = "*Please enter floornumber";
//   }
//   if (!formValue.totalfloors) {
//     errors.floornumbers = "*Please enter floornumber";
//   }
//   if (!formValue.city) {
//     errors.city = "*Please enter city";
//   }
//   if (!formValue.plotBreadth) {
//     errors.plotBreadth = "*Please enter plot bredth";
//   }
//   if (!formValue.AreaUnit) {
//     errors.AreaUnit = "*Please enter plot area";
//   }
//   if (!formValue.totalfloors) {
//     errors.totalfloors = "*Please enter total floors";
//   }


//   if (!formValue.BuiltUpArea) {
//     errors.BuiltUpArea = "*Please enter Built Up Area";
//   }

//   if (!formValue.salePrice) {
//     errors.salePrice = "*Please enter sale price";
//   }
//   if (!formValue.advanceAmout) {
//     errors.advanceAmout = "*Please enter advance amount";
//   }
//   if (!formValue.description) {
//     errors.description = "*Please enter description";
//   }
//   if (!formValue.availablefloors) {
//     errors.availablefloors = "*Please enter availablefloors";
//   }
//   if (!formValue.twoWheelerparking) {
//     errors.twoWheelerparking = "*Please enter No of Two Wheeler Parking";
//   }

//   if (!formValue.carparking) {
//     errors.carparking = "*Please enter No of carparking";
//   }



//   if (selectedImage.length != 6) {
//     toast.warning("recommented to upload 6 site view images");
//     errors.selectedImage = "*Please";
//   }

//   return errors;
// };


// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const errors = validateForm();
//   if (Object.keys(errors).length === 0) {
//     try {
//       const formData = new FormData();
//       formData.append("name", user?.userName);
//       formData.append("phone", `+${user?.phone}`);
//       formData.append("email", user?.email);
//       formData.append("property_type", selectedPropType);
//       formData.append("commercial.commercial_type", "office");
//       formData.append("you_are_here_to", second.toLowerCase());
//       formData.append("owner", activeButton === "Owner");
//       // formData.append("showroom.length", parseInt(formValue?.plotSize));
//       // formData.append("plot.breadth", parseInt(formValue?.plotBreadth));
//       formData.append("area_sqft", parseInt(formValue?.builduparea));
//       formData.append("showroom.available_floors", parseInt(formValue?.availablefloors));
//       formData.append("showroom.road_width", parseInt(formValue?.roadWidth));
//       formData.append("showroom.direction_facing", formValue?.direction);
//       formData.append("showroom.category_of_project", formValue?.category);
//       formData.append("showroom.status", formValue?.status);
//       formData.append("showroom.total_floors", formValue?.totalfloors);
     
//       formData.append("title", formValue?.propertyName);
//       formData.append("description", formValue?.description);
//       formData.append("location", formValue?.propertyLocation);
//       formData.append("city",formValue?.city);
//       formData.append("showroom.floor_number", formValue?.floornumbers);
      
//       formData.append("sale_price", formValue?.salePrice);
//       formData.append("advance", formValue?.advanceAmout);
//       formData.append("unit", formValue?.AreaUnit);
//       formData.append("showroom.no_of_two_wheeler_parking", formValue?.twoWheelerparking);
//       formData.append("showroom.no_of_car_parking", formValue?.carparking);
//       data.forEach((element, index) => {
//         formData.append(`showroom.facilities[${index}]name`, element);
//       });

//       input.forEach((element, index) => {
//         formData.append(`showroom.facilities[${index}]name`, element);
//       });
//       selectedImage.forEach((image, index) => {
//         formData.append(`showroom_images[${index}]section`, "Exterior View");
//         formData.append(`showroom_images[${index}]image`, image);
//       });
//       formData.append(`showroom_images[0]section`, "Interior");
//       formData.append("showroom_images[0]image", selectedFile);
//       formData.append(`showroom_images[1]section`,"Washroom");
//       formData.append("showroom_images[1]image", selectedroom);
//       formData.append(`showroom_images[2]section`,"Floor Plan");
//       formData.append("showroom_images[2]image", selectedKitchen);
//       formData.append(`showroom_images[3]section`,"Location Map");
//       formData.append("showroom_images[3]image", selectedmap);
 
//       const response = await axios.post(
//         `${Baseurl}createproperty/`,
//         formData,
//         UserConfig
//       );
//       // console.log(response.data);
//       console.log("Response Status:", response.status);
//       console.log("Response Data:", response.data);
//       toast.success("Submitted", {
//         hideProgressBar: true,
//         position: "top-center",
//       });
//     } catch (error) {
//       console.error("Server error", error);
//       toast.error("something went wrong", {
//         hideProgressBar: true,
//         position: "top-center",
//       });
//     }
//   } else {
//     setErrors(errors); 
//   }
// };





//   return (
//     <div>
//       <div>
//         <Form className="mx-3">
//           <Row className="gx-md-3">
//             <Col>
//               <Form.Group controlId="formGroup1">
//                 <Form.Label>Property Name</Form.Label>
//                 <Form.Control type="text"
//                  placeholder="Enter Name" 
//                  style={{ ...formControllStyle }}
//                  onChange={handleChange}
//                  name="propertyName"
//                  required />
//                    {errors.propertyName && (
//                 <div className="text-danger">{errors.propertyName}</div>
//               )}
//               </Form.Group>
//             </Col>

//           </Row>
//           <Row className="mt-5">
//             <Col md={6}>
//               <Form.Group controlId="formGroup3">
//                 <Form.Label>Property Location</Form.Label>
//                 <Form.Control type="text"
//                  placeholder="Property Location" 
//                  pattern="[A-Za-z\s]+"
//                  onChange={handleChange}
//                  name="propertyLocation"
//                  style={{ ...formControlStyle }} required/>
//                    {errors.propertyLocation && (
//                 <div className="text-danger">{errors.propertyLocation}</div>
//               )}
//               </Form.Group>
//             </Col>
//             <Col md={6}>
//               <Form.Group controlId="formGroup4">
//                 <Form.Label>City</Form.Label>
//                 <Form.Control type="text" placeholder="City" 
//                 style={{ ...formControlStyle }}
//                 required/>
//              {errors.city && (
//                 <div className="text-danger">{errors.city}</div>
//               )}
//               </Form.Group>
//             </Col>
//           </Row>

         
//           <Row className="gx-md-3 mt-5">
          
//             <Col md={6}>
//               <Form.Group controlId="formGroup5">
//                 <Form.Label>Built Up Area of a Flat</Form.Label>
//                 <div className='rounded-pill' style={{ position: 'relative', display: 'inline-block' }}>
//             <Form.Control
//               type="text"
//               placeholder="Area"
//               name="builduparea"
//               style={{ ...formControlStyle }}
//               onChange={handleChange}
//               className='form-select'
//               required
//             />
//             <select className='rounded-end down border-start-0 ps-5' style={{ position: 'absolute', top: 0, right: 0, width: '100px', height: '100%',}}>
//             <option value="sqft">sqft</option>
//   <option>mt</option>
// </select>
// </div>  
// {errors.BuiltUpArea && (
//                 <div className="text-danger">{errors.BuiltUpArea}</div>
//               )}
//               </Form.Group>
//             </Col>
//             <Col md={6}>
//               <Form.Group controlId="formGroup6">
//                 <Form.Label>Available Floors</Form.Label>
//                 <Form.Control type="number"
//                  placeholder="Available Floors" 
//                  onChange={handleChange}
//                  name="availablefloors" 
//                  style={{ ...formControlStyle }} required/>
//                  {errors.availablefloors && (
//                 <div className="text-danger">{errors.availablefloors}</div>
//               )}
//               </Form.Group>
//             </Col>
//           </Row>
//           <Row className="gx-md-3 mt-5">
//             {/* Third Row */}
//             <Col md={6}>
//               <Form.Group controlId="formGroup5">
//                 <Form.Label>Floor Number</Form.Label>
//                 <Form.Control type="number"
//                  placeholder="Floor Number"
//                  onChange={handleChange}
//                  name="floornumbers" 
//                  style={{ ...formControlStyle }} required/>
//                     {errors.floornumbers && (
//                 <div className="text-danger">{errors.floornumbers}</div>
//               )}
//               </Form.Group>
//             </Col>
//             <Col md={6}>
//               <Form.Group controlId="formGroup6">
//                 <Form.Label>Total Floors</Form.Label>
//                 <Form.Control type="number" 
//                 placeholder="Total Floors"
//                 onChange={handleChange}
//                 name="totalfloors"
//                  style={{ ...formControlStyle }}   required/>
//                           {errors.totalfloors && (
//                 <div className="text-danger">{errors.totalfloors}</div>
//               )}
              
//               </Form.Group>
//             </Col>
//           </Row>
//           <Row className="gx-md-3 mt-5">
//             {/* Third Row */}
//             <Col md={6}>
//               <Form.Group controlId="formGroup5">
//                 <Form.Label>Number of Two Wheeler Parking</Form.Label>
//                 <Form.Control type="number"
//                  placeholder="Two Wheeler"
//                  onChange={handleChange}
//                  name="twoWheelerparking" 
//                   style={{ ...formControlStyle }} 
//                   required  />
//                   {errors.twoWheelerparking && (
//                     <div className="text-danger">{errors.totalfloors}</div>
//                   )}
                
//               </Form.Group>
//             </Col>
//             <Col md={6}>
//               <Form.Group controlId="formGroup6">
//                 <Form.Label>Number of Car Parking</Form.Label>
//                 <Form.Control type="number"
//                  placeholder="Car Parking"
//                  name="CarParking" 
//                  onChange={handleChange}
//                   style={{ ...formControlStyle }}  required/>
//                     {errors.carparking && (
//                     <div className="text-danger">{errors.carparking}</div>
//                   )}
//               </Form.Group>
//             </Col>
//           </Row>
//         </Form>
//         <h5 className='mt-4'>Category of Project</h5>
//         <div className='custom-radio d-flex mt-4'
//            onChange={handleChange}
//            required>
//           <div className="flex-grow-1 me-2">
//             <div className="form-check">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="category"
//                 id="exampleRadio1"
//                 value="option1"
//                 required/>
//               <label
//                className="form-check-label mb-1"
//                htmlFor="exampleRadio1">
//                 New
//               </label>
//             </div>
//           </div>

//           <div className="flex-grow-1 me-2">
//             <div className="form-check">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="category"
//                 id="exampleRadio2"
//                 value="option2"
//                 required/>
//               <label className="form-check-label" htmlFor="exampleRadio2">
//                 Resale
//               </label>
//             </div>
//           </div>

//           <div className="flex-grow-1 me-2">
//             <input className="inp" 
//               name="category"
//                 onChange={handleChange}
//             placeholder="other if any..." />
//           </div>
//         </div>

//         <h5 className='mt-4'>Status</h5>
//         <div className='custom-radio d-flex mt-4'
//            onChange={handleChange}
//            required>
//           <div className="flex-grow-1">
//             <div className="form-check">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="status"
//                 id="exampleRadio1"
//                 value="option1"
//               />
//               <label className="form-check-label mb-1"
//                htmlFor="exampleRadio1">
//                 Fully Furnished
//               </label>
//             </div>
//           </div>

//           <div className="flex-grow-1 ms-1">
//             <div className="form-check ms-1">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="status"
//                 id="exampleRadio2"
//                 value="option2"
//               />
//               <label className="form-check-label" htmlFor="exampleRadio2">
//                 Semi Furnished
//               </label>
//             </div>
//           </div>

//           <div className="flex-grow-1">
//             <div className="form-check ms-3">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="status"
//                 id="exampleRadio3"

//                 value="option3"
//               />
//               <label className="form-check-label" htmlFor="exampleRadio3">
//                 Unfurnished
//               </label>
//             </div>
//           </div>
//         </div>

//         <h5 className='mt-4'>Condition</h5>
//         <div className='custom-radio d-flex mt-4'>
//           <div className="flex-grow-1">
//             <div className="form-check">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="Condition"
//                 id="exampleRadio1"
//                 value="option1"
//                 required/>
//               <label className="form-check-label mb-1" htmlFor="exampleRadio1">
//                 Ready to move
//               </label>
//             </div>
//           </div>

//           <div className="flex-grow-1 ms-2">
//             <div className="form-check ms-2">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="Condition"
//                 id="exampleRadio2"
//                 value="option2"
//                 required/>
//               <label className="form-check-label"
//                htmlFor="exampleRadio2">
//                 Under Construction
//               </label>
//             </div>
//           </div>

//           <div className="flex-grow-1 me-3">
//             <input className="inp text-start"
//             name="Condition"
//              onChange={handleChange}
//              placeholder="If under construction...." />
//           </div>
//         </div>

//         <div className="mt-5">
//       <h5 className="mb-5">Indoor Facility</h5>

//       <Card
//         style={{
//           borderRadius: "10px",
//           border: "1px solid #B3B3B3",
//           width: "1170px",
//         }}
//       >
//         <Card.Body>
//           <div className="row mb-2">
//             <div className="d-flex gap-3 flex-wrap">
//               {/** // <input placeholder="tyoe here " onClick={(e)=>setCount("e")} /> */}

//               {count.map((items) => (
//                 <button
//                   key={items}
//                   className="btn btn-values  mb-2 me-2"
//                   onClick={() => handleRemoveCount(items)}
//                 >
//                   {items} <FaTimes />
//                 </button>
//               ))}
//               {/** check this page --> sell --> residential --? duplex */}
//               <input
//                 placeholder="Typesomething"
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//                 onKeyPress={handleKeyPress}
//                 style={{ border: "none" }}
//               />
//             </div>

//             <hr />
//             <div className="container">
//             <div className="row row-cols-6">
//               {Object.keys(buttonValue).map((type) => (
//                 <div key={type} className="col mb-2 me-2">
//                   <button
//                     className={`btn ${buttonValue[type] ? "btn-Nam" : "btn-Name"
//                       }`}
//                     onClick={() => handleButton(type)}
//                     style={{ width: "100%" }}
//                   >
//                     {type}
//                   </button>
//                 </div>
//               ))}
//             </div>
//             </div>
//           </div>
//         </Card.Body>
//       </Card>
//     </div>
//     <div className="mt-5">
//       <h5 className="mb-5">Outdoor Facility</h5>
//       <Card
//         style={{
//           borderRadius: "10px",
//           border: "1px solid #B3B3B3",
//           width: "1170px",
//         }}
//       >
//         <Card.Body>
//           <div className="row mb-2">
//             <div className="d-flex gap-3 flex-wrap">
//               {data.map((outdoors) => (
//                 <button
//                   key={outdoors}
//                   className="btn btn-values mb-2 me-2"
//                   onClick={() => handleRemoveData(outdoors)}
//                 >
//                   {outdoors} <FaTimes />
//                 </button>
//               ))}
//               <input
//                 placeholder="Type something"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyPress={handleKeys}
//                 style={{ border: "none" }}
//               />
//             </div>
//             <hr />
//             <div className="container">
//               <div className="row row-cols-6">
//                 {Object.keys(buttonAdd).map((datta) => (
//                   <div key={datta} className="col mb-2 me-2">
//                     <button
//                       className={`btn ${buttonAdd[datta] ? "btn-Nam" : "btn-Name"
//                         }`}
//                       onClick={() => handleButtonClickss(datta)}
//                       style={{ width: "100%" }}
//                     >
//                       {datta}
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </Card.Body>
//       </Card>
//     </div>
        





     
//         <Form className=" mx-2">


//           <Row className="mt-5">
//             <Col className="">
//               <Form.Group controlId="formGroup3">
//                 <Form.Label>Sale Price</Form.Label>
//                 <Form.Control type="number"
//                  placeholder="Rs"
//                  name="salePrice"
//                  onChange={handleChange} 
//                  style={formControlStyle}
//                  required/>
//                      {errors.salePrice && (
//                 <div className="text-danger">{errors.salePrice}</div>
//               )}
//               </Form.Group>
//             </Col>
//             <Col>
//               <Form.Group controlId="formGroup4">
//                 <Form.Label>Advance Amount</Form.Label>
//                 <Form.Control type="number"
//                  placeholder="Rs" 
//                  name="advanceAmout"
//                  onChange={handleChange}
//                  style={formControlStyle} 
//                  required/>
//                     {errors.advanceAmout && (
//                 <div className="text-danger">{errors.advanceAmout}</div>
//               )}
//               </Form.Group>
//             </Col>
//           </Row>

//           <Row className="mt-5">
//             {activeButton === "Agent" &&




//               <Col className="">
//                 <Form.Group controlId="formGroup3">
//                   <h5><Form.Label>Agent Commision</Form.Label></h5>
//                   <Form.Control type="number"
//                    placeholder="RS"
//                     style={formControlStyle}
//                     onChange={handleChange}
//                     required />
//                 </Form.Group>
//               </Col>
//             }


//             <Col>
//               <Form.Group controlId="formGroup4">
//                 <Form.Label></Form.Label>

//               </Form.Group>
//             </Col>
//           </Row>



//         </Form>
//         <h5 className='mt-5 gy-3'>Description</h5>
//         <textarea className="form-control mt-4" 
//         style={{ width: '1170px', height: "270px",
//          borderRadius: '30px', border: '1px solid #D7242A' }} 
//          placeholder="Type something...." id="message" rows="5"
//          name="description" 
//         onChange={handleChange} 
//         required></textarea>
//          {errors.description && (
//           <div className="text-danger">{errors.description}</div>
//         )} 
//         <h5 className='mt-5 gy-3'>Upload Photos</h5>
//         <Card className="mt-5" style={{ width: '1170px', height: "300px", borderRadius: '30px', border: '1px solid #D7242A' }}>
//           <Card.Body>
//             <nav className="navbar navbar-expand">
//               <div className="d-flex justify-content-between" style={navbarStyle}>
//                 <ul className="navbar-nav value d-flex justify-content-between w-100">
//                   <li className="nav-item ">
//                     <a
//                   className={`nav-link ${upload === "Exterior View" ? 'design' : ''}`}
//                   style={navLinkStyle}
//                   onMouseEnter={handleMouseEnter}
//                   onMouseLeave={handleMouseLeave}
//                   onClick={() => handleImage('Exterior View')}
//                 >
//                   Exterior View
//                 </a>
//                   </li>

//                   <li className="nav-item ">
//                     <a 
//                     className={`nav-link ${upload === "Interior" ? 'design' : ''}`}
//                      style={navLinkStyle}
//                      onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} 
//                      onClick={() => handleImage('Interior')}
//                      >
//                       Interior
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a
//                      className={`nav-link ${upload === "Washroom" ? 'design' : ''}`}
//                      style={navLinkStyle} onMouseEnter={handleMouseEnter} 
//                      onMouseLeave={handleMouseLeave} 
//                      onClick={() => handleImage('Washroom')}
//                      >
//                       Washroom
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a 
//                     className={`nav-link ${upload === "Floor Plan" ? 'design' : ''}`}
//                      style={navLinkStyle}
//                      onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
//                      onClick={() => handleImage('Floor Plan')}>
//                       Floor Plan
//                     </a>
//                   </li>
//                   <li className="nav-item ">
//                     <a 
//                     className={`nav-link ${upload === "Location Map" ? 'design' : ''}`}
//                      style={navLinkStyle} onMouseEnter={handleMouseEnter} 
//                      onMouseLeave={handleMouseLeave} 
//                      onClick={() => handleImage('Location Map')} >
//                       Location Map
//                     </a>
//                   </li>
//                   {activeButton === "Builder" &&
//                     <li className="nav-item ">
//                       <a
//                        className={`nav-link ${upload === "Logo" ? 'design' : ''}`} 
//                       style={navLinkStyle} onMouseEnter={handleMouseEnter} 
//                       onMouseLeave={handleMouseLeave} 
//                       onClick={() => handleImage('Logo')}>
//                         Logo
//                       </a>
//                     </li>
//                   }
//                 </ul>

//               </div>
//             </nav>
//             <hr />
//             {/* <div className="text-center text-end">
//          <button className="btn btn-primary mt-2" style={{color:'#fff',backgroundColor:'#D7242A'}} onClick={handleUpload}>
//          <input type="file" accept="image/*" onChange={handleImageChange}/>
//          </button>
//          </div> */}
//             {/* <div className="file-input d-flex justify-content-center align-items-center" onClick={handleUpload} >
//               <input
//                 type="file"
//                 name="file-input"
//                 id="file-input"
//                 class="file-input__input"
//                 accept="image/*" onChange={handleImageChange}
//               />
//               <label className="file-input__label" for="file-input">

//                 <span>Upload file</span></label
//               >
//             </div>

//             {selectedImage && (
//               <div className="mt-3 text-center">
//                 <img
//                   src={URL.createObjectURL(selectedImage)}
//                   alt={selectedImage ? selectedImage.name : 'upload image'}
//                   style={{ maxWidth: '100%', maxHeight: '200px', borderRadius: '10px', border: '1px solid' }}
//                 />
//               </div>

//             )} */}
// {upload === 'Exterior View' && (
//     <div>     
//         <div className="file-input d-flex justify-content-center align-items-center">
//             <input
//                 type="file"
//                 name="file-input"
//                 id="file-input"
//                 className="file-input__input"
//                 accept="image/*"
//                 onChange={handleImageChange}
//             />
//             <label className="file-input__label" htmlFor="file-input">
//                 <span>Upload file</span>
//             </label>
//         </div>
        

//         {selectedImage && (
//             <div className="mt-3 text-center row">
//                 {selectedImage.map((image, index) => (
//                     <div key={index} className="col-2">
//                         <img
//                             src={URL.createObjectURL(image)}
//                             alt={image.name}
//                             style={{ width: '100%', maxHeight: '100px', borderRadius: '10px', border: '1px solid' }}
//                         />
//                         <button onClick={() => removeSelectedImage(index)} className="btn btn-danger btn-sm mb-2">
//                             <i className="fas fa-times"></i> Remove
//                         </button>
//                     </div>
//                 ))}
//             </div>
//         )}
//     </div>
// )}


// {upload === 'Interior' && 
//     <div>
//         <div className="file-input d-flex justify-content-center align-items-center" >
//             <input
//                 type="file"
//                 name="file-input"
//                 id="file-input"
//                 className="file-input__input"
//                 accept="image/*"
//                 onChange={handleFileChange}
//             />
//             <label className="file-input__label" htmlFor="file-input">
//                 <span>Upload file</span>
//             </label>
//         </div>

//         {selectedFile && (
//             <div className="mt-3 text-center">
//                 <img
//                     src={URL.createObjectURL(selectedFile)}
//                     alt={selectedFile ? selectedFile.name : 'upload image'}
//                     style={{ width: '200px', maxHeight: '100px', borderRadius: '10px', border: '1px solid' }}
//                 />
//                 <button onClick={removeSelectedImage1} className="btn btn-danger btn-sm mt-2">
//                     <i className="fas fa-times"></i> Remove
//                 </button>
//             </div>
//         )}
//     </div>
// }


// {upload === 'Washroom' && 
//     <div>     
//         <div className="file-input d-flex justify-content-center align-items-center">
//             <input
//                 type="file"
//                 name="file-input"
//                 id="file-input"
//                 className="file-input__input"
//                 accept="image/*"
//                 onChange={handleImagerooms}
//             />
//             <label className="file-input__label" htmlFor="file-input">
//                 <span>Upload file</span>
//             </label>
//         </div>
        

//         {selectedroom && (
//             <div className="mt-3 text-center">
//                 <img
//                     src={URL.createObjectURL(selectedroom)}
//                     alt={selectedroom ? selectedroom.name : 'upload image'}
//                     style={{ width: '200px', maxHeight: '100px', borderRadius: '10px', border: '1px solid' }}
//                 />
//                 <button onClick={removeSelectedroom} className="btn btn-danger btn-sm mt-2">
//                     <i className="fas fa-times"></i> Remove
//                 </button>
//             </div>
//         )}
//     </div>
// }
// {upload === 'Floor Plan' && 
//     <div>
//         <div className="file-input d-flex justify-content-center align-items-center" >
//             <input
//                 type="file"
//                 name="file-input"
//                 id="file-input"
//                 className="file-input__input"
//                 accept="image/*"
//                 onChange={handleFileKitchen}
//             />
//             <label className="file-input__label" htmlFor="file-input">
//                 <span>Upload file</span>
//             </label>
//         </div>

//         {selectedKitchen && (
//             <div className="mt-3 text-center">
//                 <img
//                     src={URL.createObjectURL(selectedKitchen)}
//                     alt={selectedKitchen ? selectedKitchen.name : 'upload image'}
//                     style={{ width: '200px', maxHeight: '100px', borderRadius: '10px', border: '1px solid' }}
//                 />
//                 <button onClick={removeSelectedKitchen} className="btn btn-danger btn-sm mt-2">
//                     <i className="fas fa-times"></i> Remove
//                 </button>
//             </div>
//         )}
//     </div>                            
// }


// {upload === 'Location Map' && (
//   <div>
//     <div className="file-input d-flex justify-content-center align-items-center" onClick={handleUpload}>
//       <input
//         type="file"
//         name="file-input"
//         id="file-input"
//         className="file-input__input"
//         accept="image/*"
//         onChange={handleImagemap}
//       />
//       <label className="file-input__label" htmlFor="file-input">
//         <span>Upload file</span>
//       </label>
//     </div>
   
//     {selectedmap && (
//       <div className="mt-3 text-center">
//         <img
//           src={URL.createObjectURL(selectedmap)}
//           alt={selectedmap ? selectedmap.name : 'upload image'}
//           style={{ width: '200px', maxHeight: '100px', borderRadius: '10px', border: '1px solid' }}
//         />
//         <button onClick={removeSelectedmap} className="btn btn-danger btn-sm mt-2">
//           <i className="fas fa-times"></i> Remove
//         </button>
//       </div>
//     )}
//   </div>
// )}
// {upload === 'Logo' && 
//     <div>
//         <div className="file-input d-flex justify-content-center align-items-center">
//             <input
//                 type="file"
//                 name="file-input"
//                 id="file-input"
//                 className="file-input__input"
//                 accept="image/*"
//                 onChange={handleImageLogo}
//             />
//             <label className="file-input__label" htmlFor="file-input">
//                 <span>Upload file</span>
//             </label>
//         </div>

//         {selectedLogo && (
//             <div className="mt-3 text-center">
//                 <img
//                     src={URL.createObjectURL(selectedLogo)}
//                     alt={selectedLogo ? selectedLogo.name : 'upload image'}
//                     style={{ width: '200px', maxHeight: '100px', borderRadius: '10px', border: '1px solid' }}
//                 />
//                 <button onClick={removeSelectedLogo} className="btn btn-danger btn-sm mt-2">
//                     <i className="fas fa-times"></i> Remove
//                 </button>
//             </div>
//         )}
//     </div>
// }



//           </Card.Body>
//         </Card>

//       </div>
//       <div className="d-flex justify-content-center">
//         <button type="button" className="buttonmobile mt-5"
//         style={{ width: "370px" }}
//         onClick={(e) => handleSubmit(e)}>Post Property</button>
//       </div>

//     </div>
//   )
// }

// export default Commercialsell


import React from "react";
import {
  Button,
  Card,
  Form,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
} from "react-bootstrap";
import { useState } from "react";

import { FaTimes } from "react-icons/fa";
import { log } from "util";
import { toast } from "react-toastify";
import axios from "axios";
import { Baseurl, UserConfig } from "./request";
const Commercialsell = ({
  activeButton,
  user,
  first,
  second,
  selectedPropType,
}) => {
  const [plot, setPlot] = useState(false);
  const [land, setLand] = useState(false);
  const [residential, setResidential] = useState(false);
  const [Commercial, setCommercial] = useState(false);
  const [sell, setsell] = useState("Sell");
  const [rent, setrent] = useState("Rent");
  const [lease, setlease] = useState("");
  const handleplotClick = (items) => {
    if (items === 1) {
      setPlot(true);
      setLand(false);
      setResidential(false);
      setCommercial(false);
    } else if (items === 2) {
      setLand(true);
      setPlot(false);
      setCommercial(false);
      setResidential(false);
    } else if (items === 3) {
      setLand(false);
      setPlot(false);
      setCommercial(false);
      setResidential(true);
    } else if (items === 4) {
      setLand(false);
      setPlot(false);
      setCommercial(true);
      setResidential(false);
    }
  };

  const formControlStyle = {
    borderColor: "#D7242A",
    width: "500px",
    height: "60px",
    borderRadius: "20px",
  };
  const formControllStyle = {
    borderColor: "#D7242A",
    width: "1150px",
    height: "60px",
    borderRadius: "20px",
  };
  // images upload code

  const navLinkHoverStyle = {
    Color: "#D7242A",
    transition: "background-color 0.3s ease",
  };
  const handleMouseEnter = (e) => {
    e.target.style.Color = navLinkHoverStyle.Color;
    e.target.style.color = navLinkHoverStyle.Color;
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = "";
    e.target.style.color = navLinkStyle.color;
  };

  const buttonStyle = {
    backgroundColor: "#FFFFFF",
    color: "#656565",
    border: "1px solid #C5C5C5",
    margin: "0 0.5rem",
  };
  const navbarStyle = {
    backgroundColor: "#FFFFFF4D",

    width: "100%",
  };
  const navLinkStyle = {
    color: "#000000",
    fontSize: "12px",
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
    "Lobby",
  ];
  const [buttonValue, setButtonvalue] = useState({
    Washroom: false,
    Toilet: false,
    "Air Conditioning": false,
    "Power Backup": false,
    WIFI: false,
    Lift: false,
    " Coffee Bar": false,
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

    "Compound",
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

  const [upload, setupload] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [selectedvalue, setselectedvalue] = useState("");
  const [selectedLogo, setselectedLogo] = useState("");
  const [selectedroom, setselectedroom] = useState("");
  const [selectedKitchen, setselectedKitchen] = useState("");
  const [selectedPlan, setselectedPlan] = useState("");
  const [selectedmap, setselectedmap] = useState("");
  const handleUpload = () => {
    if (upload === "Site View" && selectedImage) {
      console.log("Uploading Site View image:", selectedImage);

      setSelectedImage("");
    } else if (upload === "FMB" && selectedFile) {
      console.log("Uploading FMB image:", selectedFile);

      setSelectedFile("");
    } else if (upload === "Location Map" && selectedvalue) {
      console.log("Uploading Location Map image:", selectedvalue);

      setselectedvalue("");
    } else if (upload === "Logo" && selectedLogo) {
      console.log("Uploading Logo image:", selectedLogo);

      setSelectedImage("");
    } else {
      console.log("No image selected");
    }
  };

  const handleImage = (values) => {
    setupload(values);
  };

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
  const handleImagerooms = (event) => {
    const file = event.target.files[0];

    setselectedroom(file);
  };

  const handleFileKitchen = (event) => {
    const file = event.target.files[0];

    setselectedKitchen(file);
  };

  const handleImageplan = (event) => {
    const file = event.target.files[0];

    setselectedPlan(file);
  };
  const handleImagemap = (event) => {
    const file = event.target.files[0];
    setselectedmap(file);
  };

  const handleImageLogo = (event) => {
    const file = event.target.files[0];

    setselectedLogo(file);
  };
  const removeSelectedImage = () => {
    setSelectedImage("");
  };

  const removeSelectedImage1 = () => {
    setSelectedFile("");
  };

  const removeSelectedImage2 = () => {
    setselectedvalue("");
  };
  const removeSelectedroom = () => {
    setselectedroom("");
  };

  const removeSelectedKitchen = () => {
    setselectedKitchen("");
  };
  const removeSelectedplan = () => {
    setselectedPlan("");
  };
  const removeSelectedmap = () => {
    setselectedmap("");
  };
  const removeSelectedLogo = () => {
    setselectedLogo("");
  };

  ////////////// api integration///////

  const [errors, setErrors] = useState({});
  const [formValue, setFormValue] = useState({
    propertyName: "",
    propertyLocation: "",
    city: "",
    area: "",
    floors: "",
    floorNumber: "",
    totalFloor: "",
    twoParking: "",
    carParking: "",
    category: "",
    status: "",
    condition: "",
    salePrice: "",
    advanceAmount: "",
    description: "",
  });

  //onchange function
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  //form validation
  const validateFormData = (data) => {
    const errors = {};

    if (!data.propertyName.trim()) {
      errors.propertyName = "Please enter a property name";
    }
    if (!data.propertyLocation.trim()) {
      errors.propertyLocation = "Please enter a property location";
    }
    if (!data.city.trim()) {
      errors.city = "Please enter city name";
    }
    if (!data.area.trim()) {
      errors.area = "Please enter built up area";
    }
    if (!data.floors.trim()) {
      errors.floors = "Please enter available floors ";
    }
    if (!data.floorNumber.trim()) {
      errors.floorNumber = "Please enter floor number";
    }
    if (!data.totalFloor.trim()) {
      errors.totalFloor = "Please enter total floor";
    }
    if (!data.twoParking.trim()) {
      errors.twoParking = "Please enter number of two wheeler parking";
    }
    if (!data.carParking.trim()) {
      errors.carParking = "Please enter number of car wheeler parking";
    }
    if (!data.salePrice.trim()) {
      errors.salePrice = "Please enter sale price";
    }
    if (!data.advanceAmount.trim()) {
      errors.advanceAmount = "Please enter advance amount";
    }
    if (!data.description.trim()) {
      errors.description = "Please enter description";
    }
    return errors;
  };

  // form submition request
  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = validateFormData(formValue);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("please fill required field before submiting", {
        hideProgressBar: true,
      });
      return;
    }
    submitForm(formValue);
  };

  console.log(input);
  // form submittion after validation
  const submitForm = async (formValue) => {
    const formData = new FormData();
    formData.append("name", user?.userName);
    formData.append("phone", `+${user?.phone}`);
    formData.append("email", user?.email);
    formData.append("property_type", selectedPropType);
    formData.append("commercial.commercial_type", "office");
    formData.append("you_are_here_to", second.toLowerCase());
    formData.append("owner", activeButton === "Owner");
    formData.append("title", formValue?.propertyName);
    formData.append("showroom.built_up_area", parseInt(formValue?.area));
    formData.append("showroom.built_up_area_unit", "sqft");
    formData.append("showroom.unit", "sqft");
    formData.append("showroom.available_floors", parseInt(formValue?.floors));
    formData.append("showroom.total_floors", parseInt(formValue?.totalFloor));
    formData.append("showroom.category_of_project", formValue?.category);
    formData.append(
      "showroom.no_of_two_wheeler_parking",
      formValue?.twoParking
    );
    formData.append("showroom.no_of_car_parking", formValue?.carParking);
    // dummy data to avoid errors
    formData.append("area_sqft", 10);
    formData.append("unit", "sqft");
    // ddddd
    formData.append("showroom.condition", formValue?.condition);
    formData.append("showroom.status", formValue?.status);
    formData.append("description", formValue?.description);
    formData.append("location", formValue?.propertyLocation);
    formData.append("city", formValue?.city);
    formData.append("showroom.floor_number", formValue?.floorNumber);
    formData.append("sale_price", formValue?.salePrice);
    formData.append("advance", formValue?.advanceAmount);
    data.forEach((element, index) => {
      formData.append(
        `showroom.indoor_facilities[${index}]facility.name`,
        element
      );
    });
    count.forEach((element, index) => {
      formData.append(
        `showroom.outdoor_facilities[${index}]facility.name`,
        element
      );
    });
    if (selectedImage) {
      formData.append(`showroom_images[${0}]section`, "exterior_view");
      formData.append(`showroom_images[${0}]image`, selectedImage);
    }
    // if (selectedImage) {
    //   selectedImage.forEach((selectedImage, index) => {
    //     formData.append(`showroom_images[${index}]section`, "exterior_view");
    //     formData.append(`showroom_images[${index}]image`, selectedImage);
    //   });
    // }
    
    if (selectedFile) {
      formData.append(`showroom_images[${1}]section`, "interior");
      formData.append(`showroom_images[${1}]image`, selectedFile);
    }
    if (selectedroom) {
      formData.append(`showroom_images[${2}]section`, "washroom");
      formData.append(`showroom_images[${2}]image`, selectedroom);
    }
    if (selectedKitchen) {
      formData.append(`showroom_images[${3}]section`, "floor_plan");
      formData.append(`showroom_images[${3}]image`, selectedKitchen);
    }
    if (selectedmap) {
      formData.append(`showroom_images[${4}]section`, "location_map");
      formData.append(`showroom_images[${4}]image`, selectedmap);
    }
    if (selectedLogo) {
      formData.append(`showroom_images[${5}]section`, "logo");
      formData.append(`showroom_images[${5}]image`, selectedLogo);
    }
    try {
      const response = await axios.post(
        ` ${Baseurl}createproperty/`,
        formData,
        UserConfig
      );
      console.log(response);
      toast.success("Submitted", {
        hideProgressBar: true,
        position: "top-center",
      });
    } catch (error) {
      console.error("Server error", error);
      toast.error("something went wrong", {
        hideProgressBar: true,
        position: "top-center",
      });
    }
  };

  return (
    <div>
      <div>
        <Form className="mx-3">
          <Row className="gx-md-3">
            <Col>
              <Form.Group controlId="formGroup1">
                <Form.Label>Property Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  style={{ ...formControllStyle }}
                  name="propertyName"
                  isInvalid={!!errors.propertyName}
                  value={formValue.propertyName}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.propertyName}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={6}>
              <Form.Group controlId="formGroup3">
                <Form.Label>Property Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Property Location"
                  style={{ ...formControlStyle }}
                  name="propertyLocation"
                  isInvalid={!!errors.propertyLocation}
                  value={formValue.propertyLocation}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.propertyLocation}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formGroup4">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="City"
                  style={{ ...formControlStyle }}
                  name="city"
                  isInvalid={!!errors.city}
                  value={formValue.city}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.city}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row className="gx-md-3 mt-5">
            {/* Third Row */}
            <Col md={6}>
              <Form.Group controlId="formGroup5">
                <Form.Label>Built Up Area of a Flat</Form.Label>
                <div
                  className="rounded-pill"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <Form.Control
                    type="number"
                    placeholder="Area"
                    style={{ ...formControlStyle }}
                    className="form-select"
                    name="area"
                    isInvalid={!!errors.area}
                    value={formValue.area}
                    onChange={handleChange}
                  />
                  <select
                    className="rounded-end down border-start-0 ps-5"
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      width: "100px",
                      height: "100%",
                    }}
                  >
                    <option>ft</option>
                    <option>mt</option>
                  </select>
                </div>
                {errors.area && (
                  <div className="text-danger">{errors.area}</div>
                )}
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formGroup6">
                <Form.Label>Availabe Floors</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Availabe Floors"
                  style={{ ...formControlStyle }}
                  name="floors"
                  isInvalid={!!errors.floors}
                  value={formValue.floors}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.floors}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row className="gx-md-3 mt-5">
            {/* Third Row */}
            <Col md={6}>
              <Form.Group controlId="formGroup5">
                <Form.Label>Floor Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Floor Number"
                  style={{ ...formControlStyle }}
                  name="floorNumber"
                  isInvalid={!!errors.floorNumber}
                  value={formValue.floorNumber}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.floorNumber}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formGroup6">
                <Form.Label>Total Floors</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Floor Number"
                  style={{ ...formControlStyle }}
                  name="totalFloor"
                  isInvalid={!!errors.totalFloor}
                  value={formValue.totalFloor}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.totalFloor}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row className="gx-md-3 mt-5">
            {/* Third Row */}
            <Col md={6}>
              <Form.Group controlId="formGroup5">
                <Form.Label>Number of Two Wheeler Parking</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Two Wheeler"
                  style={{ ...formControlStyle }}
                  name="twoParking"
                  isInvalid={!!errors.twoParking}
                  value={formValue.twoParking}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.twoParking}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formGroup6">
                <Form.Label>Number of Car Parking</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Car Parking"
                  style={{ ...formControlStyle }}
                  name="carParking"
                  isInvalid={!!errors.carParking}
                  value={formValue.carParking}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.carParking}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
        </Form>
        <h5 className="mt-4">Category of Project</h5>
        <div className="custom-radio d-flex mt-4" onChange={handleChange}>
          <div className="flex-grow-1 me-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="category"
                id="exampleRadio1"
                value="new"
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
                name="category"
                id="exampleRadio2"
                value="resale"
              />
              <label className="form-check-label" htmlFor="exampleRadio2">
                Resale
              </label>
            </div>
          </div>

          <div className="flex-grow-1 me-2">
            <input
              className="inp"
              placeholder="other if any..."
              name="category"
              onChange={handleChange}
            />
          </div>
        </div>

        <h5 className="mt-4">Status</h5>
        <div className="custom-radio d-flex mt-4" onChange={handleChange}>
          <div className="flex-grow-1">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="status"
                id="exampleRadio1"
                value="fully_furnished"
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
                name="status"
                id="exampleRadio2"
                value="semi_furnished"
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
                name="status"
                id="exampleRadio3"
                value="unfurnished"
              />
              <label className="form-check-label" htmlFor="exampleRadio3">
                Unfurnished
              </label>
            </div>
          </div>
        </div>

        <h5 className="mt-4">Condition</h5>
        <div className="custom-radio d-flex mt-4" onChange={handleChange}>
          <div className="flex-grow-1">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="condition"
                id="exampleRadio1"
                value="ready_to_move"
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
                name="condition"
                id="exampleRadio2"
                value="under_construction"
              />
              <label className="form-check-label" htmlFor="exampleRadio2">
                Under Construction
              </label>
            </div>
          </div>

          <div className="flex-grow-1 me-3">
            <input
              className="inp text-start"
              placeholder="If under construction...."
              onChange={handleChange}
              name="condition"
            />
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
                          className={`btn ${
                            buttonValue[type] ? "btn-Nam" : "btn-Name"
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
                          className={`btn ${
                            buttonAdd[datta] ? "btn-Nam" : "btn-Name"
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
                <Form.Control
                  type="number"
                  placeholder="Rs"
                  style={formControlStyle}
                  name="salePrice"
                  isInvalid={!!errors.salePrice}
                  value={formValue.salePrice}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.salePrice}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formGroup4">
                <Form.Label>Advance Amount</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Rs"
                  style={formControlStyle}
                  name="advanceAmount"
                  isInvalid={!!errors.advanceAmount}
                  value={formValue.advanceAmount}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.advanceAmount}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mt-5">
            {activeButton === "Agent" && (
              <Col className="">
                <Form.Group controlId="formGroup3">
                  <h5>
                    <Form.Label>Agent Commision</Form.Label>
                  </h5>
                  <Form.Control
                    type="number"
                    placeholder="Agent Commision"
                    style={formControlStyle}
                    name="agentCommision"
                    isInvalid={!!errors.agentCommision}
                    value={formValue.agentCommision}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            )}

            <Col>
              <Form.Group controlId="formGroup4">
                <Form.Label></Form.Label>
              </Form.Group>
            </Col>
          </Row>
        </Form>
        <h5 className="mt-5 gy-3">Description</h5>
        <textarea
          className="form-control mt-4"
          style={{
            width: "1170px",
            height: "270px",
            borderRadius: "30px",
            border: "1px solid #D7242A",
          }}
          placeholder="Type something...."
          id="message"
          rows="5"
          name="description"
          isInvalid={!!errors.description}
          value={formValue.description}
          onChange={handleChange}
          required
        ></textarea>
        {errors.description && (
          <div className="text-danger">{errors.description}</div>
        )}
        <h5 className="mt-5 gy-3">Upload Photos</h5>
        <Card
          className="mt-5"
          style={{
            width: "1170px",
            height: "270px",
            borderRadius: "30px",
            border: "1px solid #D7242A",
          }}
        >
          <Card.Body>
            <nav className="navbar navbar-expand">
              <div
                className="d-flex justify-content-between"
                style={navbarStyle}
              >
                <ul className="navbar-nav value d-flex justify-content-between w-100">
                  <li className="nav-item ">
                    <a
                      className={`nav-link ${
                        upload === "Exterior View" ? "design" : ""
                      }`}
                      style={navLinkStyle}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleImage("Exterior View")}
                    >
                      Exterior View
                    </a>
                  </li>

                  <li className="nav-item ">
                    <a
                      className={`nav-link ${
                        upload === "Interior" ? "design" : ""
                      }`}
                      style={navLinkStyle}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleImage("Interior")}
                    >
                      Interior
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link ${
                        upload === "Washroom" ? "design" : ""
                      }`}
                      style={navLinkStyle}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleImage("Washroom")}
                    >
                      Washroom
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link ${
                        upload === "Floor Plan" ? "design" : ""
                      }`}
                      style={navLinkStyle}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleImage("Floor Plan")}
                    >
                      Floor Plan
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className={`nav-link ${
                        upload === "Location Map" ? "design" : ""
                      }`}
                      style={navLinkStyle}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleImage("Location Map")}
                    >
                      Location Map
                    </a>
                  </li>
                  {activeButton === "Builder" && (
                    <li className="nav-item ">
                      <a
                        className={`nav-link ${
                          upload === "Logo" ? "design" : ""
                        }`}
                        style={navLinkStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleImage("Logo")}
                      >
                        Logo
                      </a>
                    </li>
                  )}
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

            {upload === "Exterior View" && (
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
                      alt={selectedImage ? selectedImage.name : "upload image"}
                      style={{
                        width: "200px",
                        maxHeight: "100px",
                        borderRadius: "10px",
                        border: "1px solid",
                      }}
                    />
                    <button
                      onClick={removeSelectedImage}
                      className="btn btn-danger btn-sm mt-2"
                    >
                      <i className="fas fa-times"></i> Remove
                    </button>
                  </div>
                )}
              </div>
            )}
            {upload === "Interior" && (
              <div>
                <div className="file-input d-flex justify-content-center align-items-center">
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
                      alt={selectedFile ? selectedFile.name : "upload image"}
                      style={{
                        width: "200px",
                        maxHeight: "100px",
                        borderRadius: "10px",
                        border: "1px solid",
                      }}
                    />
                    <button
                      onClick={removeSelectedImage1}
                      className="btn btn-danger btn-sm mt-2"
                    >
                      <i className="fas fa-times"></i> Remove
                    </button>
                  </div>
                )}
              </div>
            )}

            {upload === "Washroom" && (
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
                      alt={selectedroom ? selectedroom.name : "upload image"}
                      style={{
                        width: "200px",
                        maxHeight: "100px",
                        borderRadius: "10px",
                        border: "1px solid",
                      }}
                    />
                    <button
                      onClick={removeSelectedroom}
                      className="btn btn-danger btn-sm mt-2"
                    >
                      <i className="fas fa-times"></i> Remove
                    </button>
                  </div>
                )}
              </div>
            )}
            {upload === "Floor Plan" && (
              <div>
                <div className="file-input d-flex justify-content-center align-items-center">
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
                      alt={
                        selectedKitchen ? selectedKitchen.name : "upload image"
                      }
                      style={{
                        width: "200px",
                        maxHeight: "100px",
                        borderRadius: "10px",
                        border: "1px solid",
                      }}
                    />
                    <button
                      onClick={removeSelectedKitchen}
                      className="btn btn-danger btn-sm mt-2"
                    >
                      <i className="fas fa-times"></i> Remove
                    </button>
                  </div>
                )}
              </div>
            )}

            {upload === "Location Map" && (
              <div>
                <div
                  className="file-input d-flex justify-content-center align-items-center"
                  onClick={handleUpload}
                >
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
                      alt={selectedmap ? selectedmap.name : "upload image"}
                      style={{
                        width: "200px",
                        maxHeight: "100px",
                        borderRadius: "10px",
                        border: "1px solid",
                      }}
                    />
                    <button
                      onClick={removeSelectedmap}
                      className="btn btn-danger btn-sm mt-2"
                    >
                      <i className="fas fa-times"></i> Remove
                    </button>
                  </div>
                )}
              </div>
            )}
            {upload === "Logo" && (
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
                      alt={selectedLogo ? selectedLogo.name : "upload image"}
                      style={{
                        width: "200px",
                        maxHeight: "100px",
                        borderRadius: "10px",
                        border: "1px solid",
                      }}
                    />
                    <button
                      onClick={removeSelectedLogo}
                      className="btn btn-danger btn-sm mt-2"
                    >
                      <i className="fas fa-times"></i> Remove
                    </button>
                  </div>
                )}
              </div>
            )}
          </Card.Body>
        </Card>
      </div>
      <div className="d-flex justify-content-center">
        <button
          type="button"
          className="buttonmobile mt-5"
          style={{ width: "370px" }}
          onClick={(e) => handleSubmit(e)}
        >
          Post Property
        </button>
      </div>
    </div>
  );
};

export default Commercialsell;