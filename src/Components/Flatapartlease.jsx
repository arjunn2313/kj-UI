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
import { toast } from "react-toastify";
import { Baseurl, UserConfig } from "./request";
import axios from "axios";
const Flatapartlease = ({
  activeButton,
  user,
  first,
  second,
  selectedPropType,
  restbutton,
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

  const newArray = [
    "Balcony",
    "Lobby",
    "Corridor",
    "ModularKitchen",
    "AirConditioning",
    "PowerBackup",
    "WIFI",
    "Lift",
  ];
  const [buttonValue, setButtonvalue] = useState({
    Balcony: false,
    Lobby: false,
    Corridor: false,
    ModularKitchen: false,
    AirConditioning: false,
    PowerBackup: false,
    WIFI: false,
    Lift: false,
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
    Parks: false,
    Stores: false,
    "Club House": false,
    " Community Hall": false,
    Saloon: false,
    Pool: false,

    Pharmacy: false,
    "Coffee Bar": false,

    Gym: false,
  });

  const newvalue = [
    "Car Parking",
    "Security",
    "Street Lights",
    "Avenue Trees",
    "Parks",
    "Stores",
    "Club House",
    " Community Hall",
    "Saloon",
    "Pool",
    "Pharmacy",
    "Coffee Bar",
    " Gym",
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

  // api integration

  const [errors, setErrors] = useState({});
  const [formValue, setFormValue] = useState({
    propertyName: "",
    propertyLocation: "",
    city: "",
    bhk: "1BHK",
    area: "",
    plotArea: "",
    ploatUnit: "sqft",
    areaUnit: "sqft",
    totalFloor: "",
    floorNumber: "",
    category: "",
    status: "",
    condition: "",
    leasePrice: "",
    advanceAmount: "",
    description: "",
    agentCommision: "",
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
      errors.city = "Please enter city";
    }
    if (!data.area.trim()) {
      errors.area = "Please enter built up area";
    }
    if (!data.plotArea.trim()) {
      errors.plotArea = "Please enter plot area";
    }
    if (!data.totalFloor.trim()) {
      errors.totalFloor = "Please enter total floor";
    }
    if (!data.floorNumber.trim()) {
      errors.floorNumber = "Please enter floor number";
    }
    if (!data.leasePrice.trim()) {
      errors.leasePrice = "Please enter lease price";
    }
    if (!data.advanceAmount.trim()) {
      errors.advanceAmount = "Please enter advance amount";
    }
    if (!data.description.trim()) {
      errors.description = "Please enter description";
    }
    if (activeButton == "Agent") {
      if (!formValue.agentCommision) {
        errors.agentCommision = "*Please enter agent commision";
      }
    }
   if(selectedImage.length === 0){
    errors.image = "*please upload at least 1 image"
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
  console.log(activeButton);

  const submitForm = async (formValue) => {
    const formData = new FormData();
    formData.append("name", user?.userName);
    formData.append("phone", `+${user?.phone}`);
    formData.append("email", user?.email);
    formData.append("property_type", selectedPropType);
    formData.append("residential.residential_type", restbutton);
    formData.append("you_are_here_to", second.toLowerCase());
    formData.append("owner", activeButton === "Owner");
    formData.append("agent", activeButton === "Agent");
    formData.append("builder", activeButton === "Builder");
    formData.append("title", formValue?.propertyName);
    formData.append("apartment.available_bhk", formValue?.bhk);
    formData.append("apartment.built_up_area", parseInt(formValue?.area));
    formData.append("apartment.built_up_area_unit", formValue.areaUnit);
    formData.append("apartment.plot_area", parseInt(formValue?.area));
    formData.append("apartment.plot_area_unit", formValue.ploatUnit);

    formData.append("apartment.total_floors", formValue.totalFloor);

    formData.append(
      "apartment.no_of_units_in_project",
      parseInt(formValue?.noOfUnit)
    );
    formData.append("apartment.category_of_project", formValue?.category);
    if (activeButton === "Agent") {
      formData.append("agent_commission", formValue?.agentCommision);
    }
    formData.append("apartment.condition", formValue?.condition);
    formData.append("apartment.status", formValue?.status);
    formData.append("description", formValue?.description);
    formData.append("location", formValue?.propertyLocation);
    formData.append("city", formValue?.city);
    formData.append("apartment.floor_number", formValue?.floorNumber);
    formData.append("lease_amount", parseInt(formValue?.leasePrice));
    formData.append("advance", formValue?.advanceAmount);
    data.forEach((element, index) => {
      formData.append(
        `apartment.indoor_facilities[${index}]facility.name`,
        element
      );
    });
    count.forEach((element, index) => {
      formData.append(
        `apartment.outdoor_facilities[${index}]facility.name`,
        element
      );
    });
    if (selectedImage) {
      formData.append(`apartment_images[${0}]section`, "exterior_view");
      formData.append(`apartment_images[${0}]image`, selectedImage);
    }
    if (selectedFile) {
      formData.append(`apartment_images[${1}]section`, "livingroom");
      formData.append(`apartment_images[${1}]image`, selectedFile);
    }
    if (selectedvalue) {
      formData.append(`apartment_images[${2}]section`, "bedrooms");
      formData.append(`apartment_images[${2}]image`, selectedvalue);
    }
    if (selectedroom) {
      formData.append(`apartment_images[${3}]section`, "bathrooms");
      formData.append(`apartment_images[${3}]image`, selectedroom);
    }
    if (selectedKitchen) {
      formData.append(`apartment_images[${4}]section`, "kitchen");
      formData.append(`apartment_images[${4}]image`, selectedKitchen);
    }

    if (selectedPlan) {
      formData.append(`apartment_images[${5}]section`, "building_plan");
      formData.append(`apartment_images[${5}]image`, selectedPlan);
    }
    if (selectedmap) {
      formData.append(`apartment_images[${6}]section`, "location_map");
      formData.append(`apartment_images[${6}]image`, selectedmap);
    }
    if (selectedLogo) {
      formData.append(`apartment_images[${7}]section`, "logo");
      formData.append(`apartment_images[${7}]image`, selectedLogo);
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

      setFormValue({
        propertyName: "",
        propertyLocation: "",
        bhk: "1BHK",
        area: "",
        noOfUnit: "",
        totalFloor: "",
        category: "",
        status: "",
        condition: "",
        salePrice: "",
        advanceAmount: "",
        description: "",
        agentCommision: "",
      });
      setSelectedImage("");
      setSelectedFile("");
      setselectedvalue("");
      setselectedroom("");
      setselectedKitchen("");
      setselectedPlan("");
      setselectedmap("");
      setselectedLogo("");
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
            <Col md={6}>
              <Form.Group controlId="formGroup1">
                <Form.Label>Property Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  style={{ ...formControlStyle }}
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
            <Col md={6}>
              <Form.Group controlId="propertyLocation">
                <Form.Label htmlFor="countrySelect">
                  Property Location
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Property Location"
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
          </Row>

          <Row className="mt-5">
            <Col md={6}>
              <Form.Group controlId="formGroup3">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="city"
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
            <Col md={6}>
              <Form.Group controlId="formGroup3">
                <Form.Label>Available BHK </Form.Label>
                <div className="">
                  <Form.Control
                    as="select"
                    style={{ ...formControlStyle }}
                    className="form-select"
                    name="bhk"
                    onChange={handleChange}
                  >
                    <option value="1BHK">1 BHK</option>
                    <option value="2BHK">2 BHK</option>
                    <option value="3BHK">3 BHK</option>
                    <option value="4BHK">4 BHK</option>
                    <option value="5BHK">5 BHK</option>
                    <option value="+5BHK">+5BHK</option>
                  </Form.Control>
                </div>
              </Form.Group>
            </Col>
          </Row>

          <Row className="gx-md-3 mt-5">
            {/* Third Row */}
            <Col md={6}>
              <Form.Group controlId="formGroup5">
                <Form.Label>
                  Built Up Area <span className="month">(Onwards)</span>{" "}
                </Form.Label>
                <div
                  className="rounded-pill"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <Form.Control
                    type="number"
                    placeholder="Area"
                    style={{ ...formControlStyle }}
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
                    <option>sqft</option>
                    {/* <option>mt</option> */}
                  </select>
                </div>
                {errors.area && (
                  <div className="text-danger">{errors.area}</div>
                )}
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formGroup6">
                <Form.Label>Plot Area (UDS)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Area"
                  style={{ ...formControlStyle }}
                  name="plotArea"
                  isInvalid={!!errors.plotArea}
                  value={formValue.plotArea}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.plotArea}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row className="gx-md-3 mt-5">
            {/* Third Row */}
            <Col md={6}>
              <Form.Group controlId="formGroup5">
                <Form.Label>Total Floors </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Built Up Area"
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
            <Col md={6}>
              <Form.Group controlId="formGroup6">
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
                id="exampleRadio2"
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

                <div className="d-flex gap-3 flex-row">
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
                <Form.Label>
                  Lease Amount <span className="month"> (per year)</span>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Rs"
                  style={formControlStyle}
                  name="leasePrice"
                  isInvalid={!!errors.leasePrice}
                  value={formValue.leasePrice}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.leasePrice}
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
                  <Form.Label>Agentcommision</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Rs"
                    style={formControlStyle}
                    name="agentCommision"
                    isInvalid={!!errors.agentCommision}
                    value={formValue.agentCommision}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.agentCommision}
                  </Form.Control.Feedback>
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
          required
          name="description"
          isInvalid={!!errors.description}
          value={formValue.description}
          onChange={handleChange}
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
                        upload === "Living Room" ? "design" : ""
                      }`}
                      style={navLinkStyle}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleImage("Living Room")}
                    >
                      Living Room
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link ${
                        upload === "Bedrooms" ? "design" : ""
                      }`}
                      style={navLinkStyle}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleImage("Bedrooms")}
                    >
                      Bedrooms
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link ${
                        upload === "Bathrooms" ? "design" : ""
                      }`}
                      style={navLinkStyle}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleImage("Bathrooms")}
                    >
                      Bathrooms
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className={`nav-link ${
                        upload === "Kitchen" ? "design" : ""
                      }`}
                      style={navLinkStyle}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleImage("Kitchen")}
                    >
                      Kitchen
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className={`nav-link ${
                        upload === "Building Plan" ? "design" : ""
                      }`}
                      style={navLinkStyle}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleImage("Building Plan")}
                    >
                      Building Plan
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
                    <li className="nav-item mx-5">
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
            {upload === "Living Room" && (
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

            {upload === "Bedrooms" && (
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
                      alt={selectedvalue ? selectedvalue.name : "upload image"}
                      style={{
                        width: "200px",
                        maxHeight: "100px",
                        borderRadius: "10px",
                        border: "1px solid",
                      }}
                    />
                    <button
                      onClick={removeSelectedImage2}
                      className="btn btn-danger btn-sm mt-2"
                    >
                      <i className="fas fa-times"></i> Remove
                    </button>
                  </div>
                )}
              </div>
            )}
            {upload === "Bathrooms" && (
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
            {upload === "Kitchen" && (
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

            {upload === "Building Plan" && (
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
                      alt={selectedPlan ? selectedPlan.name : "upload image"}
                      style={{
                        width: "200px",
                        maxHeight: "100px",
                        borderRadius: "10px",
                        border: "1px solid",
                      }}
                    />
                    <button
                      onClick={removeSelectedplan}
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
      {errors.image && <div className="text-danger">{errors.image}</div>}
        <button
          type="button"
          className="buttonmobile mt-5"
          style={{ width: "370px" }}
          onClick={handleSubmit}
        >
          Post Property
        </button>
      </div>
    </div>
  );
};

export default Flatapartlease;
