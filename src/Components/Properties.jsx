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
    <div className='container'>
      <div className='mt-5 pt-5 ms-2 d-flex row'>
        <div className='col'>
          <h3 className='mt-5 pt-5 mx-1 text-lg-start bigvalue underline'>
            Recommended Properties
          </h3>
        </div>
        <div className='col text-lg-end'>
          <p className='mt-3 pt-3' style={{ color: '#D7242A',cursor: 'pointer' }} onClick={()=>{handleViewDetailss()}}>
            See all Projects <FaArrowRight />
          </p>
        </div>
      </div>

      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {Data.reduce((chunks, item, index) => {
            const chunkIndex = Math.floor(index / 3);
            if (!chunks[chunkIndex]) chunks[chunkIndex] = [];
            chunks[chunkIndex].push(item);
            return chunks;
          }, []).map((chunk, chunkIndex) => (
            <div
              key={chunkIndex}
              className={`carousel-item ${chunkIndex === 0 ? 'active' : ''}`}
            >
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {chunk.map((item) => (
                  <div key={item.id} className="col">
                    <div className="card properties">
                      <img
                        src={item.thumbnail}
                        style={{ width: "350px", height: "200px" }}
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
                          <p className="card-text mx-5" style={{ color: "#1D8F00" }}>{item.hrs}</p>
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
  );
};

export default Properties;
