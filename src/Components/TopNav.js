//Bootstrap Components imports
import { Navbar, Nav, Container } from 'react-bootstrap';

//Router link
import { Link } from 'react-router-dom';



function TopNav() {
    return (
        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand className='text-white'>LOGO</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end" >
                    <Navbar.Text>
                        <Link to='/Home' className='nav-link text-white'>Home</Link>
                    </Navbar.Text>
                    <Navbar.Text>
                        <Link to='/Mission' className='nav-link text-white'>Mission</Link>
                    </Navbar.Text>
                    <Navbar.Text>
                        <Link to='/Events' className='nav-link text-white'>Events</Link>
                    </Navbar.Text>
                    <Navbar.Text>
                        <Link to='/Donate' className='nav-link text-white'>Donate</Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default TopNav;