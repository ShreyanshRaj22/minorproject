import React, { useState } from 'react';
import './Home.css';
import bannerHome from '../images/banner-home.png'; 
import successIcon from "../images/success.png";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupValue, setPopupValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); 
    const randomValue = Math.floor(Math.random() * 100); 
    setPopupValue(`Total Power Consumption: ${randomValue}`);
    
    setTimeout(() => {
      setIsLoading(false); 
      setShowPopup(true); 
    }, 5000);
  };

  const closePopup = () => {
    setShowPopup(false); 
  };

  return (
    <div className="home-container d-flex align-items-center justify-content-center">
      <div className="main-container d-flex">
        
        <div className="left-container d-flex align-items-center justify-content-center">
          <img src={bannerHome} alt="Example" className="img-fluid" />
        </div>


        <div className="right-container d-flex align-items-center justify-content-center">
          <form className="form-container text-center" onSubmit={handleSubmit}>
            <h2 className='heading'>Prediction Calculator</h2>
            <div className="mb-3 field-container">
              <label htmlFor="year" className="form-label">
                Year
              </label>
              <input type="number" id="year" className="form-control" placeholder="Enter year" />
            </div>
            <div className="mb-3 field-container">
              <label htmlFor="month" className="form-label">
                Month
              </label>
              <input type="text" id="month" className="form-control" placeholder="Enter month" />
            </div>
            <div className="mb-3 field-container">
              <label htmlFor="state" className="form-label">
                State
              </label>
              <input type="text" id="state" className="form-control" placeholder="Enter state" />
            </div>
            <div className="mb-3 field-container">
              <label htmlFor="type-producer" className="form-label">
                Type of Producer
              </label>
              <select id="type-producer" className="form-select">
                <option value="">Select producer type</option>
                <option value="individual">Individual</option>
                <option value="organization">Organization</option>
                <option value="government">Government</option>
              </select>
            </div>
            <div className="mb-3 field-container">
              <label htmlFor="type-source" className="form-label">
                Type of Source
              </label>
              <select id="type-source" className="form-select">
                <option value="">Select source type</option>
                <option value="solar">Solar</option>
                <option value="wind">Wind</option>
                <option value="hydro">Hydro</option>
                <option value="thermal">Thermal</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Calculate
            </button>
          </form>
        </div>
      </div>

      {isLoading && (
        <div className="progress-bar-overlay d-flex align-items-center justify-content-center">
          <div className="progress w-75">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              style={{ width: '100%' }}
            ></div>
          </div>
        </div>
      )}


      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <div className="d-flex align-items-center">
              <img
                src={successIcon}
                alt="Icon"
                className="popup-icon me-2 iconimg"
              />
              <p className="m-0 popupValue">{popupValue}</p>
            </div>
            <button className="btn btn-outline-success mt-3" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
