import { useState, useEffect } from 'react';

import { collection, getDocs } from "firebase/firestore"
import { db } from '../../firebase/utils.firebase';

import Form from '../form/form.component'
import './notes.styles.css'

const Notes = () => {
    const [notes, setNotes] = useState([]);
 
    const fetchNote = async () => {
       
        // Get the data from the Firestore database
        await getDocs(collection(db, "notes"))
            .then((querySnapshot)=>{               
                const newNote= querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setNotes(newNote);                
                console.log(notes, newNote);
            })
       
    }
   
    useEffect(()=>{
        fetchNote();
    }, [])

    return (
        <>
            <div className="notes-card">
                {
                    notes?.map((note,i) => (
                        <p key={i}>
                            {note.note}
                        </p>
                    ))
                }
            </div>
            <Form />
        </>
    )
}

export default Notes