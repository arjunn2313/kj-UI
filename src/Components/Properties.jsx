import React from 'react';
import { Data } from './Data';
import p1 from '../Images/p1.png';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Properties = () => {
  const navigate = useNavigate(); 

  const handleViewDetails = () => {   
    navigate('/builder'); 
  };

  const handleViewDetailss = () => {    
    navigate('/result'); 
  };

  return (
    <div className='container py-5'>
      <div className='mt-5 pt-5 mx-5 d-flex justify-content-between flex-column flex-md-row'>
        <div>
          <h3 className='mt-5 pt-5 mx-1 text-lg-start bigvalue underline'>
            Recommended Properties
          </h3>
        </div>
        <div>
          <p className='mt-3 pt-3' style={{ color: '#D7242A', cursor: 'pointer' }} onClick={handleViewDetailss}>
            See all Projects <FaArrowRight />
          </p>
        </div>
      </div>
      <div className="carousel-container">
      <div className="carousel slide" id="carouselExampleDark" data-bs-ride="carousel">
        <div className="carousel-inner">
          {Data.reduce((chunks, item, index) => {
            const chunkIndex = Math.floor(index / 3);
            if (!chunks[chunkIndex]) chunks[chunkIndex] = [];
            chunks[chunkIndex].push(item);
            return chunks;
          }, []).map((chunk, chunkIndex) => (
            <div key={chunkIndex} className={`carousel-item ${chunkIndex === 0 ? 'active' : ''}`}>
              <div className="row row-cols-1 row-cols-md-3 g-4 g-md-3">
                {chunk.map((item) => (
                  <div key={item.id} className="col">
                    <div className="card properties">
                      <img
                        src={item.thumbnail}
                        style={{ width: "100%", height: "200px", objectFit: 'cover' }}
                        className="card-img-top"
                        alt="Property"
                      />
                      <div className="card-body">
                        <p className="card-text">{item.villa}</p>
                        <div className='d-flex'>
                          <p className="card-title">{item.value}</p><span className="vr mx-3"></span>
                          <p className="card-text">{item.feet}</p>
                        </div>
                        <p className="card-text">{item.title}</p>
                        <div className='d-flex'>
                          <p className="card-text">{item.own}</p>
                          <p className="card-text mx-3" style={{ color: "#1D8F00" }}>{item.hrs}</p>
                        </div>
                        <button type="button" className="btn btn-danger w-100" onClick={handleViewDetails}>View Details</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <a className="carousel-control-prev" href="#carouselExampleDark" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next prop" href="#carouselExampleDark" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    </div>
    </div>
  );
};

export default Properties;
