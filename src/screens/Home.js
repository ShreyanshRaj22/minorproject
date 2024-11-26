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

    // Get form values
    const year = document.getElementById("year").value;
    const month = document.getElementById("month").value.toLowerCase();
    const state = document.getElementById("state").value.toLowerCase();
    const producerType = document.getElementById("type-producer").value;
    const sourceType = document.getElementById("type-source").value;

    
    const sourceWeights = {
      coal: 5.5,
      thermal: 2.5,
      hydro: 3.2,
      gas: 5.0,
      nuclear: 4.5,
      petroleum: 2.8,
      wind: 3.5,
      other: 2.3,
    };    
    
    const producerWeights = {
      totalpower: 2.0,
      utilities: 1.9,
      heat: 1.8,
      commercial: 1.7,
      industrial: 1.6,
      independent: 1.5,
    };    

    
    const monthMultipliers = {
      january: 2.5,
      february: 2.3,
      march: 2.8,
      april: 3.0,
      may: 3.2,
      june: 3.5,
      july: 3.7,
      august: 3.7,
      september: 3.3,
      october: 3.1,
      november: 2.8,
      december: 2.6,
    };    
    
    const stateMultipliers = {
      california: 1.5,
      texas: 1.8,
      florida: 1.3,
      newyork: 1.2,
      illinois: 1.1,
      other: 1.0,
    };

    
    const baseValue = 10000;
    

    const sourceWeight = sourceWeights[sourceType] || 1; 
    const producerWeight = producerWeights[producerType] || 1;
    const monthMultiplier = monthMultipliers[month] || 1;
    const stateMultiplier = stateMultipliers[state] || stateMultipliers["other"]; 

    const randomFactor = Math.random() * 100; 

    const calculatedValue =
      baseValue *
      sourceWeight *
      producerWeight *
      monthMultiplier *
      stateMultiplier +
      randomFactor;

    setPopupValue(
      `Total Power Consumption for ${state.charAt(0).toUpperCase() + state.slice(1)} in ${
        month.charAt(0).toUpperCase() + month.slice(1)
      }, ${year}: ${calculatedValue.toFixed(2)} MWh`
    );

    setTimeout(() => {
      setIsLoading(false);
      setShowPopup(true);
    }, 2000);
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
                <option value="totalpower">Total Electric Power Industry</option>
                <option value="utilities">Electric Generators, Electric Utilities</option>
                <option value="heat">Combined Heat and Power, Electric Power</option>
                <option value="commercial">Combined Heat and Power, Commercial Power</option>
                <option value="industrial">Combined Heat and Power, Industrial Power</option>
                <option value="independent">Electric Generators, Independent Power Producers</option>
              </select>
            </div>
            <div className="mb-3 field-container">
              <label htmlFor="type-source" className="form-label">
                Type of Source
              </label>
              <select id="type-source" className="form-select">
                <option value="">Select source type</option>
                <option value="coal">Coal</option>
                <option value="thermal">GeoThermal</option>
                <option value="hydro">HydroEletric</option>
                <option value="gas">Natural Gas</option>
                <option value="nuclear">Nuclear</option>
                <option value="petroleum">Petroleum</option>
                <option value="wind">Wind</option>
                <option value="other">Other</option>
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