import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  Form,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
} from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sellform from "./Sellform";
import Rentform from "./Rentform";
import Leaseform from "./Leaseform";
import Restform from "./Restform";
import Restland from "./Restland";
import { useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";
import Restlease from "./Restlease";
import Flatapartsell from "./Flatapartsell";
import Flatapartrent from "./Flatapartrent";
import Flatapartlease from "./Flatapartlease";
import Commercialsell from "./Commercialsell";
import Commercialrent from "./Commercialrent";
import Commerciallease from "./commerciallease";
import Servicesell from "./Servicesell";
import Servicerent from "./Servicerent";
import Servicelease from "./Servicelease";
import Pgrent from "./Pgrent";
import FactorySell from "./FactorySell";
import FactoryRent from "./FactoryRent";
import FactoryLease from "./FactoryLease";
import Apartmentrent from "./Apartmentrent";
import Apartmentlease from "./Apartmentlease";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const Posting = () => {
  const navbarStyle = {
    backgroundColor: "#FFFFFF4D",

    width: "100%",
  };
  const navLinkStyle = {
    color: "#000000",
    fontSize: "20px",
  };

  const navLinkHoverStyle = {
    Color: "#D7242A",
    transition: "background-color 0.2s ease",
  };
  const handleMouseEnter = (e) => {
    e.target.style.Color = navLinkHoverStyle.Color;
    e.target.style.color = navLinkHoverStyle.Color;
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = "";
    e.target.style.color = navLinkStyle.color;
  };

  const formControlStyle = {
    borderColor: "#D7242A",
    width: "560px",
    height: "60px",
    borderRadius: "20px",
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [phone, setPhone] = useState("");

  // Function to handle phone number changes
  const handlePhoneChange = (e) => {
     setUser({...user,phone:e})
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    setSelectedImage(file);
  };

  const handleUpload = () => {
    // Implement your image upload logic here
    if (selectedImage) {
      console.log("Uploading image:", selectedImage);
    } else {
      console.log("No image selected");
    }
  };
  const [restbutton, setRestbutton] = useState("");
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("Sell");
  const [third, setThird] = useState("");
  const [four, setFour] = useState("");

  const [plot, setPlot] = useState(true);
  const [land, setLand] = useState(false);
  const [residential, setResidential] = useState(false);
  const [Commercial, setCommercial] = useState(false);
  const [activeLink, setActiveLink] = useState(1);
  const [formdata, setformdata] = useState({
    land_type: "",
    length: "",
    breadth: "",
    total_area: "",
    road_width: "",
    direction_facing: "",
    approval: "",
    created_at: "",
    sale_price: "",
    sale_price_per_sqft: "",
    title: "",
    name: "",
    phone: "+91",
    email: "",
    you_are_here_to: "",
    property_type: "",
    description: "",
    location: "",
    city: "",
    area_sqft: "",
    unit: "",
    is_published: "",
    sold_out: "",
    owner: "",
    agent: "",
    builder: "",
    dealer: "",
    plotdeveloper: "",
  });

  const [selectedPropType, setSelectedPropType] = useState("plot");

  const handleplotClick = (items) => {
    setActiveLink(items);
    setFirst("");
    setSecond("Sell");
    setThird("");
    setFour("");

    if (items === 1) {
      setPlot(true);
      setLand(false);
      setResidential(false);
      setCommercial(false);
      setSelectedPropType("plot");
    } else if (items === 2) {
      setLand(true);
      setPlot(false);
      setCommercial(false);
      setResidential(false);
      setSelectedPropType("land");
    } else if (items === 3) {
      setLand(false);
      setPlot(false);
      setCommercial(false);
      setResidential(true);
      setSelectedPropType("residential property");
    } else if (items === 4) {
      setLand(false);
      setPlot(false);
      setCommercial(true);
      setResidential(false);
      setSelectedPropType("commercial property");
    }
  };

  const handleButtonClicks = (plot) => {
    setFirst(plot);
  };
  console.log(first);
  const handlevalue = (view) => {
    setSecond(view);
  };
  const handlerest = (rest, name) => {
    console.log("Handlerest called with:", rest);
    setThird(rest);
    setRestbutton(name);
  };
  const handlecommercial = (values) => {
    setFour(values);
  };

  const [activeButton, setActiveButton] = useState("Owner");

  const handleClicks = (buttonType) => {
    setActiveButton(buttonType);
    setFirst("");
    setSecond("Sell");
    setThird("");
    setFour("");
  };
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Navbar />
      <div className="container" style={{ marginTop: "150px" }}>
        <div className="text-center">
          <h3 className="mt-5 pt-5 mx-1 text-lg-start bigvalue underline">
            Start posting your property
          </h3>
        </div>
        <div className="text-start mt-5 ms-4">You are</div>

        <div className="text-start mt-3">
          <button
            type="button"
            className={`btn btn-danger custom-bttn mx-3 ${
              activeButton === "Owner" ? "plott" : ""
            }`}
            onClick={() => handleClicks("Owner")}
          >
            Owner
          </button>

          <button
            type="button"
            className={`btn btn-danger custom-bttn mx-3 ${
              activeButton === "Agent" ? "plott" : ""
            }`}
            onClick={() => handleClicks("Agent")}
          >
            Agent
          </button>
          <button
            type="button"
            className={`btn btn-danger custom-bttn mx-3 ${
              activeButton === "Builder" ? "plott" : ""
            }`}
            onClick={() => handleClicks("Builder")}
          >
            Builder
          </button>
          <button
            type="button"
            className={`btn btn-danger custom-bttn mx-3 ${
              activeButton === "Dealer" ? "plott" : ""
            }`}
            onClick={() => handleClicks("Dealer")}
          >
            Dealer
          </button>
          <button
            type="button"
            className={`btn btn-danger custom-bttn mx-3 ${
              activeButton === "Plot Developer" ? "plott" : ""
            }`}
            onClick={() => handleClicks("Plot Developer")}
          >
            Plot Developer
          </button>
        </div>

        <div className="text-start mt-5 ms-4">
          <Form className="">
            <Row className="gx-3 mb-3">
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label
                    className="small-label"
                    style={{ color: " #2D2D2D" }}
                    htmlFor="inputFirstName"
                  >
                    First Name
                  </Form.Label>
                  <Form.Control
                    id="inputFirstName"
                    style={{ border: "1px solid #D7242A" }}
                    type="text"
                    placeholder="Enter your first name"
                    name="userName"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={4} className="ms-5">
                <Form.Group className="mb-3">
                  <Form.Label
                    className="small-label"
                    style={{ color: " #2D2D2D" }}
                    htmlFor="inputFirstName"
                  >
                    Last Name
                  </Form.Label>
                  <Form.Control
                    id="inputFirstName"
                    style={{ border: "1px solid #D7242A" }}
                    type="text"
                    placeholder="Enter your last name"
                    name="lastName"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Organization name and Location in a row */}
            <Row className="gx-3 mb-3">
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label
                    className="small-label w-100"
                    style={{ color: " #2D2D2D" }}
                    htmlFor="inputOrgName"
                  >
                    Phone Number
                  </Form.Label>

                  {/* <PhoneInput
                    className=" w-100"
                    value={`+91${phone}`}
                    onChange={handlePhoneChange}
                    defaultCountry="in"
                    inputStyle={{
                      borderColor: "#D7242A",
                      borderRadius: "4px",
                    }}
                  /> */}

                  <PhoneInput
                    className="w-100"
                    value={phone}
                    onChange={handlePhoneChange}
                    country={"in"}
                    inputStyle={{
                      borderColor: "#D7242A",
                      borderRadius: "4px",
                    }}
                  />


                </Form.Group>
              </Col>
              <Col md={4} className="ms-5">
                <Form.Group className="mb-3">
                  <Form.Label
                    className="small-label"
                    style={{ color: " #2D2D2D" }}
                    htmlFor="inputFirstName"
                  >
                    Email
                  </Form.Label>
                  <Form.Control
                    id="inputFirstName"
                    style={{ border: "1px solid #D7242A" }}
                    type="email"
                    placeholder="Enter your Email"
                    name="email"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </div>
        <div className="text-start mt-5 ms-4">You are here to</div>

        <div className="text-start mt-3">
          <button
            type="button"
            className={`btn btn-danger custom-bttn mx-3 ${
              second === "Sell" ? "active" : ""
            }`}
            onClick={() => handlevalue("Sell")}
          >
            Sell
          </button>
          <button
            type="button"
            className={`btn btn-danger custom-bttn mx-3 ${
              second === "Rent" ? "active" : ""
            }`}
            onClick={() => handlevalue("Rent")}
          >
            Rent
          </button>
          <button
            type="button"
            className={`btn btn-danger custom-bttn mx-3 ${
              second === "Lease" ? "active" : ""
            }`}
            onClick={() => handlevalue("Lease")}
          >
            Lease
          </button>
        </div>

        <div className="text-start mt-5 ms-4">Property Type</div>
        <Card
          className="my-4"
          style={{ width: "1170px", height: "270px", borderRadius: "30px" }}
        >
          <nav className="navbar navbar-expand-lg mx-lg-5">
            <div className="container" style={navbarStyle}>
              <ul className="navbar-nav mx-5 justify-content-between w-100">
                <li className="nav-item">
                  <a
                    className={`nav-link ${activeLink === 1 ? "design" : ""}`}
                    aria-current="page"
                    style={navLinkStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleplotClick(1)}
                  >
                    Plot
                  </a>
                </li>
                <hr className="dropdown-divider" />
                <li className="nav-item me-5">
                  <a
                    className={`nav-link  ${activeLink === 2 ? "design" : ""}`}
                    style={navLinkStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleplotClick(2)}
                  >
                    Land
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${activeLink === 3 ? "design" : ""}`}
                    style={navLinkStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleplotClick(3)}
                  >
                    Residential Property
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${activeLink === 4 ? "design" : ""}`}
                    style={navLinkStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleplotClick(4)}
                  >
                    Commercial Property
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <hr />
          <Dropdown>
            {plot && (
              <div className="d-flex gap-5 my-2 px-2 mx-5">
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    first === "residential_plot" ? "rest" : ""
                  }`}
                  onClick={() => handleButtonClicks("residential_plot")}
                >
                  Residential plot
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    first === "commercial_plot" ? "rest" : ""
                  }`}
                  onClick={() => handleButtonClicks("commercial_plot")}
                >
                  Commercial Plot
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    first === "industrial_plot" ? "rest" : ""
                  }`}
                  onClick={() => handleButtonClicks("industrial_plot")}
                >
                  Industrial Plot
                </Button>
              </div>
            )}

            {land && (
              <div className="d-flex my-2 px-2 mx-5">
                {/* Buttons */}
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    first === "residentialLand" ? "rest" : ""
                  }`}
                  onClick={() => handleButtonClicks("residentialLand")}
                >
                  Residential Land
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    first === "Industrial Land" ? "rest" : ""
                  }`}
                  onClick={() => handleButtonClicks("Industrial Land")}
                >
                  Industrial Land
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    first === "Agricultural  Land" ? "rest" : ""
                  }`}
                  onClick={() => handleButtonClicks("Agricultural  Land")}
                >
                  Agricultural Land
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    first === "Plantation" ? "rest" : ""
                  }`}
                  onClick={() => handleButtonClicks("Plantation")}
                >
                  Plantation
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    first === "Estate" ? "rest" : ""
                  }`}
                  onClick={() => handleButtonClicks("Estate")}
                >
                  Estate
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    first === "Farm  Land" ? "rest" : ""
                  }`}
                  onClick={() => handleButtonClicks("Farm  Land")}
                >
                  Farm Land
                </Button>
                <Button
                  type="button"
                  className={`btn btn-outline-light me-2 customplot rounded-pill ${
                    first === "Furnishing" ? "rest" : ""
                  }`}
                  onClick={() => handleButtonClicks("Furnishing")}
                >
                  Furnishing
                </Button>
              </div>
            )}
            {residential && (
              <div className="d-flex my-2 px-2 mx-5 justify-content-between">
                <div className="row">
                  <div className="col">
                    <Button
                      type="button"
                      className={`btn btn-outline-light me-2 customplot rounded-pill ${
                        restbutton === "House" ? "rest" : ""
                      }`}
                      onClick={() => handlerest("Top", "House")}
                    >
                      House
                    </Button>
                    <Button
                      type="button"
                      className={`btn btn-outline-light me-2 customplot rounded-pill ${
                        restbutton === "Villa" ? "rest" : ""
                      }`}
                      onClick={() => handlerest("Top", "Villa")}
                    >
                      Villa
                    </Button>
                    <Button
                      type="button"
                      className={`btn btn-outline-light me-2 customplot rounded-pill ${
                        restbutton === "Bungalow" ? "rest" : ""
                      }`}
                      onClick={() => handlerest("Top", "Bungalow")}
                    >
                      Bungalow
                    </Button>
                    <Button
                      type="button"
                      className={`btn btn-outline-light me-2 customplot rounded-pill ${
                        restbutton === "Duplex House" ? "rest" : ""
                      }`}
                      onClick={() => handlerest("Top", "Duplex House")}
                    >
                      Duplex House
                    </Button>
                    <Button
                      type="button"
                      className={`btn btn-outline-light me-2 customplot rounded-pill ${
                        restbutton === "Row House" ? "rest" : ""
                      }`}
                      onClick={() => handlerest("Top", "Row House")}
                    >
                      Row House
                    </Button>
                    <Button
                      type="button"
                      className={`btn btn-outline-light me-2 customplot rounded-pill ${
                        restbutton === "Pant House" ? "rest" : ""
                      }`}
                      onClick={() => handlerest("Top", "Pant House")}
                    >
                      Pant House
                    </Button>
                    <Button
                      type="button"
                      className={`btn btn-outline-light me-2 customplot rounded-pill ${
                        restbutton === "Farm house" ? "rest" : ""
                      }`}
                      onClick={() => handlerest("Top", "Farm house")}
                    >
                      Farm house
                    </Button>
                  </div>
                  <hr className="my-3" />
                  <div className="col">
                    <Button
                      type="button"
                      className={`btn btn-outline-light me-2 customplot rounded-pill ${
                        restbutton === "Flat" ? "rest" : ""
                      }`}
                      onClick={() => handlerest("bottom", "Flat")}
                    >
                      Flat
                    </Button>
                    <Button
                      type="button"
                      className={`btn btn-outline-light me-2 customplot rounded-pill ${
                        restbutton === "Apartment" ? "rest" : ""
                      }`}
                      onClick={() => handlerest("bottom", "Apartment")}
                    >
                      Apartment
                    </Button>
                    <Button
                      type="button"
                      className={`btn btn-outline-light me-2 customplot rounded-pill ${
                        restbutton === "BuilderFloor Apartment" ? "rest" : ""
                      }`}
                      onClick={() =>
                        handlerest("bottom", "BuilderFloor Apartment")
                      }
                    >
                      BuilderFloor Apartment
                    </Button>
                    <Button
                      type="button"
                      className={`btn btn-outline-light me-2 customplot rounded-pill ${
                        restbutton === "Multi storey Apartment" ? "rest" : ""
                      }`}
                      onClick={() =>
                        handlerest("bottom", "Multi storey Apartment")
                      }
                    >
                      Multi storey Apartment
                    </Button>
                    <Button
                      type="button"
                      className={`btn btn-outline-light me-2 customplot rounded-pill ${
                        restbutton === "Luxury Apartment" ? "rest" : ""
                      }`}
                      onClick={() => handlerest("bottom", "Luxury Apartment")}
                    >
                      Luxury Apartment
                    </Button>
                    <Button
                      type="button"
                      className={`btn btn-outline-light me-2 customplot rounded-pill ${
                        restbutton === "Studio Apartment" ? "rest" : ""
                      }`}
                      onClick={() => handlerest("bottom", "Studio Apartment")}
                    >
                      Studio Apartment
                    </Button>
                  </div>
                </div>
              </div>
            )}
            {Commercial && (
              <div className="d-flex my-2 px-2 mx-5 justify-content-between mb-3">
                <div className="row row-cols-auto gap-3">
                  {/* {able && second === 'Rent' && (
        <div>
          {four === 'PG Home' && <Pgrent/>}
          {four === 'PG Hostel' && <Pgrent/>}
        </div>
      )}
      {(second === 'Sell' || second === 'Lease') && (
        <div className="buttons-disabled">
          <button
            type="button"
            className="button-disabled"
            disabled
          >
            PG Home
          </button>
          <button
            type="button"
            className="button-disabled"
            disabled
          >
            PG Hostel
          </button>
        </div>
      )}
      {!able && (second !== 'Sell' && second !== 'Lease') && (
        <div>
          <button
            type="button"
            className={`button-normal ${four === 'PG Home' ? 'active' : ''}`}
            onClick={() => handlecommercial('PG Home')}
          >
            PG Home
          </button>
          <button
            type="button"
            className={`button-normal ${four === 'PG Hostel' ? 'active' : ''}`}
            onClick={() => handlecommercial('PG Hostel')}
          >
            PG Hostel
          </button>
        </div>
      )} */}

                  <Button
                    type="button"
                    className={`btn btn-outline-light customplot rounded-pill ${
                      four === "Office" ? "rest" : ""
                    }`}
                    onClick={() => handlecommercial("Office")}
                  >
                    Office
                  </Button>
                  <Button
                    type="button"
                    className={`btn btn-outline-light  customplot rounded-pill ${
                      four === "Shop" ? "rest" : ""
                    }`}
                    onClick={() => handlecommercial("Shop")}
                  >
                    Shop
                  </Button>
                  <Button
                    type="button"
                    className={`btn btn-outline-light customplot rounded-pill ${
                      four === "Showroom" ? "rest" : ""
                    }`}
                    onClick={() => handlecommercial("Showroom")}
                  >
                    Showroom
                  </Button>

                  <Button
                    type="button"
                    className={`btn btn-outline-light customplot rounded-pill ${
                      four === "Godown" ? "rest" : ""
                    }`}
                    onClick={() => handlecommercial("Godown")}
                  >
                    Godown
                  </Button>
                  <Button
                    type="button"
                    className={`btn btn-outline-light customplot rounded-pill ${
                      four === "Shed" ? "rest" : ""
                    }`}
                    onClick={() => handlecommercial("Shed")}
                  >
                    Shed
                  </Button>

                  <Button
                    type="button"
                    className={`btn btn-outline-light customplot rounded-pill ${
                      four === "Co-working Space" ? "rest" : ""
                    }`}
                    onClick={() => handlecommercial("Co-working Space")}
                  >
                    Co-working Space
                  </Button>
                  <Button
                    type="button"
                    className={`btn btn-outline-light customplot rounded-pill ${
                      four === "Commercial complex" ? "rest" : ""
                    }`}
                    onClick={() => handlecommercial("Commercial complex")}
                  >
                    Commercial complex
                  </Button>
                  <Button
                    type="button"
                    className={`btn btn-outline-light customplot rounded-pill ${
                      four === "Industrial Building" ? "rest" : ""
                    }`}
                    onClick={() => handlecommercial("Industrial Building")}
                  >
                    Industrial Building
                  </Button>
                  <Button
                    type="button"
                    className={`btn btn-outline-light customplot rounded-pill ${
                      four === "Industrial shed" ? "rest" : ""
                    }`}
                    onClick={() => handlecommercial("Industrial shed")}
                  >
                    Industrial shed
                  </Button>
                  <Button
                    type="button"
                    className={`btn btn-outline-light me-2 customplot rounded-pill ${
                      four === "Factory" ? "rest" : ""
                    }`}
                    onClick={() => handlecommercial("Factory")}
                  >
                    Factory
                  </Button>
                  <Button
                    type="button"
                    className={`btn btn-outline-light customplot rounded-pill ${
                      four === "ServiceApartment" ? "rest" : ""
                    }`}
                    onClick={() => handlecommercial("ServiceApartment")}
                    disabled={second === "Sell"}
                  >
                    Service Apartment
                  </Button>
                  <Button
                    type="button"
                    className={`btn btn-outline-light customplot rounded-pill ${
                      four === "PG Home" ? "rest" : ""
                    }`}
                    onClick={() => handlecommercial("PG Home")}
                    disabled={second === "Sell" || second === "Lease"}
                  >
                    PG Home
                  </Button>

                  <Button
                    type="button"
                    className={`btn btn-outline-light customplot rounded-pill ${
                      four === "PG Hostel" ? "rest" : ""
                    }`}
                    onClick={() => handlecommercial("PG Hostel")}
                    disabled={second === "Sell" || second === "Lease"}
                  >
                    PG Hostel
                  </Button>
                </div>
              </div>
            )}
          </Dropdown>
        </Card>

        {activeButton === "Owner" && first && second === "Sell" && (
          <Sellform
            activeButton={activeButton}
            user={user}
            first={first}
            second={second}
            selectedPropType={selectedPropType}
          />
        )}

        {activeButton === "Owner" && first && second === "Rent" &&
         <Rentform
         activeButton={activeButton}
         user={user}
         first={first}
         second={second}
         selectedPropType={selectedPropType}
         />}
        {activeButton === "Owner" && first && second === "Lease" && (
          <Leaseform />
        )}

        {four === "Industrial Building" && second === "Sell" && (
          <Servicesell activeButton={activeButton} />
        )}
        {four === "Industrial Building" && second === "Rent" && (
          <Servicerent activeButton={activeButton} />
        )}
        {four === "Industrial Building" && second === "Lease" && (
          <Servicelease activeButton={activeButton} />
        )}
        {four === "Industrial shed" && second === "Sell" && (
          <Servicesell activeButton={activeButton} />
        )}
        {four === "Industrial shed" && second === "Rent" && (
          <Servicerent activeButton={activeButton} />
        )}
        {four === "Industrial shed" && second === "Lease" && (
          <Servicelease activeButton={activeButton} />
        )}

        {four === "Factory" && second === "Sell" && (
          <FactorySell activeButton={activeButton} />
        )}
        {four === "Factory" && second === "Rent" && (
          <FactoryRent activeButton={activeButton} />
        )}

        {four === "Factory" && second === "Lease" && (
          <FactoryLease activeButton={activeButton} />
        )}
        {four === "ServiceApartment" && second === "Rent" && (
          <Apartmentrent activeButton={activeButton} />
        )}

        {four === "ServiceApartment" && second === "Lease" && (
          <Apartmentlease activeButton={activeButton} />
        )}
        {four === "PG Home" && second === "Rent" && (
          <Pgrent activeButton={activeButton} />
        )}
        {four === "PG Hostel" && second === "Rent" && (
          <Pgrent activeButton={activeButton} />
        )}
        {activeButton === "Owner" &&
          four &&
          second === "Sell" &&
          four !== "ServiceApartment" &&
          four !== "Industrial Building" &&
          four !== "Industrial shed" &&
          four !== "Factory" &&
          four !== "PG Home" &&
          four !== "PG Hostel" && <Commercialsell />}
        {activeButton === "Owner" &&
          four &&
          second === "Rent" &&
          four !== "ServiceApartment" &&
          four !== "Industrial Building" &&
          four !== "Industrial shed" &&
          four !== "Factory" &&
          four !== "PG Home" &&
          four !== "PG Hostel" && <Commercialrent />}
        {activeButton === "Owner" &&
          four &&
          second === "Lease" &&
          four !== "ServiceApartment" &&
          four !== "Industrial Building" &&
          four !== "Industrial shed" &&
          four !== "Industrial shed" &&
          four !== "Factory" &&
          four !== "PG Home" &&
          four !== "PG Hostel" && <Commerciallease />}

        {activeButton === "Owner" && third === "Top" && second === "Sell" && (
          <Restform />
        )}
        {activeButton === "Owner" &&
          third === "bottom" &&
          second === "Sell" && <Flatapartsell />}
        {activeButton === "Owner" && third === "Top" && second === "Rent" && (
          <Restland />
        )}
        {activeButton === "Owner" &&
          third === "bottom" &&
          second === "Rent" && <Flatapartrent />}
        {activeButton === "Owner" && third === "Top" && second === "Lease" && (
          <Restlease />
        )}

        {activeButton === "Owner" &&
          third === "bottom" &&
          second === "Lease" && <Flatapartlease />}

        {activeButton === "Agent" && first && second === "Sell" && (
          <Sellform
            activeButton={activeButton}
            user={user}
            first={first}
            second={second}
          />
        )}

        {activeButton === "Agent" && first && second === "Rent" && (
          <Rentform activeButton={activeButton} />
        )}

        {activeButton === "Agent" && first && second === "Lease" && (
          <Leaseform activeButton={activeButton} />
        )}
        {activeButton === "Agent" && third === "Top" && second === "Sell" && (
          <Restform activeButton={activeButton} />
        )}
        {activeButton === "Agent" && third === "Top" && second === "Rent" && (
          <Restland activeButton={activeButton} />
        )}
        {activeButton === "Agent" && third === "Top" && second === "Lease" && (
          <Restlease activeButton={activeButton} />
        )}
        {activeButton === "Agent" &&
          third === "bottom" &&
          second === "Sell" && <Flatapartsell activeButton={activeButton} />}
        {activeButton === "Agent" &&
          third === "bottom" &&
          second === "Rent" && <Flatapartrent activeButton={activeButton} />}

        {activeButton === "Agent" &&
          third === "bottom" &&
          second === "Lease" && <Flatapartlease activeButton={activeButton} />}

        {activeButton === "Agent" &&
          four &&
          second === "Sell" &&
          four !== "ServiceApartment" &&
          four !== "Industrial Building " &&
          four !== "Industrialshed" &&
          four !== "Factory" &&
          four !== "PG Home" &&
          four !== "PG Hostel" && (
            <Commercialsell activeButton={activeButton} />
          )}

        {activeButton === "Agent" &&
          four &&
          second === "Rent" &&
          four !== "ServiceApartment" &&
          four !== "Industrial Building " &&
          four !== "Industrialshed" &&
          four !== "Factory" &&
          four !== "PG Home" &&
          four !== "PG Hostel" && (
            <Commercialrent activeButton={activeButton} />
          )}

        {activeButton === "Agent" &&
          four &&
          second === "Lease" &&
          four !== "ServiceApartment" &&
          four !== "Industrial Building " &&
          four !== "Industrialshed" &&
          four !== "Factory" &&
          four !== "PG Home" &&
          four !== "PG Hostel" && (
            <Commerciallease activeButton={activeButton} />
          )}

        {activeButton === "Builder" && first && second === "Sell" && (
          <Sellform
            activeButton={activeButton}
            user={user}
            first={first}
            second={second}
          />
        )}
        {activeButton === "Builder" && first && second === "Rent" && (
          <Rentform activeButton={activeButton} />
        )}
        {activeButton === "Builder" && first && second === "Lease" && (
          <Leaseform activeButton={activeButton} />
        )}
        {activeButton === "Builder" && third === "Top" && second === "Sell" && (
          <Restform activeButton={activeButton} />
        )}
        {activeButton === "Builder" && third === "Top" && second === "Rent" && (
          <Restland activeButton={activeButton} />
        )}
        {activeButton === "Builder" &&
          third === "Top" &&
          second === "Lease" && <Restlease activeButton={activeButton} />}

        {activeButton === "Builder" &&
          third === "bottom" &&
          second === "Sell" && <Flatapartsell activeButton={activeButton} />}
        {activeButton === "Builder" &&
          third === "bottom" &&
          second === "Rent" && <Flatapartrent activeButton={activeButton} />}

        {activeButton === "Builder" &&
          third === "bottom" &&
          second === "Lease" && <Flatapartlease activeButton={activeButton} />}

        {activeButton === "Builder" &&
          four &&
          second === "Sell" &&
          four !== "ServiceApartment" &&
          four !== "Industrial Building/shed" &&
          four !== "Factory" &&
          four !== "PG Home" &&
          four !== "PG Hostel" && (
            <Commercialsell activeButton={activeButton} />
          )}

        {activeButton === "Builder" &&
          four &&
          second === "Rent" &&
          four !== "ServiceApartment" &&
          four !== "Industrial Building/shed" &&
          four !== "Factory" &&
          four !== "PG Home" &&
          four !== "PG Hostel" && (
            <Commercialrent activeButton={activeButton} />
          )}

        {activeButton === "Builder" &&
          four &&
          second === "Lease" &&
          four !== "ServiceApartment" &&
          four !== "Industrial Building/shed" &&
          four !== "Factory" &&
          four !== "PG Home" &&
          four !== "PG Hostel" && (
            <Commerciallease activeButton={activeButton} />
          )}
      </div>

      <Footer />
    </div>
  );
};

export default Posting;
