import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { InfoCircle, CheckCircle } from 'react-bootstrap-icons';

const ToDoListDisplay = ({ todos, handleDelete }) => {
    const [openId, setOpenId] = useState(null);

    const modifyPreview = (preview) => {
        
        let index = 26;
        if (preview.length < index) {
            return preview;
        }
        else {
            index = preview[index - 1] === " " ? 
                index - 2 :
                index;
        }

        return preview.slice(0, index).concat('...');
    }

    const generateId = (idString, id) => {
        return idString + id;
    }

    const toggleDetails = (toggleIdString, hidePreviewString) => {
        let preview = document.getElementById(hidePreviewString);
        preview.hidden = true;

        if (openId) {
            let open = document.getElementById(openId);
            open.style.maxHeight = "0px";
        }

        let element = document.getElementById(toggleIdString);
        element.style.maxHeight = "500px";
        setOpenId(toggleIdString);
        
    }

    return (  
        <Container>
            {todos.map((item) => (
                <div className='todo-item-container' key={ item.id }>
                    <Row className="todo-item-row justify-content-sm-center">
                        <Col sm={{ span: 6 }} className="my-auto">
                            <div className="todo-text">
                                <span className='todo-title'><strong>{ item.title }</strong></span>
                                <br/>
                                <span className='todo-preview' id={generateId('todo-preview', item.id)}>
                                    { modifyPreview( item.memo ) }
                                </span>
                            </div>
                        </Col>
                        {/* <Col className="d-flex flex-column text-center my-auto" sm={{ span: 2 }}>
                            <div>
                                <span className='todo-dateTime'>{ item.hour }:{ item.min } { item.mdm }</span>
                            </div>
                            <div>
                                <span className='todo-dateTime'>{ item.date.month }/{ item.date.day }/{ item.date.year }</span>
                            </div>
                        </Col> */}
                        <Col sm={{ span: 4 }} className="my-auto">
                            <div className="text-center">
                                <InfoCircle
                                    size={"40px"}
                                    color="#4DD0E1"
                                    className='todo-btn'
                                    onClick={() => toggleDetails(
                                        generateId(
                                            'todo-details-child', item.id), 
                                            generateId('todo-preview', item.id)
                                    )}
                                />
                                <CheckCircle 
                                    size={"40px"}
                                    color='#388E3C'
                                    className='todo-btn'
                                    onClick={() => handleDelete(item.id)} 
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row className='todo-details'>
                        <Col className='text-center todo-details-child' id={generateId('todo-details-child', item.id)}>
                            <p>{ item.memo }</p>
                            <p>{ item.date.month }/{ item.date.day }/{ item.date.year } { item.hour }:{ item.min } { item.mdm }</p>
                            <p>Location: { item.addr }</p>
                        </Col>
                    </Row>
                </div>
            ))}
        </Container>
    );
}
 
export default ToDoListDisplay;