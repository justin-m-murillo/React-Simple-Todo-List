import { Col } from 'react-bootstrap';
import { CheckCircle } from 'react-bootstrap-icons';

const ToDoListDisplayMain = ({ 
    title, 
    id, 
    handleDelete, 
    toggleDetails
}) => {

    return ( 
        <>
            <Col sm={{ span: 8 }} className="todo-text mx-auto my-auto">
                    <span className='todo-title'><strong>{ title }</strong></span>
                    <br/>
                    {/* <span className='todo-preview' id={generateId('todo-preview', item.id)}>
                        { modifyPreview( item.memo ) }
                    </span> */}
            </Col>
            <Col sm={{ span: 4 }} className="todo-btn-container my-auto">
                    <CheckCircle 
                        size={"40px"}
                        color='#388E3C'
                        className='todo-btn'
                        onClick={() => handleDelete(id)} 
                    />
            </Col>
        </>
    );
}
 
export default ToDoListDisplayMain;