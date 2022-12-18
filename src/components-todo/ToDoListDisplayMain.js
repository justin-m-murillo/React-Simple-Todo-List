import { Col } from 'react-bootstrap';
import { CheckSquareFill } from 'react-bootstrap-icons';

const ToDoListDisplayMain = ({ 
    title, 
    id,
    setToDelete
}) => {

    return ( 
        <>
            <Col sm={{ span: 10 }} className="todo-text mx-auto my-auto">
                    <span className='todo-title'><strong>{ title }</strong></span>
            </Col>
            <Col sm={{ span: 2 }} className="todo-btn-container my-auto">
                    <CheckSquareFill 
                        size={"50px"}
                        color='#388E3C'
                        className='todo-btn'
                        onClick={(e) => {
                            e.stopPropagation();
                            setToDelete(id);
                        }} 
                    />
            </Col>
        </>
    );
}
 
export default ToDoListDisplayMain;