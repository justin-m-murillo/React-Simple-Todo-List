import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import ToDoListDisplayMain from './ToDoListDisplayMain';
import ToDoListDisplayDetails from './ToDoListDisplayDetails';

const ToDoListDisplay = ({ todos, handleDelete }) => {
    const [openId, setOpenId] = useState(null);
    const [toDelete, setToDelete] = useState(null);

    

    const toggleDetails = (toggleIdString) => {
        if (openId === toggleIdString) {
            setOpenId(null);
        } else {
            setOpenId(toggleIdString);
        }
    }

    const deleteVariant = {
        view: {
            opacity: 1
        },
        delete: {
            opacity: 0,
            transition: {
                type: 'tween',
                duration: 0.1
            }
        }
    }

    const detailsVariant = {
        hidden: {
            maxHeight: 0,
            opacity: 0,
            transition: {
                type: 'tween',
                duration: 0.25
            }
        },
        visible: {
            maxHeight: 200,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 0.25,
            }
        }
    }

    return (  
        <Container>
            {todos.map((item) => (
                <AnimatePresence
                    key={ 'animate-presence'+item.id }
                >
                     <motion.div 
                        className='todo-item-container' 
                        key={ 'todo-item-container'+item.id }
                        onClick={() => toggleDetails(
                            'todo-details-child'+item.id
                        )}
                        variants={ deleteVariant }
                        initial="view"
                        animate={ 
                            toDelete === item.id ? 
                            "delete" : 
                            "view"
                        }
                        onAnimationComplete={() => {
                            if (toDelete === item.id) {
                                handleDelete(
                                    toDelete, 
                                    setToDelete
                            )}
                        }}
                    >
                        <Row className="todo-item-row justify-content-sm-center">
                            <ToDoListDisplayMain
                                title={ item.title } 
                                id={ item.id }
                                handleDelete={ handleDelete }
                                setToDelete={ setToDelete }
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