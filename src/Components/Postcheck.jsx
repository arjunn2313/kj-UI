import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { FaRegHeart } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import { FiArrowLeft } from "react-icons/fi";
import l1 from "../Images/l1.png";
import l2 from "../Images/l2.png";
import l3 from "../Images/l3.png";
import B1 from "../Images/B1.png";
import B2 from "../Images/B2.png";
import b3 from "../Images/b3.png";
import b4 from "../Images/b4.png";
import b5 from "../Images/b5.png";
import b6 from "../Images/b6.png";
import { useNavigate, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { log } from "util";

const Postcheck = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [details, setDetails] = useState(location.state);
  const handleContact = () => {
    navigate("/mobile");
  };
  const handleClick = () => {
    // Navigate to a different page
    navigate("/");
  };

  const commercialTable = ["Price", "price per sqft", "sd"];
  const data = [
    ["Super Built-Up Area", "Developer", "Project", "Transaction Type"],
    ["1662 sqft", "Risland India", "VGN Fairmont", "New Property"],
    ["₹ 9,868/sqft", "", "", ""],
    ["Status", "Lifts", "Furnished Status", "Bedroom"],
    ["Ready to Move", "3", "Unfurnished", "3"],
  ];

  const value = [
    ["Price Breakup"],
    ["Booking Amount", "₹ 1,00,000"],
    ["RERA ID", "TN/01/Building/0111/2019"],
    ["Address", "Perungudi, Chennai - South, Tamil Nadu"],
    ["Furnishing", "Unfurnished"],
    ["Flooring", "Verified"],
    ["Water Availability", "24 Hours Available"],
    ["Status of Electricity", "No/Rare Powercut"],
    ["Floors allowed for construction", "10"],
    ["No. of lift", "3"],
  ];
  const tableCellStyle = {
    border: "none",
    padding: "8px",

    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: "400",

    color: "#717171",
  };

  const headerCellStyle = {
    ...tableCellStyle,

    fontSize: "18px",

    color: "#2D2D2D", // Text color for the 2nd row
  };
  console.log(details);
  return (
    <div>
      <Navbar />

      <div className="container pt-5">
        <FiArrowLeft
          className="mt-5"
          style={{
            width: "40px",
            height: "31px",
            color: "#D7242A",
            cursor: "pointer",
          }}
          onClick={handleClick}
        />

        <Card
          className="mt-5"
          style={{ width: "1170px", border: " 1px solid #D7242A" }}
        >
          <Row className="mx-3" style={{ color: "#D7242A" }}>
            <Col xs={6}>
              <p
                className=" my-4 d-flex"
                style={{
                  color: "#D7242A",
                  fontSize: "40px",
                  fontWeight: "800px",
                }}
              >
                {/*  2.64 Cr */} {details?.sale_price} RS
              </p>
            </Col>
          </Row>
          <div className="d-flex justify-content-between mx-4 px-2">
            <div className="">
              <p
                className=""
                style={{ color: "#2D2D2D", weight: "500", fontSize: "18px" }}
              >
                3 BHK Flat for Sale in Perungudi, Chennai
              </p>
            </div>
            <div className="text-end">
              <p className="" style={{ fontSize: "13px", color: "#717171" }}>
                Posted 5 days ago
              </p>
            </div>
          </div>

          {details?.property_type === "commercial" && (
            <div className="d-flex flex-wrap gap-3 mx-4">
              {details?.commercial_properties?.industrialbuilding?.industrialbuilding_images?.map(
                (img, index) => (
                  <img
                    src={img.image}
                    alt={`Image ${index + 1}`}
                    style={
                      index === 0
                        ? { width: "440px", height: "260px" }
                        : index === 1
                        ? { width: "270px", height: "260px" }
                        : index === 2
                        ? { width: "330px", height: "260px" }
                        : index === 3
                        ? { width: "330px", height: "260px" }
                        : index === 4 
                        ? {width: "330px", height: "260px"}
                        : index === 5 
                        ? {width: "270px", height: "260px"}
                        : index === 6
                        ? {width: "270px", height: "260px"}
                        : {}
                    }
                    className="mx-2 img-fluid rounded-3"
                    key={index}
                  />
                )
              )}
            </div>
          )}

          <Card.Body>
            <table style={{ borderCollapse: "collapse", width: "100%" }}>
              <tbody>
                {data.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    style={rowIndex === 0 ? tableCellStyle : headerCellStyle}
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        style={
                          rowIndex === 0 ? headerCellStyle : tableCellStyle
                        }
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <hr />
          </Card.Body>
        </Card>

        <Card
          className="mt-5"
          style={{ width: "1170px", border: " 1px solid #D7242A" }}
        >
          <Card.Body>
            <p
              className="ms-3 mt-2"
              style={{
                color: "#2D2D2D",
                fontSize: "20px",
                fontWeight: "600",
                fontFamily: "Poppins",
              }}
            >
              More Details
            </p>

            {/* commercial forms */}
            <table className="table">
              <thead>
                <tr>
                  <td>Sale Price</td>
                  <td>{details?.sale_price}</td>
                </tr>

                <tr>
                  <td>Price per sqft</td>
                  <td>{details?.sale_price_per_sqft}</td>
                </tr>

                <tr>
                  <td>Address</td>
                  <td>
                    {
                      details?.commercial_properties?.industrialbuilding
                        ?.address
                    }
                  </td>
                </tr>

                <tr>
                  <td>Furnishing</td>
                  <td>
                    {details?.commercial_properties?.industrialbuilding?.status}
                  </td>
                </tr>

                <tr>
                  <td>Condition</td>
                  <td>
                    {
                      details?.commercial_properties?.industrialbuilding
                        ?.condition
                    }
                  </td>
                </tr>

                <tr>
                  <td>Type</td>
                  <td>
                    {
                      details?.commercial_properties?.industrialbuilding
                        ?.category_of_project
                    }
                  </td>
                </tr>

                <tr>
                  <td>Built Area</td>
                  <td>
                    {
                      details?.commercial_properties?.industrialbuilding
                        ?.built_up_area
                    }{" "}
                    {
                      details?.commercial_properties?.industrialbuilding
                        ?.built_up_area_unit
                    }
                  </td>
                </tr>

                <tr>
                  <td>Plot Area</td>
                  <td>
                    {
                      details?.commercial_properties?.industrialbuilding
                        ?.plot_area
                    }{" "}
                    {
                      details?.commercial_properties?.industrialbuilding
                        ?.plot_area_unit
                    }
                  </td>
                </tr>

                <tr>
                  <td>Road Width</td>
                  <td>
                    {
                      details?.commercial_properties?.industrialbuilding
                        ?.road_width
                    }{" "}
                    {
                      details?.commercial_properties?.industrialbuilding
                        ?.road_width_unit
                    }
                  </td>
                </tr>

                <tr>
                  <td>Indoor Facilities</td>
                  <td>
                    {details?.commercial_properties?.industrialbuilding?.indoor_facilities.map(
                      (indoor, ind) => (
                        <span key={ind}>{indoor.facility.name}</span>
                      )
                    )}
                  </td>
                </tr>
              </thead>
            </table>

            <div className="">
              <span className="mx-3" style={{ fontWeight: "bold" }}>
                Description:
              </span>
              <span>
                {details.description}
                {/* {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. Lorem
                Ipsum is simply dummy text of the printing......{" "} */}
              </span>
            </div>
          </Card.Body>
        </Card>

        <Card className="container" style={{ width: "1170px", border: "none" }}>
          <Card.Body>
            <button
              type="button"
              style={{
                color: "#FFFFFF",
                backgroundColor: "#D7242A",
                border: "none",
                borderRadius: "30px",
                width: "270px",
                height: "60px",
              }}
              className="btn float-end me-4"
              disabled={false}
              onClick={handleContact}
            >
              Delete
            </button>
          </Card.Body>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Postcheck;
