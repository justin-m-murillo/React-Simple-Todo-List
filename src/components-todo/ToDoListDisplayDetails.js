import { Col, Row } from 'react-bootstrap';
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
                key={"todo-details-child-motion"+id}
                className='text-center todo-details-child'
                variants={detailsVariant}
                initial="hidden"
                animate={ openId === 'todo-details-child'+id ? "visible" : "hidden" }
            >
                <Row className='gx-2 ps-3'>
                    <Col className='text-start'>
                        <div className='pb-2'>{ month }/{ day }/{ year } - { hour }:{ min } { mdm }</div>
                        <div>{ addr }</div>
                    </Col>
                    <div className='my-3 ps-3 pe-3 text-start memo'>{ memo }</div>
                </Row>
            </motion.div>
        </Col>
    );
}
 
export default ToDoListDisplayDetails;