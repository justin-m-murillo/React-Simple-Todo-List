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
                <div className='ps-3 pe-3 memo'>{ memo }</div>
                <Row className='gx-2 p-3'>
                    <Col className="text-end" sm={{ span: 4, offset: 1 }}>
                        <div className='pb-2'><strong>When:</strong></div>
                        <div><strong>Where:</strong></div>
                    </Col>
                    <Col className='text-start'>
                        <div className='pb-2'>{ month }/{ day }/{ year } - { hour }:{ min } { mdm }</div>
                        <div>{ addr }</div>
                    </Col>
                </Row>
            </motion.div>
        </Col>
    );
}
 
export default ToDoListDisplayDetails;