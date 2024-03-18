import React from 'react';
import { ImFacebook2 } from 'react-icons/im';
import { PiInstagramLogoFill } from 'react-icons/pi';
import { FaTwitterSquare } from 'react-icons/fa';
import { RxLinkedinLogo } from 'react-icons/rx';
import group from '../Images/Group.png';


const Footer = () => {
  return (

    <div className="container mt-5" style={{ width: '100%' }}>
      <div className="row mx-3 d-flex justify-content-between">
        <div className="col-md-4 mt-5">
          <img
            src={group}
            alt="Group Image"
            style={{ width: '110px', height: '60px' }}
          />
          <div className="mt-5" style={{ color: '#2C2C2C', fontSize: 20, fontFamily: 'Hind', fontWeight: '400', wordWrap: 'break-word' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vivamus porttitor ac massa in consectetur. Duis vel quam a erat tincidunt posuere. Mauris iaculis eget mauris
            non dapibus.
            Suspendisse convallis vitae ipsum at ornare. Mauris leo felis.
          </div>
          <div className="footer-icons d-flex gap-3">
            <a href="https://www.facebook.com">
              <ImFacebook2 style={{ width: '24px', height: '24px', color: 'black' }} />
            </a>
            <a href="https://www.instagram.com">
              <PiInstagramLogoFill style={{ width: '24px', height: '24px', color: 'black' }} />
            </a>
            <a href="https://www.twitter.com">
              <FaTwitterSquare style={{ width: '24px', height: '24px', color: 'black' }} />
            </a>
            <a href="https://www.linkedin.com">
              <RxLinkedinLogo style={{ width: '24px', height: '24px', color: 'black' }} />
            </a>
          </div>

        </div>
        <div className="col-md-4 mt-5  text-center fs-5">
          <h5 className='mb-5'>Explore</h5>
          <div style={{ color: '#2C2C2C', fontSize: 14, fontFamily: 'Hind', fontWeight: '400' }}>
            <ul className="list-unstyled last text-black">
              <li className="nav-item mb-3">
                <a className="text-decoration-none text-black" href="/">Buy</a>
              </li>
              <li className="nav-item mb-3">
                <a className="text-decoration-none text-black" href="/">Rent</a>
              </li>
              <li className="nav-item mb-3">
                <a className="text-decoration-none text-black" href="/">Lease</a>
              </li>
              <li className="nav-item mb-3">
                <a className="text-decoration-none text-black" href="/post">Sell</a>
              </li>
              <li className="nav-item mb-3">
                <a className="text-decoration-none text-black" href="/">Prime</a>
              </li>
              <li className="nav-item mb-3">
                <a className="text-decoration-none text-black" href="/">Help</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-4 mt-5 text-center pe-4">
          <h5 className='mb-5'>Quick Links</h5>
          <div style={{ color: '#2C2C2C', fontSize: 14, fontFamily: 'Hind', fontWeight: '400' }}>
            <ul className="list-unstyled last text-black">
              <li className="nav-item mb-3">
                <a className="text-decoration-none text-black" href="/">Home</a>
              </li>
              <li className="nav-item mb-3">
                <a className="text-decoration-none text-black" href="/">About Us</a>
              </li>
              <li className="nav-item mb-3">
                <a className="text-decoration-none text-black" href="/">Gallery</a>
              </li>
              <li className="nav-item mb-3">
                <a className="text-decoration-none text-black" href="/">Careers</a>
              </li>
              <li className="nav-item mb-3">
                <a className="text-decoration-none text-black" href="/">Blogs</a>
              </li>
              <li className="nav-item mb-3">
                <a className="text-decoration-none text-black" href="/">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 mt-5">
          <hr />
          <div className="d-flex align-items-center justify-content-center mt-3">
            <div className="text-center">
              2021 © hcghchgcfdsf.com. All rights reserved.
            </div>
            <div className="mx-3" style={{ borderLeft: '1px solid black', height: '20px' }}></div>
            <div className="ms-3 text-center">
              Designed by Spangles
            </div>
          </div>
        </div>
      </div>
    </div>








  );
};

export default Footer;