import { Container, Row, Col } from 'react-bootstrap';
import { InfoCircle, CheckCircle } from 'react-bootstrap-icons';

const ToDoListDisplay = ({ todos, handleDelete }) => {

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

    return (  
        <Container>
            {todos.map((item) => (
                <div className='todo-item-container' key={ item.id }>
                    <Row className="todo-item-row justify-content-sm-center">
                        <Col sm={{ span: 5 }} className="my-auto">
                            <div className="todo-text">
                                <span className='todo-title'><strong>{ item.title }</strong></span>
                                <br/>
                                <span className='todo-preview'>
                                    { modifyPreview( item.memo ) }
                                </span>
                            </div>
                        </Col>
                        <Col className="d-flex flex-column text-center my-auto" sm={{ span: 2 }}>
                            <div>
                                <span className='todo-dateTime'>{ item.hour }:{ item.min } { item.mdm }</span>
                            </div>
                            <div>
                                <span className='todo-dateTime'>{ item.date.month }/{ item.date.day }/{ item.date.year }</span>
                            </div>
                        </Col>
                        <Col sm={{ span: 5 }} className="my-auto">
                            <div className="text-center">
                                <InfoCircle
                                    size={"50px"}
                                    color="#4DD0E1"
                                    className='todo-btn'
                                />
                                <CheckCircle 
                                    size={"50px"}
                                    color='#388E3C'
                                    className='todo-btn'
                                    onClick={() => handleDelete(item.id)} 
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
            ))}
        </Container>
    );
}
 
export default ToDoListDisplay;