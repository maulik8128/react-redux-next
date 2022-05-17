import React from 'react';
import styles from './LIst.module.css';

const List = (probs) => {
  return <div>
      {probs.item.map((data)=>{
          return <h2 key={data.id}>{data.title}</h2>
      })}
  </div>;
};

export default List;
