import React, { useState } from 'react';
import { MDBNavbar, MDBContainer, MDBNavbarBrand, MDBIcon, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBNavbarToggler, MDBCollapse, MDBBtn
} from 'mdb-react-ui-kit';

export const Navbar = () => {
  const [showNavText, setShowNavText] = useState(false);

  return (
    <MDBNavbar dark expand='lg' bgColor='dark'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/'>SlumPanel</MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavText(!showNavText)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavText}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink href='/'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/control'>Control</MDBNavbarLink>
            </MDBNavbarItem>
            {/*<MDBNavbarItem>
              <MDBNavbarLink href='/analysis'>Analysis</MDBNavbarLink>
            </MDBNavbarItem>*/}
            <MDBNavbarItem>
              <MDBNavbarLink href='/overlay'>Overlay</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}