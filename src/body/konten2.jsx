import React from 'react';
import { FaDownload } from "react-icons/fa6";
import { FaCube } from "react-icons/fa";

const Konten2 = () => {
  return (
 <>
    <p className='stat'>Stats Overview</p>
    <div className="konten2-container">
      <div className="konten2-left">
        <p style={{fontSize: '25px'}}><FaDownload /> 82.438.716<br/>
        <span style={{fontSize: '12px', fontFamily: "gray"}}>Downloads all time</span></p>
      </div>
      <div className="konten2-right">
      <p style={{fontSize: '25px'}}><FaCube/> 6<br/>
        <span style={{fontSize: '12px', fontFamily: "gray"}}>Versions published</span></p>
      </div>
    </div>
  </>
  );
}

export default Konten2;
