import React,{useState} from 'react';

import styles from './Form.module.css';

const Form = (props) => {
  const[title, setTitle]=useState('');
  const titleChangeHandler = (e)=>{
    e.preventDefault();
    setTitle(e.target.value);
  }
  const addTitle = (e)=>{
    e.preventDefault();
    const data_1 = {
      id:Math.random().toString(),
      title:title
    }

    
    props.onSubmit(data_1);
  }

  return (
    <div className="From">
      <input type="text" name="title" value={title} onChange={titleChangeHandler} />
      <button onClick={addTitle}>Add</button>
    </div>
  );
};

export default Form;
