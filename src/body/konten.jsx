// konten.jsx

import React from "react";
import vercre from "../assets/lver.svg";
import docpass from "../assets/openssl-probe.svg";
import { SlCalender } from "react-icons/sl";
import { FaCubes } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Owner from "../assets/owner.jpeg";

const Konten = () => {
  return (
    <div className="konten-container">
      <div className="bagian1">
        <p className="versionkntn">
          openssl-probe <span className="version_angka">v0.1.5</span>
          <br />
          <p className="fnt-size">
            Tool for helping to find SSL certificate locations on the system for
            OpenSSL
          </p>
        </p>
        <div className="img_verdoccrepass">
          <img src={vercre} alt="" style={{ marginRight: "5px" }} />
          <img src={docpass} alt="" />
        </div>
        <h3>Usage</h3>
        <div className="isikonten">
          <p>
            First, add this to your{" "}
            <span className="cargo_html">Cargo.toml</span>:{" "}
          </p>
        </div>
        <div className="isikontenke2">
          <p>
            <span className="bold-text">[dependencies]</span>
            <br />
            <span>openssl-probe = "0.1.2"</span>
          </p>
        </div>

        <div className="isikonten">
          <p>Then add this to your crate: </p>
        </div>
        <div className="isikontenke3">
          <p>
            <span style={{ color: "red" }}>extern crate</span> openssl_probe;
          </p>
          <code className="cd">
            {`fn main() {`}
            <br />
            {`  openssl_probe::init_ssl_cert_env_vars();`}
            <br />
            {`   //... your code`}
            <br />
            {`}`}
          </code>
        </div>

        <div className="konten4">
          <h3>License</h3>
          <p>
            <span className="cargo_html">openssl-probe</span> is primarily
            distributed under the terms of both the MIT license and the Apache
            License (Version 2.0), with portions covered by various BSD-like
            licenses.
          </p>
        </div>
        <div className="kontenterakhri">
          <p>
            See <span style={{ color: "#00AC5B" }}>LICENSE-APACHE</span>, and
            <span style={{ color: "#00AC5B" }}>LICENSE-MIT</span> for details.
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
  );
};

export default Konten;
