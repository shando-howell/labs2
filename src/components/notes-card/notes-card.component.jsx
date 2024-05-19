import { NoteContext } from '../../context/note.context';

import './notes-card.styles.css';

// Providing the note context to the NotesCard component
const NotesCard = ({ note }) => {
    return (
        <>
            <div className="notes-card">
                <NoteContext.Provider value={note}>
                    <p>{note}</p>
                </NoteContext.Provider>
            </div>
        </>
    )
}

export default NotesCard;