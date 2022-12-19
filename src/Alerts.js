import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

// PROPS: //
// alerts: Array of { type, message } objects
const Alerts = ({ alerts, hasAlerts }) => {

    // useEffect(() => {
    //     console.log("alerts updated");
    // }, [alerts])

    return (  
        <div className="alert-container">
            <Container fluid>
                <Row>
                    <Col sm={{ span: 12 }} className='gx-0 mx-auto text-center'>
                        {
                            hasAlerts &&
                            <div className='alert-display'>
                                <Alert variant='danger'>
                                    {alerts.map(line => (
                                        <p 
                                            key={alerts.indexOf(line)}
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
