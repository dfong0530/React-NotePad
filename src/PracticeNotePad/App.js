import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Note from './Note';
import Alert from './Alert';


// Questins ---> How do you make this webpage responsive to smaller screens --> Where do you pass in id is it in the div or the note object
// --> How do you submit with return for alert box and how ot u reset cursor.


//Main source code

//  Is there any waay to move methods after return statement

function App(){

    // Stores array of notes
    const [notes,setNotes] = useState([]);
    const [alert,setAlert] = useState(false);
    const [id,setId] = useState(0);

    //Function that deletes an individual note --> This will passed to the child component
    const deleteNote = (id) => {
        setNotes(notes.filter(note => note.id !== id));
    }

    //Returns the jsx that the user will see
    // Part-one: Title and two buttons
    //Part-two notes
    return (
        <section className="main">
            <h1>David's Note Pad</h1>
            {alert && <Alert notes={notes} id={id} setId={setId} setNotes={setNotes} setAlert={setAlert}/>}
            <div className="AddReset">
                <button onClick={() => setAlert(true)} className="add btn btn-lg btn-primary">Add Note</button>
                <button onClick={() => setNotes([])} className=" delete btn btn-danger btn-lg">Reset</button>
            </div>
            <div className="notes">
                {notes.map((note, index) => {
                    return <Note key={note.id} {...note} number={index + 1} deleteNote={deleteNote}/>;
                })}
            </div>
        </section>
    );


}



export default App;
