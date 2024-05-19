import { useState } from 'react';
import { Link } from 'react-router-dom';

import './form.styles.css'

function Form() {
  const [inputValue, setInputValue] = useState('React Engineering');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNote = e.target.value;
    console.log(newNote)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type='text' 
          size='50' 
          className='form-input' 
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
        <Link to='/notes' className="links">Notes</Link>
      </form>
    </>
  );
}

export default Form;