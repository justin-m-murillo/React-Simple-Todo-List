import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import ToDoListDisplayMain from './ToDoListDisplayMain';
import ToDoListDisplayDetails from './ToDoListDisplayDetails';

const ToDoListDisplay = ({ todos, handleDelete }) => {
    const [openId, setOpenId] = useState(null);

    const toggleDetails = (toggleIdString) => {
        // if (openId === toggleIdString) {
        //     setOpenId(null);
        // }
        // if (openId === null) {
        //     setOpenId(toggleIdString);
        // }
        if (openId === toggleIdString) {
            setOpenId(null);
        } else {
            setOpenId(toggleIdString);
        }
    }

    const todoDetailsVariant = {
        hidden: {
            maxHeight: 0,
            transition: {
                type: 'tween',
                durations: 0.5
            }
        },
        visible: {
            maxHeight: 200,
            transition: {
                type: 'tween',
                duration: 0.5,
            }
        }
    }

    const detailsVariant = {
        hidden: {
            maxHeight: 0,
            opacity: 0,
            transition: {
                type: 'tween',
                duration: 0.5
            }
        },
        visible: {
            maxHeight: 200,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 0.5,
            }
        }
    }

    return (  
        <Container>
            {todos.map((item) => (
                // <AnimatePresence>
                     <div 
                        className='todo-item-container' 
                        key={ item.id }
                        onClick={() => toggleDetails(
                            'todo-details-child'+item.id
                        )}
                    >
                        <Row className="todo-item-row justify-content-sm-center">
                            <ToDoListDisplayMain
                                title={ item.title } 
                                id={ item.id }
                                handleDelete={ handleDelete }
                                toggleDetails={ toggleDetails }
                            />
                        </Row>
                        <Row className='todo-details'>
                            <ToDoListDisplayDetails
                                details={ item }
                                openId={ openId }
                                detailsVariant={ detailsVariant }
                            />
                        </Row>
                    </div>
                // </AnimatePresence>
            ))}
        </Container>
    );
}
 
export default ToDoListDisplay;