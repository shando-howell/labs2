import { useState } from 'react';

import { collection, addDoc } from "firebase/firestore";
import {db} from '../../firebase/utils.firebase';

import './form.styles.css'

function Form() {
  const [note, setNote] = useState('');

  const addNote = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "notes"), {
        note: note,
      });
      console.log("Document written with ID:", docRef.id);
    } catch (e) {
      console.log("Error adding document: ", e)
    }
  }

  return (
    <>
        <input 
          type='text' 
          size='50' 
          className='form-input' 
          onChange={(e)=>setNote(e.target.value)}
        />
        <button type="submit" onClick={addNote}>Submit</button>
    </>
  );
}

export default Form;