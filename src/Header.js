import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Container>
            <div className="header-container">
                <Row className="pt-2 pb-5">
                    <Col className="mx-auto text-center">
                        <Link 
                            to="/"
                            style={{ 
                                textDecoration: 'none', 
                                color: 'black',
                                fontSize: '24px'
                            }}
                        >
                            Simple To-Do List
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col sm={{ span: 12}} className="text-center px-3">
                            <Link to="/add-task">
                                <button 
                                    className="w-100 btn btn-primary p-0 pb-1"
                                    type="button"
                                >
                                    <div style={{ fontSize: "28px" }}>
                                        +
                                    </div>
                                </button>
                            </Link>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}
 
export default Header;