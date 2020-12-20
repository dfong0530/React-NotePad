import React from 'react';
import './Note.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Note = ({id,message,number,deleteNote}) => {

    return (
            <div className="div">
                <h4 className="note">{number}. {message}</h4>
                <span className="button"><img onClick={() => deleteNote(id)} src="https://dictionary.cambridge.org/us/images/thumb/check_noun_002_06440.jpg?version=5.0.131" className="check-box" /></span>
            </div>
                
    );
}

export default Note;