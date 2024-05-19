import { useContext } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/header/header.component';
import NotesCard from '../components/notes-card/notes-card.component';

import { NoteContext } from '../context/note.context';

import './notes.styles.css'

const Notes = ({ children }) => {
    const note = useContext(NoteContext);
    console.log(note)

    return (
        <>
            <Header />
            <h1>Labs</h1>
            <NotesCard note={note}/>
            <div>
                <Link to="/" className="links">Back</Link>
            </div>
        </>
    )
}

export default Notes