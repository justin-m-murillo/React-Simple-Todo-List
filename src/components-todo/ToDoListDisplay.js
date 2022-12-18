import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import ToDoListDisplayMain from './ToDoListDisplayMain';
import ToDoListDisplayDetails from './ToDoListDisplayDetails';

const ToDoListDisplay = ({ todos, handleDelete }) => {
    const [openId, setOpenId] = useState(null);

    const toggleDetails = (toggleIdString) => {
        if (openId === toggleIdString) {
            setOpenId(null);
        } else {
            setOpenId(toggleIdString);
        }
    }

    const deleteVariant = {
        delete: {
            opacity: 0,
            transition: {
                type: 'tween',
                durations: 1
            }
        }
    }

    const detailsVariant = {
        hidden: {
            maxHeight: 0,
            opacity: 0,
            transition: {
                type: 'tween',
                duration: 0.3
            }
        },
        visible: {
            maxHeight: 200,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 0.3,
            }
        }
    }

    return (  
        <Container>
            {todos.map((item) => (
                <AnimatePresence>
                     <motion.div 
                        className='todo-item-container' 
                        key={ 'todo-item-container'+item.id }
                        onClick={() => toggleDetails(
                            'todo-details-child'+item.id
                        )}
                        variants={ deleteVariant }
                        exit="delete"
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
                    </motion.div>
                </AnimatePresence>
            ))}
        </Container>
    );
}
 
export default ToDoListDisplay;