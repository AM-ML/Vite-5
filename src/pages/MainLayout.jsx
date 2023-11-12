"use client";

import { Link, Outlet } from "react-router-dom";
import { Button, Navbar } from "flowbite-react";
import { useAuthState } from "react-firebase-hooks/auth"; // If available
import { auth } from "../config/firebase";
import { faMapMarker, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import insta from "../assets/social/insta.ico";
import facebook from "../assets/social/facebook.png";
import linkedin from "../assets/social/linkedin.ico";
import x from "../assets/social/twitterX.png";

export function MainLayout() {
  // Use the auth state from Firebase
  const [user] = useAuthState(auth);

  const Insta = () => {
    return (
      <img src={insta} alt="" className="d-inline" width="32" height="32" />
    );
  };
  const Face = () => {
    return (
      <img src={facebook} alt="" className="d-inline" width="32" height="32" />
    );
  };
  const X = () => {
    return (
      <img src={x} alt="" className="d-inline" width="32" height="32" />
    );
  };

  const Linked = () => {
    return (
      <img
        src={linkedin}
        alt=""
        className="d-inline mb-2"
        width="32"
        height="32"
      />
    );
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <Navbar fluid rounded className="bg-dark">
            <Navbar.Brand href="">
              <img
                src="/tree.svg"
                className="mr-3 h-6 sm:h-9 me-3 ms-3"
                alt="Flowbite React Logo"
              />
              <span className="self-center mb-2 whitespace-nowrap text-xl font-semibold dark:text-white">
                InQuill
              </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
              {!user ? (
                <>
                  <Link to="/login">
                    <Button className="btn btn-sm me-5">Login</Button>
                  </Link>
                </>
              ) : null}
              <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
              <Link to="/">
                <Navbar.Link className="mb-2 nav-link">Home</Navbar.Link>
              </Link>
              {user ? (
                <Link to="/logout" className="text-logout">
                  <Navbar.Link className="mb-2" href="#">
                    Logout
                  </Navbar.Link>
                </Link>
              ) : null}
            </Navbar.Collapse>
          </Navbar>
        </div>
        <hr />
        <div className="row">
          <Outlet />
        </div>
      </div>
        <footer class="footer-distributed">
          <div class="footer-left">
            <h3>
              <img src="/tree.svg" width={64} height={64} className="d-inline"/><span>InQuill</span>
            </h3>

            <p class="footer-company-name">InQuill© 2023</p>
          </div>

          <div class="footer-center">
            <div>
              <i className="bg-none map">
                <FontAwesomeIcon icon={faMapMarker} className="fa fa-map-marker"/>
              </i>
              <p>
                <span>444 Municipality St.</span> Haret Hreik, Beirut
              </p>
            </div>

            <div>
              <i className="bg-none">
                <FontAwesomeIcon icon={faPhone} />
              </i>
              <p>+961 76-910-086</p>
            </div>

            <div>
              <i className="bg-none">
                <FontAwesomeIcon icon={faEnvelope} className="fa fa-envelope" />
              </i>
              <p>
                <a href="mailto:support@inquill.com">support@inquill.com</a>
              </p>
            </div>
          </div>

          <div class="footer-right">
            <p class="footer-company-about">
              <span>About the company</span>
              Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
              euismod convallis velit, eu auctor lacus vehicula sit amet.
            </p>

            <div class="footer-icons">
              <a href="#">
                <X />
              </a>
              <a href="#" className="me-2">
                <Linked/>
              </a>
              <a href="#">
                <Insta/>
              </a>
              <a href="#">
                <Face />
              </a>
            </div>
          </div>
        </footer>
    </>
  );
}
