
import React from 'react'
import { Button, Card, Form,Row,Col ,Dropdown,DropdownToggle} from 'react-bootstrap';
import { useState } from 'react';
import { MultiSelect } from "react-multi-select-component";
import { FaTimes } from 'react-icons/fa';
const Pgrent  = ({activeButton}) => {
    const [plot, setPlot] = useState(false);
    const [land, setLand] = useState(false);
    const [residential, setResidential] = useState(false);
    const [Commercial, setCommercial] = useState(false);
    const[sell,setsell]= useState('Sell');
    const[rent,setrent]= useState('Rent');
    const[lease,setlease]= useState('');
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
  }else if (items === 3) {
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
    width:'500px',
    height:'60px',
    borderRadius:'20px'
  }
  const formControlllStyle = {
    borderColor: '#D7242A',
    width:'370px',
    height:'70px',
    borderRadius:'20px'
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
        fontSize:'12px'
      };
   

      // const [buttonAdd, setButtonAdd] = useState({
      //   CarParking: false,
      //   Security: false,
      //  ' Street Light':false,
      //  Compound:false,
      //   AvenueTrees:false,
      //   Canteen:false,
      //   Parks: false,
      //   Store: false,
      //   Saloon:false,
      //   Pharmacy:false,
      //   'Coffee Bar':false,
      //   Gym:false,
      
        
      // });
      // const [buttonValue, setButtonvalue] = useState({
      //   Furniture: false,
      //   Balcony: false,
      //   'Wash Room': false,
      //   'Washing Machine': false,
      //   'Laundry': false,
      //   'Modular Kitchen': false,
      //   TV:false,
      //   Phone:false,
      //   Fridge:false,
      //   PowerBackup:false,
      //   WIFI:false,
      //   Lift:false,
      
      // });
     
      // const [buttonfootType, setButtonFootType] = useState({
      //   Vegetarian: false,
      //   NonVeg: false,
      //   VegAndNonveg: false,
      //   SelfCooking :false ,                                                                      
      //   Kitchen:false,
      
      // });



      // const [data, setData] = useState([]);
      // const [count, setCount] = useState([]);

      // const [footType, setFootType] = useState([]);
      // const handleButtonClickss = (datta) => {
      //   // Check if the button has already been clicked
      //   if (!setButtonAdd[datta]) {
      //     setButtonAdd((prevButtonAdd) => ({
      //       ...prevButtonAdd,
      //       [datta]: true,
      //     }));
    
      //     setData((prevData) => [...prevData, datta]);
    
   
      //   }
      // };
      // const handleButton = (type) => { 
      
      //   if (!buttonValue[type]) {
      //     setButtonvalue((prevValue) => ({
      //       ...prevValue,
      //       [type]: true,
      //     }));
    
      //     setCount((prevCount) => [...prevCount, type]);
    
          
      //   }
      // };
      //
      // const handleobuttonfootType = (typ) => {
       
      //   if (!buttonfootType[typ]) {
      //     setButtonFootType((prevFootType) => ({
      //       ...prevFootType,
      //       [typ]: true,
      //     }));
    
      //     setFootType((prevFootType) => [...prevFootType, typ]);
    
     
      //   }
      // };
      // const handleRemoveData = (itemRemove) => {
      //   setButtonAdd((prevButtonAdd) => ({
      //     ...prevButtonAdd,
      //     [itemRemove]: false,
      //   }));
    
      //   setData((prevData) => prevData.filter((outdoor) => outdoor !== itemRemove));
    
      //   // Other logic, if needed
      // };
      // const handleRemoveCount = (Remove) => {
      //   setButtonvalue((prevValue) => ({
      //     ...prevValue,
      //     [Remove]: false,
      //   }));
    
      //   setCount((prevCount) => prevCount.filter((items) => items !== Remove));
    
      //   // Other logic, if needed
      // };
      // const handleRemovefoottype = (Removefoottype) => {
      //   setButtonFootType((prevFootType) => ({
      //     ...prevFootType,
      //     [Removefoottype]: false,
      //   }));
    
      //   setFootType((prevFoottype) => prevFoottype.filter((ittm) => ittm !== Removefoottype));
    
      //   // Other logic, if needed
      // };
      
      const newArray = [
        "Furniture" ,
        "Balcony" ,
        'Wash Room' ,
         "Washing Machine",
         "Laundry",
         "Modular Kitchen",
        "TV",
        "Phone",
        "Fridge",
        'PowerBackup',
        "WIFI",
        "Lift",
       ];
       const [buttonValue, setButtonvalue] = useState({
        Furniture: false,
          Balcony: false,
          'Wash Room': false,
          'Washing Machine': false,
          'Laundry': false,
          'Modular Kitchen': false,
          TV:false,
          Phone:false,
          Fridge:false,
          PowerBackup:false,
          WIFI:false,
          Lift:false,
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
       
         "Canteen": false,
        
         "Store": false,
         Saloon: false,
         Pool: false,
         "Pharmacy": false,  
         "Coffee Bar": false,
         "Gym": false,
       });
     
       const newvalue = [
         "Car Parking",
         "Security",
         "Street Lights",
         "Avenue Trees",
       
        
         "Compound",
         "Canteen",
        "Store" ,
        "Saloon" ,
        " Pool",
        "Pharmacy",
        "Coffee Bar",
        "Gym"
            
       
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
     const newData =[
     
       
          "Vegetarian",
      "NonVeg" ,
      "VegAndNonveg",
      "SelfCooking" ,                                                                      
      " Kitchen",
     
     
     
     ]
       const [buttonStates, setButtonStates] = useState({
         Vegetarian: false,
        NonVeg: false,
        VegAndNonveg: false,
        SelfCooking :false ,                                                                      
        Kitchen:false,
     
       });
     
       const [content, setContent] = useState([]);
     const [inputtype,setInputType] = useState("");
      
     const handleinput = () =>{
       if (inputtype.trim() !== "") {
         setContent((prevContent) => [...prevContent, inputtype]);
         setInputType("");
       }
     }
     
       const handleButtonContent = (buttonName) => {
     
         if (!buttonStates[buttonName]) {
           setButtonStates((prevStates) => ({
             ...prevStates,
             [buttonName]: true,
           }));
     
           setContent((prevContent) => [...prevContent, buttonName]);
     
     
         }
       };
     
       const handleKeytype = (e) => {
         if (e.key === "Enter") {
           handleinput();
         }
       };
     
     
     
     
       const handleRemoveContent = (itemToRemove) => {
         if (newData.includes(itemToRemove)) {
           setButtonAdd((prevStates) => ({
             ...prevStates,
             [itemToRemove]: false,
           }));
           setContent((prevContent) => prevContent.filter((item) => item !== itemToRemove));
         } else {
           setContent((prevContent) => prevContent.filter((item) => item !== itemToRemove));
         }
       };
       const newOccupay = ['SingleRoom', 'DoubleSharingRoom', 'TripleSharingRoom'];
       const [buttonoccupay, setButtonoccupay] = useState({
         SingleRoom: false,
         DoubleSharingRoom: false,
         TripleSharingRoom: false,
       });
       const [occupayy, setOccupayy] = useState([]);
       const [inputoccupay, setInputoccupay] = useState('');
     
       const handleoccupay = () => {
         if (inputoccupay.trim() !== "") {
           setButtonoccupay((prevOccupayy) => ({ ...prevOccupayy, [inputoccupay]: true }));
           setOccupayy((prevOccupayy) => [...prevOccupayy, inputoccupay]);
           setInputoccupay("");
         }
       };
     
       const handleKeyoccupay = (e) => {
         if (e.key === "Enter") {
           handleoccupay();
         }
       };
     
       const handleButtonoccupay = (typess) => {
         if (!buttonoccupay[typess]) {
           setButtonoccupay((prevOccupayy) => ({ ...prevOccupayy, [typess]: true }));
           setOccupayy((prevOccupayy) => [...prevOccupayy, typess]);
         }
       };
     
       const handleRemoveOccupay = (Removeoccupay) => {
         if (newOccupay.includes(Removeoccupay)) {
           setButtonoccupay((prevOccupayy) => ({ ...prevOccupayy, [Removeoccupay]: false }));
           setOccupayy((prevOccupayy) => prevOccupayy.filter((item) => item !== Removeoccupay));
         } else {
           setOccupayy((prevOccupayy) => prevOccupayy.filter((item) => item !== Removeoccupay));
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
    <Form className="mx-3">
      <Row className="gx-md-3">
        <Col md={6}>
          <Form.Group controlId="formGroup1">
            <Form.Label>Property Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" style={{ ...formControlStyle}} />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="propertyLocation">
            <Form.Label htmlFor="countrySelect">Property Location</Form.Label>
            <Form.Control type="text" placeholder="Property Location" style={{ ...formControlStyle}} />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={6}>
          <Form.Group controlId="formGroup3">
            <Form.Label>Number of Rooms</Form.Label>
            <Form.Control type="number" placeholder="Number of Rooms" style={{ ...formControlStyle}} />
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
            <Form.Label>Number of Units in the Project</Form.Label>
            <Form.Control type="number" placeholder="No of units  Project" style={{ ...formControlStyle }} />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formGroup6">
            <Form.Label>Total Floors</Form.Label>
            <Form.Control type="number" placeholder="Total Floors" style={{ ...formControlStyle }} />
          </Form.Group>
        </Col>
      </Row>
      <h5 className='mt-5 gy-3'>Address</h5>
     <textarea className="form-control mt-4"style={{width: '1170px',height:"180px",borderRadius:'20px',border: '1px solid #D7242A'}} placeholder="Enter full address"id="message" rows="5" required></textarea>
    </Form>
    <h5 className='mt-4 '>Category of Project</h5>
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
 
   <div className="flex-grow-1">
     <div className="form-check ms-3">
       <input
         className="form-check-input"
         type="radio"
         name="exampleRadios"
         id="exampleRadio2"
         value="option2"
       />
       <label className="form-check-label" htmlFor="exampleRadio2">
       Existing
       </label>
     </div>
     
   </div>
   <div className="flex-grow-1 me-2">
    <input className="inp" placeholder="If existing, Age of the property..." />
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
         id="exampleRadio2"
         value="option2"
       />
       <label className="form-check-label" htmlFor="exampleRadio2">
       Unfurnished
       </label>
     </div>
     
   </div>
 
   



 </div>
 <h5 className='mt-4'>Gender</h5>
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
       Boys
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
       Girls
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
     Both
       </label>
     </div>
     
   </div>
 
   



 </div>
 <h5 className='mt-4'>Tenants Preferred</h5>
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
       Students
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
       Professionals
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
       Both
       </label>
     </div>
     
   </div>
 
   



 </div>
 <h5 className='mt-4'>Rooms Types</h5>
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
       A/C rooms
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
       Non A/C rooms
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
       A/C & non A/C rooms
       </label>
     </div>
     
   </div>
 
   



 </div>
 <div className='mt-5'>
   <h5 className='mb-5'>Occupancy</h5>

   <Card style={{ borderRadius: '10px', border: '1px solid #B3B3B3',width:'1170px' }}>
               <Card.Body>





   <div className="row mb-2">
  
 
 
        
        <div className='d-flex flex-wrap'>
        {occupayy.map((ittems) => (
              
                  <button
              key={ittems}
              className="btn btn-values  mb-2 me-2"
              onClick={() =>  handleRemoveOccupay(ittems)}
            >
              {ittems} <FaTimes />
            </button>
            
            ))}
                 <input
                placeholder="Typesomething"
                value={inputoccupay}
                onChange={(e) => setInputoccupay(e.target.value)}
                onKeyPress={handleKeyoccupay}
                style={{ border: "none" }}
              />
      </div>
      
      <hr/>
      <div className="d-flex flex-lg-row gap-3">
  {Object.keys(buttonoccupay).map((typess) => (
    <div key={typess} className="mb-2">
      <button
        className={`btn ${buttonoccupay[typess] ? 'btn-Nam' : 'btn-Name'}`}
        onClick={() => handleButtonoccupay(typess)}
      style={{width:'90'}}
      >
        {typess}
      </button>
    </div>
  ))}
</div>


     
      </div>

    </Card.Body>
             </Card>

 </div>

 <div className='mt-5'>
   <h5 className='mb-5'>Food Type</h5>

   <Card style={{ borderRadius: '10px', border: '1px solid #B3B3B3',width:'1170px' }}>
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
                   <input
                placeholder="Typesomething"
                value={inputtype}
                onChange={(e) => setInputType(e.target.value)}
                onKeyPress={handleKeytype}
                style={{ border: "none" }}
              />
      </div>
      
      <hr/>
     
        <div className="d-flex gap-3 flex-row">
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

    </Card.Body>
             </Card>

 </div>

 <div className='mt-5'>
   <h5 className='mb-5'>Indoor Facility</h5>

   <Card style={{ borderRadius: '10px', border: '1px solid #B3B3B3',width:'1170px' }}>
               <Card.Body>





   <div className="row mb-2">
  
 
 
        
   <div className='d-flex gap-3 flex-wrap'> {/* Adjusted styling */}
  {count.map((items) => (
    <button
      key={items}
      className="btn btn-values  mb-2 me-2"
      onClick={() => handleRemoveCount(items)}
    >
      {items} <FaTimes />
    </button>
  ))}
 
  <input
    placeholder="Type something"
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
    onKeyPress={handleKeyPress}
    style={{ border: "none" }}
  />
</div>

      
      <hr/>
    
      <div className="container"> 
  <div className="d-flex gap-3 flex-wrap">
  {Object.keys(buttonValue).map((type) => (
      <div key={type} className="2">
        <button
          className={`btn ${buttonValue[type] ? "btn-Nam" : "btn-Name"}`}
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

 <div className='mt-5'>
   <h5 className='mb-5'>Outdoor Facility</h5>

   <Card style={{ borderRadius: '10px', border: '1px solid #B3B3B3',width:'1170px' }}>
               <Card.Body>





   <div className="row mb-2">
  
 
 
        
        <div className='d-flex gap-3 flex-wrap'>
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
      
      <hr/>
     
        <div className="d-flex gap-3 flex-wrap row row-cols-6">
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

    </Card.Body>
             </Card>

 </div>
 <h5 className='mt-5'>Rent</h5>

 <Form className="">
 <h6 className='mt-4 text-size-lg'>Single Room Price</h6>
  <Row className="">
   
    <Col md={4}>
      <Form.Group controlId="formGroup1">
       
        <Form.Control type="number" placeholder="Rs" style={formControlllStyle} />
      </Form.Group>
    </Col>

    {/* Second Column */}
    <Col md={4}>
      <Form.Group controlId="formGroup2">
       
        <Form.Control type="text" placeholder="Rs." style={formControlllStyle} />
      </Form.Group>
    </Col>

    {/* Third Column */}
   <Col md={4} className=''>
      <Form.Group controlId="formGroup3">
        
        {/* <Form.Control type="text" placeholder="Per Month" style={formControlllStyle} /> */}
        <div className="">
            <Form.Control
    as="select" 
    style={{...formControlllStyle }}
    className='form-select'
  >
  
    <option value="1bhk">Per Month</option>
  
  </Form.Control>
  
  </div>
      
      
      
      </Form.Group>
    </Col>
  </Row>
  
  <Row className="">
  <h6 className='mt-4 text-size-lg'>Double Sharing Room Price</h6>
    <Col md={4}>
      <Form.Group controlId="formGroup1">
        <Form.Control type="number" placeholder="Rs." style={formControlllStyle} />
      </Form.Group>
    </Col>

    {/* Second Column */}
    <Col md={4}>
      <Form.Group controlId="formGroup2">
       
        <Form.Control type="number" placeholder="Rs" style={formControlllStyle} />
      </Form.Group>
    </Col>

    {/* Third Column */}
   <Col md={4} className=''>
      <Form.Group controlId="formGroup3">
      <div className="">
            <Form.Control
    as="select" 
    style={{...formControlllStyle }}
    className="form-select"
  >
  
    <option value="1bhk">Per Month</option>
  
  </Form.Control>
  
  </div>
      
      </Form.Group>
    </Col>
  </Row>
  <Row className="">
  <h6 className='mt-4 text-size-lg'>Multi Sharing Room Price</h6>
    <Col md={4}>
      <Form.Group controlId="formGroup1">
       
        <Form.Control type="number" placeholder="Rs." style={formControlllStyle} />
      </Form.Group>
    </Col>

    {/* Second Column */}
    <Col md={4}>
      <Form.Group controlId="formGroup2">
     
        <Form.Control type="number" placeholder="Rs." style={formControlllStyle} />
      </Form.Group>
    </Col>

    {/* Third Column */}
   <Col md={4} className=''>
      <Form.Group controlId="formGroup3">
      
      <div className="">
            <Form.Control
    as="select" 
    style={{...formControlllStyle }}
    className="form-select"
  >
  
    <option value="1bhk">Per Month</option>
  
  </Form.Control>
  
  </div>
      </Form.Group>
    </Col>
  </Row>
  <Row className="mt-4">
    {/* First Column */}
    <Col md={12}>
      <Form.Group controlId="formGroup1">
        <Form.Label>Security Deposite</Form.Label>
        <Form.Control type="number" placeholder="Rs." style={formControlStyle} />
      </Form.Group>
    </Col>

    {/* Second Column */}
    <Col md={4}>
      <Form.Group controlId="formGroup2">
        <Form.Label></Form.Label>
     
      </Form.Group>
    </Col>
    {activeButton === 'Agent' &&
  <Row className="mt-5">
    <Col className="">
      <Form.Group controlId="formGroup3">
        <Form.Label>Agent Commission</Form.Label>
        <Form.Control type="number" placeholder="Rs" style={formControlStyle} />
      </Form.Group>
    </Col>
   
  </Row>
}
  
  </Row>
  

</Form>

     <h5 className='mt-5 gy-3'>Description</h5>
     <textarea className="form-control mt-4"style={{width: '1170px',height:"270px",borderRadius:'30px',border: '1px solid #D7242A'}} placeholder="Type something...."id="message" rows="5" required></textarea>
     <h5 className='mt-5 gy-3'>Upload Photos</h5>
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
                  className={`nav-link ${upload === "Living Room" ? 'design' : ''}`}
                  style={navLinkStyle}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleImage('Living Room')}
                >
                  Living Room
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${upload === "Bedrooms" ? 'design' : ''}`}
                  style={navLinkStyle}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleImage('Bedrooms')}
                >
                  Bedrooms
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${upload === "Bathrooms" ? 'design' : ''}`}
                  style={navLinkStyle}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleImage('Bathrooms')}
                >
                  Bathrooms
                </a>
              </li>
              <li className="nav-item ">
                <a
              className={`nav-link ${upload === "Kitchen" ? 'design' : ''}`}
                  style={navLinkStyle}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleImage('Kitchen')}
                >
                  Kitchen
                </a>
              </li>
              <li className="nav-item ">
                <a
                     className={`nav-link ${upload === "Building Plan" ? 'design' : ''}`}
                  style={navLinkStyle}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleImage('Building Plan')}
                
                >
                  Building Plan
                </a>
              </li>
              <li className="nav-item ">
                <a
                   className={`nav-link ${upload === "Location Map" ? 'design' : ''}`}
                  style={navLinkStyle}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleImage('Location Map')}
                >
                  Location Map
                </a>
              </li>
            
            </ul>
          </div>
        </nav>
        <hr />
{/* 
        <div
          className="file-input d-flex justify-content-center align-items-center"
        
        >
          <input
            type="file"
            name="file-input"
            id="file-input"
            class="file-input__input"
            accept="image/*"
            onChange={handleImageChange}
          />
          <label className="file-input__label" for="file-input">
            <span>Upload photos</span>
          </label>
        </div>

        {selectedImage && (
          <div className="mt-3 text-center">
            <img
              src={URL.createObjectURL(selectedImage)}
              alt={selectedImage ? selectedImage.name : "upload image"}
              style={{
                maxWidth: "100%",
                maxHeight: "200px",
                borderRadius: "10px",
                border: "1px solid",
              }}
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
{upload === 'Living Room' && 
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

{upload === 'Bedrooms' && (
  <div>
    <div className="file-input d-flex justify-content-center align-items-center" onClick={handleUpload}>
      <input
        type="file"
        name="file-input"
        id="file-input"
        className="file-input__input"
        accept="image/*"
        onChange={handleImagevalue}
      />
      <label className="file-input__label" htmlFor="file-input">
        <span>Upload file</span>
      </label>
    </div>
   
    {selectedvalue && (
      <div className="mt-3 text-center">
        <img
          src={URL.createObjectURL(selectedvalue)}
          alt={selectedvalue ? selectedvalue.name : 'upload image'}
          style={{ width: '200px', maxHeight: '100px', borderRadius: '10px', border: '1px solid' }}
        />
        <button onClick={removeSelectedImage2} className="btn btn-danger btn-sm mt-2">
          <i className="fas fa-times"></i> Remove
        </button>
      </div>
    )}
  </div>
)}
{upload === 'Bathrooms' && 
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
{upload === 'Kitchen' && 
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

{upload === 'Building Plan' && (
  <div>
    <div className="file-input d-flex justify-content-center align-items-center" onClick={handleUpload}>
      <input
        type="file"
        name="file-input"
        id="file-input"
        className="file-input__input"
        accept="image/*"
        onChange={handleImageplan}
      />
      <label className="file-input__label" htmlFor="file-input">
        <span>Upload file</span>
      </label>
    </div>
   
    {selectedPlan && (
      <div className="mt-3 text-center">
        <img
          src={URL.createObjectURL(selectedPlan)}
          alt={selectedPlan ? selectedPlan.name : 'upload image'}
          style={{ width: '200px', maxHeight: '100px', borderRadius: '10px', border: '1px solid' }}
        />
        <button onClick={removeSelectedplan} className="btn btn-danger btn-sm mt-2">
          <i className="fas fa-times"></i> Remove
        </button>
      </div>
    )}
  </div>
)}
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

      </Card.Body>
    </Card>
     <div className="d-flex justify-content-center">
  <button type="button" className="buttonmobile mt-5"style={{width:"370px"}}>Post Property</button>
</div>

  </div>
  )
}

export default Pgrent 
