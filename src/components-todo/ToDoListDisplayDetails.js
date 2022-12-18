import { Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const ToDoListDisplayDetails = ({ 
    details: { 
        id, 
        memo, 
        date: { 
            month, 
            day, 
            year 
        }, 
        hour, 
        min, 
        mdm, 
        addr 
    },
    openId,
    detailsVariant
}) => {
    return (
        <Col id={ 'todo-details-child'+id }>
            <motion.div 
                className='text-center todo-details-child'
                variants={detailsVariant}
                initial="hidden"
                animate={ openId === 'todo-details-child'+id ? "visible" : "hidden" }
            >
                <p>{ memo }</p>
                <p>{ month }/{ day }/{ year } - { hour }:{ min } { mdm }</p>
                <p>Location: { addr }</p>
            </motion.div>
        </Col>
    );
}
 
export default ToDoListDisplayDetails;