import React, { useEffect, useState } from "react";

// this is the css file link
import "./Navbar.css";

// this is the logo
import Logo from "../../assets/logo/logo.png";

// this is the links for the use of the font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// this is import link from scroll bar
import { Link } from "react-scroll";

function Navbar() {
  // this is  for the font awesome icon
  const NavbarIcon = <FontAwesomeIcon icon={faBars} />;

  // this is for the show navbar to click on the icon
  const [sideIcon, setSideIcon] = useState(false);

  // this is for the add sticky class
  const [sticky, setSticky] = useState(false);

  // this is the function to set side icon true
  const CheckSideIcon = () => {
    setSideIcon(!sideIcon);
  };

  // this is function to add sticky class
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <>
      <header className={`navbar-section  ${sticky ? "sticky" : ""}`}>
        <div className="container">
          <nav className="navbar " id="navbar">
            <div className="navbar-brand">
              <a href="#">
                <img src={Logo} alt="logo" />
              </a>
              <div className="navbar-toggler" onClick={CheckSideIcon}>
                {NavbarIcon}
              </div>
            </div>
            <div className={`navbar-items ${sideIcon ? "active" : ""}`}>
              <ul>
                <li>
                  <Link activeClass="active" to="home" spy={true} smooth={true}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="about" spy={true} smooth={true}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="services" spy={true} smooth={true}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="blog" spy={true} smooth={true}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="contact" spy={true} smooth={true}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
