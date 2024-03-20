import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Value } from './Value'; // Assuming Value is imported correctly
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const Exclusive = () => {
  const navigate = useNavigate(); 
  const handleViewDetailss = () => {
    
    navigate('/result'); 
  };
  return (
    <div className='container'>
      <div className='mt-5 pt-5 ms-2 d-flex row'>
        <div className='col'>
          <h3 className='mt-5 pt-5 mx-1 text-lg-start bigvalue underline'>
            Exclusive Owner Properties in Chennai
          </h3>
        </div>
       
          <div className='col'>
          <p className='mt-3 pt-3 mx-1 text-lg-end' style={{ color: '#D7242A',cursor: 'pointer' }} onClick={()=>{handleViewDetailss()}}>
            See all Projects <FaArrowRight />
          </p>
        </div>
      </div>

      <Carousel>
        {Value.reduce((chunks, items, index) => {
          const chunkIndex = Math.floor(index / 4); 
          if (!chunks[chunkIndex]) chunks[chunkIndex] = [];
          chunks[chunkIndex].push(items);
          return chunks;
        }, []).map((chunk, chunkIndex) => (
          <Carousel.Item key={chunkIndex}>
            <div className="row">
              {chunk.map((items) => (
                <div key={items.id} className="col-6 col-md-3">
                  <div className="card properties">
                    <img src={items.thumbnail} style={{ width: '300px', height: '200px' }} className="card-img-top" alt="Property" />
                    <div className="card-body">
                      <div className='d-flex'>
                        <p className="card-text" style={{ fontSize: '10px' }}>{items.villa}</p>
                        <p className="card-text mx-5" style={{ fontSize: '10px', color: items.hrs === 'Ready to move' ? '#1D8F00' : '#FF0000' }}>{items.hrs}</p>
                      </div>
                      <div className='d-flex'>
                        <p className="card-title">{items.value}</p><span className="vr mx-3"></span>
                        <p className="card-text">{items.feet}</p>
                      </div>
                      <p className="card-text">{items.title}</p>
                      <button className="btn btn-danger rounded-pill d-flex align-items-center justify-content-center" style={{ alignSelf: 'start' }}>
                        {items.own}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Exclusive;
