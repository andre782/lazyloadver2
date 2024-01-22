import React from 'react'
import { SlCalender } from "react-icons/sl";
import { FaCubes } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Owner from "../assets/owner.jpeg";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import  { SkeletonTheme } from 'react-loading-skeleton';

const SkeletonLoad = () => {
  return (
    <div className="konten-container">
        <div className="bagian1">
        <p className="versionkntn">
        <SkeletonTheme baseColor="#D3D3D3" highlightColor="#f5f5f5">
            <Skeleton width={200}/>
        </SkeletonTheme>
        <br />
          <p className="fnt-size" style={{marginTop: '-10px'}}>
          <Skeleton/>
          <Skeleton/>
          </p>
          <br />    
          <p className="fnt-size" style={{marginTop: '-30px'}}>
           <Skeleton/>
           <Skeleton/>
           <Skeleton/>
           
          </p>
        </p>
        <div className="img_verdoccrepass">
            <Skeleton/>
        </div>
        <h3>
        <SkeletonTheme baseColor="#D3D3D3" highlightColor="#f5f5f5">
            <Skeleton width={150}/>
        </SkeletonTheme>
      </h3>
        
        <div className="isikonten">
          <p>
            <Skeleton/>
          </p>
        </div>
        <div className="isikontenke2">
          <p>
            <span className="bold-text"><Skeleton width={100}/></span>
            <br />
            <span><Skeleton width={200}/></span>
          </p>
        </div>

        <div className="isikonten">
          <p><Skeleton width={300}/></p>
        </div>
        <div className="isikontenke3">
          <p>
          <Skeleton width={200}/>
          </p>
          <code className="cd">
          <Skeleton width={100}/>
          <Skeleton width={400}/>
          <Skeleton width={50}/>
          
          </code>
        </div>

        <div className="konten4" style={{marginTop: '10px'}}>
        <SkeletonTheme baseColor="#D3D3D3" highlightColor="#f5f5f5">
            <Skeleton width={200}/>
        </SkeletonTheme>
          <p>
          <Skeleton/>
          <Skeleton/>
          <Skeleton/>
          </p>
        </div>
        <div className="kontenterakhri">
          <p>
          <Skeleton/>
          </p>
        </div>
      </div> 

      <div className="bagian2">
        <div className="kontenone">
          <p
            className="metadata"
            style={{ fontSize: "18px", fontWeight: "bold" }}
          >
            Metadata
          </p>
          <div className="kata1">
            <SlCalender className="calender" />
            <p>about 2 years ago</p>
          </div>
          <div className="kata2">
            <SlCalender className="calender" />
            <p>MIT OR Apache-2.0</p>
          </div>
          <div className="kata3">
            <SlCalender className="calender" />
            <p>7.06 KiB</p>
          </div>
        </div>
        <div className="kontentwo">
          <p
            className="metadata"
            style={{ fontSize: "18px", fontWeight: "bold" }}
          >
            Install
          </p>
          <p style={{ fontSize: "12px" }}>
            Run the following Cargo command in your project directory:
          </p>
          <button className="btn-cargo">cargo add openssl-probe</button>
          <p style={{ fontSize: "12px" }}>
            Or add the following line to your Cargo.toml:
          </p>
          <button className="btn-cargo">openssl-probe = "0.1.5"</button>
        </div>
        <div className="kontentwo">
          <p
            className="metadata"
            style={{ fontSize: "18px", fontWeight: "bold" }}
          >
            Documentation
          </p>
          <div className="konten3">
            <FaCubes className="Cube" />
            <a
              style={{ color: "#00AC5B" }}
              href="http:////docs.rs/openssl-probe/0.1.5"
            >
              https://docs.rs/openssl-probe/0.1.5
            </a>
          </div>
        </div>
        <div className="kontentwo">
          <p
            className="metadata"
            style={{ fontSize: "18px", fontWeight: "bold" }}
          >
            Repository
          </p>
          <div className="kontendua">
            <FaGithub className="Cube" />
            <a
              style={{ color: "#00AC5B" }}
              href="https://github.com/alexcrichton/openssl-probe"
            >
              https://github.com/alexcrichton/openssl-probe
            </a>
          </div>
        </div>
        <div className="kontentwo">
          <p
            className="metadata"
            style={{ fontSize: "18px", fontWeight: "bold" }}
          >
            Owner
          </p>
          <div className="kontentiga">
            <div
              className="imgkonten"
              style={{ display: "inline-block", verticalAlign: "middle" }}
            >
              <img src={Owner} alt="" style={{ verticalAlign: "middle" }} />
              <p
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  marginLeft: "10px",
                  color: "#00AC5B",
                }}
              >
                Alex Chirton
              </p>
            </div>
            <div className="button_bawah">
              <button className="btn-last">Try On rust Playground</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkeletonLoad