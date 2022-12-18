import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navibar = ({ handleAlerts }) => {

    return (
        <Container fluid style={{ padding: "0px" }}>
            <Navbar className='navibar' expand='sm'>
                <Navbar.Brand>
                    <Link 
                        to="/" 
                        onClick={handleAlerts}
                        style={{ textDecoration: 'none', color: 'black', marginLeft: '10px' }}
                    >
                        <span>Simple To-Do List</span>
                    </Link>
                </Navbar.Brand>
                    <Nav className="ms-auto navi-add-btn">
                        <Link to="/add-task">
                            <button 
                                className="btn btn-primary" 
                                type="button"
                                onClick={handleAlerts}
                            >+</button>
                        </Link>
                    </Nav>
            </Navbar>
        </Container>
    );
}

export default Navibar;