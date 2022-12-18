import { Col, Container, Row } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

// PROPS: //
// alerts: Array of { type, message } objects
const Alerts = ({ alerts }) => {
    const alertMessages = alerts;
    const hasAlerts = alertMessages.length > 0 ? true : false;

    return (  
        <div className="alert-container">
            <Container fluid>
                <Row>
                    <Col sm={{ span: 12 }} className='gx-0 mx-auto text-center'>
                        {
                            hasAlerts &&
                            <div className='alert-display'>
                                <Alert variant='danger'>
                                    {alertMessages.map(line => (
                                        <p 
                                            key={alertMessages.indexOf(line)}
                                            className='alert-message'
                                        >{line}</p>
                                    ))}
                                </Alert>
                            </div>
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default Alerts;
