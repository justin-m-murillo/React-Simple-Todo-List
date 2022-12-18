import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from '@amir04lm26/react-modern-calendar-date-picker';
import { utils } from '@amir04lm26/react-modern-calendar-date-picker';
import FormValidation from "./FormValidation";

const AddTask = ({ handleAlerts }) => {

    const formatDate = new Date();
    const defaultDate = {
        year: formatDate.getFullYear(),
        month: formatDate.getMonth() + 1,
        day: formatDate.getDate()
    }

    // State variables
    const [title, setTitle] =useState("");
    const [memo, setMemo]   =useState("");
    const [date, setDate]   =useState(defaultDate);
    const [hour, setHour]   =useState("1");
    const [min, setMin]     =useState("00");
    const [mdm, setMdm]     =useState("AM");
    const [addr, setAddr]   =useState("");

    // Page loading
    const [isPending, setIsPending] = useState(false);

    // Page navigation
    const history = useHistory();

    const formatInputValue = () => {
        if (!date) return '';
        return `${date.month}/${date.day}/${date.year}`;
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = { title, memo, date, hour, min, mdm, addr };

        const invalid = FormValidation.validateSubmission(task);

        if (invalid.length > 0) {
            handleAlerts(invalid);
            return;
        }
        else {
            handleAlerts([]);
        } 

        setIsPending(true);
        console.log('fetching');
        fetch('http://localhost:8000/todos', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task)
        }).then(() => {
            console.log('new task added');
            setIsPending(false);
            history.push("/");
        })
    }

    return (  
        <div className="add-task-container">
            <form onSubmit={ handleSubmit }>
                <h4 className="add-heading">Title</h4>
                <input
                    type="text" 
                    className="form-control" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <br/>
                <h4 className="add-heading">Memo</h4>
                <textarea 
                    className="form-control"
                    name="memo-input"
                    cols="30" 
                    rows="5"
                    value={memo}
                    onChange={(e) => setMemo(e.target.value)}
                />
                <br/>
                <div className="add-heading d-inline-block">
                    <h5 
                        className="d-inline-block"
                        style={{
                            marginRight: '10px'
                        }}
                    >Date</h5>
                    <div className="d-inline-block">
                        <DatePicker 
                            value={date}
                            onChange={setDate}
                            minimumDate={utils().getToday()}
                            colorPrimary="#FF5733"
                            formatInputText={formatInputValue}
                        />
                    </div>
                </div>
                <div className="add-heading d-inline-block">
                    <h5 
                        className="d-inline-block"
                        style={{ marginRight: '6px' }}
                    >
                        Time
                    </h5>
                    {/* HOURS */}
                    <div className="d-inline-block"> 
                        <select 
                            className="add-time"
                            value={hour}
                            onChange={(e) => setHour(e.target.value)}
                        >
                            <option value={"1"}>1</option>
                            <option value={"2"}>2</option>
                            <option value={"3"}>3</option>
                            <option value={"4"}>4</option>
                            <option value={"5"}>5</option>
                            <option value={"6"}>6</option>
                            <option value={"7"}>7</option>
                            <option value={"8"}>8</option>
                            <option value={"9"}>9</option>
                            <option value={"10"}>10</option>
                            <option value={"11"}>11</option>
                            <option value={"12"}>12</option>
                        </select>
                    </div>
                    {/* MINUTES */}
                    <div className="d-inline-block">
                        :
                        <select 
                            className="add-time"
                            value={min}
                            onChange={(e) => setMin(e.target.value)}
                        >
                            <option value={"00"}>00</option>
                            <option value={"05"}>05</option>
                            <option value={"10"}>10</option>
                            <option value={"15"}>15</option>
                            <option value={"20"}>20</option>
                            <option value={"25"}>25</option>
                            <option value={"30"}>30</option>
                            <option value={"35"}>35</option>
                            <option value={"40"}>40</option>
                            <option value={"45"}>45</option>
                            <option value={"50"}>50</option>
                            <option value={"55"}>55</option>
                        </select>
                    </div>
                    <div className="d-inline-block">
                        <select 
                            className="add-time"
                            value={mdm}
                            onChange={(e) => setMdm(e.target.value)}
                        >
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                        </select>
                    </div>
                </div>
                <br/>
                <br/>
                <h5 className="add-heading d-inline-block">Location</h5>
                <input
                    type="text"
                    className="form-control"
                    value={addr}
                    onChange={(e) => setAddr(e.target.value)}
                />
                <br/>
                <div className="text-center">
                    <Link to="/">
                        <button 
                            className="btn btn-danger"
                            style={{ marginRight: "10px" }}
                        >Go Back</button>
                    </Link>
                    { !isPending && <button className="btn btn-primary">Add Task</button> }
                    { isPending && <button className="btn btn-primary" disabled>Adding...</button>}
                </div>
            </form>
        </div>
    );
}
 
export default AddTask;