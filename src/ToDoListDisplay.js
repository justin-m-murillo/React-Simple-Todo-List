import { Container, Row, Col } from 'react-bootstrap';
import { InfoCircle, CheckCircle } from 'react-bootstrap-icons';

const ToDoListDisplay = ({ todos, handleDelete }) => {

    const animExpandClass = "todo-details-child-anim";

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

    const toggleDetails = (idString) => {
        let element = document.getElementById(idString);
        element.classList.remove(animExpandClass);
        void element.offsetWidth;
        element.classList.add(animExpandClass);
    }

    return (  
        <Container>
            {todos.map((item) => (
                <div className='todo-item-container' key={ item.id }>
                    <Row className="todo-item-row justify-content-sm-center">
                        <Col sm={{ span: 6 }} className="my-auto">
                            <div className="todo-text">
                                <span className='todo-title'><strong>{ item.title }</strong></span>
                                {/* <br/>
                                <span className='todo-preview'>
                                    { modifyPreview( item.memo ) }
                                </span> */}
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
                                    onClick={() => toggleDetails(generateId('todo-details-child', item.id))}
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
                            <p>{ item.date.month }/{ item.date.day }/{ item.date.year }</p>
                            <p>{ item.hour }:{ item.min } { item.mdm }</p>
                            <p>Location: { item.addr }</p>
                        </Col>
                    </Row>
                </div>
            ))}
        </Container>
    );
}
 
export default ToDoListDisplay;