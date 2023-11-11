'use client';

import { Link, Outlet } from 'react-router-dom';
import { Button, Navbar, Footer } from 'flowbite-react';
import { useAuthState } from 'react-firebase-hooks/auth'; // If available
import { auth } from "../config/firebase";
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import insta from "../assets/social/insta.ico"
import facebook from "../assets/social/facebook.png"
import linkedin from "../assets/social/linkedin.ico"
export function MainLayout() {
  // Use the auth state from Firebase
  const [user] = useAuthState(auth);


  const Insta = () => {
    return (
      <img src={insta} alt="" className="d-inline" width="32" height="32"/>
    )
  }
  const Face = () => {
    return (
      <img src={facebook} alt="" className="d-inline" width="32" height="32"/>
    )
  }

  const Linked = () => {
    return (
      <img src={linkedin} alt="" className="d-inline mb-2" width="32" height="32"/>
    )
  }
  
  
  return (
    <>
      <div className="container">
        <div className="row">
          <Navbar fluid rounded className="bg-dark">
            <Navbar.Brand href="">
              <img src="/tree.svg" className="mr-3 h-6 sm:h-9 me-3 ms-3" alt="Flowbite React Logo" />
              <span className="self-center mb-2 whitespace-nowrap text-xl font-semibold dark:text-white">InQuill</span>
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
                <Navbar.Link className="mb-2 nav-link">
                  Home
                </Navbar.Link>
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
        <Footer container className="bg-none shadow-sm mt-5 pt-5">
            <a href="tel:+96176910086" className='text-dark'>
              <FontAwesomeIcon icon={faPhone} /> <p className="d-inline title">+961 76 910 086</p>
            </a>
                <Footer.LinkGroup>
                  <Footer.Link href="https://www.instagram.com" className="custom-footer-item custom-footer-item-insta" target="_blank" rel="noopener noreferrer"><Insta /> InQuill</Footer.Link>
                  <Footer.Link href="https://www.facebook.com" className="custom-footer-item custom-footer-item-face" target="_blank" rel="noopener noreferrer"><Face /> InQuill</Footer.Link>
                  <Footer.Link href="https://www.linkedin.com" className="custom-footer-item custom-footer-item-linked" target="_blank" rel="noopener noreferrer"><Linked /> InQuill</Footer.Link>
                </Footer.LinkGroup>
        </Footer> 
        <Footer container className="bg-none shadow-sm">
            <Footer.Copyright href="#" by="InQuill™" year={2023}  className="bg-none" />
              <Footer.LinkGroup  className="bg-none">
                <Footer.Link href="#"><Link to="/info/about">About</Link></Footer.Link>
                <Footer.Link href="#"><Link to="/info/ts">Terms of Service</Link></Footer.Link>
                <Footer.Link href="#"><Link to="/info/privacy">Privacy & Policy</Link></Footer.Link>
                <Footer.Link href="#"><Link to="/info/licensing">Licensing</Link></Footer.Link>
              </Footer.LinkGroup>
        </Footer>     
      </div>
    </>
  );
}
