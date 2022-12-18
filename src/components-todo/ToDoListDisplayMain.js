import { Col } from 'react-bootstrap';
import { InfoCircle, CheckCircle } from 'react-bootstrap-icons';

const ToDoListDisplayMain = ({ 
    title, 
    id, 
    handleDelete, 
    toggleDetails
}) => {

    return ( 
        <>
            <Col sm={{ span: 6 }} className="my-auto">
                <div className="todo-text">
                    <span className='todo-title'><strong>{ title }</strong></span>
                    <br/>
                    {/* <span className='todo-preview' id={generateId('todo-preview', item.id)}>
                        { modifyPreview( item.memo ) }
                    </span> */}
                </div>
            </Col>
            <Col sm={{ span: 4 }} className="my-auto">
                <div className="text-center">
                    <InfoCircle
                        size={"40px"}
                        color="#4DD0E1"
                        className='todo-btn'
                        onClick={() => toggleDetails(
                            'todo-details-child'+id
                        )}
                    />
                    <CheckCircle 
                        size={"40px"}
                        color='#388E3C'
                        className='todo-btn'
                        onClick={() => handleDelete(id)} 
                    />
                </div>
            </Col>
        </>
    );
}
 
export default ToDoListDisplayMain;