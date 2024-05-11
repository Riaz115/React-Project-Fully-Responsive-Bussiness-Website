import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./About.css";
import AboutImage from "../../assets/about/about_img.jpg";
import {
  faBusinessTime,
  faChartPie,
  faTruckFast,
  faUserClock,
  faHouseLaptop,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function About() {
  // Icons
  const BusinesIcon = <FontAwesomeIcon icon={faBusinessTime} />;
  const ChartPieIcon = <FontAwesomeIcon icon={faChartPie} />;
  const TruckIcon = <FontAwesomeIcon icon={faTruckFast} />;
  const userClockIcon = <FontAwesomeIcon icon={faUserClock} />;
  const HouseLaptopIcon = <FontAwesomeIcon icon={faHouseLaptop} />;
  const PhoneIcon = <FontAwesomeIcon icon={faPhone} />;

  return (
    <>
      <section id="about">
        <div className="container">
          <div className="about-title">
            <h3>we provide shortage remarkabale ideas!</h3>
            <p>
              my name is riaz ahmad . i live in sahiwal . i am front end web
              developer . i am python developer
            </p>
          </div>
          <div className="about-wrapper">
            <div className="about-box">
              <div className="about-icon">{BusinesIcon}</div>
              <div className="icon-content">
                <h5>Development</h5>
                <p>
                  my name is riaz ahmad . i live in sahiwal . i am front end web
                  developer . i am python developer
                </p>
              </div>
            </div>
            <div className="about-box">
              <div className="about-icon green-icon">{ChartPieIcon}</div>
              <div className="icon-content">
                <h5>Integration</h5>
                <p>
                  my name is riaz ahmad . i live in sahiwal . i am front end web
                  developer . i am python developer
                </p>
              </div>
            </div>
            <div className="about-box">
              <div className="about-icon blue-icon">{TruckIcon}</div>
              <div className="icon-content">
                <h5>Branding</h5>
                <p>
                  my name is riaz ahmad . i live in sahiwal . i am front end web
                  developer . i am python developer
                </p>
              </div>
            </div>
          </div>
          <div className="end-box">
            <div className="end-box-col">
              <div className="end-box-img">
                <img src={AboutImage} alt="end box image" />
              </div>
              <div className="img-info">
                <h6 className="img-title">My Name is Riaz Ahmad Sandhila .</h6>
                <p>
                  my name is riaz ahmad . i live in sahiwal . i am<br></br>{" "}
                  front end web developer . i am python developer.
                </p>
                <a href="/">
                  {PhoneIcon} <span>0328-0182715</span>
                </a>
              </div>
            </div>
            <div className="end-box-col for-space">
              <h3>
                My Name is riaz ahmad . i am front-end and python developer
              </h3>
              <p>
                my name is riaz ahmad . i live in sahiwal . i am front end web
                developer . i am python developer. i am learning chatbot
                developing. aritifical intelligence is a good field.
              </p>
              <div className="icon-box">
                <div className="icons">{userClockIcon}</div>
                <div className="icon-detail">
                  <h4>i am front-end and python developer .</h4>
                  <p>
                    my name is riaz ahmad . i live in sahiwal . i am front end
                    web developer . i am python developer. i am learning chatbot
                    developing. aritifical intelligence is a good field.
                  </p>
                </div>
              </div>
              <div className="icon-box">
                <div className="icons green-icon">{HouseLaptopIcon}</div>
                <div className="icon-detail">
                  <h4>i am front-end and python developer .</h4>
                  <p>
                    my name is riaz ahmad . i live in sahiwal . i am front end
                    web developer . i am python developer. i am learning chatbot
                    developing. aritifical intelligence is a good field.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
