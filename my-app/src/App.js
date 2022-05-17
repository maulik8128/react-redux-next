import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Form/Form'
import Form from './components/Form/Form';
import List from './components/List/LIst';

function App() {
  const data1 = [
    {id:1, title:'test'},
    {id:2, title:'test1'}

  ];
  const [data,setData]=useState(data1)
  const onSaveData = (data)=>{

    setData((prevData)=>{
      return [data,...prevData];
    })

  }

  return (
    <div>
      <Form onSubmit={onSaveData}/>
      <List item={data}/>
    </div>
  );
}

export default App;
