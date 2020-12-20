import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Alert.css';
import Draggable from 'react-draggable'; 



const Alert = ({notes,setId, id, setNotes,setAlert}) => {

    const handleClose = () => {
        setAlert(false);
    }

    const handleSubmit = () => {
        const newNote = document.getElementById("alertBox").value;
        document.getElementById("alertBox").value = "";
        setId(id => id + 1);
        
        if (newNote !== null && newNote.length !== 0){
            setNotes([...notes,{id: id, message: newNote}]);
        }
    }

    return (
        <React.Fragment>
            <Draggable>
            <div className="box">
                <input id="alertBox" autocomplete="off" className="inputBox" type="text" placeholder="Enter Your Note" required/>
                <br/>
                <button onClick={() => handleClose()} className=" del btn btn-danger btn-sm">close</button>
                <button onClick={() => handleSubmit()} className=" submit btn btn-success btn-sm">submit</button>
            </div>
            </Draggable>
        </React.Fragment>
    );
}


export default Alert;