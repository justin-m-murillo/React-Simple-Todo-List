import { Col, Container, Row } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

// PROPS: //
// alerts: Array of { type, message } objects
const Alerts = ({ alerts }) => {
    const alertMessages = alerts;
    const hasAlerts = alertMessages.length > 0 ? true : false;

    //let alertString = "";

    // if(alertMessages.length > 0) {
    //     for (let i = 0; i < alertMessages.length; i++) {
    //         alertString = alertString.concat(alertMessages[i] + "\n");
    //     }
    //     console.log(alertString);
    // }

    return (  
        <div className="alert-container">
            <Container fluid>
                <Row className='justify-content-center'>
                    <Col>
                        {/* DANGER ALERTS DISPLAYED BELOW */}
                        {
                            hasAlerts &&
                            <div className='mx-auto alert-display'>
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
