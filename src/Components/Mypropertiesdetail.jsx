import React from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { FaRegHeart } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import l1 from '../Images/l1.png';
import l2 from '../Images/l2.png';
import l3 from '../Images/l3.png';
import B1 from '../Images/B1.png';
import B2 from '../Images/B2.png';
import b3 from "../Images/b3.png";
import b4 from "../Images/b4.png";
import b5 from "../Images/b5.png";
import b6 from "../Images/b6.png";
import Navbar from "../Components/Navbar"
import Footer from './Footer';
export const Mypropertiesdetail = () => {
    const data = [
      ['Super Built-Up Area', 'Developer', 'Project', 'Transaction Type'],
      ['1662 sqft', 'Risland India', 'VGN Fairmont', 'New Property'],
      ['₹ 9,868/sqft', '', '', ''],
      ['Status', 'Lifts', 'Furnished Status', 'Bedroom'],
      ['Ready to Move', '3', 'Unfurnished', '3'],
    ];
    const value = [
      ['Price Breakup', '₹ 2.64 Cr'],
      ['Booking Amount', '₹ 1,00,000'],
      ['RERA ID', 'TN/01/Building/0111/2019'],
      ['Address', 'Perungudi, Chennai - South, Tamil Nadu'],
      ['Furnishing', 'Unfurnished'],
      ['Flooring', 'Verified'],
      ['Water Availability', '24 Hours Available'],
      ['Status of Electricity', 'No/Rare Powercut'],
      ['Floors allowed for construction', '10'],
      ['No. of lift', '3'],
  
    ];
    const tableCellStyle = {
      border: 'none',
      padding: '8px',
  
      fontFamily: 'Poppins',
      fontSize: '16px',
      fontWeight: '400',
  
      color: '#717171', 
   
    };
  
    const headerCellStyle = {
      ...tableCellStyle,
  
      fontSize: '18px',
  
    
      color: '#2D2D2D', 
    };


return (
 
    <div>
<Navbar/>
   

      <div className="container detail mt-5">
     
        <Card  className="mt-5" style={{ width: '1170px', border: '1px solid #D7242A'}}>
          <Row className="mx-4" style={{ color: "#D7242A" }}>
            <Col xs={6}>
              <p className="mx-4 my-4 d-flex" style={{ color: "#D7242A", fontSize: '40px', fontWeight: '800' }}>
                ₹ 1.24 Cr
                <span>
                  <button
                    type="button"
                    style={{ color: "white", width: '100px', height: "30px", fontSize: "12px",backgroundColor:"#D76724",border:'none' }}
                    className="btn btn-success  ms-3 mb-2"
                  >
                    onprogress
                  </button>
                </span>
              </p>
              <div className="d-flex gap-3">
  <Col className='' style={{ color: "#2D2D2D", fontWeight: '500', fontSize: '15px' }}>
    3 BHK Flat for Sale in Perungudi, Chennai
  </Col>
  <Col style={{ color: "#2D2D2D", fontWeight: '500', fontSize: '15px' }}>
    Posted 5 days ago
  </Col>
</div>


            </Col>
            
          </Row>
          <div className='d-flex gap-3 mx-4'>

            <img src={B1} alt="Image 1" style={{ width: '440px', height: "260px" }} className="mx-2 img-fluid" />

            <img src={B2} alt="Image 2" style={{ width: '270px', height: "260px" }} className="img-fluid" />

            <img src={b3} alt="Image 3" style={{ width: '440px', height: "260px", borderRadius: "10px" }} className="me-5img-fluid" />

          </div>
          <div className='d-flex gap-3 my-4 mx-4'>

            <img src={b4} alt="Image 4" style={{ width: '440px', height: "260px", borderRadius: "10px" }} className="ms-2 img-fluid" />


            <img src={b5} alt="Image 5" style={{ width: '270px', height: "260px", borderRadius: "10px" }} className="img-fluid" />


            <img src={b6} alt="Image 5" style={{ width: '440px', height: "260px" }} className="img-fluid" />

          </div>
          <Card.Body>

            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
              <tbody>
                {data.map((row, rowIndex) => (
                  <tr key={rowIndex} style={rowIndex === 0 ? tableCellStyle : headerCellStyle}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} style={rowIndex === 0 ? headerCellStyle : tableCellStyle}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
 
          
           
          </Card.Body>
        </Card>
        <Card className="mt-5"style={{ width: '1170px', border: ' 1px solid #D7242A' }}>
          <Card.Body>
<p className='ms-3 mt-2'style={{color:"#2D2D2D",fontSize:"24px",fontWeight:"700"}}>Why buy in this project?</p>
          <ul className="ms-3">
            <li>Chennai marks the debut of SSGF technology</li>
<li>Close to the CBD</li>
<li>With IT companies all around</li>
          </ul>
           
          </Card.Body>
        </Card>
        <Card className="mt-5"style={{ width: '1170px', border: ' 1px solid #D7242A' }}>
          <Card.Body>
<p className='ms-3 mt-2'style={{color:"#2D2D2D",fontSize:"20px",fontWeight:"600",fontFamily:'Poppins'}}>More Details</p>
<table className="table">
  
      <tbody>
        {value.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    <div className=''><span className="mx-3"  style={{fontWeight:'bold'

}}>Description:</span><span > Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
 </span></div>
          </Card.Body>
        </Card>
        <div className='d-flex justify-content-end'>
  <div className='row mt-5 mx-5 px-5'>
    <div className='col-md-6'>
      <button type="button" className="btn btn-danger custom-btn">Delete</button>
    </div>
    <div className='col-md-6'>
      <button type="button" className="btn btn-danger custom-btn1">Sold Out</button>
    </div>
    
  </div>
</div>


      </div>
      <Footer/>
    </div>
  )
}